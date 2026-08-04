import First from "../components/others/First";
import Navbar from "../components/main/Navbar";
import Second from "../components/others/Second";
import Contact from "../components/main/Contact";
import img from "../assets/pathway/1.jpg"
import img2 from "../assets/pathway/2.jpg"

const impact = [
  { value: '42,000+',  label: 'Tech talents trained across the ecosystem' },
  { value: 'N800M+',   label: 'Annual programme portfolio led' },
  { value: '70+',      label: 'Programmes & cohorts a year' },
  { value: '2,000+',   label: 'Young people reached annually' },
  { value: '70%',      label: 'Women participation by design' },
  { value: '50',       label: 'Start-ups supported through programmes' },
];


const Pathway = () => {
  return  (
    <>
    <Navbar />
      <First 
        first = "speaking engagement"
        img={img}
        impact = {impact}
        header="Pathways to the Economy: Winning The Money Game"
        period="Panelist | UNIBEN"
        description="Pathways to the Economy: Winning The Money Game is a panel discussion hosted by Osayi Omokaro at the University of Benin, bringing together ecosystem shapers to guide UNIBEN students, new graduates, and NYSC members on veritable strategies for entering the economy, covering leadership, employability, business, and social impact."
        tags={['Youth Economic Empowerment', 'Employability & Career Readiness', 'Leadership Development']}
      /> 
      <Second
        img={img2}
        title="Pathways to the Economy: Winning The Money Game"
        description="As a panelist at Pathways to the Economy: Winning The Money Game, held at UNIBEN, Jobina Arinze joined a room of ecosystem builders to guide students, new graduates, and NYSC members on strategies for entering the economy, drawing on her workforce development background to speak to what genuinely prepares young people to thrive, not just find jobs."
        description1="Her contribution centred on shifting the conversation from job-seeking to value creation, encouraging attendees to build the adaptability, problem-solving, and continuous learning capacity needed to remain relevant as industries and job titles evolve."
        cert={["Served as a panelist at Pathways to the Economy: Winning The Money Game.", "Guided UNIBEN students, graduates, and NYSC members on entering the economy.", "Advocated for value creation over job-seeking mindsets.", "Shared insights from workforce development experience."]}/>
      <Contact />
    </>
  )
}

export default Pathway;