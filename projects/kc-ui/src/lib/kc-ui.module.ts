import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';

import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './components/header/header.component';
import { BaseLayoutComponent } from './components/base-layout/base-layout.component';



@NgModule({
  declarations: [
    ButtonComponent,
    HeaderComponent,
    BaseLayoutComponent,
  ],
  imports: [BrowserAnimationsModule, MatToolbarModule, MatSidenavModule],
  exports: [
    MatToolbarModule,
    MatSidenavModule,
    ButtonComponent,
    HeaderComponent,
    BaseLayoutComponent,
  ],
})
export class KcUiModule {}
