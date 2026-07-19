import img from '../assets/jobberman/7.jpeg';
import img1 from '../assets/grit/2.jpeg';
import img2 from '../assets/girllead/3.jpeg';
import img3 from '../assets/jci/3.jpeg';
import img4 from '../assets/royal/2.jpeg';
import img5 from '../assets/pathway/1.jpg';

// Single source of truth for the Speaking section cards AND the navbar "Speaking" dropdown.
export const SPEAKING_ITEMS = [
  {
    title:       'Panelist',
    description: 'A robust, multi-track pipeline for young talent, combining programming, data analytics, design and digital entrepreneurship skills — built for scale and sustained impact across Nigeria.',
    period:      'Jobberman Edo Career Clinic',
    src: img,
    link: '/jobberman',
  },
  {
    title:       'Panelist',
    description: 'An intensive workflow-optimisation programme designed to help founders and business owners leverage AI tools to increase productivity, scale faster and compete in the digital economy.',
    period:      'GRITIN AI Conference',
    src: img1,
    link: '/gritin_ai_conference',
  },
  {
    title:       'Facilitator/Speaker',
    description: 'An adaptive, accessibility-first ICT programme designed specifically for blind and visually impaired learners — removing barriers and opening pathways into the digital economy.',
    period:      'Girllead',
    src: img2,
    link: '/girllead',
  },
  {
    title:       'Facilator/Panel Judge',
    description: 'A sector-focused transformation initiative covering digital operations, customer management and data analytics for hospitality SMEs looking to modernise and grow.',
    period:      'JCIN-UNIBEN EBL',
    src: img3,
    link: '/jcin-uniben',
  },
  {
    title:       'Facilator/Speaker',
    description: 'A women-focused entrepreneurship programme combining business development, digital innovation, mentorship, and access to finance to accelerate enterprise growth',
    period:      'EstablishHER Academy',
    src: img4,
    link: '/royaliwere',
  },
  {
    title:       'Facilator/Speaker',
    description: 'A women-focused entrepreneurship programme combining business development, digital innovation, mentorship, and access to finance to accelerate enterprise growth',
    period:      'EstablishHER Academy',
    src: img5,
    link: '/pathway_to_the_economy',
  },
];
