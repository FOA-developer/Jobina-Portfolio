import First from "../components/others/First";
import Navbar from "../components/main/Navbar";
import Second from "../components/others/Second";
import Contact from "../components/main/Contact";
import img from "../assets/grit/1.jpeg"
import img2 from "../assets/grit/2.jpeg"

const impact = [
  { value: '42,000+',  label: 'Tech talents trained across the ecosystem' },
  { value: 'N800M+',   label: 'Annual programme portfolio led' },
  { value: '70+',      label: 'Programmes & cohorts a year' },
  { value: '2,000+',   label: 'Young people reached annually' },
  { value: '70%',      label: 'Women participation by design' },
  { value: '50',       label: 'Start-ups supported through programmes' },
];


const Grit = () => {
  return  (
    <>
    <Navbar />
      <First 
        first = "speaking engagement"
        img={img2}
        impact = {impact}
        header="GritinAI Connect 1.0 - AI Conference Edo 2025"
        period="Panelist | AI for Sustainable Development in Edo State"
        description='The GritinAI Connect 2025 conference in Benin City, Nigeria, brought together tech leaders under the theme "AI for Sustainable Development." Moving from awareness to action, the event focused on empowering local MSMEs through automated marketing and modernizing education with the Edo State Ministry of Education. Highlighting healthcare equity and hands-on building, the landmark event featured an AI hackathon, positioning Benin City as a premier, inclusive tech hub for responsible African innovation.'
        tags={['700+ Learners', '+40% YoY Enrollment', '68% advance to next stage']}
      /> 
      <Second
        img={img}
        header = "Contributions"
        title="GritinAI Connect 1.0 - AI Conference Edo 2025"
        description="She participated as a panelist at GritinAI Connect 1.0, one of Edo State's flagship artificial intelligence conferences, bringing together policymakers, technology leaders, academics, entrepreneurs, startups, and development partners to explore AI-driven innovation and sustainable development — speaking specifically on 'AI for Sustainable Development in Edo State: Now and the Future,' and contributing insights on leveraging AI to transform education, workforce development, governance, and economic growth, while engaging stakeholders on positioning Edo State as a regional hub for AI innovation and responsible, inclusive digital talent development."
        cert={['Panelist on "AI for Sustainable Development in Edo State: Now and the Future."', "Shared AI insights across education, workforce, governance", "Positioned Edo State as AI innovation hub", "Promoted responsible AI adoption, cross-sector collaboration" ]}
      />
      <Contact />
    </>
  )
}

export default Grit;