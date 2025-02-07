import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'card',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  iconUrl: string = "/icons/EstudiosAmbientales.svg";
  @Input() cardInfo: any = [];
  textButton: string = "CONOCER MAS";

}
