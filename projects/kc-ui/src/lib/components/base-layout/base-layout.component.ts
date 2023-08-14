import { Component, Input } from '@angular/core';
import { KcNavItemType } from '../side-nav-item/side-nav-item.component';

@Component({
  selector: 'kc-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss'],
})
export class BaseLayoutComponent {
  @Input('urlLogo') urlLogo: string = '';
  @Input('navItems') navItems: Array<KcNavItemType> = [];
}
