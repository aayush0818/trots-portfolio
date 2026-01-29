import gvknExterior1 from "@/assets/gvkn-exterior-1.jpg";
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
import arvindResidence from "@/assets/arvind-residence.jpg";
import coxTown from "@/assets/cox-town.jpg";
import basavarajResidence from "@/assets/basavaraj-residence.jpg";
import hrbrCommercial from "@/assets/hrbr-commercial.jpg";

export interface Project {
  id: string;
  name: string;
  location: string;
  type: string;
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
    heroImage: gvknExterior1,
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
    heroImage: arvindResidence,
    images: [arvindResidence],
    description:
      "Apartment project focused on spatial clarity and refined residential living. The design prioritizes natural light, ventilation, and a sense of openness within urban constraints.",
  },
  {
    id: "cox-town-apartment",
    name: "Cox Town Apartment",
    location: "Bengaluru",
    type: "Residential",
    heroImage: coxTown,
    images: [coxTown],
    description:
      "Urban apartment responding to dense surroundings and spatial efficiency. The project balances privacy with connectivity, creating intimate living spaces within a bustling urban fabric.",
  },
  {
    id: "basavaraj-residence",
    name: "Basavaraj Residence",
    location: "Kanakapura Road",
    type: "Residential",
    heroImage: basavarajResidence,
    images: [basavarajResidence],
    description:
      "Independent residential house rooted in site context and material sensibility. Local materials and traditional craft techniques inform a contemporary interpretation of regional architecture.",
  },
  {
    id: "hrbr-commercial",
    name: "Commercial Building",
    location: "HRBR",
    type: "Commercial",
    heroImage: hrbrCommercial,
    images: [hrbrCommercial],
    description:
      "Commercial architecture balancing functionality, form, and urban presence. The building addresses street-level engagement while providing efficient, flexible workspace above.",
  },
  {
    id: "antahpura-layout",
    name: "Antahpura Layout",
    location: "Nandyal",
    type: "Urban Planning",
    heroImage: basavarajResidence,
    images: [basavarajResidence],
    description:
      "Layout design responding to land structure and community planning. The masterplan integrates green corridors, communal spaces, and efficient circulation networks.",
  },
];
