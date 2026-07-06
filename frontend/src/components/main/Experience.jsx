const EXPERIENCE = [
  {
    period:  '2021 — PRESENT',
    title:   'Head, Edo Innovations',
    org:     'Edo Innovations',
    desc:    'Leading a rapidly growing digital skills ecosystem — a ₦800M portfolio, 70+ programmes per year, directly overseeing/managing ₦200M (rising) budgets annually.',
  },
  {
    period:  'AUGUST 2025 — PRESENT',
    title:   'Relationship Management: Team Lead',
    org:     'GirlLEAD Talent Accelerator · Remote',
    desc:    'Managed key institutional partnerships and designed engagement frameworks that strengthened stakeholder relationships and expanded programme reach across multiple states.',
  },
  {
    period:  '2018 — 2019',
    title:   'Faculty Lead / Head of BUILD',
    org:     'Empower Her Community · Hybrid',
    desc:    'Directed technology and entrepreneurship programmes reaching 1,700+ women across 6 geozones, connecting 100+ promising startups to wider networks and investors.',
  },
  {
    period:  '2017 — 2018',
    title:   'Regional Lead, South-South',
    org:     'Empower Her Community · Hybrid',
    desc:    'Delivered advanced AWS Cloud, Cisco Networking and Infrastructure operations training aligned with international certification pathways through classroom-based instruction.',
  },
  {
    period:  '2016 — 2017',
    title:   'DevOps & Cloud Instructor',
    org:     'Techeccentric Consulting (Canada) · Remote',
    desc:    'Delivered advanced AWS Cloud, Cisco Networking and Infrastructure operations training aligned with international certification pathways through classroom-based instruction.',
  },
  {
    period:  '2012 — 2016',
    title:   'Senior Legal Counsel',
    org:     'Edo State Skills Development Agency · Benin City',
    desc:    'Provided corporate and commercial legal counsel across ICT, telecoms and media — advising on regulatory compliance, contract negotiation and strategic risk, rising to Senior Legal Counsel.',
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 md:py-28 px-6 md:px-16 lg:px-24"
      style={{ background: 'var(--color-secondary)' }}
    >
      {/* ── Section label ── */}
      <p className="text-xs tracking-[0.1em] uppercase mb-12 font-medium text-text-main">
        Experience
      </p>

      {/* ── Section heading ── */}
      <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight mb-16 w-full md:max-w-[80%]  text-text-muted">
        A decade across law, government &amp; the innovation economy.
      </h2>

      {/* ── Timeline list ── */}
      <div className="flex flex-col" style={{ borderTop: '1px solid var(--color-text-muted-soft)' }}>
        {EXPERIENCE.map((job, i) => (
          <div
            key={i}
            className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-10 py-8 md:py-10"
            style={{ borderBottom: '1px solid var(--color-text-muted-soft)' }}
          >
            {/* Date range */}
            <p
              className="text-xs tracking-widest uppercase pt-1 font-medium"
              style={{ color: 'var(--color-text-main)' }}
            >
              {job.period}
            </p>

            {/* Role details */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-1 leading-snug"
               style={{ color: 'var(--color-text-header)' }}>
                {job.title}
              </h3>

              {job.org && (
                <p
                  className="text-sm mb-3 font-medium text-text-muted-soft">
                  {job.org}
                </p>
              )}

              <p
                className="text-sm md:text-base leading-relaxed"
                style={{ color: 'var(--color-text-muted)' }}
              >
                {job.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
