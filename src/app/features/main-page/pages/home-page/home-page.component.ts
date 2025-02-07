import { Component } from '@angular/core';
import { CardComponent } from "../../../../shared/components/card/card.component";
import { servicios } from "../../../../core/data/servicios-info";
import {NgClass} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CardComponent,
    NgClass,
    RouterLink
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  services = servicios;
  showAllCardServices: boolean = false;
  textButton: string = "MOSTRAR MÁS";

  toggleServicesView(): void {
    this.showAllCardServices = !this.showAllCardServices;
    if ( this.showAllCardServices === true ) {
      this.textButton = "MOSTRAR MENOS";
    } else {
      this.textButton = "MOSTRAR MÁS";
    }
  }

  get servicesSectionClass(): string {
    let servicesStyle: string = "";
    servicesStyle = this.showAllCardServices ? "show-services no-overflow" : "hide-services overflow";
    return servicesStyle;
  }
}
