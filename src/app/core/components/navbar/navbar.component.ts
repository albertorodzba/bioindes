import {Component, HostListener, inject} from '@angular/core';
import { NavbarLinksComponent } from "../navbar-links/navbar-links.component";

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [NavbarLinksComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  screenWidth: number = window.innerWidth;
  private screenHeight: number = window.innerHeight;

  constructor() { }
  @HostListener('window:resize', ['$event'])
  onWindowResize(event: any): void {
    console.log('resize', event.target.innerWidth);
    this.screenWidth = event.target.innerWidth;
    this.screenHeight = event.target.innerHeight;
  }

}
