import {NavbarLink} from "../models/navbarLink.interface";
const iconsDirPathBase: string = "/icons/outline-icons";
export const Sections: NavbarLink[] =  [
  {
    name: "INICIO",
    href: "",
  },
  {
    name: "NOSOTROS",
    href: "nosotros",
    children: [
      {
        name: "Nosotros",
        fragment: "nosotros",
        href: "/nosotros/",
      },
      {
        name: "Misión",
        fragment: "mision",
        href: "/nosotros/",
      },
      {
        name: "Visión",
        fragment: "vision",
        href: "/nosotros/",
      }
    ]
  },
  {
    name: "SERVICIOS",
    href: "servicios",
    children: [
      {
        name: "Estudios Ambientales",
        icon: `${iconsDirPathBase}/EstudiosAmbientales.svg`,
      },
      {
        name: "Topografía",
        icon: `${iconsDirPathBase}/Topografia.svg`,
      },
      {
        name: "Radiodetección",
        icon: `${iconsDirPathBase}/Radiodeteccion.svg`,
      },
      {
        name: "Geofísica",
        icon: `${iconsDirPathBase}/Geofisica.svg`,
      },
      {
        name: "Termofusión",
        icon: `${iconsDirPathBase}/Termofusion.svg`,
      },
      {
        name: "Perforación",
        icon: `${iconsDirPathBase}/Perforacion.svg`,
      },
      {
        name: "Tierras físicas",
        icon: `${iconsDirPathBase}/TierrasFisicas.svg`,
      },
      {
        name: "Tecnología del proceso",
        icon: `${iconsDirPathBase}/TecnologiaDelProceso.svg`,
      },
    ]
  },
  {
    name: "CONTACTO",
    href: "contacto",
  }
];
