import type { ImageMetadata } from "astro";

import project1Image from "../assets/img/projects-page-img-01.jpg";
import project2Image from "../assets/img/projects-page-img-02.jpg";
import project3Image from "../assets/img/projects-page-img-03.jpg";
import project4Image from "../assets/img/projects-page-img-04.jpg";
import project5Image from "../assets/img/projects-page-img-05.jpg";
import project6Image from "../assets/img/projects-page-img-06.jpg";
import faro1Image from "../assets/img/faro (1).jpeg";
import faro2Image from "../assets/img/faro (2).jpeg";
import faro3Image from "../assets/img/faro (3).jpeg";
import faro4Image from "../assets/img/faro (4).jpeg";
import faro5Image from "../assets/img/faro (5).jpeg";
import faro6Image from "../assets/img/faro (6).jpeg";
import faro7Image from "../assets/img/faro (7).jpeg";
import faro8Image from "../assets/img/faro (8).jpeg";
import faro9Image from "../assets/img/faro (9).jpeg";
import faro10Image from "../assets/img/faro (10).jpeg";
import faro11Image from "../assets/img/faro (11).jpeg";
import faro12Image from "../assets/img/faro (12).jpeg";
import faro13Image from "../assets/img/faro (13).jpeg";
import faro14Image from "../assets/img/faro (14).jpeg";
import faro15Image from "../assets/img/faro (15).jpeg";
import faro16Image from "../assets/img/faro (16).jpeg";
import faro17Image from "../assets/img/faro (17).jpeg";
import faro18Image from "../assets/img/faro (18).jpeg";

export type PropertyOperation = "Venta" | "Arriendo";
export type PropertyType = "Apartamento" | "Casa" | "Local";

export type Property = {
  slug: string;
  title: string;
  type: PropertyType;
  location: string;
  operation: PropertyOperation;
  price: string;
  bedrooms?: number;
  bathrooms?: number;
  areaM2?: number;
  parking?: number;
  stratum?: number;
  description: string;
  features: string[];
  images: ImageMetadata[];
};

export const properties: Property[] = [
  {
    slug: "departamento-amoblado-edificio-faro-norte-antofagasta",
    title: "Departamento amoblado 2 dormitorios • Edificio Faro Norte",
    type: "Apartamento",
    location: "Antofagasta • Sector Norte (Ascotán Norte #155)",
    operation: "Arriendo",
    price: "$730.000 / mes (gastos comunes incluidos)",
    bedrooms: 2,
    bathrooms: 1,
    parking: 1,
    description:
      "Se arrienda departamento amoblado en Edificio Faro Norte, ubicado en el sector norte de Antofagasta (Ascotán Norte #155, con Oficina Castilla). Excelente conectividad y cercanía a Mall Paseo La Portada, bencineras, Universidad INACAP, colegios, jardín infantil, restaurantes, supermercados (Líder, Tottus, Unimarc), canchas de pádel, centros médicos y a pocas cuadras de la costanera y playa La Chimba. Piso 9. Arriendo mensual $730.000 con gastos comunes incluidos + 50% comisión de corretaje.",
    features: [
      "Amoblado",
      "Piso 9",
      "Cocina americana",
      "Living",
      "Terraza",
      "Closets",
      "Estacionamiento",
      "Bodega",
      "Piscina",
      "Sala de eventos",
      "Quinchos",
      "Conserjería 24/7",
    ],
    images: [
      faro1Image,
      faro2Image,
      faro3Image,
      faro4Image,
      faro5Image,
      faro6Image,
      faro7Image,
      faro8Image,
      faro9Image,
      faro10Image,
      faro11Image,
      faro12Image,
      faro13Image,
      faro14Image,
      faro15Image,
      faro16Image,
      faro17Image,
      faro18Image,
    ],
  },
  {
    slug: "casa-conjunto-terraza-envigado",
    title: "Casa en conjunto con terraza",
    type: "Casa",
    location: "Envigado • La Intermedia",
    operation: "Arriendo",
    price: "$4.200.000 / mes",
    bedrooms: 4,
    bathrooms: 3,
    areaM2: 180,
    parking: 2,
    stratum: 5,
    description:
      "Casa familiar con espacios generosos, terraza y zona verde. Perfecta para quienes priorizan privacidad y comodidad dentro de un conjunto.",
    features: [
      "Terraza",
      "Zona verde",
      "Parqueadero doble",
      "Vigilancia",
      "Cerca a vías principales",
    ],
    images: [project2Image, project5Image, project1Image],
  },
  {
    slug: "local-comercial-vitrina-usaquen",
    title: "Local comercial con vitrina",
    type: "Local",
    location: "Bogotá • Usaquén",
    operation: "Arriendo",
    price: "$7.800.000 / mes",
    areaM2: 62,
    description:
      "Local con excelente visibilidad, vitrina hacia zona de alto flujo y distribución lista para adaptar. Ideal para marca que necesita exposición.",
    features: [
      "Fachada en vidrio",
      "Alto flujo peatonal",
      "Bahía de parqueo cercana",
      "Fácil adecuación",
    ],
    images: [project3Image, project2Image, project4Image],
  },
  {
    slug: "apartamento-loft-granada",
    title: "Apartamento tipo loft",
    type: "Apartamento",
    location: "Cali • Granada",
    operation: "Venta",
    price: "$310.000.000",
    bedrooms: 1,
    bathrooms: 1,
    areaM2: 54,
    parking: 1,
    description:
      "Loft moderno, de concepto abierto y acabados sobrios. Una opción práctica para inversión o para vivir cerca de restaurantes y comercios.",
    features: [
      "Concepto abierto",
      "Acabados modernos",
      "Parqueadero",
      "Cerca a comercio",
    ],
    images: [project4Image, project6Image, project3Image],
  },
  {
    slug: "casa-campestre-llanogrande",
    title: "Casa campestre con lote",
    type: "Casa",
    location: "Rionegro • Llanogrande",
    operation: "Venta",
    price: "$1.950.000.000",
    bedrooms: 5,
    bathrooms: 5,
    areaM2: 420,
    parking: 3,
    description:
      "Casa campestre amplia con jardín y espacios para compartir. Ideal para quienes quieren aire, verde y un hogar listo para disfrutar.",
    features: [
      "Lote amplio",
      "Jardín",
      "Terraza",
      "Zona BBQ",
      "Excelente iluminación",
    ],
    images: [project5Image, project1Image, project2Image],
  },
  {
    slug: "apartamento-cerca-metro-sabaneta",
    title: "Apartamento cerca al metro",
    type: "Apartamento",
    location: "Medellín • Sabaneta",
    operation: "Arriendo",
    price: "$2.400.000 / mes",
    bedrooms: 2,
    bathrooms: 2,
    areaM2: 72,
    parking: 1,
    stratum: 4,
    description:
      "Apartamento cómodo y bien ubicado, ideal para moverse fácil por la ciudad. Buen metraje y distribución funcional.",
    features: [
      "Cerca al metro",
      "Unidad con portería",
      "Ascensor",
      "Zonas comunes",
    ],
    images: [project6Image, project4Image, project5Image],
  },
];
