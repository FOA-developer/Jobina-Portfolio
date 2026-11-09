import img from '../assets/jobberman/7.jpeg';
import img1 from '../assets/grit/2.jpeg';
import img2 from '../assets/girllead/3.jpeg';
import img3 from '../assets/jci/3.jpeg';
import img4 from '../assets/royal/2.jpeg';
import img5 from '../assets/pathway/1.jpg';
import img6 from "../assets/omni/1.webp";
import img7 from "../assets/bsp/beyond-selling-online.jpeg"
import img8 from "../assets/royal/1.jpeg"

// Single source of truth for the Speaking section cards AND the navbar "Speaking" dropdown.
export const SPEAKING_ITEMS = [
  {
    title:       'Panelist',
    description: "Joined industry leaders at Jobberman Nigeria's flagship employability event to discuss workforce readiness, innovation, entrepreneurship, and the future of work, contributing to an event that equipped 1,000+ young people with skills.",
    period:      'Jobberman Edo Career Clinic 2025',
    src: img,
    link: '/jobberman',
  },
  {
    title:       'Panelist',
    description: "Shared perspectives on the transformative role of artificial intelligence in education, governance, workforce development, and economic growth, highlighting strategies for building AI-ready talent.",
    period:      'GRITIN AI Connect 1.0 - AI Conference ',
    src: img1,
    link: '/gritin_ai_conference',
  },
  {
    title:       'Facilitator/Speaker',
    description: 'Represented Edo Innovates during the International Girls in ICT Day celebration, advocating for increased participation of girls and young women in technology while promoting inclusive pathways into STEM careers.',
    period:      'Girllead',
    src: img2,
    link: '/girllead',
  },
  {
    title:       'Facilator/Panel Judge',
    description: "Delivered a masterclass on Writing a Winning CV and Cover Letter and served as a judge during the Employability Challenge Grand Finale, evaluating candidates through competency-based interview simulations.",
    period:      'JCIN-UNIBEN EBL',
    src: img3,
    link: '/jcin-uniben',
  },
  {
    title:       'Facilator/Speaker',
    description: "Facilitated entrepreneurship and innovation sessions for women founders in the Royal Iwere Foundation's flagship enterprise development programme, supporting participants with strategies for sustainable development.",
    period:      'EstablishHER Academy',
    src: img4,
    link: '/royaliwere',
  },
  {
    title:       'Panelist',
    description: "Joined a panel discussion at the University of Benin, guiding students, new graduates, and NYSC members through leadership, employability, and practical strategies for entering the economy after school.",
    period:      'Pathways to the Economy',
    src: img5,
    link: '/pathway_to_the_economy',
  },
  {
    title:       'Facilitator',
    description: "Facilitated an AI Masterclass introducing participants to core Artificial Intelligence concepts and real-world applications at one of Africa's leading innovation gatherings, held in Lagos.",
    period:      'Omniverse Africa Summit 3.0',
    src: img6,
    link: '/omniverse_africa_summit',
  },
  {
    title:       'Trainer',
    description: "Jobina led a virtual training session at the Africa Digital Skills Conference on the business behind a small business's first online sale, covering how to sustain sales order after order.",
    period:      'Africa Digital Skills Conference 2026',
    src: img7,
    link: '/africadigitalskills',
  },
  {
    title: "Mentor",
    description: "Jobina mentored five women entrepreneurs over two months in UnleashHER, the Royal Iwẹrẹ Foundation's EstablishHER Fund, helping them apply their training to running and growing their businesses.",
    period: "EstablishHER Mentorship Programme",
    src: img8,
    link: '/establishher'
  }
];
