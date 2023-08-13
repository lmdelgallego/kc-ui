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
      imports: [],
    }),
  ],
};

export default meta;
