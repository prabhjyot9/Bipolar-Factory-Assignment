import { IconButton } from "../../components/IconButton";

export default {
  title: "Components/IconButton",
  component: IconButton,
  argTypes: {
    configuration: {
      options: ["filled", "outlined", "tonal", "standard"],
      control: { type: "select" },
    },
    state: {
      options: ["enabled", "pressed", "focused", "hovered", "disabled"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    configuration: "filled",
    state: "enabled",
    className: {},
  },
};
