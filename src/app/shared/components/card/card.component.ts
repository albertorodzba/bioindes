import {Component, Input} from '@angular/core';

@Component({
  selector: 'card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  // title: string = "Estudios Ambientales";
  // description: string = "Manifiesto de impacto\n" +
  //   "ambiental, programa para la\n" +
  //   "prevención de accidentes,\n" +
  //   "estudio de riesgo ambiental... ";
  // url: string = "";
  iconUrl: string = "/icons/EstudiosAmbientales.svg";
  // imageUrl: string = "/images/services/example.png";
  @Input() cardInfo: any = [];
  textButton: string = "CONOCER MAS";

}
