import { moduleMetadata } from "@storybook/angular";
import type { Meta, StoryObj } from "@storybook/angular";
import { CommonModule } from "@angular/common";
import { ActivatedRoute, RouterModule } from "@angular/router";

import { HeaderComponent } from "./header.component";
import { MatToolbarModule } from "@angular/material/toolbar";

const meta: Meta<HeaderComponent> = {
  title: 'UI/Header',
  component: HeaderComponent,
  tags: ['autodocs'],
  render: (args) => ({ props: args }),
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        MatToolbarModule
      ],
    }),
  ],
  parameters: {
    // layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<HeaderComponent>;

export const Default: Story = {
  render: (args: HeaderComponent) => ({
    props: args,
    template: `
      <kc-header
      [urlLogo]="urlLogo"
      [homeLink]="'homeLink'"
      ></kc-header>
    `,
  }),
  args: {
    homeLink: '/home',
    urlLogo: '../../../assets/logo.svg',
  },
};
