import { moduleMetadata } from '@storybook/angular';
import type { Meta, StoryObj } from '@storybook/angular';
import { CardComponent } from './card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

const meta: Meta<CardComponent> = {
  title: 'COMPONENTS/Card',
  component: CardComponent,
  tags: ['UI', 'Card', 'autodocs'],
  render: (args) => ({ props: args }),
  decorators: [
    moduleMetadata({
      imports: [MatCardModule, MatButtonModule],
    }),
  ],
}

export default meta;
type Story = StoryObj<CardComponent>;

export const Default: Story = {
  render: (args: CardComponent) => ({
    props: args,
    template: `
      <kc-card>
        <p>Card Content</p>
      </kc-card>
    `,
  }),
};

export const WithHeader: Story = {
  render: (args: CardComponent) => ({
    props: args,
    template: `
      <kc-card>
        <div card-title>Similar Card 2</div>
        <p>Card Content</p>
      </kc-card>
    `,
  }),
};


export const WithFooter: Story = {
  render: (args: CardComponent) => ({
    props: args,
    template: `
      <kc-card>
      <p>Card Content</p>
      <div card-footer>
          <button mat-raised-button color="primary">Button</button>
        </div>
      </kc-card>
    `,
  }),
};

export const WithHeaderAndFooter: Story = {
  render: (args: CardComponent) => ({
    props: args,
    template: `
      <kc-card>
        <span card-title>Similar Card 2</span>
        <p>Card Content</p>
        <div card-footer>
          <button mat-raised-button color="primary">Button</button>
        </div>
      </kc-card>
    `,
  }),
};

