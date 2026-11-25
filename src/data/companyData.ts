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
  email: 'Princeway4elect@gmail.com',
  whatsappUrl: 'https://wa.me/2348063624432',
  developerName: 'Mindware Consulting Ltd',
  developerUrl: 'https://mindwareconsult.com.ng/',
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
    imageUrl: '/projects/electrical-engineering/panel-control-01.jpeg',
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
    imageUrl: '/projects/building-construction/two-storey-exterior-01.jpeg',
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
    imageUrl: '/projects/borehole-drilling/borehole-drilling-01.png',
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

// Authentic uploaded site photographs & project video showcases strictly categorised across Princeway's 3 core divisions
export const INITIAL_PROJECTS: ProjectItem[] = [
  {
    id: 'pw-elec-panel',
    title: 'Electrical Panel and Control Installation',
    category: 'Electrical Engineering',
    location: 'Imo State, Nigeria',
    status: 'Site Record',
    featuredOnHome: true,
    objectPosition: 'upper',
    description:
      'On-site installation of electrical distribution panels and control switchgear on a building, documenting three-phase MCCB assembly, armoured cable termination, phase busbar routing, panel metering, and isolator wiring.',
    highlights: [
      'Three-phase MCCB distribution panel assembly',
      'Armoured feeder cable dressing & termination',
      'Panel door metering & 415V changeover control',
    ],
    imageUrl: '/projects/electrical-engineering/panel-control-01.jpeg',
    galleryImages: [
      '/projects/electrical-engineering/panel-control-01.jpeg',
      '/projects/electrical-engineering/panel-control-02.jpeg',
      '/projects/electrical-engineering/panel-control-03.jpeg',
      '/projects/electrical-engineering/panel-control-04.jpeg',
      '/projects/electrical-engineering/panel-control-05.jpeg',
      '/projects/electrical-engineering/panel-control-06.jpeg',
      '/projects/electrical-engineering/panel-control-07.jpeg',
      '/projects/electrical-engineering/panel-control-08.jpeg',
      '/projects/electrical-engineering/panel-control-09.jpeg',
      '/projects/electrical-engineering/panel-control-10.jpeg',
      '/projects/electrical-engineering/panel-control-11.jpeg',
    ],
    linkedVideoIds: ['vid-elec-01'],
  },
  {
    id: 'pw-elec-wiring',
    title: 'Internal Electrical Wiring & Conduit Works',
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
    imageUrl: '/projects/electrical-engineering/wiring-conduit-01.jpeg',
    galleryImages: [
      '/projects/electrical-engineering/wiring-conduit-01.jpeg',
      '/projects/electrical-engineering/wiring-conduit-02.jpeg',
      '/projects/electrical-engineering/wiring-conduit-03.jpeg',
    ],
  },
  {
    id: 'pw-elec-compound',
    title: 'Exterior Power Distribution & Compound Services',
    category: 'Electrical Engineering',
    location: 'Imo State, Nigeria',
    status: 'Completed Work',
    description:
      'Completed residential compound featuring overhead electrical service line, exterior lighting mast, split-unit AC outdoor electrical connections, and perimeter security installation.',
    highlights: [
      'Overhead electrical service line & lighting pole',
      'Outdoor split-unit electrical connections',
      'Completed residential building services',
    ],
    imageUrl: '/projects/electrical-engineering/exterior-power-01.jpeg',
    galleryImages: [
      '/projects/electrical-engineering/exterior-power-01.jpeg',
    ],
  },
  {
    id: 'pw-bldg-5storey',
    title: '5-Storey Building Construction',
    category: 'Building Construction',
    location: 'Imo State, Nigeria',
    status: 'Site Record',
    featuredOnHome: true,
    description:
      'Multi-storey commercial and residential building construction showcase documented via field execution video.',
    highlights: [
      'Five-storey structural building execution',
      'Reinforced concrete frame & site supervision',
      'Coordinated multi-level construction delivery',
    ],
    imageUrl: 'https://i.ytimg.com/vi/T2XB4ujfA7w/hqdefault.jpg',
    galleryImages: [],
    linkedVideoIds: ['vid-bldg-01'],
  },
  {
    id: 'pw-bldg-bungalow',
    title: 'Bungalow Building Construction',
    category: 'Building Construction',
    location: 'Imo State, Nigeria',
    status: 'Site Record',
    featuredOnHome: true,
    description:
      'Residential bungalow construction documented through official Princeway field video coverage.',
    highlights: [
      'Residential bungalow development works',
      'Masonry, roofing & site coordination',
      'Practical residential construction delivery',
    ],
    imageUrl: 'https://i.ytimg.com/vi/7ydOA-OFa14/hqdefault.jpg',
    galleryImages: [],
    linkedVideoIds: ['vid-bldg-02'],
  },
  {
    id: 'pw-bldg-twostorey',
    title: 'Two-Storey Building Construction & Roofing',
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
    imageUrl: '/projects/building-construction/two-storey-exterior-01.jpeg',
    galleryImages: [
      '/projects/building-construction/two-storey-exterior-01.jpeg',
      '/projects/building-construction/two-storey-exterior-02.jpeg',
    ],
  },
  {
    id: 'pw-bldg-structural',
    title: 'Structural Blockwork & Concrete Decking',
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
    imageUrl: '/projects/building-construction/structural-decking-01.jpeg',
    galleryImages: [
      '/projects/building-construction/structural-decking-01.jpeg',
      '/projects/building-construction/structural-decking-02.jpeg',
      '/projects/building-construction/structural-decking-03.jpeg',
    ],
  },
  {
    id: 'pw-bldg-interior',
    title: 'Interior Finishing, Concrete Staircase & POP Works',
    category: 'Building Construction',
    location: 'Imo State, Nigeria',
    status: 'Site Record',
    description:
      'Interior building finishing works featuring a cast curved reinforced concrete staircase, suspended decorative POP tray and medallion ceilings, and accompanying bedroom & interior finishing video records.',
    highlights: [
      'Curved reinforced concrete staircase construction',
      'Decorative suspended & medallion POP ceilings',
      'Bedroom & general interior finishing works',
    ],
    imageUrl: '/projects/building-construction/interior-finishing-01.jpeg',
    galleryImages: [
      '/projects/building-construction/interior-finishing-01.jpeg',
      '/projects/building-construction/interior-finishing-02.jpeg',
      '/projects/building-construction/interior-finishing-03.jpeg',
      '/projects/building-construction/interior-finishing-04.jpeg',
    ],
    linkedVideoIds: ['vid-bldg-03', 'vid-bldg-04', 'vid-bldg-05'],
  },
  {
    id: 'pw-borehole-01',
    title: 'Borehole Drilling Project',
    category: 'Borehole Drilling',
    location: 'Owerri, Imo State',
    status: 'Site Record',
    featuredOnHome: true,
    objectPosition: 'top',
    description:
      'On-site borehole drilling and water infrastructure operations documented through field photography and official Princeway borehole drilling videos.',
    highlights: [
      'Site assessment & drilling preparation',
      'Borehole drilling & casing pipe installation',
      'Dependable water access infrastructure',
    ],
    imageUrl: '/projects/borehole-drilling/borehole-drilling-01.png',
    galleryImages: [
      '/projects/borehole-drilling/borehole-drilling-01.png',
    ],
    linkedVideoIds: ['vid-borehole-01', 'vid-borehole-02'],
  },
];

