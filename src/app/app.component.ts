import {Component, Host, HostListener} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./core/components/navbar/navbar.component";
import { ReactiveFormsModule } from "@angular/forms";
import {SideMenuComponent} from "./core/components/side-menu/side-menu.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, ReactiveFormsModule, SideMenuComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isMobileView: boolean = window.innerWidth < 768;

  @HostListener("window:resize", ["$event"])
  getWindowSize(event: any) : void{
    const width = event.target.innerWidth
    if (width < 576) {
      this.isMobileView = true;
    } else {
      this.isMobileView = false;
    }
  }
}
