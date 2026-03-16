import type { ImageMetadata } from "astro";

import project1Image from "../assets/img/projects-page-img-01.jpg";
import project2Image from "../assets/img/projects-page-img-02.jpg";
import project3Image from "../assets/img/projects-page-img-03.jpg";
import project4Image from "../assets/img/projects-page-img-04.jpg";
import project5Image from "../assets/img/projects-page-img-05.jpg";
import project6Image from "../assets/img/projects-page-img-06.jpg";

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
    slug: "apartamento-balcon-vista-poblado",
    title: "Apartamento con balcón y vista",
    type: "Apartamento",
    location: "Medellín • El Poblado",
    operation: "Venta",
    price: "$420.000.000",
    bedrooms: 3,
    bathrooms: 2,
    areaM2: 98,
    parking: 1,
    stratum: 6,
    description:
      "Apartamento iluminado con balcón amplio, distribución eficiente y vista despejada. Ideal para vivir cerca de todo con una sensación de calma.",
    features: [
      "Balcón",
      "Unidad cerrada",
      "Ascensor",
      "Portería 24/7",
      "Zonas comunes",
    ],
    images: [project1Image, project4Image, project6Image],
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
