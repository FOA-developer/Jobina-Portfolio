import Card from '../shared/Card';
import img from '../../assets/YOUTH/5.jpeg';
import img1 from "../../assets/data/1.jpg";
import img2 from "../../assets/Aws/3.jpg";
import img3 from "../../assets/Digital/6.jpeg"
import img4 from "../../assets/blind/1.jpeg"
import img5 from "../../assets/excel/2.jpg"

const PROGRAMMES = [
  {
    title:       'Youth Digital Talent Pipeline',
    description: 'A robust, multi-track pipeline for young talent, combining programming, data analytics, design and digital entrepreneurship skills — built for scale and sustained impact across Nigeria.',
    period:      '2019 — PRESENT',
    src: img,
    link: "/youth"
  },
  {
    title:       'AI & Automation for SME Founders and Operators',
    description: 'An intensive workflow-optimisation programme designed to help founders and business owners leverage AI tools to increase productivity, scale faster and compete in the digital economy.',
    period:      '2023 — PRESENT',
    src: img1,
    link: "/data_analytics"
  },
  {
    title:       'Tech Inclusion — Training for the Blind & the Visually Impaired',
    description: 'An adaptive, accessibility-first ICT programme designed specifically for blind and visually impaired learners — removing barriers and opening pathways into the digital economy.',
    period:      '2021 — PRESENT',
    src: img2,
    link: "/aws_restart"
  },
  {
    title:       'Tech Inclusion — Training for the Blind & the Visually Impaired',
    description: 'An adaptive, accessibility-first ICT programme designed specifically for blind and visually impaired learners — removing barriers and opening pathways into the digital economy.',
    period:      '2021 — PRESENT',
    src: img4,
    link: "tech_inclusion_for_the_blind"
  },
  {
    title:       'Technology Adoption for Hospitality',
    description: 'A sector-focused transformation initiative covering digital operations, customer management and data analytics for hospitality SMEs looking to modernise and grow.',
    period:      '2022 — PRESENT',
    src: img3,
    link: "/digital_literacy"
  },
  {
    title:       'Technology Adoption for Hospitality',
    description: 'A sector-focused transformation initiative covering digital operations, customer management and data analytics for hospitality SMEs looking to modernise and grow.',
    period:      '2022 — PRESENT',
    src: img5,
    link: "/excel_essentials"
  },
];

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
