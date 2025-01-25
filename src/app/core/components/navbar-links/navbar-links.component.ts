import { Component } from '@angular/core';
import { NavbarLink } from "../../models/navbarLink.interface";
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'navbar-links',
  standalone: true,
  imports: [RouterLink, RouterLinkActive,],
  templateUrl: './navbar-links.component.html',
  styleUrl: './navbar-links.component.scss'
})
export class NavbarLinksComponent {
  navbarLinks: NavbarLink[] = [
    {
      name: "INICIO",
      href: "inicio",
    },
    {
      name: "NOSOTROS",
      href: "nosotros",
    },
    {
      name: "SERVICIOS"
    },
    {
      name: "CONTACTO"
    }
  ]
}
