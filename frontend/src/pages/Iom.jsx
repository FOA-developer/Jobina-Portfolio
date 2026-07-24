import First from "../components/others/First";
import Navbar from "../components/main/Navbar";
import Second from "../components/others/Second";
import Contact from "../components/main/Contact";
import img from "../assets/iom/1.webp"
import img2 from "../assets/iom/2.webp"
import img4 from "../assets/iom/3.webp"
import img1 from "../assets/iom/5.webp"
import Gallery from "../components/others/Gallery";

const impact = [
  { value: '42,000+',  label: 'Tech talents trained across the ecosystem' },
  { value: 'N800M+',   label: 'Annual programme portfolio led' },
  { value: '70+',      label: 'Programmes & cohorts a year' },
  { value: '2,000+',   label: 'Young people reached annually' },
  { value: '70%',      label: 'Women participation by design' },
  { value: '50',       label: 'Start-ups supported through programmes' },
];


const Iom = () => {
  return  (
    <>
    <Navbar />
      <First 
        first = "flagdhip programme"
        img={img4}
        impact = {impact}
        header="IOM-EdoJobs Business Digitalisation Training for Returned Migrants"
        period="October 2024 - DECEMBER 2024"
        description="The IOM-EdoJobs Business Digitalisation Training was implemented by the International Organization for Migration (IOM) in partnership with the Edo State Skills Development Agency (EdoJobs) to support the economic reintegration of returned migrants in Edo State. The programme equipped participants with digital and entrepreneurial skills to establish, strengthen, and sustain viable businesses, fostering economic independence and reducing the risk of irregular re-migration."
        tags={['Legal & Regulatory Compliance', 'Safeguarding ', 'Gender & Social Inclusion']}
      /> 
      <Second
        img={img2}
        header="Contributions"
        title="EdoBEST"
        description="As Senior Legal Counsel for the IOM-EdoJobs Business Digitalisation Training for Returned Migrants, a programme implemented by the International Organization for Migration (IOM) in partnership with EdoJobs to support the economic reintegration of returned migrants in Edo State, she led the business formalization and Corporate Affairs Commission (CAC) registration component. She facilitated practical sessions on the legal aspects of starting and running a business, emphasizing regulatory compliance, corporate governance, and formal business registration as key pillars of sustainable enterprise development."
        description1="She also coordinated and managed the CAC registration process for participating entrepreneurs, guiding them through documentation, business name registration, and incorporation requirements. Through this intervention, returned migrants left the programme with registered businesses and a stronger legal foundation, better positioned to access funding, build credibility, and grow sustainable enterprises as part of their reintegration."
        cert={["Led business formalization and CAC registration component of the programme.", "Facilitated legal training sessions on business compliance and governance.", "Coordinated CAC registration for returned migrant entrepreneurs.", "Guided entrepreneurs through documentation and registration requirements." ]}
      />
      <Gallery 
           img={img1}
           img2={img4}
           img1={img}
           img3={img2}
          title="IOM Programme Highlights"
        />
      <Contact />
    </>
  )
}

export default Iom;