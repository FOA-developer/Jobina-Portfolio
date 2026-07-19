import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { WORK_ITEMS } from '../../data/work';
import { SPEAKING_ITEMS } from '../../data/speaking';

// Plain (non-dropdown) links, in nav order.
const NAV_LINKS = [
  { label: 'About',       to: '/#about' },
  { label: 'Experiences', to: '/#experience' },
];

// Dropdown menus — items are pulled from the SAME data that powers the sections.
const DROPDOWNS = [
  { label: 'Work',     anchor: '/#work',     allLabel: 'All Work',                    items: WORK_ITEMS },
  { label: 'Speaking', anchor: '/#speaking', allLabel: 'All Speaking Engagements',    items: SPEAKING_ITEMS },
];

/* ── Desktop dropdown: opens on click OR hover, closes on outside-click / Escape / item-click ── */
const DesktopDropdown = ({ menu, isOpen, onOpen, onClose, onToggle }) => {
  const btnRef = useRef(null);
  const menuId = `nav-menu-${menu.label.toLowerCase()}`;

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
      btnRef.current?.focus();
    }
  };

  return (
    <div
      className="relative"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
      onKeyDown={handleKeyDown}
    >
      <button
        ref={btnRef}
        type="button"
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-controls={menuId}
        onClick={onToggle}
        className="flex items-center gap-1 text-white/70 hover:text-white text-sm tracking-wide transition-colors duration-200"
      >
        {menu.label}
        <svg
          className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          viewBox="0 0 20 20" fill="none" aria-hidden="true"
        >
          <path d="M5 7.5 10 12.5 15 7.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {isOpen && (
        <div
          id={menuId}
          role="menu"
          aria-label={menu.label}
          className="absolute top-full left-0 mt-3 w-72 max-h-[70vh] overflow-y-auto rounded-2xl border bg-white backdrop-blur-md shadow-xl py-2"
          style={{ borderColor: 'var(--color-border)' }}
        >
          <Link
            to={menu.anchor}
            role="menuitem"
            onClick={onClose}
            className="block px-4 py-2.5 text-sm font-semibold text-black/70 hover:bg-white/10 transition-colors"
          >
            {menu.allLabel}
          </Link>

          <div className="my-1 border-t" style={{ borderColor: 'var(--color-border)' }} />

          {menu.items.map((item, i) => (
            <Link
              key={`${item.link}-${i}`}
              to={item.link}
              role="menuitem"
              onClick={onClose}
              className="block px-4 py-2 hover:bg-white/10 transition-colors"
            >
              <span className="block text-sm text-black/60">{item.title}</span>
              <span className="block text-xs text-black/45">{item.period}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

/* ── Mobile collapsible section nested inside the hamburger menu ── */
const MobileDropdown = ({ menu, isOpen, onToggle, onNavigate }) => {
  const menuId = `mobile-menu-${menu.label.toLowerCase()}`;

  return (
    <div className="flex flex-col">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={menuId}
        onClick={onToggle}
        className="flex items-center justify-between text-text-muted hover:text-black text-sm tracking-wide transition-colors"
      >
        {menu.label}
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          viewBox="0 0 20 20" fill="none" aria-hidden="true"
        >
          <path d="M5 7.5 10 12.5 15 7.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {isOpen && (
        <div id={menuId} className="mt-3 flex flex-col gap-3 pl-3 border-l" style={{ borderColor: 'var(--color-border)' }}>
          <Link
            to={menu.anchor}
            onClick={onNavigate}
            className="text-sm font-semibold text-text-main hover:text-black transition-colors"
          >
            {menu.allLabel}
          </Link>
          {menu.items.map((item, i) => (
            <Link
              key={`${item.link}-${i}`}
              to={item.link}
              onClick={onNavigate}
              className="text-sm text-text-muted hover:text-black transition-colors"
            >
              {item.title}
              <span className="block text-xs text-text-muted/60">{item.period}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);       // mobile hamburger
  const [openDesktop, setOpenDesktop] = useState(null);  // label of open desktop dropdown
  const [openMobile, setOpenMobile] = useState(null);    // label of open mobile section
  const navRef = useRef(null);

  // Close desktop dropdowns when clicking anywhere outside the nav.
  useEffect(() => {
    if (!openDesktop) return;
    const handleClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpenDesktop(null);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [openDesktop]);

  const closeMobile = () => {
    setMenuOpen(false);
    setOpenMobile(null);
  };

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-5 flex items-center justify-between ">

      {/* ── Subtle background blur so text stays readable over the hero image ── */}
      <div
        className="absolute inset-0 -z-10 backdrop-blur-sm"
        style={{ background: 'linear-gradient(to bottom, rgba(8,8,15,0.6) 0%, transparent 100%)' }}
      />

      {/* ── Logo / Name ── */}
      <Link to="/" className="text-white font-semibold text-base md:text-lg tracking-wide shrink-0">
        Jobina Arinze
      </Link>

      {/* ── Desktop navigation ── */}
      <div className="hidden md:flex items-center gap-7">
        {NAV_LINKS.map(({ label, to }) => (
          <Link
            key={label}
            to={to}
            className="text-white/70 hover:text-white text-sm tracking-wide transition-colors duration-200"
          >
            {label}
          </Link>
        ))}

        {DROPDOWNS.map((menu) => (
          <DesktopDropdown
            key={menu.label}
            menu={menu}
            isOpen={openDesktop === menu.label}
            onOpen={() => setOpenDesktop(menu.label)}
            onClose={() => setOpenDesktop(null)}
            onToggle={() => setOpenDesktop((cur) => (cur === menu.label ? null : menu.label))}
          />
        ))}

        {/* LinkedIn external link — stays as <a> since it's an external URL */}
        <a
          href="https://www.linkedin.com/in/jobina-arinze"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/70 hover:text-white text-sm tracking-wide transition-colors duration-200"
        >
          LinkedIn
        </a>

        {/* CTA button */}
        <Link
          to="/#contact"
          className="border text-white text-sm px-5 py-2 rounded-full transition-all duration-200 hover:bg-white/10"
          style={{ borderColor: 'var(--color-border)' }}
        >
          Get in touch
        </Link>
      </div>

      {/* ── Mobile hamburger toggle ── */}
      <button
        className="md:hidden flex flex-col gap-[5px] p-1"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px] ' : ''}`} />
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px] ' : ''}`} />
      </button>

      {/* ── Mobile dropdown menu ── */}
      {menuOpen && (
        <div
          className="absolute top-full left-0 right-0 bg-white flex flex-col gap-5 px-6 py-6 max-h-[80vh] overflow-y-auto md:hidden"
          style={{ backdropFilter: 'blur(12px)' }}
        >
          {NAV_LINKS.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              onClick={closeMobile}
              className="text-text-muted hover:text-black text-sm tracking-wide transition-colors"
            >
              {label}
            </Link>
          ))}

          {DROPDOWNS.map((menu) => (
            <MobileDropdown
              key={menu.label}
              menu={menu}
              isOpen={openMobile === menu.label}
              onToggle={() => setOpenMobile((cur) => (cur === menu.label ? null : menu.label))}
              onNavigate={closeMobile}
            />
          ))}

          <a
            href="https://www.linkedin.com/in/jobina-arinze"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-black text-sm tracking-wide"
          >
            LinkedIn
          </a>

          <Link
            to="/#contact"
            onClick={closeMobile}
            className="border text-text-main text-sm px-5 py-2.5 rounded-full text-center hover:bg-black/5 transition-colors"
            style={{ borderColor: 'var(--color-border)' }}
          >
            Get in touch
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
