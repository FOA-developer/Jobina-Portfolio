import First from "../components/others/First";
import Navbar from "../components/main/Navbar";
import Second from "../components/others/Second";
import Contact from "../components/main/Contact";
import img from "../assets/royal/1.jpeg"

const impact = [
  { value: '42,000+',  label: 'Tech talents trained across the ecosystem' },
  { value: 'N800M+',   label: 'Annual programme portfolio led' },
  { value: '70+',      label: 'Programmes & cohorts a year' },
  { value: '2,000+',   label: 'Young people reached annually' },
  { value: '70%',      label: 'Women participation by design' },
  { value: '50',       label: 'Start-ups supported through programmes' },
];


const EstablishHer = () => {
  return  (
    <>
    <Navbar />
      <First 
        first = "speaking engagement"
        img={img}
        impact = {impact}
        header="EstablishHER Mentorship Programme"
        period="Mentor | UnleashHER, Cohort 2 | Royal Iwẹrẹ Foundation · September - October 2026"
        description  = "Jobina mentored five women entrepreneurs over two months, dedicating two hours each week to a fully virtual mentorship engagement. UnleashHER, the final phase of the Royal Iwẹrẹ Foundation’s EstablishHER Entrepreneurship Fund, paired entrepreneurs with mentors to help them apply their training to decisions about running and growing their businesses."
        tags={['Women Mentorship', 'Enterprenurship', " SME's"]}
      /> 
      <Second
        img={img}
        header = "Contributions"
        title="UnLeashHer Cohort 2"
        description="Serving in her capacity as Mentor at the Royal Iwẹrẹ Foundation, Jobina Arinze provided mentorship, business guidance, and growth support for five women entrepreneurs in Cohort 2 of the UnleashHER phase of the EstablishHER Entrepreneurship Fund. Her virtual role combined structured weekly mentoring with practical business coaching to ensure the entrepreneurs could apply their training to decisions about running and growing their businesses."
        description1="She led two hours of mentorship each week over two months, helping entrepreneurs work through the barriers that made growth feel out of reach. Her guidance led to more consistent online visibility, product experimentation, business collaboration, and up-to-date business registration, and earned a letter of recognition from the Foundation’s President on 20 October 2026."
        cert= {["Supported improvements in visibility, product development, and registration.", "Guided entrepreneurs in identifying practical steps for business growth.", "Provided two hours of weekly mentorship over two months.", "Mentored five women entrepreneurs in a virtual programme." ]}
      />
      <Contact />
    </>
  )
}

export default EstablishHer;