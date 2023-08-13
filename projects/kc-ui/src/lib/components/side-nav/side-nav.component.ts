import { Component, Input } from '@angular/core';
import { KcNavItemType } from '../side-nav-item/side-nav-item.component';

@Component({
  selector: 'kc-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {

  @Input('items') items: Array<KcNavItemType> = []

}
