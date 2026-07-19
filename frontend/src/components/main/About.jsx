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
          </div>
        </div>

        {/* RIGHT — bio + quote */}
        <div className="flex flex-col gap-8">

          {/* Bio paragraphs */}
          <div
            className="space-y-5 text-base pt-8"
            style={{ color: 'var(--color-text-muted)' }}
          >
            <p>
             Jobina Arinze is a digital skills, youth development, and innovation leader building Africa's future workforce at the intersection of policy, technology, and human capital. With over eight years of experience across government, innovation ecosystems, and international development, she designs and scales initiatives that equip young people with the skills, opportunities, and networks needed to thrive in the digital economy.            </p>
            <p>
              As Head of Edo Innovates, Edo State's flagship innovation ecosystem, she leads 70+ annual programmes spanning AI, entrepreneurship, digital literacy, and fintech reaching 2,000+ young people yearly within an ecosystem that has trained 42,000+ tech talents            </p>
            <p>
             She partners with governments, development organizations, academia, and the private sector to build inclusive talent pipelines and sustainable pathways into employment and entrepreneurship.            </p>
          </div>

          {/* Quote card */}
          <div
            className=" px-7 py-6 mt-2 border-l-4 rounded-r-xl "
            style={{
              borderColor: 'var(--color-text-main)',
              background:  'var(--color-secondary)',
            }}
          >
            <p
              className="text-lg md:text-xl font-semibold italic leading-snug text-white mb-4 text-text-header"
              style={{ color: 'var(--color-text-header)' }}
            >
              "Tech is a no-barrier space — there are no gatekeepers."
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
