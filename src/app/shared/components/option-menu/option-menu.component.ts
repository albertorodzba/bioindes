import {Component, Input} from '@angular/core';
import { NavbarLink } from "../../../core/models/navbarLink.interface";
import { Sections } from "../../../core/data/sections";
import {NgClass} from "@angular/common";

@Component({
  selector: 'option-menu',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './option-menu.component.html',
  styleUrl: './option-menu.component.scss'
})
export class OptionMenuComponent {
  @Input() section: any = [];
  isOptionMenuOpen: boolean = false;

  toggleChildrenSection(): void {
    this.isOptionMenuOpen =! this.isOptionMenuOpen;
  }

  getClassWhenOpen(): string {
    let cssClass: string = "";
    if(this.isOptionMenuOpen && this.section.children){
      cssClass = "bg-white";
    } else {
      cssClass = "";
    }
    return cssClass;
  }
}
