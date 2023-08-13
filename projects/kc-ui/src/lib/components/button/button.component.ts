import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'kc-button[basic]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input('id') id: string = 'kc-button';
  @Input('name') name: string = '';
  @Input('classes') classes: string = '';
  @Input('disabled') disabled: boolean = false;
  @Input('color') color: string = 'primary';
  @Input('icon') icon: string = '';
  @Input('iconPosition') iconPosition: string = 'left';

  @Output('click') handlerClick: EventEmitter<MouseEvent> =
    new EventEmitter<MouseEvent>();

  constructor() {}

  onClick(event: MouseEvent) {
    this.handlerClick.emit(event);
  }
}
