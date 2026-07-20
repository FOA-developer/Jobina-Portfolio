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
        header="EstablishHER Academy - Royal Iwere Foundation"
        period="Faciltator | EstablishHER Academy"
        description="The EstablishHER Academy is the flagship women entrepreneurship and enterprise development programme of the Royal Iwere Foundation, founded by Her Majesty Olori Atuwatse III. The annual programme equips aspiring and growth-stage women entrepreneurs with the knowledge, mentorship, networks, and practical capabilities required to build resilient, scalable, and sustainable businesses."
        tags={['700+ Learners', '+40% YoY Enrollment', '68% advance to next stage']} 
        /> 
      <Second
        img={img1}
        title="EstablishHER Academy - Royal Iwere Foundation"
        description="Recognised for her expertise in workforce development and innovation, Jobina Arinze was invited as a Facilitator in consecutive editions (2025 and 2026), delivering practical sessions that explored innovation, digital transformation, and technology-enabled business growth. She guided participants on leveraging digital tools, strengthening business resilience, and positioning their enterprises for long-term competitiveness in an increasingly digital economy."
        description1="The programme convenes women entrepreneurs, business leaders, ecosystem enablers, mentors, and development partners to accelerate women's economic empowerment through enterprise development and leadership"
        cert={["Invited as a Facilitator for consecutive editions of the EstablishHER Academy.", "Delivered sessions on innovation, digital transformation, enterprise growth.", "Equipped women entrepreneurs with tech strategies boost competitiveness.", "Facilitated discussions, mentoring participants building future-ready businesses." ]}
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