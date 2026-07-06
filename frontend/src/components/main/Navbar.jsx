import { useState } from 'react';

/* Navigation links rendered in both desktop and mobile menus */
const NAV_LINKS = [
  { label: 'About',       href: '#about' },
  { label: 'Experiences', href: '#experiences' },
  { label: 'Work',        href: '#work' },
  { label: 'Speaking',    href: '#speaking' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-5 flex items-center justify-between ">

      {/* ── Subtle background blur so text stays readable over the hero image ── */}
      <div
        className="absolute inset-0 -z-10 backdrop-blur-sm"
        style={{ background: 'linear-gradient(to bottom, rgba(8,8,15,0.6) 0%, transparent 100%)' }}
      />

      {/* ── Logo / Name ── */}
      <a href="#" className="text-white font-semibold text-base md:text-lg tracking-wide shrink-0">
        Jobina Arinze
      </a>

      {/* ── Desktop navigation ── */}
      <div className="hidden md:flex items-center gap-7">
        {NAV_LINKS.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="text-white/70 hover:text-white text-sm tracking-wide transition-colors duration-200"
          >
            {label}
          </a>
        ))}

        {/* LinkedIn external link */}
        <a
          href="https://www.linkedin.com/in/jobina-arinze"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/70 hover:text-white text-sm tracking-wide transition-colors duration-200"
        >
          LinkedIn
        </a>

        {/* CTA button */}
        <a
          href="#contact"
          className="border text-white text-sm px-5 py-2 rounded-full transition-all duration-200 hover:bg-white/10"
          style={{ borderColor: 'var(--color-border)' }}
        >
          Get in touch
        </a>
      </div>

      {/* ── Mobile hamburger toggle ── */}
      <button
        className="md:hidden flex flex-col gap-[5px] p-1"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {/* Three bars that animate to an X when open */}
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}
        />
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
        />
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}
        />
      </button>

      {/* ── Mobile dropdown menu ── */}
      {menuOpen && (
        <div
          className="absolute top-full left-0 right-0 flex flex-col gap-5 px-6 py-6 md:hidden"
          style={{ background: 'rgba(8,8,15,0.97)', backdropFilter: 'blur(12px)' }}
        >
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-white/80 hover:text-white text-sm tracking-wide transition-colors"
            >
              {label}
            </a>
          ))}

          <a
            href="https://www.linkedin.com/in/jobina-arinze"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white text-sm tracking-wide"
          >
            LinkedIn
          </a>

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="border text-white text-sm px-5 py-2.5 rounded-full text-center hover:bg-white/10 transition-colors"
            style={{ borderColor: 'var(--color-border)' }}
          >
            Get in touch
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
