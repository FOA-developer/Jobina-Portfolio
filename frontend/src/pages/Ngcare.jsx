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


const Ngcare = () => {
  return  (
    <>
    <Navbar />
      <First 
        first = "flagdhip programme"
        img={img4}
        impact = {impact}
        header="EDO-CARES (NG-CARES) Programme"
        period="October 2024 - DECEMBER 2024"
        description="The NG-CARES Programme is a $750 million World Bank-funded PforR initiative addressing COVID-19's socio-economic impact across Nigeria. In Edo State, it was implemented through EdoCARES, supporting livelihoods, food security, and economic recovery. Under Result Area 3, the programme supported MSE recovery through operational grants, helping entrepreneurs restart operations, retain jobs, and rebuild resilience. In total, ₦645 million was disbursed to 2,219 micro and small enterprises statewide."
        tags={['Legal & Regulatory Compliance', 'Safeguarding ', 'Gender & Social Inclusion']}
      /> 
      <Second
        img={img}
        header="Contributions"
        title="EdoBEST"
        description="Serving in her capacity as Senior Legal Counsel at EdoJobs, Jobina Arinze provided safeguarding, legal, governance, and monitoring oversight for the Edo State implementation of the World Bank-funded NG-CARES Programme. Her cross-functional role combined legal compliance with safeguarding and monitoring responsibilities to ensure programme delivery met international standards for accountability, inclusion, and environmental and social risk management."
        description1="She led the implementation of safeguarding systems and monitoring processes that strengthened programme integrity, supported evidence-based decision-making, and ensured compliance with the World Bank Environmental and Social Framework (ESF) and Programme-for-Results (PforR) requirements."
        cert={["Provided legal and compliance oversight for NG-CARES Programme.", "Led environmental and social safeguarding per World Bank ESF.", "Coordinated GBV, SEA, SH, and child protection safeguarding.", "Designed monitoring and reporting systems for accountability." ]}
      />
      <Gallery 
           img={img2}
           img2={img6}
           img1={img5}
           img3={img1}
          title="Joberman Program Highlights"
        />
      <Contact />
    </>
  )
}

export default Ngcare;