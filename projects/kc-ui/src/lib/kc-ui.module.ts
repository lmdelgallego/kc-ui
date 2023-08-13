import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';

import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './components/header/header.component';
import { BaseLayoutComponent } from './components/base-layout/base-layout.component';
import { SectionComponent } from './components/section/section.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { FilterComponent } from './components/filter/filter.component';
import { SideNavItemComponent } from './components/side-nav-item/side-nav-item.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';

@NgModule({
  declarations: [
    ButtonComponent,
    HeaderComponent,
    BaseLayoutComponent,
    SectionComponent,
    CardComponent,
    FilterComponent,
    SideNavItemComponent,
    SideNavComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatIconModule,
    MatChipsModule,
    MatButtonModule,
  ],
  exports: [
    ButtonComponent,
    HeaderComponent,
    BaseLayoutComponent,
    SectionComponent,
    CardComponent,
    FilterComponent,
    SideNavItemComponent,
    SideNavComponent,
  ],
})
export class KcUiModule {}
