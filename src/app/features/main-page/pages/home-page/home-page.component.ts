import { Component } from '@angular/core';
import { CardComponent } from "../../../../shared/components/card/card.component";
import { servicios } from "../../../../core/data/servicios-info";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CardComponent,
    NgClass
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  services = servicios;
  fullServicesView: boolean = false;
  toggleButtonText: string = "MOSTRAR MÁS";

  toggleServicesView(): void {
    this.fullServicesView = !this.fullServicesView;
    if ( this.fullServicesView === true ) {
      this.toggleButtonText = "MOSTRAR MENOS";
    } else {
      this.toggleButtonText = "MOSTRAR MÁS";
    }
  }

  get servicesSectionClass(): string {
    let classService: string = "";
    classService = this.fullServicesView ? "show-services no-overflow" : "hide-services overflow";
    return classService;
  }
}
