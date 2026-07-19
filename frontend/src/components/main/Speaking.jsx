import Card from "../../components/shared/Card"
import img from "../../assets/jobberman/7.jpeg"
import img1 from "../../assets/grit/2.jpeg"
import img2 from "../../assets/girllead/3.jpeg"
import img3 from "../../assets/jci/3.jpeg"
import img4 from "../../assets/royal/2.jpeg"
import img5 from "../../assets/pathway/1.jpg"

const PROGRAMMES = [
  {
    title:       'Panelist',
    description: 'A robust, multi-track pipeline for young talent, combining programming, data analytics, design and digital entrepreneurship skills — built for scale and sustained impact across Nigeria.',
    period:      'Jobberman Edo Career Clinic',
    src: img,
    link: "/jobberman"
  },
  {
    title:       'Panelist',
    description: 'An intensive workflow-optimisation programme designed to help founders and business owners leverage AI tools to increase productivity, scale faster and compete in the digital economy.',
    period:      'GRITIN AI Conference',
    src: img1,
    link: "/gritin_ai_conference"
  },
  {
    title:       'Facilitator/Speaker',
    description: 'An adaptive, accessibility-first ICT programme designed specifically for blind and visually impaired learners — removing barriers and opening pathways into the digital economy.',
    period:      'Girllead',
    src: img2,
    link: "/girllead"
  },
  {
    title:       'Facilator/Panel Judge',
    description: 'A sector-focused transformation initiative covering digital operations, customer management and data analytics for hospitality SMEs looking to modernise and grow.',
    period:      'JCIN-UNIBEN EBL',
    src: img3,
    link: "/jcin-uniben"
  },
  {
    title:       'Facilator/Speaker',
    description: 'A women-focused entrepreneurship programme combining business development, digital innovation, mentorship, and access to finance to accelerate enterprise growth',
    period:      'EstablishHER Academy',
    src: img4,
    link: "/royaliwere"
  },
  {
    title:       'Facilator/Speaker',
    description: 'A women-focused entrepreneurship programme combining business development, digital innovation, mentorship, and access to finance to accelerate enterprise growth',
    period:      'EstablishHER Academy',
    src: img5,
    link: "/pathway_to_the_economy"
  },
];

const Speaking = () => {
  return ( 
    <>
    <section 
      id="speaking"
      className="py-20 md:py-28 px-6 md:px-16 lg:px-24 bg-white"
    >
      {/* ── Section label ── */}
      <p
        className="text-xs tracking-widest uppercase mb-10 font-bold text-text-main">
        Speaking & Thought Leadership
      </p>

      <h2
        className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight mb-14 w-full md:max-w-[80%] "
      >
        On stages shaping Africa's future of work.
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
    </>
   );
}
 
export default Speaking;