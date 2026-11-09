import First from "../components/others/First";
import Navbar from "../components/main/Navbar";
import Second from "../components/others/Second";
import Contact from "../components/main/Contact";
import img  from "../assets/bsp/beyond-selling-online.jpeg"

const impact = [
  { value: '42,000+',  label: 'Tech talents trained across the ecosystem' },
  { value: 'N800M+',   label: 'Annual programme portfolio led' },
  { value: '70+',      label: 'Programmes & cohorts a year' },
  { value: '2,000+',   label: 'Young people reached annually' },
  { value: '70%',      label: 'Women participation by design' },
  { value: '50',       label: 'Start-ups supported through programmes' },
];


const AfricaSkill = () => {
  return  (
    <>
    <Navbar />
      <First 
        first = "speaking engagement"
        img={img}
        impact = {impact}
        header="Africa Digital Skills Conference 2026"
        period="Trainer |Head of Edo Innovates | Virtual | November 2026"
        description= "I led a virtual training session at the Africa Digital Skills Conference on the business behind that first sale. Selling online can help a small business reach customers beyond its immediate community. Sustaining those sales depends on whether the business can explain its offer clearly, make buying straightforward and deliver what it promised, order after order."
        tags={['Digital Skills', 'Innovation Ecosystem', ' Digital Business and E-Commerce Skills']}
      /> 
      <Second
        img={img}
        header = "Contributions"
        title="Africa Digital Skills Conference 2026"
        description = "Serving in her capacity as Trainer at the Africa Digital Skills Conference 2026 and Head of Edo Innovates, Jobina Arinze provided training, digital business guidance, and e-commerce skills leadership through a virtual session on building sustainable digital businesses in Africa. Her dual role combined conference facilitation with hands-on small business support to ensure participants understood what turns a first online sale into repeat custom."
        description1= "She led a session on the business behind the first sale, covering how a clear offer, straightforward buying, and reliable delivery sustain online sales. Her approach drew on her oversight of the Centre for Digital Business and E-Commerce Skills, an EdoJobs initiative supported by GIZ’s SEDIN programme, whose launch clinic supported more than 100 micro, small and medium enterprises."
        cert={['Supported 100+ MSMEs with product photography, online marketing, and digital finance.', "Oversaw establishment of the Centre for Digital Business and E-Commerce Skills.", "Taught strategies for sustaining online sales beyond the first order." ]}
      />
      <Contact />
    </>
  )
}

export default AfricaSkill;