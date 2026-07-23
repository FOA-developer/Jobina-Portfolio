import img from '../assets/YOUTH/5.jpeg';
import img1 from '../assets/data/1.jpg';
import img2 from '../assets/Aws/3.jpg';
import img3 from '../assets/Digital/6.jpeg';
import img4 from '../assets/blind/1.jpeg';
import img5 from '../assets/excel/2.jpg';
import img6 from '../assets/Edobest/4.jpeg'

// Single source of truth for the Work section cards AND the navbar "Work" dropdown.
export const WORK_ITEMS = [
  {
    title:       'Youth Digital Talent Pipeline',
    description: 'A robust, multi-track pipeline for young talent, combining programming, data analytics, design and digital entrepreneurship skills — built for scale and sustained impact across Nigeria.',
    period:      '2019 — PRESENT',
    src: img,
    link: '/youth',
  },
  {
    title:       'AI & Automation for SME Founders and Operators',
    description: 'An intensive workflow-optimisation programme designed to help founders and business owners leverage AI tools to increase productivity, scale faster and compete in the digital economy.',
    period:      '2023 — PRESENT',
    src: img1,
    link: '/data_analytics',
  },
  {
    title:       'Tech Inclusion — Training for the Blind & the Visually Impaired',
    description: 'An adaptive, accessibility-first ICT programme designed specifically for blind and visually impaired learners — removing barriers and opening pathways into the digital economy.',
    period:      '2021 — PRESENT',
    src: img2,
    link: '/aws_restart',
  },
  {
    title:       'Tech Inclusion — Training for the Blind & the Visually Impaired',
    description: 'An adaptive, accessibility-first ICT programme designed specifically for blind and visually impaired learners — removing barriers and opening pathways into the digital economy.',
    period:      '2021 — PRESENT',
    src: img4,
    link: '/tech_inclusion_for_the_blind',
  },
  {
    title:       'Technology Adoption for Hospitality',
    description: 'A sector-focused transformation initiative covering digital operations, customer management and data analytics for hospitality SMEs looking to modernise and grow.',
    period:      '2022 — PRESENT',
    src: img3,
    link: '/digital_literacy',
  },
  {
    title:       'Technology Adoption for Hospitality',
    description: 'A sector-focused transformation initiative covering digital operations, customer management and data analytics for hospitality SMEs looking to modernise and grow.',
    period:      '2022 — PRESENT',
    src: img5,
    link: '/excel_essentials',
  },
  {
    title:       'EDOBESSTO',
    description: "Edo Basic Education Sector and Skills Transformation Operation provided strategic leadership for curriculum and programme delivery for the digital skills component.",
    period:      '2022 — PRESENT',
    src: img6,
    link: '/edobessto',
  },
];
