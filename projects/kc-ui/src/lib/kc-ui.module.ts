import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';

import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './components/header/header.component';
import { BaseLayoutComponent } from './components/base-layout/base-layout.component';
import { SectionComponent } from './components/section/section.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ButtonComponent,
    HeaderComponent,
    BaseLayoutComponent,
    SectionComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule
  ],
  exports: [
    ButtonComponent,
    HeaderComponent,
    BaseLayoutComponent,
    SectionComponent,
  ],
})
export class KcUiModule {}
