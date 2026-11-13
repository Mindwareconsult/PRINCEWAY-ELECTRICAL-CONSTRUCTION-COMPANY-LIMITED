import { ServiceItem, ProjectItem, ProcessStage, VideoGalleryItem, TestimonialItem } from '../types';

export const BRAND_ASSETS = {
  logoUrl: '/assets/aistudio/Princeway_Electrical_Logo_76b45766.png',
  heroImageUrl: '/assets/aistudio/WhatsApp_Image_2026-11-13_at_8.11.50_AM_b0f4eef1.jpeg',
  introImageUrl: '/assets/aistudio/WhatsApp_Image_2026-11-13_at_4.25.35_AM_2019ff07.jpeg',
  aboutImageUrl: '/assets/aistudio/WhatsApp_Image_2026-11-13_at_4.26.25_AM__2__e52e7d4c.jpeg',
};

export const COMPANY_INFO = {
  name: 'PRINCEWAY ELECTRICAL CONSTRUCTION COMPANY LIMITED',
  shortName: 'PRINCEWAY',
  subName: 'ELECTRICAL CONSTRUCTION CO. LTD',
  proposedTagline: 'POWERING PROGRESS. BUILDING POSSIBILITIES.',
  supportingStatement: 'Engineering Excellence. Quality Construction. Reliable Water Solutions.',
  address: '62 Wetheral Road, Owerri 460281, Imo State, Nigeria.',
  shortAddress: '62 Wetheral Road, Owerri, Imo State, Nigeria.',
  city: 'Owerri',
  state: 'Imo State',
  country: 'Nigeria',
  phoneDisplay: '0806 362 4432',
  phoneRaw: '+2348063624432',
  whatsappUrl: 'https://wa.me/2348063624432',
  googleMapsUrl:
    'https://www.google.com/maps/place/princeway+electrical+construction+company+limited/@5.4839812,7.0343905,17z/data=!3m1!4b1!4m6!3m5!1s0x104259073b32c935:0xfba6151d97dd7f8b!8m2!3d5.4839812!4d7.0343006',
  directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=5.4839812,7.0343905',
};

// Mandatory exact order: 01 Electrical Engineering, 02 Building Construction, 03 Borehole Drilling
export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'electrical-engineering',
    number: '01',
    title: 'Electrical Engineering',
    headline: 'Electrical Engineering Solutions Built Around Performance and Reliability.',
    shortDesc:
      'Dependable electrical systems, professional installation and practical engineering execution for residential, commercial and infrastructure environments.',
    fullDesc: [
      'Princeway Electrical Construction Company Limited provides electrical engineering services focused on dependable electrical systems, professional installation and practical engineering solutions.',
      'We understand the importance of properly executed electrical installations in residential, commercial and other building environments.',
      'Our approach places emphasis on understanding project requirements, appropriate technical planning, quality workmanship and responsible execution.',
      'From electrical installation requirements to broader electrical engineering works, we aim to support functional, dependable and properly executed electrical systems.',
    ],
    scope: [
      'Electrical installation works',
      'Building electrical systems',
      'Electrical wiring and fittings',
      'Electrical distribution installations',
      'Power infrastructure works',
      'Electrical system upgrades',
      'Electrical maintenance',
      'Electrical engineering project execution',
    ],
    considerations: [
      'Technical planning & load requirements',
      'Safety-conscious installation practice',
      'Functional distribution layout',
    ],
    ctaLabel: 'ENQUIRE ABOUT ELECTRICAL ENGINEERING',
    visualCategory: 'electrical',
    imageUrl: '/assets/aistudio/WhatsApp_Image_2026-11-13_at_4.26.26_AM__1__8cf88292.jpeg',
  },
  {
    id: 'building-construction',
    number: '02',
    title: 'Building Construction',
    headline: 'Building Construction Driven by Quality and Professional Execution.',
    shortDesc:
      'Sound construction execution, practical project coordination and quality workmanship tailored to durable, functional building structures.',
    fullDesc: [
      'Princeway Electrical Construction Company Limited undertakes building construction activities with a focus on sound execution, practical project coordination and quality workmanship.',
      'We understand that successful building projects require careful attention to project requirements, materials, construction activities and the details that contribute to durable and functional structures.',
      'Our approach is guided by professionalism, responsible execution and a commitment to delivering building solutions that respond to the needs of each project.',
      'From building development activities to construction execution, we aim to approach every engagement with attention to detail and a focus on quality.',
    ],
    scope: [
      'Residential building construction',
      'Commercial building construction',
      'Structural construction',
      'Building development',
      'Concrete and masonry works',
      'Building renovation and improvement',
      'Construction project execution',
      'General building construction',
    ],
    considerations: [
      'Material & workmanship integrity',
      'Organised site coordination',
      'Execution aligned with drawings',
    ],
    ctaLabel: 'ENQUIRE ABOUT BUILDING CONSTRUCTION',
    visualCategory: 'building',
    imageUrl: '/assets/aistudio/WhatsApp_Image_2026-11-13_at_4.25.35_AM_2019ff07.jpeg',
  },
  {
    id: 'borehole-drilling',
    number: '03',
    title: 'Borehole Drilling',
    headline: 'Reliable Borehole Drilling for Sustainable Water Access.',
    shortDesc:
      'Supporting dependable water access infrastructure for residential and commercial applications through careful site preparation and responsible drilling.',
    fullDesc: [
      'Princeway Electrical Construction Company Limited also provides borehole drilling services as part of its multidisciplinary construction and infrastructure offering.',
      'Borehole drilling plays an important role in supporting access to water for residential, commercial and other applications.',
      'Our approach to this service is centred on understanding site requirements, the intended water needs and the technical considerations involved in the drilling process.',
      'We aim to provide a professional service experience, with attention to project requirements and responsible execution.',
    ],
    scope: [
      'Borehole drilling',
      'Site assessment and drilling preparation',
      'Borehole construction',
      'Water access infrastructure',
      'Borehole-related installation works',
      'Borehole improvement and rehabilitation (where applicable)',
    ],
    considerations: [
      'Site access & drilling readiness',
      'Intended water usage requirements',
      'Responsible operational execution',
    ],
    ctaLabel: 'ENQUIRE ABOUT BOREHOLE DRILLING',
    visualCategory: 'borehole',
  },
];

