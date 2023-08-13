import { moduleMetadata } from '@storybook/angular';
import type { Meta, StoryObj } from '@storybook/angular';

import { FilterComponent } from './filter.component';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

const meta: Meta<FilterComponent> = {
  title: 'COMPONENTS/Filter',
  component: FilterComponent,
  tags: ['UI', 'Filter', 'autodocs'],
  render: (args) => ({ props: args }),
  decorators: [
    moduleMetadata({
      imports: [MatIconModule, MatChipsModule],
    }),
  ],
  parameters: {
    // layout: 'fullscreen',
  },
  argTypes: {
    options: {
      defaultValue: ['all', 'active', 'completed'],
      control: {
        type: 'array',

      },
    },

  },
};

export default meta;
type Story = StoryObj<FilterComponent>;

export const Default: Story = {
  args: {
    label: 'Filter',
    options: ['active', 'completed'],
  },
};
