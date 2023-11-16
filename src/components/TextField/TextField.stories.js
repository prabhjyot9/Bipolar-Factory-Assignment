import { TextField } from ".";

export default {
  title: "Components/TextField",
  component: TextField,
  argTypes: {
    style: {
      options: ["outlined", "filled"],
      control: { type: "select" },
    },
    state: {
      options: ["enabled", "focused", "hovered", "error", "disabled"],
      control: { type: "select" },
    },
    textConfigurations: {
      options: ["input-text", "label-text", "placeholder-text"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    supportingText: true,
    style: "outlined",
    state: "enabled",
    textConfigurations: "input-text",
    leadingIcon: true,
    trailingIcon: true,
    className: {},
    text: "Label",
    stroke: "/img/stroke-11.svg",
    inputType: "text",
  },
};
