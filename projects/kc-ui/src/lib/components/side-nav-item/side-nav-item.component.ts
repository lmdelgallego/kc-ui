import { Component, Input } from '@angular/core';

export interface KcNavItemType {
  url: string;
  label: string;
  icon?: string;
}

@Component({
  selector: 'kc-side-nav-item',
  templateUrl: './side-nav-item.component.html',
  styleUrls: ['./side-nav-item.component.scss'],
})
export class SideNavItemComponent {
  @Input('url') url: string = '';

  linkOptions = {
    exact: true,
  };
}
