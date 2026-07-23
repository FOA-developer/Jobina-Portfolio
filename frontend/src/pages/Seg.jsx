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
        description="The Centre for Digital Business and E-Commerce Skills is a flagship digital entrepreneurship initiative established through a strategic partnership between the Edo State Skills Development Agency (EdoJobs), through Edo Innovates, and the Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ) GmbH) under the Sustainable and Inclusive Economic Development for Decent Employment in Nigeria (SEDIN) Programme, through its Sustainable e-Commerce for Growth (SE4G) initiative."
        tags={['700+ Learners', '+40% YoY Enrollment', '68% advance to next stage']}
      /> 
      <Second
        img={img}
        header="Contributions"
        title="EdoBEST"
        description1="The Centre was established to strengthen Edo State's entrepreneurship ecosystem by equipping entrepreneurs, startups, and MSMEs with practical digital business and e-commerce capabilities that improve competitiveness, expand market access, and support sustainable business growth.Under my leadership, Edo Innovates coordinated stakeholder engagement, supported institutional collaboration, and oversaw the successful implementation and launch of the Centre. The launch also marked the commencement of programme delivery, with 60 Micro, Small and Medium Enterprises (MSMEs) completing the Centre's inaugural capacity-building programme within its first month of operation, demonstrating immediate demand and early impact."
        description="As Head of Edo Innovates, I provided strategic oversight for the establishment of the Centre for Digital Business and E-Commerce Skills, a flagship initiative delivered through a partnership between the Edo State Skills Development Agency (EdoJobs), through Edo Innovates, and the Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ) GmbH (GIZ) under the Sustainable and Inclusive Economic Development for Decent Employment in Nigeria (SEDIN) Programme, through its Sustainable e-Commerce for Growth (SE4G) initiative."
       cert={["Established Centre via EdoJobs-GIZ partnership under SEDIN's SE4G initiative.", "Provided strategic oversight as Head of Edo Innovates.", "Coordinated cross-sector collaboration among government and stakeholders.", "Successfully launched the Centre and commenced programme delivery.","Trained first and second cohort of 60 MSMEs within one month." ]}
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