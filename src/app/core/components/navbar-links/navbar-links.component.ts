import {Component, ElementRef, HostListener, ViewChild} from '@angular/core';
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
  @ViewChild("navbar_li") navbarLi!: ElementRef;
  @ViewChild("submenu") submenu!: ElementRef ;

  onMouseEnter(linkName: string ) {
    console.log(linkName, "entered");
    this.isMouseEnter = true;
    this.currentLinkSelected = this.sections.filter((element) => element.name === linkName);
    if(this.currentLinkSelected.length > 0){
      this.navbarLi?.nativeElement.appendChild(this.submenu);
    }
  }

  onMouseLeave(){
    this.isMouseEnter = false;
    this.currentLinkSelected = [];
    console.log("leaveee");
  }

  @HostListener("document:click", ["$event"])
  onClickListener(event: any) {
    // console.log("target", event.target.className);
    let targetClassNameClicked: string = event.target.className;
    if (targetClassNameClicked.includes("navbar")) {
      // console.log("targetActive", event);
    } else {
      this.isMouseEnter = false;
    }
  }

}
