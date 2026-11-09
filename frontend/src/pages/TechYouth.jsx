import First from "../components/others/First";
import Navbar from "../components/main/Navbar";
import Second from "../components/others/Second";
import Contact from "../components/main/Contact";
import img from "../assets/ng/1.webp"
import img2 from "../assets/ng/2.webp"
import img4 from "../assets/ng/3.webp"
import img5 from "../assets/ng/4.webp"
import img1 from "../assets/ng/5.webp"
import img6 from "../assets/ng/6.webp"
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
        header="Tech4Youth | GIZ Digital Transformation Center Nigeria"
        period="Career Readiness and Employment Linkages Coach · Edo State · 2026"
        description="Tech4Youth is a national youth employment initiative under GIZ’s Digital Transformation Center (DTC) Nigeria, jointly funded by Germany’s Federal Ministry for Economic Cooperation and Development and Denmark’s Ministry of Foreign Affairs. It brings together employers, tertiary institutions and state-level partners to align ICT training with labour market demand. The wider initiative includes internship and job placement pathways and the development of a national digital talent pool."
        tags={['Jobs Empowerment', 'Enterprenurship ', 'Digital Skills']}
      /> 
      <Second
        img={img}
        header="Contributions"
        title="Tech4Youth | GIZ Digital Transformation Center Nigeria"
        description="Serving in her capacity as Career Readiness and Employment Linkages Coach at AG Southern Company Limited, Jobina Arinze provides career coaching, portfolio development, employer engagement, and outcome verification support for the first Edo State cohort of the Tech4Youth initiative under GIZ’s Digital Transformation Center Nigeria. Her cross-functional role combines participant coaching with employer-side linkage work to ensure 200 emerging tech professionals across Data Analytics, Cybersecurity, Artificial Intelligence, and Software Development are prepared for, and connected to, jobs, internships, remote roles, and freelance opportunities."
        description1="She leads the delivery of career action plans, portfolio clinics, CV and LinkedIn reviews, interview simulations, and group coaching sessions that help participants turn their training into credible evidence of skill. She works with the programme’s monitoring and evaluation team to verify placement outcomes across applications, interviews, offers, and starts."
        cert={["Connected candidates with employers, recruiters, and freelance clients.", "Delivered portfolio clinics, CV reviews, and interview simulations.", "Developed individual career action plans and coaching sessions", "Led career readiness and employment linkage for 200 participants." ]}
      />
      <Gallery 
           img={img2}
           img2={img6}
           img1={img5}
           img3={img1}
          title="Tech4Youth | GIZ Digital Transformation Center Nigeria Highlights"
        />
      <Contact />
    </>
  )
}

export default Idice;