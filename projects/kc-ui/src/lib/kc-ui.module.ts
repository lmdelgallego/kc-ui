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
import { CardComponent } from './components/card/card.component';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    ButtonComponent,
    HeaderComponent,
    BaseLayoutComponent,
    SectionComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule
  ],
  exports: [
    ButtonComponent,
    HeaderComponent,
    BaseLayoutComponent,
    SectionComponent,
    CardComponent,
  ],
})
export class KcUiModule {}
