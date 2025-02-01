import {Component, Input} from '@angular/core';

@Component({
  selector: 'dual-panel-card',
  standalone: true,
  imports: [],
  templateUrl: './dual-panel-card.component.html',
  styleUrl: './dual-panel-card.component.scss'
})
export class DualPanelCardComponent {
  @Input() serviceOffered: any = {};

}
