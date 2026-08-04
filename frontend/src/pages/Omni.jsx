import First from "../components/others/First";
import Navbar from "../components/main/Navbar";
import Second from "../components/others/Second";
import Contact from "../components/main/Contact";
import img from "../assets/omni/2.webp"
import img2 from "../assets/omni/1.webp"

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
        img={img2}
        impact = {impact}
        header="Omniverse Africa Summit 3.0"
        period="Facilitator | Introduction to Artificial Intelligence: Concept & Applications"
        description="Omniverse Africa Summit 3.0 is one of Africa's leading innovation gatherings, held at the National Theatre, Lagos, and hosted by Edo Innovates. As Facilitator of the AI Masterclass, Jobina Arinze led a workshop introducing participants to the fundamentals of Artificial Intelligence, exploring core concepts and real-world applications shaping the future of innovation across the continent."
        tags={['Artificial Intelligence', 'Innovation & Emerging Tech', 'Pan-African Tech Summit']}
        /> 
      <Second
        img={img}
        header = "Contributions"
        title="Omniverse Africa Summit 3.0 — AI Masterclass"
        description="As Facilitator of the AI Masterclass at Omniverse Africa Summit 3.0, Jobina Arinze led an in-depth session introducing participants to Artificial Intelligence, breaking down what AI is, how it works, and why it is rapidly reshaping how people live, work, and build businesses across Africa and beyond. The session moved beyond theory into hands-on application, walking participants through a range of practical AI tools and how to use them effectively in real, everyday contexts, from productivity and content creation to problem-solving and decision-making."
        description1="Beyond the tools themselves, she focused on helping participants understand the broader shift AI represents: an emerging technology that is evolving quickly and reshaping industries, skill requirements, and opportunities. Her emphasis was on equipping attendees not just to use AI, but to use it intentionally and strategically, in ways that genuinely benefit their work, their businesses, and their personal growth, positioning them to stay relevant and competitive as the technology continues to advance."
        cert={["Facilitated the AI Masterclass at Omniverse Africa Summit 3.0.", "Led sessions on AI concepts and real-world applications.", "Represented Edo Innovates on a pan-African innovation stage.", "Engaged participants across Africa's growing tech ecosystem."]}
      />
      <Contact />
    </>
  )
}

export default Omni;