const CERTIFICATIONS = [
  { title: 'AWS Certified Solutions Architect',  issuer: 'Associate' },
  { title: 'AWS Certified Cloud Practitioner',   issuer: '' },
  { title: 'AWS re/Start Accredited Instructor', issuer: '' },
  { title: 'ICSS 2.0 Trainer, Facilitator & Coach', issuer: 'GIZ · SMEDAN' },
  { title: 'Career Essentials in Generative AI', issuer: 'Microsoft' },
  { title: 'Public Speaking',                    issuer: 'Alison' },
];

const CAPABILITIES = [
  {
    group: 'AI & Emerging Technologies',
    skills: ['Generative AI', 'Prompt Engineering', 'Responsible AI', 'AI Adoption Frameworks'],
  },
  {
    group: 'Cloud & DevOps',
    skills: ['AWS (EC2 · S3 · Lambda)', 'CI/CD', 'Docker', 'Ansible', 'Azure DevOps'],
  },
  {
    group: 'Learning & Curriculum',
    skills: ['Curriculum Design', 'Competency-Based Learning', 'Instructional Design'],
  },
  {
    group: 'Workforce & Inclusion',
    skills: ['Youth Employability', 'Gender Equality', 'Disability Inclusion', 'Monitoring & Evaluation'],
  },
];

const Credentials = () => (
  <section
    id="credentials"
    className="py-20 md:py-28 px-6 md:px-16 lg:px-24 bg-white"
  >
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

      {/* ── LEFT — certifications ── */}
      <div>
        <p
          className="text-xs tracking-[0.1em] uppercase mb-8 font-bold"
          style={{ color: 'var(--color-text-main)' }}
        >
          Credentials
        </p>

        <h2
          className="text-4xl md:text-5xl font-bold leading-tight mb-12"
          style={{ color: 'var(--color-text-header)' }}
        >
          Certified to build at the frontier.
        </h2>

        <ol className="flex flex-col">
          {CERTIFICATIONS.map((cert, i) => (
            <li
              key={i}
              className="flex items-start gap-5 py-5"
              style={{ borderTop: '1px solid var(--color-card-border)' }}
            >
              {/* Number */}
              <span
                className="text-xs font-semibold pt-0.5 shrink-0 w-5 text-right"
                style={{ color: 'var(--color-text-muted-soft)' }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* Cert name + issuer */}
              <p
                className="text-sm md:text-base font-semibold leading-snug"
                style={{ color: 'var(--color-text-muted)' }}
              >
                {cert.title}
                {cert.issuer && (
                  <span
                    className="font-normal ml-2"
                    style={{ color: 'var(--color-text-muted-soft)' }}
                  >
                    — {cert.issuer}
                  </span>
                )}
              </p>
            </li>
          ))}
        </ol>
      </div>

      {/* ── RIGHT — capabilities ── */}
      <div>
        <p
          className="text-xs tracking-[0.1em] uppercase mb-8 font-bold"
          style={{ color: 'var(--color-text-main)' }}
        >
          Capabilities
        </p>

        <div className="flex flex-col gap-8 mt-1">
          {CAPABILITIES.map((cap) => (
            <div key={cap.group}>
              <p
                className="text-sm font-bold mb-3"
                style={{ color: 'var(--color-text-header)' }}
              >
                {cap.group}
              </p>
              <div className="flex flex-wrap gap-2">
                {cap.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs md:text-sm px-3 py-1.5 rounded-full"
                    style={{
                      border:  '1px solid var(--color-card-border)',
                      color:   'var(--color-text-header-description)',
                      background: 'transparent',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  </section>
);

export default Credentials;
