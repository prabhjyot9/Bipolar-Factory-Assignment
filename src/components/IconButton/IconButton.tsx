/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconsSettings24Px11 } from "../../icons/IconsSettings24Px11";

interface Props {
  configuration: "filled" | "outlined" | "tonal" | "standard";
  state: "enabled" | "pressed" | "focused" | "hovered" | "disabled";
  icon: JSX.Element;
  className: any;
}

export const IconButton = ({
  configuration,
  state,
  icon = <IconsSettings24Px11 className="!relative !w-[24px] !h-[24px]" color="#49454F" />,
  className,
}: Props): JSX.Element => {
  return (
    <div
      className={`w-[48px] flex flex-col items-center gap-[10px] h-[48px] justify-center relative ${
        state === "disabled" && configuration === "standard" ? "opacity-[0.38]" : ""
      } ${
        (configuration === "filled" && state === "disabled") ||
        (configuration === "outlined" && state === "disabled") ||
        (configuration === "outlined" && state === "enabled") ||
        (configuration === "tonal" && state === "disabled")
          ? "p-[8px]"
          : configuration === "filled" && state === "enabled"
          ? "p-[4px]"
          : ""
      } ${className}`}
    >
      <div
        className={`inline-flex items-center gap-[10px] flex-[0_0_auto] overflow-hidden rounded-[100px] justify-center relative ${
          configuration === "outlined" ? "border border-solid" : ""
        } ${
          state === "disabled" && configuration === "outlined"
            ? "border-m3state-layerslighton-surfaceopacity-012"
            : (configuration === "outlined" && state === "enabled") ||
              (configuration === "outlined" && state === "focused") ||
              (configuration === "outlined" && state === "hovered") ||
              (configuration === "outlined" && state === "pressed")
            ? "border-m-3syslightoutline"
            : ""
        } ${
          (configuration === "filled" && state === "disabled") ||
          (configuration === "outlined" && state === "disabled") ||
          (configuration === "outlined" && state === "enabled") ||
          (configuration === "tonal" && state === "disabled")
            ? "mt-[-4.00px]"
            : ""
        } ${
          (configuration === "filled" && state === "disabled") ||
          (configuration === "outlined" && state === "disabled") ||
          (configuration === "outlined" && state === "enabled") ||
          (configuration === "tonal" && state === "disabled")
            ? "mr-[-4.00px]"
            : ""
        } ${
          (configuration === "filled" && state === "disabled") ||
          (configuration === "outlined" && state === "disabled") ||
          (configuration === "outlined" && state === "enabled") ||
          (configuration === "tonal" && state === "disabled")
            ? "ml-[-4.00px]"
            : ""
        } ${
          state === "disabled" && ["filled", "tonal"].includes(configuration)
            ? "bg-m3state-layerslighton-surfaceopacity-012"
            : (configuration === "tonal" && state === "enabled") ||
              (configuration === "tonal" && state === "focused") ||
              (configuration === "tonal" && state === "hovered") ||
              (configuration === "tonal" && state === "pressed")
            ? "bg-m3syslightsecondary-container"
            : (configuration === "filled" && state === "enabled") ||
              (configuration === "filled" && state === "focused") ||
              (configuration === "filled" && state === "hovered") ||
              (configuration === "filled" && state === "pressed")
            ? "bg-m-3syslightprimary"
            : ""
        } ${
          (configuration === "filled" && state === "disabled") ||
          (configuration === "outlined" && state === "disabled") ||
          (configuration === "outlined" && state === "enabled") ||
          (configuration === "tonal" && state === "disabled")
            ? "mb-[-4.00px]"
            : ""
        }`}
      >
        <div
          className={`inline-flex items-center gap-[10px] flex-[0_0_auto] p-[8px] justify-center relative ${
            (configuration === "outlined" && state === "focused") ||
            (configuration === "outlined" && state === "pressed") ||
            (configuration === "standard" && state === "focused") ||
            (configuration === "standard" && state === "pressed")
              ? "bg-m3state-layerslighton-surface-variantopacity-012"
              : state === "hovered" && ["outlined", "standard"].includes(configuration)
              ? "bg-m3state-layerslighton-surface-variantopacity-008"
              : configuration === "tonal" && ["focused", "pressed"].includes(state)
              ? "bg-m3state-layerslighton-secondary-containeropacity-012"
              : configuration === "tonal" && state === "hovered"
              ? "bg-m3state-layerslighton-secondary-containeropacity-008"
              : configuration === "filled" && ["focused", "pressed"].includes(state)
              ? "bg-m3state-layerslighton-primaryopacity-012"
              : state === "hovered" && configuration === "filled"
              ? "bg-m3state-layerslighton-primaryopacity-008"
              : ""
          }`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
};

IconButton.propTypes = {
  configuration: PropTypes.oneOf(["filled", "outlined", "tonal", "standard"]),
  state: PropTypes.oneOf(["enabled", "pressed", "focused", "hovered", "disabled"]),
};
