import First from "../components/others/First";
import Navbar from "../components/main/Navbar";
import Second from "../components/others/Second";
import Contact from "../components/main/Contact";
import img from "../assets/idice/img.JPG"
import img2 from "../assets/idice/img2.JPG"
import img4 from "../assets/idice/img4.JPG"
import img3 from "../assets/idice/img3.JPG"
import img1 from "../assets/idice/img1.jpg"
import Gallery from "../components/others/Gallery";

const impact = [
  { value: '42,000+',  label: 'Tech talents trained across the ecosystem' },
  { value: 'N800M+',   label: 'Annual programme portfolio led' },
  { value: '70+',      label: 'Programmes & cohorts a year' },
  { value: '2,000+',   label: 'Young people reached annually' },
  { value: '70%',      label: 'Women participation by design' },
  { value: '50',       label: 'Start-ups supported through programmes' },
];


const Idice = () => {
  return  (
    <>
    <Navbar />
      <First 
        first = "flagship programme"
        img={img4}
        impact = {impact}
        header="IDICE South-South Skills-to-Jobs Programme"
        period="Bayelsa State Coordinator · Wootlab Innovations · October 2026–Present"
        description="Jobina leads delivery of iDICE Skills-to-Jobs in Bayelsa, one of six states in a South-South rollout targeting 50,000 beneficiaries. She directs the field team, manages activity funding and oversees the state’s work from recruitment and training through employer engagement and placement tracking. During mobilisation, Bayelsa’s applications more than doubled in 12 days, reaching 1,401 by 4 November 2026."
        tags={['Jobs Empowerment', 'Enterprenurship ', 'Digital Skills']}
      /> 
      <Second
        img={img2}
        header="Contributions"
        title="IDICE South-South Skills-to-Jobs Programme"
        description="Serving in her capacity as Bayelsa State Coordinator at Wootlab Innovations, Jobina Arinze provides delivery leadership, field team direction, financial management, and employment pathway oversight for the Bayelsa rollout of the iDICE South-South Skills-to-Jobs Programme. Her cross-functional role combines state programme delivery with partner engagement and financial control to ensure the six-state, 50,000-beneficiary rollout meets its targets for enrolment, completion, and placement."
        description1="She leads the implementation of mobilisation, training, and employer engagement processes that more than doubled Bayelsa’s applications in 12 days, secured a Civil Service commitment to onboard 2,000 staff, and supported placement tracking aligned with regional reporting requirements."
        cert={["Led Bayelsa delivery of the iDICE Skills-to-Jobs rollout.", "Directed field teams and stakeholder partnerships across the state.", "Managed activity funding, expenditure, and financial reporting.", "Tracked applications, enrolments, completions, and placements" ]}
      />
      <Gallery 
           img={img}
           img2={img1}
           img1={img3}
           img3={img4}
          title="IDICE South-South Skills-to-Jobs Programme Highlights"
        />
      <Contact />
    </>
  )
}

export default Idice;