export const WHY_CHOOSE_PRINCEWAY = [
  {
    number: '01',
    title: 'MULTIDISCIPLINARY CAPABILITY',
    description:
      'Three complementary service areas supporting different construction and infrastructure requirements.',
  },
  {
    number: '02',
    title: 'PROFESSIONAL EXECUTION',
    description:
      'Approaching project assignments with responsibility, planning and attention to technical requirements.',
  },
  {
    number: '03',
    title: 'QUALITY WORKMANSHIP',
    description:
      'Recognising the importance of quality, precision and attention to detail across every service division.',
  },
  {
    number: '04',
    title: 'DEPENDABILITY',
    description:
      'Building client confidence through responsible service and professional project engagement.',
  },
  {
    number: '05',
    title: 'CLIENT-FOCUSED APPROACH',
    description:
      'Understanding individual project needs and maintaining clear communication throughout the engagement.',
  },
  {
    number: '06',
    title: 'TECHNICAL RESPONSIBILITY',
    description:
      'Recognising the importance of appropriate technical standards and safety-conscious working practices.',
  },
];

export const PROCESS_STAGES: ProcessStage[] = [
  {
    step: '01',
    title: 'UNDERSTAND',
    subtitle: 'Requirements & Objectives',
    description: "Understand the client's requirements and project objectives through direct consultation.",
    deliverables: ['Client brief review', 'Project scope clarity', 'Site location review'],
    keyFocus: 'Clear alignment on client objectives',
  },
  {
    step: '02',
    title: 'ASSESS',
    subtitle: 'Technical Evaluation',
    description: 'Review the project scope and relevant technical considerations across our engineering and construction teams.',
    deliverables: ['Site & access review', 'Technical scope evaluation', 'Resource consideration'],
    keyFocus: 'Thorough technical review',
  },
  {
    step: '03',
    title: 'PLAN',
    subtitle: 'Execution Arrangements',
    description: 'Establish the appropriate project approach and execution arrangements before site work begins.',
    deliverables: ['Execution sequencing', 'Material & equipment planning', 'Coordination setup'],
    keyFocus: 'Organised readiness & scheduling',
  },
  {
    step: '04',
    title: 'EXECUTE',
    subtitle: 'Responsible Delivery',
    description: 'Carry out the agreed work with attention to project requirements, workmanship and site safety.',
    deliverables: ['Supervised site operations', 'Discipline-specific execution', 'Safety-conscious work'],
    keyFocus: 'Quality workmanship on site',
  },
  {
    step: '05',
    title: 'REVIEW',
    subtitle: 'Quality & Progress Checks',
    description: 'Review progress, workmanship and relevant quality considerations throughout the project lifecycle.',
    deliverables: ['Progress verification', 'Workmanship inspection', 'Client status updates'],
    keyFocus: 'Consistent quality oversight',
  },
  {
    step: '06',
    title: 'COMPLETE',
    subtitle: 'Conclude & Handover',
    description: 'Conclude the agreed project activities and review the completed work against project expectations.',
    deliverables: ['Completed work review', 'Final walkthrough', 'Project handover'],
    keyFocus: 'Dependable project completion',
  },
];

