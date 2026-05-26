export type Project = {
  slug: string;
  title: string;
  year: number;
  location: string;
  category: string;
  summary: string;
  description: string[];
  client: string;
  status: string;
  images: string[];
};

export const projects: Project[] = [
  {
    slug: "the-knot",
    title: "The Knot",
    year: 2023,
    location: "New York City, USA",
    category: "Computational Prefabrication",
    summary:
      "A concrete museum exploring cross-influences between structural efficiency, digital fabrication, and form-finding through modular 3D-printed prefabricated systems.",
    description: [
      "The Knot explores the possibilities of cross-influences and decision-making through a series of experiments with construction method, structural efficiency, digital simulation tools, form-finding, and spatial qualities.",
      "The project uses a single continuous surface to cast concrete, eliminating conventional formwork waste. Carbon-absorbing concrete and modular slab systems — developed through Python and Grasshopper scripts — are assembled on site from prefabricated units, compressing build time and reducing construction waste.",
      "Structural floor geometry was derived from finite element analysis: stress lines extracted from simulation become the reinforcement curves, and the resulting form surpasses a conventional flat slab in performance while using significantly less material.",
      "Radiant heating and cooling is embedded in the floor structure, with services running through tubes to tie the modular floor units together. Climate studies comparing single- and double-atrium configurations informed the final thermal strategy.",
    ],
    client: "Structural Design Research Studio — Masoud Akbarzadeh + Yao Lu",
    status: "Academic — SP 2023",
    images: [
      "/images/projects/the-knot/cover.jpg",
      "/images/projects/the-knot/01.jpg",
      "/images/projects/the-knot/02.jpg",
      "/images/projects/the-knot/03.jpg",
    ],
  },
  {
    slug: "light-kit-house",
    title: "Light-Kit House",
    year: 2023,
    location: "Dubai, United Arab Emirates",
    category: "Computational Prefabrication",
    summary:
      "A prefabricated residential prototype for the UAE that uses lightweight vaulted floor structures, carbon-absorbing concrete, and a configurable kit-of-parts system to reduce construction waste and energy use.",
    description: [
      "The Light-Kit House redefines sustainable living in the UAE through a lightweight floor structure, carbon-absorbing 3D-printed concrete, and a modular system of configurable parts. The design prioritizes energy efficiency through thermal mass, natural ventilation, and integrated water collection.",
      "The building structure consists of prefabricated floors and column systems whose funicular geometry mirrors vaulted domes and ancient Middle Eastern architectural forms — reducing construction material by up to 50% compared to conventional flat-slab construction.",
      "The 3D-printed PPAS screen facades allow air to permeate through a perforated geometry, controlling air permeability while filtering harsh desert sunlight. The lattice panels provide natural ventilation and create an intimate interior environment.",
      "The ground floor is open for cross-ventilation. The second floor's 3D-printed lattice walls admit wind while rejecting solar heat gain. Structural savings propagate through the entire lateral and foundation system, significantly reducing the building's overall material footprint.",
    ],
    client: "Polyhedral Structures Lab, UPenn",
    status: "Academic — FA 2023",
    images: [
      "/images/projects/light-kit-house/cover.jpg",
      "/images/projects/light-kit-house/01.jpg",
      "/images/projects/light-kit-house/02.jpg",
      "/images/projects/light-kit-house/03.jpg",
    ],
  },
  {
    slug: "music-box",
    title: "Music Box",
    year: 2023,
    location: "Philadelphia, USA",
    category: "Modular Adaptive Reuse",
    summary:
      "An adaptive reuse of the American Bandstand Studio in Philadelphia as collective housing and a public music venue — rethinking how musicians live, collaborate, and share music with the surrounding community.",
    description: [
      "Music Box rethinks collective housing and historical adaptive reuse through the lens of music culture and community. The project transforms the American Bandstand Studio into a shared environment where musicians can live, collaborate, record, and perform — while making music accessible to the broader neighbourhood.",
      "The original building structure and its famous entrance were preserved. Interior walls were selectively removed to accommodate classrooms, recording rooms, and a central performance stage. New modular housing units are inserted above the plaza, offering affordable communal living with direct views of the stage below.",
      "Musicians form bands, collaborate on writing and production in shared studios, then distribute their music using a restored Arturia satellite dish — broadcasting performances to audiences nationally while performing locally. The historic satellite becomes both infrastructure and civic symbol.",
      "The sectional strategy stacks public, collaborative, and private programs vertically: the stage and open plaza at ground level draw the neighbourhood in; recording and practice studios occupy the middle levels; residential units at the top offer quiet above the activity below.",
    ],
    client: "Housing Studio — Scott Erby",
    status: "Academic — SP 2023",
    images: [
      "/images/projects/music-box/cover.jpg",
      "/images/projects/music-box/01.jpg",
      "/images/projects/music-box/02.jpg",
      "/images/projects/music-box/03.jpg",
    ],
  },
  {
    slug: "where-is-the-light",
    title: "Where is the Light?",
    year: 2022,
    location: "Philadelphia, USA",
    category: "Computational Tool",
    summary:
      "A Grasshopper plugin that generates instant artificial lighting guidance for architectural spaces — giving designers an immediate spatial sense of light distribution without leaving their modelling environment.",
    description: [
      "Lighting Generator is a Grasshopper plugin that creates a quick guiding solution for generating artificial lighting ranges in both design development and architectural design.",
      "The tool translates luminaire data and room geometry into spatial light maps, allowing designers to test configurations early in the process without leaving their 3D modelling environment. Heat-map outputs and photometric diagrams update parametrically as geometry changes.",
    ],
    client: "Academic Research",
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
    summary:
      "A parametric lifecycle assessment of Amy Gutmann Hall at UPenn — Penn's largest building — using BHoM to quantify its embodied carbon and operational energy impact.",
    description: [
      "This project analysed the building lifecycle and carbon impact of the newly constructed Amy Gutmann Hall, the University of Pennsylvania's largest and most ambitious structure, using BHoM and other research resources.",
      "The parametric model links building geometry to material quantities and carbon factors, enabling rapid what-if comparisons across structural systems and envelope assemblies. Results are visualised through interactive charts and building diagrams to support design decision-making at scale.",
    ],
    client: "Academic Research",
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
