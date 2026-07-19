const EXPERIENCE = [
  {
    period:  'OCT 2024 — Present',
    title:   'Head, Edo Innovates',
    org:     'Edo Innovates | Edo State Government',
    desc:    "Leads Edo State's flagship digital skills ecosystem, overseeing a ₦800M+ portfolio of 70+ programmes in AI, entrepreneurship, digital literacy, and emerging tech equipping 2,000+ young people yearly while building partnerships across government and private sector.",
  },
  {
    period:  'AUG 2025 — Present',
    title:   'Relationship Management Team Lead',
    org:     'GirlLEAD Talent Accelerator | Remote',
    desc:    "Leads partnership development and stakeholder engagement across government, private sector, and academia to expand opportunities for women in tech and leadership, designing frameworks that strengthen programme reach."
  },
  {
    period:  'MARCH 2024 — SEPT 2024',
    title:   'Faculty Lead / Head of BUILD',
    org:     'Edo Innovates | Edo State Government',
    desc:    "Led the BUILD Faculty, overseeing curriculum development, facilitator excellence, and delivery across digital skills and entrepreneurship. Standardised learning frameworks and strengthened quality assurance through competency-based design."
  },
  {
    period:  'OCT 2023 — AUG 2025',
    title:   'Regional Lead, South-South',
    org:     'Empower Her Community',
    desc:  "Directed regional strategy across South-South Nigeria, expanding tech, entrepreneurship, and leadership access for women through strategic partnerships and multi-state coordination."  
  },
  {
    period:  'MAY 2023 — MAY 2025',
    title:   'DevOps & Cloud Instructor',
    org:     'Techeccentric Consulting (Canada) | Remote',
    desc:    "Designed and delivered cloud infrastructure training across AWS, Linux, networking, and CI/CD, preparing learners for cloud careers and certification pathways."
  },
  {
    period:  'JAN 2024 — PRESENT',
    title:   'Senior Legal Counsel',
    org:     'Edo State Skills Development Agency (EdoJobs)',
    desc:    "Provided legal, governance, and compliance advisory for workforce programmes, strengthening institutional accountability and contract management across government partnerships."
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
