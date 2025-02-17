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
      },
      {
        name: "Politica de calidad",
        fragment: "politica",
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
        fragment: "estudios-ambientales",
        href: "/servicios/",
      },
      // {
      //   name: "Administración de riesgo",
      //   icon: `${iconsDirPathBase}/Riesgo.svg`,
      //   fragment: "administracion-de-riesgo",
      //   href: "/servicios/",
      // },
      {
        name: "Topografía",
        icon: `${iconsDirPathBase}/Topografia.svg`,
        fragment: "topografia",
        href: "/servicios/",
      },
      {
        name: "Radiodetección",
        icon: `${iconsDirPathBase}/Radiodeteccion.svg`,
        fragment: "radiodeteccion",
        href: "/servicios/",
      },
      {
        name: "Geofísica",
        icon: `${iconsDirPathBase}/Geofisica.svg`,
        fragment: "geofisica",
        href: "/servicios/",
      },
      {
        name: "Termofusión",
        icon: `${iconsDirPathBase}/Termofusion.svg`,
        fragment: "termofusion",
        href: "/servicios/",
      },
      {
        name: "Perforación",
        icon: `${iconsDirPathBase}/Perforacion.svg`,
        fragment: "perforacion",
        href: "/servicios/",
      },
      // {
      //   name: "Tierras físicas",
      //   icon: `${iconsDirPathBase}/TierrasFisicas.svg`,
      //   fragment: "tierras-fisicas",
      //   href: "/servicios/",
      // },
      {
        name: "Tecnología del proceso",
        icon: `${iconsDirPathBase}/TecnologiaDelProceso.svg`,
        fragment: "tecnologia-del-proceso",
        href: "/servicios/",
      },
    ]
  },
  {
    name: "CONTACTO",
    href: "contacto",
  }
];
