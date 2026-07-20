import heroImg from '../../assets/17a.jpg';

/* ─── Role pills shown below the CTA buttons ─── */
const ROLES = [
  'Head: Edo Innovation Hub',
  'Program Manager',
  'Tech Trainer & Speaker',
  'Legal Counsel',
];

/* ─── Impact stats that scroll in the marquee ─── */
const IMPACT_STATS = [
  { value: '42,000+',  label: 'Tech talents trained across the ecosystem' },
  { value: 'N800M+',   label: 'Annual programme portfolio led' },
  { value: '70+',      label: 'Programmes & cohorts a year' },
  { value: '2,000+',   label: 'Young people reached annually' },
  { value: '70%',      label: 'Women participation by design' },
  { value: '50',       label: 'Start-ups supported through programmes' },
];

const Hero = () => {
  return (
    <section>

      {/* ══════════════════════════════════════════════
          HERO — full-viewport background image block
          ══════════════════════════════════════════════ */}
      <div className="relative min-h-screen flex flex-col justify-center pb-16 md:pb-20 overflow-hidden">

        {/* Background image */}
        <img
          src={heroImg}
          alt="Jobina Arinze"
          loading="eager"
          className="absolute top-0 left-0 w-full h-full object-cover object-center"
          style={{ top: '30px', height: 'calc(100% + 80px)' }}
        />
       
        {/* Dark overlay so text is always legible over the photo */}
        <div
          className="absolute inset-0"
          style={{ background: 'var(--color-overlay)' }}
        />

        {/* ── Hero content — sits above the overlay ── */}
        <div className="relative z-10 px-6 pt-18  md:px-16 lg:px-16">

          {/* Small uppercase label at the top */}
          <p
            className="text-xs md:text-sm tracking-[0.1em] pt-0 lg:pt-6 uppercase mb-5 font-medium"
            style={{ color: 'var(--color-text-main)' }}
          >
            Future Workforce &nbsp;·&nbsp; Innovation &nbsp;·&nbsp; Digital Skills
          </p>

          {/* Main heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-none mb-6">
            Jobina Arinze
          </h1>

          {/* Primary description */}
          <p className="text-white/90 text-base md:text-lg leading-relaxed mb-3 max-w-xl">
            Building Africa's future digital workforce, at the intersection of
            policy, technology &amp; human capital.
          </p>

          {/* Secondary / bio line */}
          <p className="text-white/60 text-sm md:text-base leading-relaxed mb-8 max-w-lg">
            Digital skills, youth entrepreneurship and ICT workforce
            development specialist. Career turned ecosystem builder.
            Head of Edo Innovation Hub.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="#contact"
              className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-white transition-all duration-200 hover:bg-white/10 border-border border-1">
              Get in touch <span aria-hidden>→</span>
            </a>

            <a
              href="https://www.linkedin.com/in/jobina-arinze"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-white border transition-all duration-200 hover:bg-white/10"
              style={{ borderColor: 'var(--color-border)' }}
            >
              LinkedIn <span aria-hidden>→</span>
            </a>
          </div>

          {/* Role pills */}
          <div className="flex flex-wrap gap-2">
            {ROLES.map((role) => (
              <span
                key={role}
                className="text-xs md:text-sm text-white/80 px-3 py-1.5 rounded-full border"
                style={{
                  borderColor: 'var(--color-border)',
                  background:  'var(--color-tag-bg)',
                }}
              >
                {role}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          IMPACT IN NUMBERS — auto-scrolling marquee
          ══════════════════════════════════════════════ */}
      <div
        className="py-8 md:py-10 overflow-hidden bg-secondary">

        {/* Marquee wrapper — hover pauses scroll (see index.css) */}
        <div className="marquee-wrapper overflow-hidden">

          {/* The track is duplicated so the loop appears seamless:
              first copy scrolls out, second copy fills in behind it. */}
          <div className="marquee-track">
            {[...IMPACT_STATS, ...IMPACT_STATS].map((stat, i) => (
              <div
                key={i}
                className="flex flex-col justify-center shrink-0 px-10 md:px-14 border-r"
                style={{
                  minWidth: '220px',
                  borderColor: 'var(--color-border)',
                }}
              >
                {/* Stat value */}
                <span
                  className="text-3xl md:text-4xl font-bold text-white leading-none mb-1"
                  style={{ color: 'var(--color-text-header)' }}
                >
                  {stat.value}
                </span>

                {/* Stat description */}
                <span
                  className="text-xs md:text-sm leading-snug max-w-[160px]"
                  style={{ color: 'var(--color-text-header-description)' }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
