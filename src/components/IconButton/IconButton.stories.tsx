import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "./IconButton";
import SearchIcon from "../../assets/search.svg?react";
import InstagramIcon from "../../assets/instagram.svg?react";
import RssIcon from "../../assets/rss.svg?react";

const meta: Meta<typeof IconButton> = {
  title: "Components/IconButton",
  component: IconButton,
  tags: ["autodocs"],
  argTypes: {
    ariaLabel: {
      control: "text",
      description: "Accessible label for the button",
    },
    onClick: {
      action: "clicked",
      description: "Click handler function",
    },
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Search: Story = {
  args: {
    ariaLabel: "Search",
    children: <SearchIcon />,
  },
};

export const Instagram: Story = {
  args: {
    ariaLabel: "Instagram",
    children: <InstagramIcon />,
  },
};

export const RSS: Story = {
  args: {
    ariaLabel: "RSS Feed",
    children: <RssIcon />,
  },
};

export const AllIcons: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <IconButton ariaLabel="Search">
        <SearchIcon />
      </IconButton>
      <IconButton ariaLabel="Instagram">
        <InstagramIcon />
      </IconButton>
      <IconButton ariaLabel="RSS Feed">
        <RssIcon />
      </IconButton>
    </div>
  ),
};
