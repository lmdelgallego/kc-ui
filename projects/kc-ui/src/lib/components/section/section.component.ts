import { Component, Input } from '@angular/core';

@Component({
  selector: 'kc-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
})
export class SectionComponent {
  @Input('title') title: string = '';
}
