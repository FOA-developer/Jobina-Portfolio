import First from "../components/others/First";
import img from "../assets/IMG_9694.jpg.jpeg";
import Navbar from "../components/main/Navbar";
import Second from "../components/others/Second";
import  heroImg from "../assets/YOUTH/2.webp";
import Gallery from "../components/others/Gallery";
import Contact from "../components/main/Contact";

const impact = [
  { value: '42,000+',  label: 'Tech talents trained across the ecosystem' },
  { value: 'N800M+',   label: 'Annual programme portfolio led' },
  { value: '70+',      label: 'Programmes & cohorts a year' },
  { value: '2,000+',   label: 'Young people reached annually' },
  { value: '70%',      label: 'Women participation by design' },
  { value: '50',       label: 'Start-ups supported through programmes' },
];

const Youth = () => {
  return ( 
    <>
       <Navbar />
       <First 
        first="flagship programme"
        img={img}
        impact = {impact}
        header="Empowering the next generation of digital leaders."
        period="Edo Innovates · 2024 - Present Benin City"
        description="The Youth Digital Skills Programme is building Africa's future technology workforce by providing children and teenagers with early exposure to digital skills, innovation, and emerging technologies. Through hands-on, age-appropriate learning, the programme nurtures the skills, confidence, and creativity needed to thrive in the digital economy."
        tags={['700+ Learners', '+40% YoY Enrollment', '68% advance to next stage']}
        /> 
        <Second
        img={heroImg}
        title="Youth Digital Skills"
        description="Preparing young people for the future of work cannot begin at university—it must start much earlier. Recognising limited early exposure to STEM and emerging technologies among children in Edo State, Jobina Arinze designed the Youth Digital Talent Pipeline, a long-term initiative that introduces young people to technology early and progressively prepares them for careers in the digital economy."
        description1 = "Designed for learners aged 8–18, the pipeline moves beyond short-term training by offering structured learning journeys that evolve with each learner's age and interests. Through sequenced programmes in Scratch Programming, Coding & Robotics, Graphics Design, Web Development, Data Analytics, and AI, the initiative builds technical capability alongside creativity, critical thinking, and problem-solving skills."
        cert={["Designed and institutionalised a multi-track talent pipeline serving 700+ learners.", "Trained 180+ learners in Data Analytics using Excel and Python.", "Delivered Web Development bootcamps to 170+ learners .", "Built progression pathways into intermediate and advanced STEM tracks." ]}
        />
        <Contact />
    </>
   );   
}
 
export default Youth;