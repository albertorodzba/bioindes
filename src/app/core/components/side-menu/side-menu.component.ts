import { Component } from '@angular/core';
import {OptionMenuComponent} from "../../../shared/components/option-menu/option-menu.component";
import {NavbarLink} from "../../models/navbarLink.interface";
import {Sections} from "../../data/sections";

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
  onClickListener(event: any) {
    console.log("target", event.target.className);
    let targetClassNameClicked: string = event.target.className;
    if (targetClassNameClicked === "navbar-links__link" || targetClassNameClicked === "navbar-links__a") {
      console.log("targetActive", event);
    }
  }
}
