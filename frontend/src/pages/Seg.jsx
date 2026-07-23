import First from "../components/others/First";
import Navbar from "../components/main/Navbar";
import Second from "../components/others/Second";
import Contact from "../components/main/Contact";
import img from "../assets/seg/1.webp"
import img2 from "../assets/seg/2.webp"
import img4 from "../assets/seg/4.webp"
import img5 from "../assets/seg/3.webp"
import img1 from "../assets/seg/6.webp"
import img6 from "../assets/seg/5.webp"
import Gallery from "../components/others/Gallery";

const impact = [
  { value: '42,000+',  label: 'Tech talents trained across the ecosystem' },
  { value: 'N800M+',   label: 'Annual programme portfolio led' },
  { value: '70+',      label: 'Programmes & cohorts a year' },
  { value: '2,000+',   label: 'Young people reached annually' },
  { value: '70%',      label: 'Women participation by design' },
  { value: '50',       label: 'Start-ups supported through programmes' },
];


const Seg = () => {
  return  (
    <>
    <Navbar />
      <First 
        first = "flagdhip programme"
        img={img4}
        impact = {impact}
        header="Edo Basic Education Sector and Skills Transformation"
        period="2018-2024"
        description="Provided strategic leadership for faculty operations, instructional quality, curriculum delivery, and programme implementation for the digital skills component of the World Bank-funded BESSTO programme. Led cross-functional teams responsible for ensuring high-quality learning experiences and the successful execution of workforce development initiatives aligned with Edo State's human capital development strategy."
        tags={['700+ Learners', '+40% YoY Enrollment', '68% advance to next stage']}
      /> 
      <Second
        img={img}
        title="EdoBEST"
        description="As Faculty Lead, Jobina directed faculty operations across multiple digital skills and workforce development programmes. She led instructor recruitment, onboarding, coaching, performance management, and quality assurance, while overseeing curriculum implementation and learner experience to ensure alignment with industry standards. She established quality assurance systems for programme delivery, instructional excellence, and learner outcomes, and coordinated programme implementation with government agencies, technology partners, and development organisations. She also monitored programme performance, analysed learning data to drive continuous improvement initiatives, and supported compliance, reporting, and achievement of World Bank Programme-for-Results (PforR) indicators."
        description1="Her faculty leadership spanned a broad range of technical and professional programmes, including digital literacy, software and web development, full-stack engineering, and cloud computing (AWS); DevOps, cybersecurity, and data analytics and data science; product design (UI/UX), artificial intelligence, and human-centred design; digital marketing and entrepreneurship; robotics and the Microsoft Power Platform; as well as tech law and career readiness and internship programmes."
        cert={["Supported 30+ digital skills and employability programmes across high sectors.", "Helped secure 23 strategic partnerships, surpassing the 20-partnership target.", "Supported expansion of Edo State's digital workforce ecosystem via partnerships.", "Strengthened Edo Innovates faculty governance, instructional and program systems." ]}
      />
      <Gallery 
           img={img1}
           img2={img6}
           img1={img5}
           img3={img2}
          title="Joberman Program Highlights"
        />
      <Contact />
    </>
  )
}

export default Seg;