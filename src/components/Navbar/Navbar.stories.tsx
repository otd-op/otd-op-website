import type { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "./Navbar";

const meta: Meta<typeof Navbar> = {
  title: "Components/Navbar",
  component: Navbar,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["desktop", "tablet", "mobile"],
      description: "The responsive variant of the navbar",
    },
  },
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Desktop: Story = {
  args: {
    variant: "desktop",
  },
  parameters: {
    viewport: {
      defaultViewport: "desktop",
    },
  },
};

export const Tablet: Story = {
  args: {
    variant: "tablet",
  },
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
};

export const Mobile: Story = {
  args: {
    variant: "mobile",
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

export const InteractiveMobileMenu: Story = {
  args: {
    variant: "mobile",
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
    docs: {
      description: {
        story: "Click the hamburger menu to toggle the mobile menu. The menu state is managed internally with React useState.",
      },
    },
  },
};
