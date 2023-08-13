import { moduleMetadata } from '@storybook/angular';
import type { Meta, StoryObj } from '@storybook/angular';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from './button.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const meta: Meta<ButtonComponent> = {
  title: 'COMPONENTS/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  render: (args) => ({ props: args }),
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule
      ],
    }),
  ],
};

export default meta;

type Story = StoryObj<ButtonComponent>;
export const Default: Story = {
  render: (args: ButtonComponent) => ({
    props: args,
    template: `
      <kc-button [color]="color" [disabled]="disabled" [icon]="icon" [iconPosition]="iconPosition"  basic>
        Button
      </kc-button>
    `,
  }),
  args: {
    color: 'primary',
    disabled: false,
    icon: '',
    iconPosition: '',
  }
};


export const Disabled: Story = {
  render: (args: ButtonComponent) => ({
    props: args,
    template: `
      <kc-button [color]="color" [disabled]="disabled" basic>
        Button
      </kc-button>
    `,
  }),
  args: {
    color: 'primary',
    disabled: true,
  },
};

export const IconLeft: Story = {
  render: (args: ButtonComponent) => ({
    props: args,
    template: `
      <kc-button [color]="color" [icon]="icon" [iconPosition]='iconPosition'  basic>
        Button
      </kc-button>
    `,
  }),
  args: {
    color: 'primary',
    icon: 'home',
    iconPosition: 'left',
  },
};

export const IconRight: Story = {
  render: (args: ButtonComponent) => ({
    props: args,
    template: `
      <kc-button color="primary" [icon]='icon' [iconPosition]='iconPosition' basic>
        Button
      </kc-button>
    `,
  }),
  args: {
    color: 'primary',
    icon: 'home',
    iconPosition: 'right',
  },
};
