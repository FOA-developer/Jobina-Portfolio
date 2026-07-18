import Navbar from "../components/main/Navbar"
import First from "../components/others/First"
import Second from "../components/others/Second"
import Gallery from "../components/others/Gallery"
import Contact from "../components/main/Contact"
import img from "../assets/royal/2.jpeg"
import img1 from "../assets/royal/1.jpeg"
import img2 from "../assets/royal/3.jpeg"
import img3 from "../assets/royal/6.jpeg"
import img4 from "../assets/royal/5.jpeg"
import img5 from "../assets/royal/7.jpeg"


const impact = [
  { value: '42,000+',  label: 'Tech talents trained across the ecosystem' },
  { value: 'N800M+',   label: 'Annual programme portfolio led' },
  { value: '70+',      label: 'Programmes & cohorts a year' },
  { value: '2,000+',   label: 'Young people reached annually' },
  { value: '70%',      label: 'Women participation by design' },
  { value: '50',       label: 'Start-ups supported through programmes' },
];
  

const Royal = () => {
  return(
    <>
      <Navbar />
      <First 
        first = "speaking engagement"
        img={img}
        impact = {impact}
        header="EstablishHER Academy"
        period="Royal Iwere Foundation"
        description="The EstablishHER Entrepreneurship Fund is the Royal Iwere Foundation's flagship women's entrepreneurship programme, delivered in partnership with Stanbic IBTC Bank. Designed to accelerate women-led businesses through entrepreneurship, mentorship, and access to finance, the programme has empowered 700+ women across three cohorts. As a facilitator, Jobina delivered practical sessions on Artificial Intelligence, Digital Literacy, and Business Automation, equipping entrepreneurs to leverage technology for business growth and operational efficiency"
        tags={['700+ Learners', '+40% YoY Enrollment', '68% advance to next stage']} 
        /> 
      <Second
        img={img1}
        title="Youth Digital Skills"
        description="The Youth Digital Talent Pipeline was designed to confront a structural gap in Edo State: low early exposure to STEM, Artificial Intelligence and emerging technologies. Jobina institutionalised a multi-track system that meets young people where they are and moves them, step by step, into the future workforce.Built around robotics, programming, data analytics, web development and AI, the pipeline created a structured progression path — from first exposure through to advanced, certification-ready skills and employer-aligned projects. [Add the full story, context and your role here.]"
        cert={["Designed and institutionalised a multi-track talent pipeline serving 700+ learners.", "Trained 180+ learners in Data Analytics using Excel and Python.", "Delivered Web Development bootcamps to 170+ learners .", "Built progression pathways into intermediate and advanced STEM tracks." ]}
      />
      <Gallery 
          img={img2}
          img2={img4}
          img1={img5}
          img3={img3}
          title="Joberman Program Highlights"
          description="See the transformative effect of our Youth Digital Skills program through these success stories and visual highlights."
        />
      <Contact />
    </>
  )
}

export default Royal;