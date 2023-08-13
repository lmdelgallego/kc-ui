import { moduleMetadata } from '@storybook/angular';
import type { Meta, StoryObj } from '@storybook/angular';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from './button.component';
import { MatButtonModule } from '@angular/material/button';

const meta: Meta<ButtonComponent> = {
  title: 'COMPONENTS/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  render: (args) => ({ props: args }),
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        MatButtonModule
      ],
    }),
  ],
};

export default meta;

type Story = StoryObj<ButtonComponent>;
//👇 This default export determines where your story goes in the story list
export const Default: Story = {
  render: (args: ButtonComponent) => ({
    props: args,
  }),
};
