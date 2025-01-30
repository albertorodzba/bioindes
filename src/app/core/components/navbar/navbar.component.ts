import {Component, HostListener, inject, WritableSignal} from '@angular/core';
import { NavbarLinksComponent } from "../navbar-links/navbar-links.component";
import {MenuService} from "../../../shared/services/menu.service";

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
  isMobileView: boolean = window.innerWidth < 768;
  menuService: MenuService = inject(MenuService);

  constructor() { }
  @HostListener('window:resize', ['$event'])
  onWindowResize(event: any): void {
    this.screenWidth = event.target.innerWidth;
    this.screenHeight = event.target.innerHeight;

    if (this.screenWidth < 576) {
      this.isMobileView = true;
    } else {
      this.isMobileView = false;
    }
  }

  openSideMenu(): void {
    if(this.isMobileView && !this.menuService.getIsMenuOpen()) {
      this.menuService.setIsMenuOpen(true);
    }
  }

}
