import { useLayoutEffect, useRef } from 'react';
import Lenis from 'lenis';

export const ScrollStackItem = ({ children, itemClassName = '' }) => (
  <div
    className={`scroll-stack-card relative w-full min-w-[350px] max-w-full mx-auto h-[520px] my-8 rounded-[40px] shadow-[0_0_30px_rgba(0,0,0,0.1)] box-border origin-top overflow-hidden ${itemClassName}`.trim()}
    style={{ backfaceVisibility: 'hidden' }}
  >
    {children}
  </div>
);

const ScrollStack = ({
  children,
  className = '',
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = '20%',
  scaleEndPosition = '10%',
  baseScale = 0.85,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = false,
  onStackComplete,
}) => {
  const scrollerRef = useRef(null);

  // Keep all mutable config in refs so the effect never needs to re-run on prop changes
  const propsRef = useRef({});
  propsRef.current = {
    itemDistance, itemScale, itemStackDistance, stackPosition,
    scaleEndPosition, baseScale, rotationAmount, blurAmount,
    useWindowScroll, onStackComplete,
  };

  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    const isWindow = propsRef.current.useWindowScroll;

    // ── Collect cards ────────────────────────────────────────────────────────
    const cards = Array.from(
      isWindow
        ? scroller.querySelectorAll('.scroll-stack-card')
        : scroller.querySelectorAll('.scroll-stack-card')
    );
    if (!cards.length) return;

    // ── Cache positions once — avoids getBoundingClientRect on every frame ───
    let cardTops = [];

    const cachePositions = () => {
      cardTops = cards.map(c => {
        const rect = c.getBoundingClientRect();
        return rect.top + (isWindow ? window.scrollY : scroller.scrollTop);
      });
    };

    // ── Apply initial card styles ────────────────────────────────────────────
    const { itemDistance: dist } = propsRef.current;
    cards.forEach((card, i) => {
      card.style.willChange = 'transform';
      card.style.transformOrigin = 'top center';
      if (i < cards.length - 1) card.style.marginBottom = `${dist}px`;
    });

    // Re-cache on resize (positions change)
    const onResize = () => cachePositions();
    window.addEventListener('resize', onResize, { passive: true });

    // ── Core animation ───────────────────────────────────────────────────────
    let rafId = null;
    let stackCompleted = false;
    const lastTransforms = new Map();

    const parsePercent = (val, total) =>
      typeof val === 'string' && val.includes('%')
        ? (parseFloat(val) / 100) * total
        : parseFloat(val);

    const clamp01 = (v, start, end) => {
      if (end <= start) return 0;
      return Math.min(1, Math.max(0, (v - start) / (end - start)));
    };

    const update = () => {
      rafId = null;
      const {
        itemScale, itemStackDistance, stackPosition, scaleEndPosition,
        baseScale, rotationAmount, blurAmount, onStackComplete,
      } = propsRef.current;

      const scrollTop = isWindow ? window.scrollY : scroller.scrollTop;
      const vh = isWindow ? window.innerHeight : scroller.clientHeight;
      const pinOffset = parsePercent(stackPosition, vh);
      const scaleEnd = parsePercent(scaleEndPosition, vh);

      // pinEnd = the moment the LAST card starts pinning + small buffer.
      // Once all cards are stacked there is no more animation, so we unpin
      // immediately — this eliminates the dead-scroll zone after stacking.
      const lastIdx = cardTops.length - 1;
      const pinEnd = cardTops[lastIdx] - pinOffset - itemStackDistance * lastIdx + 20;

      cards.forEach((card, i) => {
        const cardTop = cardTops[i];
        const triggerStart = cardTop - pinOffset - itemStackDistance * i;
        const triggerEnd   = cardTop - scaleEnd;

        const scaleProgress = clamp01(scrollTop, triggerStart, triggerEnd);
        const targetScale   = baseScale + i * itemScale;
        const scale         = 1 - scaleProgress * (1 - targetScale);
        const rotation      = rotationAmount ? i * rotationAmount * scaleProgress : 0;

        let blur = 0;
        if (blurAmount) {
          let topIdx = 0;
          for (let j = 0; j < cardTops.length; j++) {
            if (scrollTop >= cardTops[j] - pinOffset - itemStackDistance * j) topIdx = j;
          }
          if (i < topIdx) blur = Math.max(0, (topIdx - i) * blurAmount);
        }

        let translateY = 0;
        if (scrollTop >= triggerStart && scrollTop <= pinEnd) {
          translateY = scrollTop - cardTop + pinOffset + itemStackDistance * i;
        } else if (scrollTop > pinEnd) {
          translateY = pinEnd - cardTop + pinOffset + itemStackDistance * i;
        }

        // Skip write if nothing changed
        const prev = lastTransforms.get(i);
        const ty = Math.round(translateY * 10) / 10;
        const sc = Math.round(scale * 1000) / 1000;
        if (prev && Math.abs(prev.ty - ty) < 0.1 && Math.abs(prev.sc - sc) < 0.001) return;
        lastTransforms.set(i, { ty, sc });

        card.style.transform = `translate3d(0,${ty}px,0) scale(${sc}) rotate(${rotation}deg)`;
        if (blurAmount) card.style.filter = blur > 0 ? `blur(${blur}px)` : '';

        if (i === cards.length - 1) {
          const inView = scrollTop >= triggerStart && scrollTop <= pinEnd;
          if (inView && !stackCompleted) { stackCompleted = true; onStackComplete?.(); }
          else if (!inView && stackCompleted) { stackCompleted = false; }
        }
      });
    };

    const scheduleUpdate = () => {
      if (!rafId) rafId = requestAnimationFrame(update);
    };

    // ── Attach scroll listener ───────────────────────────────────────────────
    let lenisInstance = null;
    if (isWindow) {
      window.addEventListener('scroll', scheduleUpdate, { passive: true });
    } else {
      lenisInstance = new Lenis({
        wrapper: scroller,
        content: scroller.querySelector('.scroll-stack-inner'),
        duration: 1.2,
        easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });
      lenisInstance.on('scroll', scheduleUpdate);
      const raf = time => { lenisInstance.raf(time); rafId = requestAnimationFrame(raf); };
      rafId = requestAnimationFrame(raf);
    }

    // Defer first measurement until after browser has painted (fixes remount stale positions)
    let initRaf = requestAnimationFrame(() => {
      initRaf = requestAnimationFrame(() => {
        cachePositions();
        scheduleUpdate();
      });
    });

    return () => {
      if (isWindow) window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(initRaf);
      if (rafId) cancelAnimationFrame(rafId);
      if (lenisInstance) lenisInstance.destroy();
      lastTransforms.clear();
    };
    // Intentionally empty deps — everything reads from propsRef.current at call time
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const containerClass = useWindowScroll
    ? `relative w-full ${className}`.trim()
    : `relative w-full h-full overflow-y-auto overflow-x-visible ${className}`.trim();

  return (
    <div ref={scrollerRef} className={containerClass}>
      <div className="scroll-stack-inner pt-6 px-0 md:px-20 pb-4">
        {children}
      </div>
    </div>
  );
};

export default ScrollStack;
