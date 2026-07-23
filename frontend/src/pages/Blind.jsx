import First from "../components/others/First";
import Navbar from "../components/main/Navbar";
import Second from "../components/others/Second";
import Contact from "../components/main/Contact";
import img from "../assets/blind/2.jpeg"
import img2 from "../assets/blind/1.jpeg"

const impact = [
  { value: '42,000+',  label: 'Tech talents trained across the ecosystem' },
  { value: 'N800M+',   label: 'Annual programme portfolio led' },
  { value: '70+',      label: 'Programmes & cohorts a year' },
  { value: '2,000+',   label: 'Young people reached annually' },
  { value: '70%',      label: 'Women participation by design' },
  { value: '50',       label: 'Start-ups supported through programmes' },
];


const Blind = () => {
  return  (
    <>
    <Navbar />
      <First 
        first = "speaking engagement"
        img={img}
        impact = {impact}
        header="Empowering the next generation of digital leaders."
        period="Gritin AI"
        description="The Youth Digital Skills program is a transformative initiative designed to equip young individuals with essential digital skills, fostering innovation, creativity, and employability in the digital age. Through comprehensive training and hands-on experience, participants gain proficiency in various digital tools and technologies, preparing them for successful careers in the ever-evolving digital landscape."
        tags={['700+ Learners', '+40% YoY Enrollment', '68% advance to next stage']}
      /> 
      <Second
        img={img2}
        header="Contributions"
        title="Youth Digital Skills"
        description="The Youth Digital Talent Pipeline was designed to confront a structural gap in Edo State: low early exposure to STEM, Artificial Intelligence and emerging technologies. Jobina institutionalised a multi-track system that meets young people where they are and moves them, step by step, into the future workforce.Built around robotics, programming, data analytics, web development and AI, the pipeline created a structured progression path — from first exposure through to advanced, certification-ready skills and employer-aligned projects. [Add the full story, context and your role here.]"
        cert={["Designed and institutionalised a multi-track talent pipeline serving 700+ learners.", "Trained 180+ learners in Data Analytics using Excel and Python.", "Delivered Web Development bootcamps to 170+ learners .", "Built progression pathways into intermediate and advanced STEM tracks." ]}
      />
      <Contact />
    </>
  )
}

export default Blind;