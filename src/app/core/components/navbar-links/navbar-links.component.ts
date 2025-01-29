import {Component, HostListener} from '@angular/core';
import { NavbarLink } from "../../models/navbarLink.interface";
import { RouterLink, RouterLinkActive } from "@angular/router";
import {JsonPipe} from "@angular/common";
import { Sections } from "../../data/sections";

@Component({
  selector: 'navbar-links',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, JsonPipe,],
  templateUrl: './navbar-links.component.html',
  styleUrl: './navbar-links.component.scss'
})
export class NavbarLinksComponent {
  sections: NavbarLink[] = Sections;
  isMouseEnter: boolean = false;
  currentLinkSelected: any = [];

  onMouseEnter(linkName: string ) {
    console.log(linkName, "pulsed");
    this.isMouseEnter = true;
    this.currentLinkSelected = this.sections.filter((element) => element.name === linkName);
    console.log("current selected", this.currentLinkSelected);
  }

  onMouseLeave(){
    this.isMouseEnter = false;
    this.currentLinkSelected = [];
  }
  @HostListener("document:click", ["$event"])
  onClickListener(event: any) {
    console.log("target", event.target.className);
    let targetClassNameClicked: string = event.target.className;
    if (targetClassNameClicked === "navbar-links__link" || targetClassNameClicked === "navbar-links__a") {
      console.log("targetActive", event);
    } else {
      this.isMouseEnter = false;
    }
  }

}
