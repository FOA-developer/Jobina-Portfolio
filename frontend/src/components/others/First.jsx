import Tag from "../shared/Tag";


const First = ({tags, title, first, description1,  header, period,  description, link, img, impact }) => {
   return (
    <section>
      <div className="flex flex-col relative justify-between items-start overflow-hidden ">
        <img src={img} alt="Jobina Arinze" loading="eager" className="absolute bg-cover bg-center bg-no-repeat top-0 left-0 w-full h-full object-cover object-center"/>
        <div className="absolute inset-0 bg-overlay"/>
        <div className="relative z-10 flex flex-col gap-4 justfy-between px-[10%] py-16">
          <h4 className="text-xs md:text-sm text-text-main mt-20 tracking-[0.2em] uppercase text-left ">{first}</h4>
          <h2 className="text-3xl text-white/90 font-semibold pt-6 leading-tight md:text-4xl max-w-3xl lg:text-5xl">{header}</h2>
          <p className=" text-sm text-text-muted-soft md:text-base">{period}</p>
          <p className="text-white/60">{description}</p>
          <div className="flex flex-wrap gap-3 py-4">
            {tags.map((t) => (
              <Tag key={t} label={t} size="lg" />
            ))}
          </div>
        </div>
          {/* ══════════════════════════════════════════════
            IMPACT IN NUMBERS — auto-scrolling marquee
            ══════════════════════════════════════════════ */}
        <div className="relative z-10 py-8 md:py-10 overflow-hidden bg-secondary w-full">

          {/* Marquee wrapper — hover pauses scroll (see index.css) */}
          <div className="marquee-wrapper overflow-hidden">

            {/* The track is duplicated so the loop appears seamless:
                first copy scrolls out, second copy fills in behind it. */}
            <div className="marquee-track">
              {[...impact, ...impact].map((stat, i) => (
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
      </div>
    </section>
   )
}

export default First;