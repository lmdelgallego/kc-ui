import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { BaseLayoutComponent } from './base-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from '../header/header.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SideNavItemComponent } from '../side-nav-item/side-nav-item.component';


const meta: Meta<BaseLayoutComponent> = {
  title: 'LAYOUT/Base',
  tags: ['LAYOUT', 'autodocs'],
  component: BaseLayoutComponent,
  render: (args) => ({ props: args }),
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    moduleMetadata({
      declarations: [HeaderComponent, SideNavComponent, SideNavItemComponent],
      imports: [CommonModule , BrowserAnimationsModule, MatSidenavModule, MatToolbarModule],
    }),
  ],
};

export default meta;

type Story = StoryObj<BaseLayoutComponent>;

export const Default: Story = {
  render: (args: BaseLayoutComponent) => ({
    props: args,
    template: `
      <kc-base-layout [urlLogo]="urlLogo" [navItems]="navItems">
        <h1>Content</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
      </kc-base-layout>
    `,
  }),
  args: {
    urlLogo:
      'https://assets.lsegissuerservices.com/original-0eabaa1f-9ae5-40e7-87cc-edea18ff3a75.png',
    navItems: [
      {
        label: 'Home',
        url: '/',
      },
      {
        label: 'Page 2',
        url: 'page2',
      },
    ],
  },
};
