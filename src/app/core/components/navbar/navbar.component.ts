import { Component } from '@angular/core';
import {NavbarLinksComponent} from "../navbar-links/navbar-links.component";

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [NavbarLinksComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
