import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { SectionComponent } from './section.component';
import { MatIconModule } from '@angular/material/icon';

const meta: Meta<SectionComponent> = {
  title: 'LAYOUT/Section',
  tags: ['LAYOUT', 'autodocs'],
  component: SectionComponent,
  render: (args) => ({ props: args }),
  parameters: {},
  decorators: [
    moduleMetadata({
      imports: [CommonModule, MatButtonModule, MatIconModule],
    }),
  ],
};

export default meta;

type Story = StoryObj<SectionComponent>;

export const Default: Story = {
  render: (args: SectionComponent) => ({
    props: args,
    template: `
      <kc-section [title]="title">
        <p>Section Content</p>
      </kc-section>
    `,
  }),
  args: {
    title: 'Section Title',
  },
};

export const OptionsHeader: Story = {
  render: (args: SectionComponent) => ({
    props: args,
    template: `
      <kc-section [title]="title">
        <div sectionActionHeader style="display: flex; gap: 8px; align-items: center;">
          <button mat-raised-button color="primary">Primary</button>
          <button sectionActionHeader mat-icon-button >
            <mat-icon>add</mat-icon>
          </button>
          <button mat-fab color="warn">
            <mat-icon>home</mat-icon>
          </button>
        </div>

        <p>Section Content</p>
      </kc-section>
    `,
  }),
  args: {
    title: 'Section Title',
  },
};
