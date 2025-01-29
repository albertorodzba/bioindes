import {Component, HostListener} from '@angular/core';
import { NavbarLink } from "../../models/navbarLink.interface";
import { RouterLink, RouterLinkActive } from "@angular/router";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'navbar-links',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, JsonPipe,],
  templateUrl: './navbar-links.component.html',
  styleUrl: './navbar-links.component.scss'
})
export class NavbarLinksComponent {
  iconsDirPathBase: string = "/icons/outline-icons";
  navbarLinks: NavbarLink[] = [
    {
      name: "INICIO",
      href: "inicio",
    },
    {
      name: "NOSOTROS",
      href: "nosotros",
      // children: [
      //   {
      //     name: "Nosotros",
      //   },
      //   {
      //     name: "Misión",
      //   },
      //   {
      //     name: "Visión",
      //   }
      // ]
    },
    {
      name: "SERVICIOS",
      children: [
        {
          name: "Estudios Ambientales",
          icon: `${this.iconsDirPathBase}/EstudiosAmbientales.svg`,
        },
        {
          name: "Topografía",
          icon: `${this.iconsDirPathBase}/Topografia.svg`,
        },
        {
          name: "Radiodetección",
          icon: `${this.iconsDirPathBase}/Radiodeteccion.svg`,
        },
        {
          name: "Geofísica",
          icon: `${this.iconsDirPathBase}/Geofisica.svg`,
        },
        {
          name: "Termofusión",
          icon: `${this.iconsDirPathBase}/Termofusion.svg`,
        },
        {
          name: "Perforación",
          icon: `${this.iconsDirPathBase}/Perforacion.svg`,
        },
        {
          name: "Tierras físicas",
          icon: `${this.iconsDirPathBase}/TierrasFisicas.svg`,
        },
        {
          name: "Tecnología del proceso",
          icon: `${this.iconsDirPathBase}/TecnologiaDelProceso.svg`,
        },
      ]
    },
    {
      name: "CONTACTO",
      href: "contacto",
    }
  ];

  isMouseEnter: boolean = false;
  currentLinkSelected: any = [];

  onMouseEnter(linkName: string ) {
    console.log(linkName, "pulsed");
    this.isMouseEnter = true;
    this.currentLinkSelected = this.navbarLinks.filter((element) => element.name === linkName);
    console.log("current selected", this.currentLinkSelected);
  }

  onMouseLeave(){
    this.isMouseEnter = false;
    this.currentLinkSelected = [];
    console.log("leave", this.navbarLinks);
  }
  @HostListener("click", ["$event.target"])
  onClickLister(targetClicked: any) {
    console.log("target", targetClicked);
  }
}
