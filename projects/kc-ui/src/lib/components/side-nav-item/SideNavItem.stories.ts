import { moduleMetadata } from '@storybook/angular';
import type { Meta, StoryObj } from '@storybook/angular';
import { CommonModule } from '@angular/common';

import { SideNavItemComponent } from './side-nav-item.component';

const meta: Meta<SideNavItemComponent> = {
  title: 'UI/SideNavItem',
  component: SideNavItemComponent,
  tags: ['autodocs'],
  render: (args) => ({ props: args }),
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
    }),
  ],
};

export default meta;

type Story = StoryObj<SideNavItemComponent>;
export const Default: Story = {
  render: (args: SideNavItemComponent) => ({
    props: args,
    template: `
      <kc-side-nav-item [routerLink]="url">
        Home
      </kc-side-nav-item>
    `,
  }),
  args: {
    url: '/',
  },
};
