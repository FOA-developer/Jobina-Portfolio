import First from "../components/others/First";
import Navbar from "../components/main/Navbar";
import Second from "../components/others/Second";
import Contact from "../components/main/Contact";
import img from "../assets/jci/1.jpeg"
import img2 from "../assets/jci/3.jpeg"

const impact = [
  { value: '42,000+',  label: 'Tech talents trained across the ecosystem' },
  { value: 'N800M+',   label: 'Annual programme portfolio led' },
  { value: '70+',      label: 'Programmes & cohorts a year' },
  { value: '2,000+',   label: 'Young people reached annually' },
  { value: '70%',      label: 'Women participation by design' },
  { value: '50',       label: 'Start-ups supported through programmes' },
];


const Jci = () => {
  return  (
    <>
    <Navbar />
      <First 
        first = "speaking engagement"
        img={img2}
        impact = {impact}
        header="JCIN UNIBEN - Employability, Business & Leadership (EBL) Masterclass 8.0"
        period="Gritin AI"
        description="The Employability, Business & Leadership (EBL) Masterclass is JCIN UNIBEN's flagship annual capacity-building programme designed to bridge the gap between academic learning and workplace readiness. Through intensive training, mentorship, practical assignments, and industry engagement, the programme equips students and young professionals with the competencies required for successful careers and entrepreneurship."
        tags={['700+ Learners', '+40% YoY Enrollment', '68% advance to next stage']}
      /> 
      <Second
        img={img}
        title="Youth Digital Skills"
        description='In recognition of her expertise in workforce development and employability, Jobina Arinze was invited to serve in multiple capacities. She facilitated a masterclass on "Writing a Winning CV and Cover Letter," equipping participants with practical strategies for developing compelling application documents and positioning themselves competitively in the job market'
        description1="She also served as an Employability Challenge Judge, assessing finalists through competency-based mock interviews that simulated real recruitment processes. Participants were evaluated on communication, professionalism, critical thinking, problem-solving, emotional intelligence, confidence, and overall workplace readiness, with individualized feedback provided to support their professional growth."
        cert={["Facilitated a masterclass on Writing a Winning CV and Cover Letter.", "Served as an official Judge for the Employability Challenge Grand Finale.", "Evaluated candidates using structured assessment criteria.", "Provided feedback to strengthen participants' workplace readiness.","Participated as Special Guest, recognised for her contribution." ]}
      />
      <Contact />
    </>
  )
}

export default Jci;