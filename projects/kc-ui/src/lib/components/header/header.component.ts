import { Component, Input } from '@angular/core';

@Component({
  selector: 'kc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input('title') title: string = '';
  @Input('homeLink') homeLink: string = '/';
  @Input('urlLogo') urlLogo: string = '';
}
