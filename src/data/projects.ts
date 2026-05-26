export type Project = {
  slug: string;
  title: string;
  year: number;
  location: string;
  category: string;
  /** One-line summary shown on cards and as the detail-page lede. */
  summary: string;
  /** Full description paragraphs for the project detail page. */
  description: string[];
  client: string;
  status: string;
  area: string;
  /** Tailwind gradient classes used as a placeholder image. */
  gradient: string;
};

// Placeholder content — swap titles, copy, and (eventually) real photography
// as the portfolio fills out. Each project gets its own static detail page.
export const projects: Project[] = [
  {
    slug: "riverside-pavilion",
    title: "Riverside Pavilion",
    year: 2024,
    location: "Porto, Portugal",
    category: "Cultural",
    summary:
      "A timber-framed events pavilion that folds open toward the Douro waterfront.",
    description: [
      "Riverside Pavilion sits at the threshold between the city and the river, a lightweight timber structure that opens its full southern face to the water in summer and closes into a warm, lantern-lit room in winter.",
      "The roof is a single folded plane of cross-laminated timber, carried on slender steel columns that step back from the glazing line to keep the river view uninterrupted. Operable shutters tune daylight and air through the day.",
    ],
    client: "Câmara Municipal do Porto",
    status: "Completed",
    area: "1,240 m²",
    gradient: "from-amber-200 via-orange-300 to-rose-400",
  },
  {
    slug: "helix-tower",
    title: "Helix Tower",
    year: 2023,
    location: "Rotterdam, Netherlands",
    category: "Mixed-use",
    summary:
      "A 28-storey mixed-use tower whose terraces spiral up a planted core.",
    description: [
      "Helix Tower stacks retail, workspace, and housing around a continuous planted spiral that doubles as the building's vertical circulation and its public garden.",
      "Each residential floor is offset a few degrees from the one below, producing generous outdoor terraces and a faceted facade that catches changing light across the harbour.",
    ],
    client: "Maaskant Development",
    status: "Under construction",
    area: "34,500 m²",
    gradient: "from-sky-300 via-indigo-400 to-violet-500",
  },
  {
    slug: "courtyard-house",
    title: "Courtyard House",
    year: 2022,
    location: "Kyoto, Japan",
    category: "Residential",
    summary:
      "A private residence organised around three quiet, planted courtyards.",
    description: [
      "Courtyard House turns inward, away from a dense street, organising daily life around three courtyards: one of gravel, one of moss, and one of water.",
      "Deep eaves and shoji-inspired sliding screens dissolve the line between inside and out, so the seasons move through the house as much as around it.",
    ],
    client: "Private",
    status: "Completed",
    area: "320 m²",
    gradient: "from-emerald-200 via-teal-300 to-cyan-400",
  },
  {
    slug: "civic-library",
    title: "Civic Library",
    year: 2023,
    location: "Aarhus, Denmark",
    category: "Public",
    summary:
      "A daylit civic library with a stepped reading landscape under a timber roof.",
    description: [
      "Civic Library replaces a single grand reading room with a stepped interior landscape — a continuous terrain of shelves, stairs, and window seats that invites visitors to find their own corner.",
      "A coffered timber roof floats above, perforated by skylights that wash the stacks in even northern daylight throughout the long Nordic year.",
    ],
    client: "Aarhus Kommune",
    status: "Completed",
    area: "8,900 m²",
    gradient: "from-stone-300 via-amber-300 to-yellow-400",
  },
  {
    slug: "vineyard-winery",
    title: "Vineyard Winery",
    year: 2021,
    location: "Mendoza, Argentina",
    category: "Commercial",
    summary:
      "A rammed-earth winery set low into the slope beneath the Andes.",
    description: [
      "Vineyard Winery is built from the earth it sits on — thick rammed-earth walls regulate temperature for the cellars below while anchoring the building to its terraced site.",
      "The tasting room cantilevers out toward the mountains, a single horizontal line of glass framing the vineyard rows and the snow-capped Andes beyond.",
    ],
    client: "Bodega del Valle",
    status: "Completed",
    area: "2,750 m²",
    gradient: "from-rose-300 via-red-400 to-amber-500",
  },
  {
    slug: "coastal-retreat",
    title: "Coastal Retreat",
    year: 2024,
    location: "Big Sur, USA",
    category: "Residential",
    summary:
      "A weathering-steel retreat braced against the cliffs above the Pacific.",
    description: [
      "Coastal Retreat is a pair of weathering-steel volumes pinned to a coastal bluff, sheltering a glazed living space between them from the prevailing wind.",
      "The material palette is deliberately spare — steel, board-formed concrete, and oiled cedar — left to age and streak with the salt air over time.",
    ],
    client: "Private",
    status: "In design",
    area: "410 m²",
    gradient: "from-slate-300 via-blue-400 to-indigo-500",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
