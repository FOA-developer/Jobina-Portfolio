import First from "../components/others/First";
import Navbar from "../components/main/Navbar";
import Second from "../components/others/Second";
import Contact from "../components/main/Contact";
import img from "../assets/omni/2.webp"
import img2 from "../assets/omni/23.webp"

const impact = [
  { value: '42,000+',  label: 'Tech talents trained across the ecosystem' },
  { value: 'N800M+',   label: 'Annual programme portfolio led' },
  { value: '70+',      label: 'Programmes & cohorts a year' },
  { value: '2,000+',   label: 'Young people reached annually' },
  { value: '70%',      label: 'Women participation by design' },
  { value: '50',       label: 'Start-ups supported through programmes' },
];


const Omni = () => {
  return  (
    <>
    <Navbar />
      <First 
        first = "speaking engagement"
        img={img}
        impact = {impact}
        header="Omniverse Africa Summit 3.0"
        period="Facilitator | Introduction to Artificial Intelligence: Concept & Applications"
        description="Omniverse Africa Summit 3.0 is one of Africa's leading innovation gatherings, held at the National Theatre, Lagos, and hosted by Edo Innovates. As Facilitator of the AI Masterclass, Jobina Arinze led a workshop introducing participants to the fundamentals of Artificial Intelligence, exploring core concepts and real-world applications shaping the future of innovation across the continent."
        tags={['Artificial Intelligence', 'Innovation & Emerging Tech', 'Pan-African Tech Summit']}
        /> 
      <Second
        img={img2}
        header = "Contributions"
        title="Omniverse Africa Summit 3.0 — AI Masterclass"
        description="As Facilitator at Omniverse Africa Summit 3.0, Jobina Arinze led the AI Masterclass, 'Introduction to Artificial Intelligence: Concept & Applications,' guiding participants through the foundational concepts of AI and how they translate into practical, real-world use across industries and innovation ecosystems."
        description1="Reflecting on the journey from first learning about cloud technology to now facilitating AI conversations on one of Africa's biggest innovation stages, she used the platform to demystify AI for a broader audience and reinforce the continent's growing role in shaping emerging technology."
        cert={["Facilitated the AI Masterclass at Omniverse Africa Summit 3.0.", "Led sessions on AI concepts and real-world applications.", "Represented Edo Innovates on a pan-African innovation stage.", "Engaged participants across Africa's growing tech ecosystem."]}
      />
      <Contact />
    </>
  )
}

export default Omni;