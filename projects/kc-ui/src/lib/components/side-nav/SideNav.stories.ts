import { moduleMetadata } from '@storybook/angular';
import type { Meta, StoryObj } from '@storybook/angular';
import { CommonModule } from '@angular/common';

import { SideNavComponent } from './side-nav.component';
import { SideNavItemComponent } from '../side-nav-item/side-nav-item.component';

const meta: Meta<SideNavComponent> = {
  title: 'UI/SideNav',
  component: SideNavComponent,
  tags: ['autodocs'],
  render: (args) => ({ props: args }),
  decorators: [
    moduleMetadata({
      declarations: [SideNavItemComponent],
      imports: [CommonModule],
    }),
  ],
};

export default meta;

type Story = StoryObj<SideNavComponent>;
export const Default: Story = {
  render: (args: SideNavComponent) => ({
    props: args,
    template: `
      <kc-side-nav [items]="items">
      </kc-side-nav>
    `,
  }),
  args: {
    items: [
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