export const INITIAL_VIDEOS: VideoGalleryItem[] = [
  {
    id: 'vid-elec-01',
    title: 'Power Installation at Princeway Electrical Construction',
    category: 'Electrical Engineering',
    description: 'Field footage capturing live power installation and electrical construction work.',
    youtubeId: 'fiIl5Gpu_KU',
    youtubeUrl: 'https://youtube.com/shorts/fiIl5Gpu_KU?feature=share',
    isShort: true,
    featured: true,
    projectId: 'pw-elec-panel',
    videoUrl: '',
    sourceFilename: 'YouTube Short · fiIl5Gpu_KU',
  },
  {
    id: 'vid-bldg-01',
    title: '5-Storey Building Construction | Princeway Construction',
    category: 'Building Construction',
    description: 'Site progress showcase of 5-storey building construction execution.',
    youtubeId: 'T2XB4ujfA7w',
    youtubeUrl: 'https://youtube.com/shorts/T2XB4ujfA7w',
    isShort: true,
    featured: true,
    projectId: 'pw-bldg-5storey',
    videoUrl: '',
    sourceFilename: 'YouTube Short · T2XB4ujfA7w',
  },
  {
    id: 'vid-bldg-02',
    title: 'Bungalow Building Construction | Princeway Construction',
    category: 'Building Construction',
    description: 'Residential bungalow construction project documented on site.',
    youtubeId: '7ydOA-OFa14',
    youtubeUrl: 'https://youtube.com/shorts/7ydOA-OFa14?feature=share',
    isShort: true,
    featured: true,
    projectId: 'pw-bldg-bungalow',
    videoUrl: '',
    sourceFilename: 'YouTube Short · 7ydOA-OFa14',
  },
  {
    id: 'vid-bldg-03',
    title: 'Bedroom Interior Finishing | Princeway Construction',
    category: 'Building Construction',
    description: 'Detailed bedroom interior finishing workmanship.',
    youtubeId: 'z0XTIssC1ms',
    youtubeUrl: 'https://youtube.com/shorts/z0XTIssC1ms',
    isShort: true,
    projectId: 'pw-bldg-interior',
    videoUrl: '',
    sourceFilename: 'YouTube Short · z0XTIssC1ms',
  },
  {
    id: 'vid-bldg-04',
    title: 'Interior Finishing | Princeway Construction',
    category: 'Building Construction',
    description: 'Interior ceiling, wall, and finishing works in progress.',
    youtubeId: 'M-M2g8RlDb8',
    youtubeUrl: 'https://youtube.com/shorts/M-M2g8RlDb8',
    isShort: true,
    projectId: 'pw-bldg-interior',
    videoUrl: '',
    sourceFilename: 'YouTube Short · M-M2g8RlDb8',
  },
  {
    id: 'vid-bldg-05',
    title: 'Interior Works | Princeway Construction',
    category: 'Building Construction',
    description: 'Interior building craftsmanship and architectural finishing showcase.',
    youtubeId: 'QQEciGkwu_M',
    youtubeUrl: 'https://youtube.com/shorts/QQEciGkwu_M?feature=share',
    isShort: true,
    projectId: 'pw-bldg-interior',
    videoUrl: '',
    sourceFilename: 'YouTube Short · QQEciGkwu_M',
  },
  {
    id: 'vid-borehole-01',
    title: 'Best Borehole Drilling | Princeway Construction',
    category: 'Borehole Drilling',
    description: 'Featured widescreen field video showcasing Princeway borehole drilling operations.',
    youtubeId: '2kDcXHh4tJY',
    youtubeUrl: 'https://youtu.be/2kDcXHh4tJY',
    isShort: false,
    featured: true,
    projectId: 'pw-borehole-01',
    videoUrl: '',
    sourceFilename: 'YouTube Video · 2kDcXHh4tJY',
  },
  {
    id: 'vid-borehole-02',
    title: 'Borehole Drilling | Princeway Construction',
    category: 'Borehole Drilling',
    description: 'Borehole drilling and water infrastructure execution on site.',
    youtubeId: 'qpAuFnxEBrA',
    youtubeUrl: 'https://youtu.be/qpAuFnxEBrA',
    isShort: false,
    projectId: 'pw-borehole-01',
    videoUrl: '',
    sourceFilename: 'YouTube Video · qpAuFnxEBrA',
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
