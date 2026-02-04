import gvknExterior1 from "@/assets/gvkn-exterior-1.jpg";
import gvknResidenceHero from "@/assets/gvkn-residence-hero.jpg";
import gvknExterior2 from "@/assets/gvkn-exterior-2.jpg";
import gvknTerrace1 from "@/assets/gvkn-terrace-1.jpg";
import gvknTerrace2 from "@/assets/gvkn-terrace-2.jpg";
import gvknEntrance from "@/assets/gvkn-entrance.jpg";
import gvknGarden from "@/assets/gvkn-garden.jpg";
import gvknWindow from "@/assets/gvkn-window.jpg";
import gvknLanding from "@/assets/gvkn-landing.jpg";
import gvknNight from "@/assets/gvkn-night.jpg";
import gvknStaircase1 from "@/assets/gvkn-staircase-1.jpg";
import gvknStaircase2 from "@/assets/gvkn-staircase-2.jpg";
import gvknLiving from "@/assets/gvkn-living.jpg";
import gvknDoor from "@/assets/gvkn-door.jpg";
import gvknDining from "@/assets/gvkn-dining.jpg";
import gvknKitchen from "@/assets/gvkn-kitchen.jpg";
import gvknDecor from "@/assets/gvkn-decor.jpg";
import gvknStairwell from "@/assets/gvkn-stairwell.jpg";
import gvknBedroom from "@/assets/gvkn-bedroom.jpg";
import arvind1 from "@/assets/arvind-1.jpg";
import arvind2 from "@/assets/arvind-2.jpg";
import coxTown1 from "@/assets/cox-town-1.jpg";
import basavaraj1 from "@/assets/basavaraj-1.jpg";
import basavaraj2 from "@/assets/basavaraj-2.jpg";
import basavaraj3 from "@/assets/basavaraj-3.jpg";
import vedham from "@/assets/vedham.jpg";
import nandhyal from "@/assets/nandhyal.jpg";

export interface Project {
  id: string;
  name: string;
  location: string;
  type: string;
  status: "Completed" | "Proposed" | "Under Construction";
  heroImage: string;
  images: string[];
  description: string;
}

export const projects: Project[] = [
  {
    id: "gvkn-residence",
    name: "GVKN Residence",
    location: "Bangalore",
    type: "Residential",
    status: "Completed",
    heroImage: gvknResidenceHero,
    images: [
      gvknExterior1,
      gvknExterior2,
      gvknEntrance,
      gvknGarden,
      gvknStaircase1,
      gvknStaircase2,
      gvknStairwell,
      gvknLanding,
      gvknLiving,
      gvknDining,
      gvknKitchen,
      gvknBedroom,
      gvknWindow,
      gvknDoor,
      gvknDecor,
      gvknTerrace1,
      gvknTerrace2,
      gvknNight,
    ],
    description:
      "North-facing 2,400 sq ft urban residence anchored by an existing Indian beech tree. Emphasis on volumetric articulation, light, shadow, cross-ventilation, and garden voids. Rich wooden craftsmanship balanced with contemporary finishes, creating a timeless and contextually grounded home.",
  },
  {
    id: "arvind-residence",
    name: "Arvind Residence",
    location: "Jayanagar",
    type: "Residential",
    status: "Completed",
    heroImage: arvind1,
    images: [arvind1, arvind2],
    description:
      "Apartment project focused on spatial clarity and refined residential living. The design prioritizes natural light, ventilation, and a sense of openness within urban constraints.",
  },
  {
    id: "cox-town-apartment",
    name: "Cox Town Apartment",
    location: "Bengaluru",
    type: "Residential",
    status: "Proposed",
    heroImage: coxTown1,
    images: [coxTown1],
    description:
      "Proposed mid-rise apartment responding to dense urban surroundings. The design integrates vertical greenery and a distinctive stone spine to balance privacy with street presence.",
  },
  {
    id: "basavaraj-residence",
    name: "Basavaraj Residence",
    location: "Kanakapura Road",
    type: "Residential",
    status: "Proposed",
    heroImage: basavaraj1,
    images: [basavaraj1, basavaraj2, basavaraj3],
    description:
      "Proposed independent residence exploring brick jali screens, integrated planters, and climate-responsive massing. The design draws on local craft traditions while addressing contemporary living.",
  },
  {
    id: "vedham",
    name: "Vedham",
    location: "Bangalore",
    type: "Layout Design",
    status: "Proposed",
    heroImage: vedham,
    images: [vedham],
    description:
      "Master planning and layout design featuring integrated green spaces, tree-lined avenues, and thoughtfully organized plots. The design emphasizes connectivity with nature while creating a cohesive residential community.",
  },
  {
    id: "nandhyal",
    name: "Nandhyal",
    location: "Nandyal, Andhra Pradesh",
    type: "Layout Design",
    status: "Proposed",
    heroImage: nandhyal,
    images: [nandhyal],
    description:
      "Township master plan featuring 200 residential plots with comprehensive amenities including club house, swimming pool, amphitheatre, sports courts, and landscaped open spaces. The design balances density with green infrastructure along a 200-feet wide main road corridor.",
  },
];
