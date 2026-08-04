import First from "../components/others/First";
import Navbar from "../components/main/Navbar";
import Second from "../components/others/Second";
import Contact from "../components/main/Contact";
import img from "../assets/blind/2.jpeg"
import img2 from "../assets/blind/1.jpeg"

const impact = [
  { value: '42,000+',  label: 'Tech talents trained across the ecosystem' },
  { value: 'N800M+',   label: 'Annual programme portfolio led' },
  { value: '70+',      label: 'Programmes & cohorts a year' },
  { value: '2,000+',   label: 'Young people reached annually' },
  { value: '70%',      label: 'Women participation by design' },
  { value: '50',       label: 'Start-ups supported through programmes' },
];


const Blind = () => {
  return  (
    <>
    <Navbar />
      <First 
        first = "speaking engagement"
        img={img}
        impact = {impact}
        header="Empowering the next generation of digital leaders."
        period="Gritin AI"
        description="The Technology Inclusion for Persons with Visual Impairments programme was a collaborative initiative between the Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ) GmbH, through its Skills Development for Youth Employment (SKYE) Programme, and Edo Innovates, the innovation and digital skills arm of the Edo State Skills Development Agency (EdoJobs). The programme was designed to address the persistent exclusion of persons with visual impairments from Nigeria's rapidly growing digital economy by providing accessible digital skills training, assistive technologies, workplace readiness support, and direct pathways to employment."
        tags={['Disability Inclusion', 'Accessible Digital Skills Training', 'GIZ Partnership']}
      /> 
      <Second
        img={img2}
        header="Contributions"
        title="Tech Inclusion — Training for the the Visually Impaired"
        description="As part of the Edo Innovates implementation team for the Technology Inclusion for Persons with Visual Impairments programme, a collaborative initiative between GIZ's SKYE Programme and Edo Innovates, Jobina Arinze provided programme management and coordination support for the initiative's successful delivery. She coordinated planning with GIZ SKYE, technical training partners, disability advocates, and government stakeholders, while leading stakeholder engagement to ensure the programme design reflected the accessibility needs of persons with visual impairments. She also managed programme logistics, including participant onboarding, scheduling, venue accessibility, and operational delivery, and coordinated the deployment of assistive technologies and accessible learning resources."
        description1="Beyond logistics, Jobina supported the integration of employability, career readiness, and workplace preparedness modules into the training curriculum, and facilitated collaboration between training providers and employers to create internship opportunities for programme graduates. She monitored implementation progress, documented programme outcomes, and prepared reports for project partners, helping demonstrate, through an accessible curriculum and strategic partnerships with disability advocates, technology experts, and employers, that disability should not be a barrier to acquiring in demand digital skills or accessing dignified employment."
        cert={["Employability and career readiness training.", "Employer sensitization sessions on disability inclusion.", "Digital productivity and workplace software applications.", "Accessible digital literacy and ICT skills training." ]}
      />
      <Contact />
    </>
  )
}

export default Blind;