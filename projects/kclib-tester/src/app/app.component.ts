import { Component } from '@angular/core';
import { KcNavItemType } from 'kc-ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'kclib-tester';

  navItems: Array<KcNavItemType> = [
    {
      url: '/',
      label: 'Home',
    },
    {
      url: 'page2',
      label: 'Second Page',
    },
    {
      url: 'page3',
      label: 'Third Page',
    },
  ];
}
