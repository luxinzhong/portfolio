export type Project = {
  slug: string;
  title: string;
  year: number;
  location: string;
  category: string;
  tags: string[];
  summary: string;
  description: string[];
  authors: string;
  organization: string;
  instructor?: string;
  critics?: string;
  link?: string;
  status: string;
  images: string[];
  carouselCount?: number;
};

export const projects: Project[] = [
  {
    slug: "the-knot",
    title: "The Knot",
    year: 2023,
    location: "New York City, USA",
    category: "Computational Prefabrication",
    tags: ["Computational", "Fabrication", "Structural"],
    summary:
      "A concrete museum exploring cross-influences between structural efficiency, digital fabrication, and form-finding through modular 3D-printed prefabricated systems.",
    description: [
      "The Knot explores the possibilities of cross-influences and decision-making through a series of experiments with construction method, structural efficiency, digital simulation tools, form-finding, and spatial qualities.",
      "The project uses a single continuous surface to cast concrete, eliminating conventional formwork waste. Carbon-absorbing concrete and modular slab systems — developed through Python and Grasshopper scripts — are assembled on site from prefabricated units, compressing build time and reducing construction waste.",
      "Structural floor geometry was derived from finite element analysis: stress lines extracted from simulation become the reinforcement curves, and the resulting form surpasses a conventional flat slab in performance while using significantly less material.",
      "Radiant heating and cooling is embedded in the floor structure, with services running through tubes to tie the modular floor units together. Climate studies comparing single- and double-atrium configurations informed the final thermal strategy.",
    ],
    authors: "Lucy Zhong, Xiayu Zhao",
    organization: "University of Pennsylvania",
    instructor: "Masoud Akbarzadeh, Yao Lu",
    link: "https://psl.design.upenn.edu/structural-design-research-studio-generative-prefabrication-spring-2023/",
    status: "Academic — SP 2023",
    images: [
      "/images/projects/the-knot/cover.jpg",
      "/images/projects/the-knot/01.jpg",
      "/images/projects/the-knot/02.jpg",
      "/images/projects/the-knot/03.jpg",
      "/images/projects/the-knot/04.jpg",
      "/images/projects/the-knot/05.jpg",
      "/images/projects/the-knot/06.jpg",
    ],
  },
  {
    slug: "light-kit-house",
    title: "Light-Kit House",
    year: 2023,
    location: "Dubai, United Arab Emirates",
    category: "Computational Prefabrication",
    tags: ["Computational", "Fabrication", "Housing", "Sustainable"],
    summary:
      "A comprehensive modular design strategy for a carbon-negative House of the Future in the UAE — integrating a prefabricated funicular floor structure, carbon-absorbing 3D-printed concrete, and a configurable kit-of-parts system powered by on-site photovoltaics and solar-driven desalination.",
    description: [
      "The Light-Kit House is a comprehensive modular design strategy for a carbon-negative House of the Future in the UAE. The design integrates a high-performance prefabricated funicular floor structure with 50% less mass than conventional systems, a carbon-absorbing 3D-printed concrete mix, and a configurable kit-of-parts that assembles into diverse plan configurations — all powered by rooftop photovoltaics sized to also supply on-site water desalination.",
      "The building structure consists of prefabricated floors and column systems whose compressive-dominant geometry mirrors the vaulted domes of ancient Middle Eastern architecture. This funicular logic reduces construction material by up to 50%, propagating structural savings through the lateral and foundation systems. The 5×5m modular grid can be stacked two or three stories and reconfigured in plan to suit different programs and household sizes.",
      "Structural elements are 3D-printed using a carbon-absorbing concrete mixture, eliminating formwork and minimizing construction waste. An immediate CNC subtractive pass produces precise connection details and smooth surfaces — an additive-subtractive cycle that achieves fabrication tolerances comparable to precast factory production. The 2.5×2.5m prefabricated floor units assemble on columns or structural walls, exposing the structural system as the finished architecture and removing the need for separate finishing layers.",
      "Passive cooling strategies draw on the Emirati courtyard tradition. The house is oriented with its long façade to the prevailing north-west sea breeze, which enters through the open ground-floor courtyard and exhausts through the second floor's perforated 3D-printed screens — a stack effect that continuously purges warm air. Recessed windows and lattice screen walls block direct solar gain while admitting diffuse daylight, and the thermal mass of the printed concrete attenuates daily temperature swings.",
      "A rooftop photovoltaic array provides more than the house's annual energy demand. Surplus generation — estimated at 8,800 kWh/year for a 100 m² PV field — is directed toward solar-driven desalination and grey-water treatment, supplying water for plants and trees across a cluster of homes. Radiant cooling embedded in the concrete slab and solar-driven dehumidification handle the remaining active cooling load, keeping mechanical energy use to a minimum.",
    ],
    authors: "Dr. Masoud Akbarzadeh, Lucy Zhong, Dr. Hua Chai.\nImages courtsey of PSL, Fortes.vision, and Thermal Architecture Lab.",
    critics: "Peyman Askarinejad (PAN Partners), Charles Bermann (Diller Scofidio + Renfro), Pamela Cabrera (Transsolar KlimaEngineering), James Clark (MTFA Architecture), Richard Farley (UPenn), Orsolya Gáspár (STURE Lab, Budapest University of Tech), Florian Meier (Knippers Helbig), Mette Ramsgaard Thomsen (UPenn, CITA), Franca Trubiano (UPenn)",
    organization: "Polyhedral Structures Lab, UPenn",
    status: "Competition",
    images: [
      "/images/projects/light-kit-house/cover.jpg",
      "/images/projects/light-kit-house/render-exterior.jpg",
      "/images/projects/light-kit-house/render-stair.jpg",
      "/images/projects/light-kit-house/render-interior.jpg",
      "/images/projects/light-kit-house/render-courtyard.jpg",
      "/images/projects/light-kit-house/render-front.jpg",
      "/images/projects/light-kit-house/render-sunset.jpg",
      "/images/projects/light-kit-house/render-model.jpg",
      "/images/projects/light-kit-house/render-plans.jpg",
    ],
  },
  {
    slug: "tpms-wall",
    title: "TPMS Wall",
    year: 2023,
    location: "Philadelphia, USA",
    category: "Computational Fabrication",
    tags: ["Computational", "Fabrication"],
    summary:
      "A research investigation into concrete 3D printing — developing overhang analysis tools, slicing workflows, and printability studies to explore the design possibilities of digitally fabricated walls and surfaces.",
    description: [
      "This research explores the structural and geometric possibilities of concrete 3D printing, from parametric surface generation through to fabrication-ready slicing workflows. The work bridges computational design and physical material constraints, testing where the two can productively push against each other.",
      "Slicing tests were prepared for concrete 3D printing, analyzing layer geometry, overhang limits, and print path continuity. Overhang analysis scripts quantified printability across surface variations, producing distribution graphs that directly informed design decisions.",
      "Design options for a 3D-printed wall in a residential project were developed and rendered, demonstrating how parametric surface articulation translates into buildable, materially expressive architectural elements.",
      "The research was conducted at the Polyhedral Structures Lab at the University of Pennsylvania, in parallel with structural and fabrication research into modular prefabricated systems.",
    ],
    authors: "Dr. Masoud Akbarzadeh, Lucy Zhong",
    organization: "Polyhedral Structures Lab, UPenn",
    status: "Academic — SU 2023",
    images: [
      "/images/projects/tpms-wall/03.jpg",
      "/images/projects/tpms-wall/cover.jpg",
      "/images/projects/tpms-wall/01.jpg",
      "/images/projects/tpms-wall/02.jpg",
      "/images/projects/tpms-wall/04.jpg",
      "/images/projects/tpms-wall/05.jpg",
      "/images/projects/tpms-wall/06.jpg",
    ],
  },
  {
    slug: "music-box",
    title: "Music Box",
    year: 2023,
    location: "Philadelphia, USA",
    category: "Modular Adaptive Reuse",
    tags: ["Adaptive Reuse", "Housing", "Community"],
    summary:
      "An adaptive reuse of the American Bandstand Studio in Philadelphia as collective housing and a public music venue — rethinking how musicians live, collaborate, and share music with the surrounding community.",
    description: [
      "This project started by analyzing the music production process, from the spark of notes on fingertips to a finished album on the market, and understanding the members participating in this process. We hope to provide a communal environment for musicians to live and make music together while bringing in other music-related staff, producers, DJs, and entrepreneurs to help finish and spread the work.",
      "After the musicians form bands, they will be able to live together temporarily in their clusters of units, where they can practice individually and jointly. After the collaborative practice and creation, they can finalize and produce the song with DJs and producers, then brand it with the entrepreneurs. Lastly, they can broadcast music to a greater audience using this original iconic satellite dish. At the same time, they can perform the music live right at the bandstand studio stage, where the first live music show in America was recorded.",
      "When the door closes, the public common space is a fully functioning recording studio where musicians can join to produce songs; and when the door opens, it becomes a stage for the community to join and gather, and to enjoy the live music originated right at the location by the best musicians. The annual lead DJ will organize and perform to the audience from this elevated space; other musicians will also be able to participate from their clusters around the center outdoor venue.",
      "In this setting, all musicians will have the opportunity to be heard, and the public is always welcome to join the constant collaborations and performances. Individuals can move in according to their needs and move around for different clustering.",
    ],
    authors: "Lucy Zhong",
    organization: "University of Pennsylvania",
    status: "Academic — SP 2023",
    images: [
      "/images/projects/music-box/cover.jpg",
      "/images/projects/music-box/01.jpg",
      "/images/projects/music-box/02.jpg",
      "/images/projects/music-box/03.jpg",
      "/images/projects/music-box/04.jpg",
      "/images/projects/music-box/05.jpg",
      "/images/projects/music-box/06.jpg",
      "/images/projects/music-box/07.jpg",
      "/images/projects/music-box/08.jpg",
      "/images/projects/music-box/09.jpg",
      "/images/projects/music-box/10.jpg",
      "/images/projects/music-box/11.jpg",
      "/images/projects/music-box/12.jpg",
      "/images/projects/music-box/13.jpg",
      "/images/projects/music-box/14.jpg",
      "/images/projects/music-box/15.jpg",
    ],
  },
  {
    slug: "armature",
    title: "Armature",
    year: 2022,
    location: "Philadelphia, USA",
    category: "Function of Fashion in Architecture",
    tags: ["Fashion", "Fabrication"],
    summary:
      "A garment exploring the structural logics of boning and digitally fabricated chainmail — translating corset construction and traditional Chinese link-weaving into a wearable architectural skin.",
    description: [
      "The project takes inspiration from Qipao — a traditional Chinese costume flat pattern — Chainmail, an ancient armor technique, patterns from Yingzao Fashi, a Chinese traditional architectural booklet on standards and models for construction, and Boning, a common clothing structure. These references were combined through architectural thinking and realized with digital fabrication skills.",
      "The chainmail panels were developed through research into traditional Chinese weave patterns and translated into parametrically designed hexagonal modules 3D-printed in PLA. Each unit interlinks without adhesive, forming a flexible self-supporting mesh that zones the body into structural regions — tight at the shoulders and collar, cascading freely at the hem as individual hanging links.",
      "The flat pattern follows Qipao construction logic — a single continuous front panel with minimal seaming — while boning channels are embedded along the structural seams to maintain form. Design sketches mapped the tension between the rigid boning armature and the flexible chainmail surface across the body.",
      "Paper and plastic mockups on dress form tested drape and panel relationships before final assembly. The finished garment is cut from black satin and sheer organza, with 3D-printed PLA chainmail applied in diagonal bands that cut across the body, resolving in a fringe of dangling links at the hem.",
    ],
    authors: "Lucy Zhong, Wenliu Tu",
    organization: "University of Pennsylvania",
    status: "Academic — SP 2022",
    carouselCount: 3,
    images: [
      "/images/projects/armature/cover.jpg",
      "/images/projects/armature/07.jpg",
      "/images/projects/armature/08.jpg",
      "/images/projects/armature/09.jpg",
      "/images/projects/armature/10.jpg",
      "/images/projects/armature/11.jpg",
      "/images/projects/armature/12.jpg",
      "/images/projects/armature/13.jpg",
      "/images/projects/armature/01.jpg",
      "/images/projects/armature/02.jpg",
      "/images/projects/armature/03.jpg",
      "/images/projects/armature/04.jpg",
      "/images/projects/armature/05.jpg",
      "/images/projects/armature/06.jpg",
      "/images/projects/armature/14.jpg",
      "/images/projects/armature/15.jpg",
      "/images/projects/armature/16.jpg",
    ],
  },
  {
    slug: "fashion-accessory",
    title: "Fashion Accessory & Digital Fabrication",
    year: 2022,
    location: "Philadelphia, USA",
    category: "Function of Fashion in Architecture",
    tags: ["Fashion", "Fabrication"],
    summary:
      "A wearable accessory system — headpiece and back harness — developed through digital fabrication, translating the structural logic of chainmail into 3D-printed parametric components.",
    description: [
      "This team project extends the material research from the Armature garment into a wearable accessory system. Abstracting what we loved from the chainmail piece, we translated the swinging, interlocking structure into a set of 3D-printed components that assemble into a headpiece and back harness.",
      "Each component is designed as an independent unit — Piece 1, Piece 2, and Piece 3 — connected through a shared joint logic. The system was developed parametrically, using Grasshopper scripts to fit 2D patterns onto 3D body geometry and generate the curves and shapes of each module.",
      "The headpiece resolves as a crown-like form, its rigid printed links referencing both the architecture of chainmail armor and the structural boning of historical dress. The back harness uses the same joint system at a larger scale, forming a self-supporting structure that sits against the spine.",
    ],
    authors: "Lucy Zhong, Marjorie Tello-Wong, Khang Truong",
    organization: "University of Pennsylvania",
    status: "Academic — SP 2022",
    images: [
      "/images/projects/fashion-accessory/cover.jpg",
      "/images/projects/fashion-accessory/01.jpg",
      "/images/projects/fashion-accessory/02.jpg",
      "/images/projects/fashion-accessory/03.jpg",
      "/images/projects/fashion-accessory/04.jpg",
      "/images/projects/fashion-accessory/05.jpg",
    ],
  },
  {
    slug: "where-is-the-light",
    title: "Where is the Light?",
    year: 2022,
    location: "Philadelphia, USA",
    category: "Computational Tool",
    tags: ["Computational", "Tool", "Lighting"],
    summary:
      "A Grasshopper plugin that generates instant artificial lighting guidance for architectural spaces — giving designers an immediate spatial sense of light distribution without leaving their modelling environment.",
    description: [
      "Lighting Generator is a Grasshopper plugin that creates a quick guiding solution for generating artificial lighting ranges in both design development and architectural design.",
      "The tool translates luminaire data and room geometry into spatial light maps, allowing designers to test configurations early in the process without leaving their 3D modelling environment. Heat-map outputs and photometric diagrams update parametrically as geometry changes.",
    ],
    authors: "Lucy Zhong, Ivy Song, Cheuk Ming Ng",
    organization: "University of Pennsylvania",
    status: "Research Tool — SP 2022",
    images: [
      "/images/projects/where-is-the-light/cover.jpg",
      "/images/projects/where-is-the-light/01.jpg",
      "/images/projects/where-is-the-light/02.jpg",
    ],
  },
  {
    slug: "parametric-lca",
    title: "Parametric Building LCA",
    year: 2023,
    location: "Philadelphia, USA",
    category: "Computational Analysis",
    tags: ["Computational", "Analysis", "Sustainable"],
    summary:
      "A parametric lifecycle assessment of Amy Gutmann Hall at UPenn — Penn's largest building — using BHoM to quantify its embodied carbon and operational energy impact.",
    description: [
      "This project analysed the building lifecycle and carbon impact of the newly constructed Amy Gutmann Hall, the University of Pennsylvania's largest and most ambitious structure, using BHoM and other research resources.",
      "The parametric model links building geometry to material quantities and carbon factors, enabling rapid what-if comparisons across structural systems and envelope assemblies. Results are visualised through interactive charts and building diagrams to support design decision-making at scale.",
    ],
    authors: "Lucy Zhong",
    organization: "University of Pennsylvania",
    status: "Research — SP 2023",
    images: [
      "/images/projects/parametric-lca/cover.jpg",
      "/images/projects/parametric-lca/01.jpg",
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
