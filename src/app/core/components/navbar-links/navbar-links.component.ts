import { Component } from '@angular/core';
import {NavbarLink} from "../../models/navbarLink.interface";

@Component({
  selector: 'navbar-links',
  standalone: true,
  imports: [],
  templateUrl: './navbar-links.component.html',
  styleUrl: './navbar-links.component.scss'
})
export class NavbarLinksComponent {
  navbarLinks: NavbarLink[] = [
    {
      name: "HOME"
    },
    {
      name: "NOSOTROS"
    },
    {
      name: "SERVICIOS"
    },
    {
      name: "CONTACTO"
    }
  ]
}
