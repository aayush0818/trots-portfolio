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
import basavarajGroundFloor from "@/assets/basavaraj-ground-floor.jpg";
import basavarajFirstFloor from "@/assets/basavaraj-first-floor.jpg";
import basavarajSecondFloor from "@/assets/basavaraj-second-floor.jpg";
import basavarajTerraceFloor from "@/assets/basavaraj-terrace-floor.jpg";
import basavarajPerspective from "@/assets/basavaraj-perspective.jpg";
import basavarajFrontView from "@/assets/basavaraj-front-view.jpg";
import basavarajSideView from "@/assets/basavaraj-side-view.jpg";
import vedham from "@/assets/vedham.jpg";
import nandhyal from "@/assets/nandhyal.jpg";
import hrbrCommercial from "@/assets/hrbr-commercial.jpg";

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
    location: "BSK 1st Stage, Bangalore",
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
      "GVKN House is a meticulously designed residence set on a 2,400 sq. ft. north-facing site, seamlessly integrated into a dense urban fabric. A majestic Indian beech tree stands at one corner, grounding the home in nature. The architectural language emphasizes volumetric articulation, orchestrating a seamless interplay between light, shadow, and spatial fluidity. Strategically placed voids and garden pockets enhance cross-ventilation while fostering a dynamic relationship between the built and unbuilt environments. The interiors exude richness, blending intricate wooden craftsmanship with contemporary finishes, striking a balance between tradition and modernity. This synthesis of contextual sensitivity and spatial sophistication results in a home that is elegant, timeless, and deeply connected to its surroundings.",
  },
  {
    id: "arvind-residence",
    name: "Arvind Residence",
    location: "Jayanagar, Bangalore",
    type: "Apartment",
    status: "Completed",
    heroImage: arvind1,
    images: [arvind1, arvind2],
    description:
      "Arvind Residence is a thoughtfully designed independent apartment building set on a 40' × 45' urban plot in the residential fabric of Jayanagar. The project is conceived as an exclusive living experience with one spacious 3 BHK apartment per floor ensuring privacy, openness, and generous natural light for each dwelling. The architectural expression is defined by clear volumetric composition, where recessed balconies and a strong vertical brick plane create depth and visual balance along the street edge. The restrained material palette—exposed brick, textured plaster, and crisp white framing—lends the building a contemporary yet timeless character, responding sensitively to its context.",
  },
  {
    id: "cox-town-apartment",
    name: "Cox Town Apartment",
    location: "Cox Town, Bangalore",
    type: "Apartment",
    status: "Proposed",
    heroImage: coxTown1,
    images: [coxTown1],
    description:
      "Cox Town Apartments is a residential project developed on a 4,800 sq. ft. site comprising two parallel 3 BHK apartments on each floor. The design focuses on creating comfortable homes with good natural light, ventilation, and efficient spatial planning. The building features a balanced and symmetrical façade with projecting balconies and recessed openings adding depth and visual interest. A central vertical design element, finished in two contrasting granite tones, anchors the elevation while the use of exposed brick and neutral finishes gives the building a warm and contemporary character. Each apartment is planned with a clear distinction between living and private areas. Living and dining spaces open onto balconies, enhancing daylight and ventilation. The parallel layout allows for effective cross ventilation ensuring comfortable interiors throughout the year.",
  },
  {
    id: "basavaraj-residence",
    name: "Basavaraj Residence",
    location: "Napa Valley, Kanakapura Road, Bangalore",
    type: "Residential",
    status: "Proposed",
    heroImage: basavaraj1,
    images: [basavaraj1, basavaraj2, basavaraj3, basavarajGroundFloor, basavarajFirstFloor, basavarajSecondFloor, basavarajTerraceFloor, basavarajPerspective, basavarajFrontView, basavarajSideView],
    description:
      "Basavaraj Residence is an independent residential villa designed on a 30' × 60' site along Kanakapura Road, Bengaluru. Planned as a 3 BHK home, the design focuses on comfortable family living within a compact plot. The house is organized around well-defined living, dining, and private spaces ensuring clear zoning and efficient circulation. Openings, balconies, and internal cut-outs allow for ample natural light and ventilation, creating bright and comfortable interiors. Landscape pockets and terraces are thoughtfully integrated to enhance indoor–outdoor connection, while the overall architectural expression remains simple, functional, and contemporary, responding to the residential character of the neighbourhood.",
  },
  {
    id: "hrbr-commercial",
    name: "Commercial Building HRBR",
    location: "HRBR, Bangalore",
    type: "Commercial",
    status: "Proposed",
    heroImage: hrbrCommercial,
    images: [hrbrCommercial],
    description:
      "A commercial building designed in the HRBR layout of Bangalore, addressing the functional and spatial requirements of a mixed-use commercial programme within an urban setting.",
  },
  {
    id: "vedham",
    name: "Vedham",
    location: "Bengaluru",
    type: "Layout Design",
    status: "Proposed",
    heroImage: vedham,
    images: [vedham],
    description:
      "Vedham is a residential layout development designed with a focus on open spaces, walkability, and community living. The layout comprises 114 residential sites organized through a clear hierarchy of roads and landscaped public spaces. The development includes a clubhouse with multiple amenities that support community interaction and recreation. Several parks are distributed across the layout, each designed with outdoor play areas, yoga spaces, children's sand pit, and an amphitheatre offering diverse recreational experiences for residents. Vehicular roads are finished in bituminous paving while dedicated paved pedestrian walkways with integrated planters run along the streets, ensuring safe and comfortable pedestrian movement. The layout emphasizes greenery, connectivity, and well-defined public realms, resulting in a balanced and livable residential environment.",
  },
  {
    id: "nandhyal",
    name: "Antahpura Nandyal",
    location: "Nandyal, Andhra Pradesh",
    type: "Layout Design",
    status: "Proposed",
    heroImage: nandhyal,
    images: [nandhyal],
    description:
      "Township master plan featuring 200 residential plots with comprehensive amenities including club house, swimming pool, amphitheatre, sports courts, and landscaped open spaces. The design balances density with green infrastructure along a 200-feet wide main road corridor.",
  },
];