// Authentic uploaded site photographs strictly categorised by what is visibly shown (neutral descriptive titles only)
export const INITIAL_PROJECTS: ProjectItem[] = [
  {
    id: 'pw-elec-01',
    title: 'Electrical Installation Project — Internal Wiring & Conduit Works',
    category: 'Electrical Engineering',
    location: 'Imo State, Nigeria',
    status: 'Site Record',
    description:
      'Internal first-fix electrical installation documented on site, showing ceiling cable drops, wall switch and socket back-boxes, and masonry conduit routing.',
    highlights: [
      'Ceiling lighting & distribution cable drops',
      'Chased wall conduit & switch back-boxes',
      'Safety-conscious technical execution',
    ],
    imageUrl: '/assets/aistudio/WhatsApp_Image_2026-11-13_at_4.26.26_AM__1__8cf88292.jpeg',
    galleryImages: [
      '/assets/aistudio/WhatsApp_Image_2026-11-13_at_4.26.26_AM__1__8cf88292.jpeg',
      '/assets/aistudio/WhatsApp_Image_2026-11-13_at_4.26.26_AM_b84c31ab.jpeg',
      '/assets/aistudio/WhatsApp_Image_2026-11-13_at_4.26.25_AM__1__eb53e0cc.jpeg',
    ],
  },
  {
    id: 'pw-elec-02',
    title: 'Electrical Installation Project — Exterior Power & Compound Services',
    category: 'Electrical Engineering',
    location: 'Imo State, Nigeria',
    status: 'Completed Work',
    description:
      'Completed residential compound featuring overhead electrical service drop, exterior lighting mast, split-unit AC outdoor electrical connections, and perimeter security installation.',
    highlights: [
      'Overhead electrical service line & lighting pole',
      'Outdoor split-unit electrical connections',
      'Completed residential building services',
    ],
    imageUrl: '/assets/aistudio/WhatsApp_Image_2026-11-13_at_8.11.50_AM_b0f4eef1.jpeg',
    galleryImages: [
      '/assets/aistudio/WhatsApp_Image_2026-11-13_at_8.11.50_AM_b0f4eef1.jpeg',
    ],
  },
  {
    id: 'pw-bldg-01',
    title: 'Building Construction Project — Two-Storey Structure & Roofing',
    category: 'Building Construction',
    location: 'Imo State, Nigeria',
    status: 'Site Record',
    description:
      'Two-storey building development captured during stone-coated hipped roofing, exterior wall rendering, horizontal façade groove detailing, and external scaffolding stages.',
    highlights: [
      'Two-storey concrete & masonry superstructure',
      'Stone-coated pitched roofing & fascia',
      'Exterior rendering & façade detailing',
    ],
    imageUrl: '/assets/aistudio/WhatsApp_Image_2026-11-13_at_4.25.35_AM_2019ff07.jpeg',
    galleryImages: [
      '/assets/aistudio/WhatsApp_Image_2026-11-13_at_4.25.35_AM_2019ff07.jpeg',
      '/assets/aistudio/WhatsApp_Image_2026-11-13_at_4.25.34_AM_fa88e333.jpeg',
    ],
  },
  {
    id: 'pw-bldg-02',
    title: 'Building Construction Project — Structural Blockwork & Concrete Decking',
    category: 'Building Construction',
    location: 'Imo State, Nigeria',
    status: 'Site Record',
    description:
      'Multi-stage structural construction showing sandcrete blockwork masonry, steel column reinforcement starter cages, timber formwork props, and cast first-floor reinforced concrete slab.',
    highlights: [
      'Sandcrete blockwork & structural columns',
      'Steel reinforcement starter bars & shoring',
      'Cast reinforced concrete decking slab',
    ],
    imageUrl: '/assets/aistudio/WhatsApp_Image_2026-11-13_at_8.11.54_AM_beca50f7.jpeg',
    galleryImages: [
      '/assets/aistudio/WhatsApp_Image_2026-11-13_at_8.11.54_AM_beca50f7.jpeg',
      '/assets/aistudio/WhatsApp_Image_2026-11-13_at_8.11.55_AM_3dd6b9c4.jpeg',
      '/assets/aistudio/WhatsApp_Image_2026-11-13_at_8.11.56_AM_1c31c280.jpeg',
    ],
  },
  {
    id: 'pw-bldg-03',
    title: 'Building Construction Project — Concrete Staircase & Interior Ceiling Works',
    category: 'Building Construction',
    location: 'Imo State, Nigeria',
    status: 'Site Record',
    description:
      'Interior building finishing featuring a cast curved reinforced concrete staircase alongside suspended decorative POP tray and medallion ceiling installations.',
    highlights: [
      'Curved reinforced concrete staircase construction',
      'Decorative suspended & medallion POP ceilings',
      'Coordinated interior finishing & lighting prep',
    ],
    imageUrl: '/assets/aistudio/WhatsApp_Image_2026-11-13_at_4.26.25_AM__2__e52e7d4c.jpeg',
    galleryImages: [
      '/assets/aistudio/WhatsApp_Image_2026-11-13_at_4.26.25_AM__2__e52e7d4c.jpeg',
      '/assets/aistudio/WhatsApp_Image_2026-11-13_at_4.26.25_AM_3980f945.jpeg',
      '/assets/aistudio/WhatsApp_Image_2026-11-13_at_4.26.24_AM_f265d619.jpeg',
      '/assets/aistudio/WhatsApp_Image_2026-11-13_at_4.26.24_AM__1__eee94240.jpeg',
    ],
  },
  {
    id: 'pw-borehole-01',
    title: 'Borehole Drilling Project — Water Access Infrastructure',
    category: 'Borehole Drilling',
    location: 'Owerri, Imo State',
    status: 'Active Documentation',
    description:
      'Borehole drilling and water access infrastructure division. Field photographs and MP4 video files can be attached directly here once uploaded outside the ZIP.',
    highlights: [
      'Site assessment & drilling preparation',
      'Borehole drilling & casing construction',
      'Water access infrastructure support',
    ],
    imageUrl: '',
    galleryImages: [],
    expectedAssetHint: 'Upload borehole site photos or MP4 videos directly',
  },
];

