import { Component, HostListener, inject } from '@angular/core';
import { OptionMenuComponent } from "../../../shared/components/option-menu/option-menu.component";
import { NavbarLink } from "../../models/navbarLink.interface";
import { Sections } from "../../data/sections";
import { MenuService } from "../../../shared/services/menu.service";

@Component({
  selector: 'side-menu',
  standalone: true,
  imports: [
    OptionMenuComponent
  ],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss'
})
export class SideMenuComponent {
  sections: NavbarLink[] = Sections;
  menuService: MenuService = inject(MenuService);
  @HostListener('click', ['$event'])
  onClickListener(event: any) {
    console.log("target", event.target.className);
    let targetClassNameClicked: string = event.target.className;
    if (targetClassNameClicked === "wrapper") {
      this.closeSideMenu();
    }
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: any): void {
    const screenWidth = event.target.innerWidth;
    const screenHeight = event.target.innerHeight;

    if (screenWidth > 576) {
      this.closeSideMenu();
    }
  }

  closeSideMenu(): void {
    this.menuService.setIsMenuOpen(false);
  }
}
