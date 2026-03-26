import type { Meta, StoryObj } from "@storybook/react";
import { NavItem } from "./NavItem";

const meta: Meta<typeof NavItem> = {
  title: "Components/NavItem",
  component: NavItem,
  tags: ["autodocs"],
  argTypes: {
    active: {
      control: "boolean",
      description: "Whether the nav item is active",
    },
    href: {
      control: "text",
      description: "The link URL",
    },
    children: {
      control: "text",
      description: "The text content of the nav item",
    },
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof NavItem>;

export const Default: Story = {
  args: {
    children: "ABOUT",
    href: "#",
    active: false,
  },
};

export const Active: Story = {
  args: {
    children: "ABOUT",
    href: "#",
    active: true,
  },
};

export const Hover: Story = {
  args: {
    children: "ARTICLES",
    href: "#",
    active: false,
  },
  parameters: {
    docs: {
      description: {
        story: "Hover over the link to see the hover state with background color change.",
      },
    },
  },
};