export const INITIAL_VIDEOS: VideoGalleryItem[] = [
  {
    id: 'vid-1',
    title: 'Project Video Record 01',
    category: 'Electrical Engineering',
    description: 'Reference slot for WhatsApp Video 2026-11-13 at 4.25.11 AM.mp4 (not included in extracted image upload batch; attach MP4 directly to play).',
    videoUrl: '',
    sourceFilename: 'WhatsApp Video 2026-11-13 at 4.25.11 AM.mp4',
  },
  {
    id: 'vid-2',
    title: 'Project Video Record 02',
    category: 'Building Construction',
    description: 'Reference slot for WhatsApp Video 2026-11-13 at 4.25.34 AM.mp4 (not included in extracted image upload batch; attach MP4 directly to play).',
    videoUrl: '',
    sourceFilename: 'WhatsApp Video 2026-11-13 at 4.25.34 AM.mp4',
  },
  {
    id: 'vid-3',
    title: 'Project Video Record 03',
    category: 'Borehole Drilling',
    description: 'Reference slot for WhatsApp Video 2026-11-13 at 4.26.24 AM.mp4 (not included in extracted image upload batch; attach MP4 directly to play).',
    videoUrl: '',
    sourceFilename: 'WhatsApp Video 2026-11-13 at 4.26.24 AM.mp4',
  },
];

// Editable testimonial store — empty by default to avoid fabricating customer quotes
export const VERIFIED_TESTIMONIALS: TestimonialItem[] = [];

export const SERVICE_COMMITMENTS = [
  {
    number: '01',
    title: 'Clear Technical Communication',
    description:
      'We prioritise transparent engagement from initial site review through project completion so clients stay informed at every stage.',
  },
  {
    number: '02',
    title: 'Accountable Execution',
    description:
      'Every electrical installation, building project, and borehole drilling operation is carried out with direct responsibility and attention to requirements.',
  },
  {
    number: '03',
    title: 'Quality-Focused Workmanship',
    description:
      'We focus on practical engineering standards, sound material selection, and careful supervision across all three service divisions.',
  },
];
