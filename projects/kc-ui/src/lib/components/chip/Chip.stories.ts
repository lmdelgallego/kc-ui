import { moduleMetadata } from '@storybook/angular';
import type { Meta, StoryObj } from '@storybook/angular';
import { CommonModule } from '@angular/common';

import { ChipComponent } from './chip.component';
import { MatIconModule } from '@angular/material/icon';

const meta: Meta<ChipComponent> = {
  title: 'COMPONENTS/Chip',
  component: ChipComponent,
  tags: ['autodocs'],
  render: (args) => ({ props: args }),
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        MatIconModule
      ],
    }),
  ],
};

export default meta;
type Story = StoryObj<ChipComponent>;
export const Default: Story = {
  render: (args: ChipComponent) => ({
    props: args,
  }),
  args: {
    label: 'Chip',
  },
};

export const LeftIcon: Story = {
  render: (args: ChipComponent) => ({
    props: args,
  }),
  args: {
    label: 'Chip',
    icon: 'check_circle',
    iconPosition: 'left',
  },
};
export const RightIcon: Story = {
  render: (args: ChipComponent) => ({
    props: args,
  }),
  args: {
    label: 'Chip',
    icon: 'check_circle',
    iconPosition: 'right',
  },
};
