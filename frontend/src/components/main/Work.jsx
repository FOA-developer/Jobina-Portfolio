import Card from '../shared/Card';
import { WORK_ITEMS as PROGRAMMES } from '../../data/work';

const Work = () => {
  return (
    <section
      id="work"
      className="py-20 md:py-28 px-6 md:px-16 lg:px-24 bg-white"
    >
      {/* ── Section label ── */}
      <p
        className="text-xs tracking-[0.1em] uppercase mb-10 font-bold text-text-main">
        Flagship Programmes
      </p>

      {/* ── Heading ── */}
      <h2
        className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight mb-14 w-full md:max-w-[80%] "
      >
        Systems that move thousands of careers forward.
      </h2>

      {/* ── Card grid — 1 col mobile · 2 col tablet · 3 col desktop ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROGRAMMES.map((prog, i) => (
          <Card
            key={i}
            tags={prog.tags}
            title={prog.title}
            description={prog.description}
            period={prog.period}
            src={prog.src}
            link={prog.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Work;
