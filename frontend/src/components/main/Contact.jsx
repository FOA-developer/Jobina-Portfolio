const SOCIALS = [
  { label: 'LinkedIn',                   href: 'https://www.linkedin.com/in/jobina-arinze' },
  { label: 'X · @jobymwa',               href: 'https://x.com/jobymwa' },
  { label: 'Instagram · @jobinaarinze',  href: 'https://instagram.com/jobinaarinze' },
  { label: 'Facebook',                   href: 'https://facebook.com' },
];

const INFO = [
  { label: 'Email',    value: 'jobina.arinze@gmail.com' },
  { label: 'Phone',    value: '+234 906 354 6910' },
  { label: 'Based in', value: 'Benin City · Nigeria' },
];

const Contact = () => (
  <footer id="contact" style={{ background: 'var(--color-primary)' }}>

    {/* ── Main contact block ── */}
    <div className="px-6 md:px-16 lg:px-24 pt-20 md:pt-28 pb-16">

      {/* Section label */}
      <p
        className="text-xs tracking-[0.1em] uppercase mb-10 font-bold"
        style={{ color: 'var(--color-text-main)' }}
      >
        Get in touch
      </p>

      {/* Heading */}
      <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white leading-tight mb-16 max-w-xl">
        Let's build the future workforce — together.
      </h2>

      {/* Two-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">

        {/* LEFT — contact info */}
        <div className="flex flex-col gap-8">
          {INFO.map((item) => (
            <div key={item.label}>
              <p
                className="text-xs tracking-widest uppercase mb-1 font-medium"
                style={{ color: 'var(--color-text-muted-soft)' }}
              >
                {item.label}
              </p>
              <p className="text-base md:text-lg font-semibold text-white">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        {/* RIGHT — social links */}
        <div>
          <p
            className="text-xs tracking-widest uppercase mb-5 font-medium"
            style={{ color: 'var(--color-text-muted-soft)' }}
          >
            Follow
          </p>

          <div className="flex flex-col gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-5 py-4 rounded-xl text-sm font-medium text-white transition-opacity duration-150 hover:opacity-80"
                style={{
                  background:  'var(--color-surface)',
                  border:      '1px solid var(--color-contact-border)',
                }}
              >
                {s.label}
                <span aria-hidden className="text-base" style={{ color: 'var(--color-text-muted-soft)' }}>↗</span>
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>

    {/* ── Footer bar ── */}
    <div
      className="px-6 md:px-16 lg:px-24 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
      style={{ borderTop: '1px solid var(--color-contact-border)' }}
    >
      <p className="text-sm font-semibold text-white">Jobina Arinze</p>
      <p
        className="text-xs"
        style={{ color: 'var(--color-text-muted-soft)' }}
      >
        © 2026 · Entrepreneurship Development · Future Workforce · Innovation
      </p>
    </div>

  </footer>
);

export default Contact;
