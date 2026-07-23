const cert = [
  {
    name: "LL.M, International Law",
    title: "UNIBEN · 2015"
  },
  {
    name: "B.L, Barrister-at-Law",
    title: "Nigerian Law School · 2010"
  },
  {
    name: "LL.B, Law",
    title: "UNIBEN · 2008"
  }
]

const About = () => {
  return (
    <section
      id="about"
      className="pt-20 md:pt-28 mb-20 px-6 md:px-16 lg:px-24 bg-white"
    >
      {/* ── Section label ── */}
      <p
        className="text-xs tracking-[0.1em] uppercase mb-12 font-bold"
        style={{ color: 'var(--color-text-main)' }}
      >
        About
      </p>

      {/* ── Two-column grid ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

        {/* LEFT — headline + stats */}
        <div className="flex flex-col justify-between ">
          <div className="flex flex-col gap-6 mb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight "
              style={{ color: 'var(--color-text-muted)' }}>
              From the courtroom to the frontier of Africa's digital economy.
            </h2>
            <div className="pt-2 mt-18">
              {cert.map((c, index) => (
                <div className="flex flex-row justify-between border-t-1 border-accent pt-4" key={index}>
                  <h4 className="text-text-muted">{c.name}</h4>
                  <h5 className="text-text-muted-soft">{c.title}</h5>
                </div>
              ))}
            </div>
            {/* Quote card */}
          <div
            className=" px-7 py-6 mt-16 border-l-4 rounded-r-xl md:hidden lg:block"
            style={{
              borderColor: 'var(--color-text-main)',
              background:  'var(--color-secondary)',
            }}
          >
            <p
              className="text-lg md:text-xl font-semibold italic leading-snug text-white mb-4 text-text-header"
              style={{ color: 'var(--color-text-header)' }}
            >
              "Tech is a no-barrier space, there are no gatekeepers."
            </p>
            <p
              className="text-xs tracking-wider uppercase"
              style={{ color: 'var(--color-text-main)' }}
            >
              — Jobina Arinze
            </p>
          </div>
          </div>
        </div>

        {/* RIGHT — bio + quote */}
        <div className="flex flex-col gap-8">

          {/* Bio paragraphs */}
          <div
            className="space-y-5 text-base pt-8"
            style={{ color: 'var(--color-text-muted)' }}
          >
            <p><strong>Jobina Arinze</strong> is a workforce development and innovation leader designing the systems that prepare people, businesses, and institutions for the future of work. Working at the intersection of public policy, entrepreneurship, technology, and human capital, she helps governments and development partners translate strategy into scalable programmes that create jobs, strengthen enterprises, and expand economic opportunity.<br></br><br></br>With more than eight years of experience across government, innovation ecosystems, legal practice, and international development, she has led initiatives spanning digital skills, artificial intelligence, entrepreneurship, MSME development, and innovation ecosystem strengthening. Her work focuses on building inclusive talent pipelines that connect learning with employment, entrepreneurship, and long-term economic growth.<br></br><br></br>As <strong>Head of Edo Innovates</strong>, the innovation and entrepreneurship hub of the Edo State Skills Development Agency &#40;EdoJobs&#41;, Jobina leads a portfolio of more than 70 programmes annually within an ecosystem that has equipped over 42,000 people with future-ready skills. Through strategic partnerships with government, academia, development organisations, and the private sector, she is helping shape one of Nigeria's leading state-led models for workforce transformation and innovation-driven economic development.<br></br><br></br>Her work is guided by a simple belief: Africa's greatest competitive advantage is its people, and the future belongs to the countries that invest in their talent today.</p>
          </div>
          {/* Quote card */}
          <div
            className=" px-7 py-6 mt-2 border-l-4 rounded-r-xl hidden md:block lg:hidden"
            style={{
              borderColor: 'var(--color-text-main)',
              background:  'var(--color-secondary)',
            }}
          >
            <p
              className="text-lg md:text-xl font-semibold italic leading-snug text-white mb-4 text-text-header"
              style={{ color: 'var(--color-text-header)' }}
            >
              "Tech is a no-barrier space, there are no gatekeepers."
            </p>
            <p
              className="text-xs tracking-wider uppercase"
              style={{ color: 'var(--color-text-main)' }}
            >
              — Jobina Arinze
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
