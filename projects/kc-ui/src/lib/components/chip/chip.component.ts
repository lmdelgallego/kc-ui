import { Component, Input } from '@angular/core';

@Component({
  selector: 'kc-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss'],
})
export class ChipComponent {
  @Input('cssClass') cssClass: string = '';
  @Input('label') label: string = '';
  @Input('color') color: string = '';
  @Input('icon') icon: string = '';
  @Input('iconPosition') iconPosition: string = 'left';

  constructor() {}

}
