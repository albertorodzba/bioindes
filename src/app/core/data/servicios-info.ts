const basePath = "/images/services"
export const servicios = [
  {
    title: "Estudios ambientales",
    cardDescription: "Estudios de impacto ambiental, línea base ambiental (LBA)...",
    fullText: `
      <ul class="first-panel__ul">
        <li>Estudios de impacto ambiental.</li>
        <li>Línea base ambiental (LBA).</li>
        <li>Evaluación de Impacto Social (EvIS).</li>
        <li>Estudios de Riesgo ambiental (ERA).</li>
        <li>Programa para la prevención de accidentes (PPA).</li>
        <li>Análisis de riesgo de proceso (ARP).</li>
        <li>Elaboración e implementación de SASISOPA.</li>
        <li>Atlas de riesgo.</li>
        <li>Protocolo de Respuesta a Emergencias (PRE).</li>
        <li>Planes de manejo de residuos.</li>
        <li>Cédula de operación anual (COA).</li>
      </ul>`,
    imgPath: `${basePath}/EstudiosAmbientales2.jpg`,
    iconPath: "/icons/outline-icons/EstudiosAmbientales.svg",
    iconWhitePath: "/icons/outline-icons-white/EstudiosAmbientales.svg",
    id: "estudios-ambientales",
  },
  // {
  //   title: "Administración de Riesgo",
  //   cardDescription: "Analisis de riesgo de proceso, metodología HazOp, árbol de fallas...",
  //   fullText: `
  //     <ul class="first-panel__ul">
  //       <li>Análisis de riesgo de proceso (ARP).</li>
  //       <li>Metodología HazOp.</li>
  //       <li>Árbol de fallas.</li>
  //       <li>Modelación mediante software PHAST.</li>
  //       <li>Personal con certificación TUV.</li>
  //       <li>Cartografía en GIS.</li>
  //       <li>Seguridad funcional y sistemas instrumentados de seguridad (cálculo del SIL).</li>
  //       <li>Atlas de riesgo.</li>
  //       <li>Programas de atención a contingencias.</li>
  //     </ul>
  //   `,
  //   imgPath: `${basePath}/AdministracionDeRiesgo.jpg`,
  //   iconPath: "/icons/outline-icons/Riesgo.svg",
  //   iconWhitePath: "/icons/outline-icons-white/EstudiosAmbientales.svg",
  //   id: "administracion-de-riesgo"
  // },
  {
    title: "Topografía",
    cardDescription: "Topografía con equipo satelital, cartografía, Fotogrametría...",
    fullText: `
      <ul class="first-panel__ul">
        <li>Topografía con equipo satelital.</li>
        <li>Deslindes.</li>
        <li>Cartografía.</li>
        <li>Fotogrametría.</li>
        <li>Trazo y nivelación de proyectos para construcción.</li>
      </ul>
    `,
    imgPath: `${basePath}/Topografia2.jpg`,
    iconPath: "/icons/outline-icons/Topografia.svg",
    iconWhitePath: "/icons/outline-icons-white/Topografia.svg",
    id: "topografia"
  },
  {
    title: "Radiodetección",
    cardDescription: "Equipo RD-8100, Búsqueda de tubería subterránea...",
    fullText: `
      <ul class="first-panel__ul">
        <li>Equipo RD-8100. Tecnología GPS.</li>
        <li>Búsqueda de tubería subterránea.</li>
        <li>Apoyo a celaje y/o identificación de ductos terrestres.</li>
        <li>Trazo y levantamiento de detalles de ductos en localizaciones de pozos.</li>
      </ul>
    `,
    imgPath: `${basePath}/Radiodeteccion.jpg`,
    iconPath: "/icons/outline-icons/Radiodeteccion.svg",
    iconWhitePath: "/icons/outline-icons-white/Radiodeteccion.svg",
    id: "radiodeteccion"
  },
  {
    title: "Geofísica",
    cardDescription: "Caracterización de sitios contaminados, búsqueda de agua subterránea...",
    fullText: `
      <ul class="first-panel__ul">
        <li>Caracterización de sitios contaminados</li>
        <li>Búsqueda de agua subterránea</li>
        <li>Identificación estratigráfica</li>
        <br>
          <p><b>Técnicas:</b></p>
          <ul class="pl-2rem">
            <li>Georadar</li>
            <li>Tomografía</li>
            <li>Sondeos eléctricos verticales (SEV)</li>
          </ul>
      </ul>
    `,
    imgPath: `${basePath}/Geofisica.jpg`,
    iconPath: "/icons/outline-icons/Geofisica.svg",
    iconWhitePath: "/icons/outline-icons-white/Geofisica.svg",
    id: "geofisica"
  },
  // {
  //   title: "Obra civil",
  //   cardDescription: "Ejecución y supervisión de obra civil y electromecánica...",
  //   fullText: "",
  //   imgPath: `${basePath}/ObraCivil.jpg`,
  //   iconPath: "/icons/outline-icons/ObraCivil.svg",
  //   iconWhitePath: "/icons/outline-icons-white/EstudiosAmbientales.svg",
  //   id: "obra-civil"
  // },
  {
    title: "Termofusión",
    cardDescription: "Membrana de contención secundaria de hasta un espesor de 1.5mm...",
    fullText: `
      <ul class="first-panel__ul">
        <li>Membrana de contención secundaria de hasta un espesor de 1.5 mm.</li>
      </ul>
      <br>
      <p><b>Aplicaciones y beneficios:</b></p>
      <ul class="pl-2rem">
        <li>Contención de derrames y protección ambiental del suelo.</li>
        <li>Material flexible, fácil de transportar y limpiar.</li>
        <li>Adaptable a las condiciones irregulares del terreno.</li>
        <li>Resistente a hidrocarburos.</li>
      </ul>
    `,
    imgPath: `${basePath}/Termofusion.jpg`,
    iconPath: "/icons/outline-icons/Termofusion.svg",
    iconWhitePath: "/icons/outline-icons-white/Termofusion.svg",
    id: "termofusion"
  },
  {
    title: "Perforación",
    cardDescription: "Perforación rotaria y/o neumática, perforación de pozos de monitoreo...",
    fullText: `
      <ul class="first-panel__ul">
        <li>Perforación rotaria y/o neumática</li>
        <li>Perforación de pozos de monitoreo</li>
        <li>Perforación de pozos para extracción de agua</li>
        <li>Perforación de pozos para control de emanaciones naturales de hidrocarburos</li>
        <li>Perforación para extracción de núcleos</li>
        <li>Trámite de concesiones ante la Comisión Nacional del Agua</li>
      </ul>
    `,
    imgPath: `${basePath}/Perforacion.jpg`,
    iconPath: "/icons/outline-icons/Perforacion.svg",
    iconWhitePath: "/icons/outline-icons-white/Perforacion.svg",
    id: "perforacion"
  },
  // {
  //   title: "Tierras físicas",
  //   cardDescription: "Equipo Fluke 1623, medición de tierras fisicas...",
  //   fullText: "",
  //   imgPath: `${basePath}/TierrasFisicas.jpg`,
  //   iconPath: "/icons/outline-icons/TierrasFisicas.svg",
  //   iconWhitePath: "/icons/outline-icons-white/EstudiosAmbientales.svg",
  //   id: "tierras-fisicas"
  // },
  {
    title: "Tecnología del proceso",
    cardDescription: "Diagramas de tubería e instrumentación (DTI's)...",
    fullText: `
      <ul class="first-panel__ul">
        <li>Diagramas de tubería e instrumentación (DTI's)</li>
        <li>Diagramas de flujo de proceso (DFP)</li>
        <li>Planos As-Built</li>
        <li>Planos de isométricos</li>
        <li>Planos de localización general (PLG)</li>
      </ul>
    `,
    imgPath: `${basePath}/TecnologiaDelProceso2.jpg`,
    iconPath: "/icons/outline-icons/TecnologiaDelProceso.svg",
    iconWhitePath: "/icons/outline-icons-white/TecnologiaDelProceso.svg",
    id: "tecnologia-del-proceso"
  },
]
