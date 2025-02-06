import { Component } from '@angular/core';
import {servicios} from "../../../../core/data/servicios-info";
import {DualPanelCardComponent} from "../../../../shared/components/dual-panel-card/dual-panel-card.component";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    DualPanelCardComponent,
    NgClass
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  servicesOffered: any = servicios;
}
