import img from '../assets/YOUTH/5.jpeg';
import img4 from '../assets/blind/1.jpeg';
import img6 from '../assets/Edobest/4.jpeg'
import img7 from '../assets/seg/1.webp'

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
    title:       'Tech Inclusion — Training for the Blind & the Visually Impaired',
    description: 'An adaptive, accessibility-first ICT programme designed specifically for blind and visually impaired learners — removing barriers and opening pathways into the digital economy.',
    period:      '2021 — PRESENT',
    src: img4,
    link: '/tech_inclusion_for_the_blind',
  },
  {
    title:       'EDOBEST',
    description: "Edo Basic Education Sector and Skills Transformation Operation provided strategic leadership for curriculum and programme implementation for the digital skills component of the World Bank-funded BESSTO programme.",
    period:      '2018-2024',
    src: img6,
    link: '/edobessto',
  },
  {
    title:       'Sustainable E-Commerce For Growth',
    description: "Edo Basic Education Sector and Skills Transformation Operation provided strategic leadership for curriculum and programme delivery for the digital skills component.",
    period:      '2022 — PRESENT',
    src: img7,
    link: '/se4g',
  },
];
