import First from "../components/others/First";
import Navbar from "../components/main/Navbar";
import Second from "../components/others/Second";
import Contact from "../components/main/Contact";
import img from "../assets/jobberman/1.jpeg"
import img2 from "../assets/jobberman/2.jpeg"
import img3 from "../assets/jobberman/3.jpeg"
import img4 from "../assets/jobberman/4.jpeg"
import img5 from "../assets/jobberman/5.jpeg"
import img6 from "../assets/jobberman/6.jpeg"
import Gallery from "../components/others/Gallery";

const impact = [
  { value: '42,000+',  label: 'Tech talents trained across the ecosystem' },
  { value: 'N800M+',   label: 'Annual programme portfolio led' },
  { value: '70+',      label: 'Programmes & cohorts a year' },
  { value: '2,000+',   label: 'Young people reached annually' },
  { value: '70%',      label: 'Women participation by design' },
  { value: '50',       label: 'Start-ups supported through programmes' },
];


const Jobberman = () => {
  return  (
    <>
    <Navbar />
      <First 
        first = "speaking engagement"
        img={img}
        impact = {impact}
        header="Jobberman Edo Career Clinic 2025"
        period="Expert Panelist"
        description="The Jobberman Edo Career Clinic is a flagship employability programme brought together by Jobberman Nigeria, the Mastercard Foundation, and the Edo State Skills Development Agency (EdoJobs), built around the theme 'Your Career Compass: Gain Clarity in Work and Business'. The initiative brings young people face-to-face with career coaches, industry professionals, and workforce development experts, offering practical guidance on navigating today's fast-changing labour market, from clarifying career direction and building employable skills to understanding what it actually takes to thrive in work or business. It forms part of a broader push to equip Edo State's youth with the clarity, tools, and connections needed to move confidently into meaningful employment or entrepreneurship."
        tags={['700+ Learners', '+40% YoY Enrollment', '68% advance to next stage']}
      /> 
      <Second
        img={img2}
        header="Contributions"
        title="Jobberman Edo Career Clinic 2025"
        description="As an Expert Panelist, I joined government, industry, and ecosystem leaders to discuss workforce readiness, digital transformation, entrepreneurship, and the future of work. Drawing from my experience leading workforce development and innovation programmes, I shared practical insights on building future-ready skills, embracing lifelong learning, and positioning for opportunities in the digital economy."
        description1="The event brought together 1,000+ young people, providing access to career guidance, networking opportunities, and expert perspectives on navigating today's world of work. My contribution reinforced the importance of collaboration between government, employers, and innovation ecosystems in developing talent pipelines that respond to changing workforce demands."
        cert={["Served as an Expert Panelist on employability and workforce development.", "Shared insights on digital skills, innovation, and career readiness.", "Engaged directly with participants during an interactive panel discussion and Q&A.", "Represented Edo Innovates, advancing youth employment conversations" ]}
      />
      <Gallery 
           img={img6}
           img2={img4}
           img1={img5}
           img3={img3}
          title="Joberman Program Highlights"
        />
      <Contact />
    </>
  )
}

export default Jobberman;