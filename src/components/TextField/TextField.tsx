/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconsCancel24Px1 } from "../../icons/IconsCancel24Px1";
import { IconsError24Px } from "../../icons/IconsError24Px";
import { IconsSearch24Px } from "../../icons/IconsSearch24Px";
import { IconButton } from "../IconButton";

interface Props {
  supportingText: boolean;
  style: "outlined" | "filled";
  state: "enabled" | "focused" | "hovered" | "error" | "disabled";
  textConfigurations: "input-text" | "label-text" | "placeholder-text";
  leadingIcon: boolean;
  trailingIcon: boolean;
  className: any;
  text: string;
  stroke: string;
  iconButtonIcon: JSX.Element;
  inputType: string;
}

export const TextField = ({
  supportingText = true,
  style,
  state,
  textConfigurations,
  leadingIcon,
  trailingIcon,
  className,
  text = "Label",
  stroke = "/img/stroke-11.svg",
  iconButtonIcon = <IconsCancel24Px1 className="!relative !w-[24px] !h-[24px]" color="#49454F" />,
  inputType = "text",
}: Props): JSX.Element => {
  return (
    <div className={`w-[210px] flex flex-col items-start h-[56px] rounded-[4px_4px_0px_0px] relative ${className}`}>
      {((state === "enabled" && style === "filled") ||
        (state === "error" && style === "filled") ||
        (state === "focused" && style === "filled") ||
        (state === "hovered" && style === "filled")) && (
        <div className="w-full flex self-stretch flex-col items-start gap-[10px] flex-[0_0_auto] rounded-[4px_4px_0px_0px] bg-m3syslightsurface-variant relative">
          <div
            className={`w-full flex self-stretch items-center flex-[0_0_auto] rounded-[4px_4px_0px_0px] relative ${
              !trailingIcon && !leadingIcon
                ? "px-[16px] py-[8px]"
                : trailingIcon && leadingIcon
                ? "px-0 py-[4px]"
                : !trailingIcon && leadingIcon
                ? "pl-0 pr-[16px] py-[4px]"
                : "pl-[16px] pr-0 py-[4px]"
            } ${state === "hovered" ? "bg-m3state-layerslighton-surfaceopacity-008" : ""}`}
          >
            {leadingIcon && (
              <IconButton
                configuration="standard"
                icon={<IconsSearch24Px className="!relative !w-[24px] !h-[24px]" />}
                state="enabled" className={undefined}              />
            )}

            <div className="flex flex-col items-start grow flex-1 h-[40px] justify-center relative">
              <div className="inline-flex items-center flex-[0_0_auto] relative">
                <div
                  className={`w-fit mt-[-1.00px] relative whitespace-nowrap ${
                    textConfigurations === "label-text" ? "font-m3-body-large" : "font-m3-body-small"
                  } ${
                    textConfigurations === "label-text"
                      ? "tracking-[var(--m3-body-large-letter-spacing)]"
                      : "tracking-[var(--m3-body-small-letter-spacing)]"
                  } ${
                    textConfigurations === "label-text"
                      ? "text-[length:var(--m3-body-large-font-size)]"
                      : "text-[length:var(--m3-body-small-font-size)]"
                  } ${
                    textConfigurations === "label-text"
                      ? "[font-style:var(--m3-body-large-font-style)]"
                      : "[font-style:var(--m3-body-small-font-style)]"
                  } ${
                    state === "focused" && ["input-text", "placeholder-text"].includes(textConfigurations)
                      ? "text-m-3syslightprimary"
                      : state === "error" && ["input-text", "placeholder-text"].includes(textConfigurations)
                      ? "text-m-3syslighterror"
                      : "text-m3syslighton-surface"
                  } ${
                    textConfigurations === "label-text"
                      ? "font-[number:var(--m3-body-large-font-weight)]"
                      : "font-[number:var(--m3-body-small-font-weight)]"
                  } ${
                    textConfigurations === "label-text"
                      ? "leading-[var(--m3-body-large-line-height)]"
                      : "leading-[var(--m3-body-small-line-height)]"
                  }`}
                >
                  {text}
                </div>
                {textConfigurations === "label-text" && state === "focused" && (
                  <img className="w-px mr-[-0.50px] h-[17px] relative" alt="Caret" src="/img/caret.svg" />
                )}
              </div>
              {["input-text", "placeholder-text"].includes(textConfigurations) && (
                <div
                  className={`inline-flex flex-[0_0_auto] relative ${
                    textConfigurations === "placeholder-text" ? "items-start" : "items-center"
                  } ${textConfigurations === "placeholder-text" ? "gap-[10px]" : ""}`}
                >
                  <div className="font-m3-body-large w-fit mt-[-1.00px] tracking-[var(--m3-body-large-letter-spacing)] text-[length:var(--m3-body-large-font-size)] [font-style:var(--m3-body-large-font-style)] text-m3syslighton-surface relative font-[number:var(--m3-body-large-font-weight)] whitespace-nowrap leading-[var(--m3-body-large-line-height)]">
                    {textConfigurations === "input-text" && <>Input</>}

                    {textConfigurations === "placeholder-text" && <>Placeholder</>}
                  </div>
                  {textConfigurations === "input-text" && ["error", "focused"].includes(state) && (
                    <img
                      className="w-px mr-[-0.50px] h-[17px] relative"
                      alt="Caret"
                      src={state === "error" ? "/img/caret-8.svg" : "/img/caret.svg"}
                    />
                  )}
                </div>
              )}
            </div>
            {trailingIcon && leadingIcon && (
              <IconButton
                configuration="standard"
                icon={state === "error" ? (
                  <IconsError24Px className="!relative !w-[24px] !h-[24px]" />
                ) : (
                  <IconsCancel24Px1 className="!relative !w-[24px] !h-[24px]" color="#49454F" />
                )}
                state="enabled" className={undefined}              />
            )}

            {trailingIcon && !leadingIcon && (
              <IconButton configuration="standard" icon={iconButtonIcon} state="enabled" className={undefined} />
            )}
          </div>
        </div>
      )}

      {style === "outlined" && (
        <>
          <div
            className={`w-full flex self-stretch flex-col items-start gap-[10px] flex-[0_0_auto] relative ${
              ["enabled", "hovered"].includes(state)
                ? "border border-solid"
                : ["error", "focused"].includes(state)
                ? "border-2 border-solid"
                : ""
            } ${
              ["enabled", "hovered"].includes(state)
                ? "border-m-3syslightoutline"
                : state === "focused"
                ? "border-m-3syslightprimary"
                : state === "error"
                ? "border-m-3syslighterror"
                : ""
            } ${state === "disabled" ? "rounded-[4px_4px_0px_0px]" : "rounded-[4px]"}`}
          >
            <div
              className={`w-full flex self-stretch items-center flex-[0_0_auto] relative ${
                state === "disabled" ? "border border-solid" : ""
              } ${
                state === "disabled" && textConfigurations === "input-text"
                  ? "border-m3state-layerslightoutlineopacity-012"
                  : state === "disabled" && ["label-text", "placeholder-text"].includes(textConfigurations)
                  ? "border-m3state-layerslighton-surfaceopacity-012"
                  : ""
              } ${state === "disabled" ? "mt-[-1.00px]" : ""} ${state === "disabled" ? "mr-[-1.00px]" : ""} ${
                state === "disabled" ? "ml-[-1.00px]" : ""
              } ${
                !trailingIcon && !leadingIcon
                  ? "pl-[16px] pr-0 py-[8px]"
                  : trailingIcon && leadingIcon
                  ? "px-0 py-[4px]"
                  : !trailingIcon && leadingIcon
                  ? "pl-0 pr-[16px] py-[4px]"
                  : "pl-[16px] pr-0 py-[4px]"
              } ${state === "disabled" ? "rounded-[4px]" : "rounded-[4px_4px_0px_0px]"} ${
                state === "disabled" ? "mb-[-1.00px]" : ""
              }`}
            >
              {leadingIcon && (
                <IconButton
                  className={state === "disabled" ? "!opacity-[0.38]" : undefined}
                  configuration="standard"
                  icon={<IconsSearch24Px className="!relative !w-[24px] !h-[24px]" />}
                  state="enabled"
                />
              )}

              <div className="flex flex-col items-start grow flex-1 h-[40px] justify-center relative">
                {((state === "disabled" && textConfigurations === "input-text") ||
                  (state === "disabled" && textConfigurations === "placeholder-text") ||
                  (state === "enabled" && textConfigurations === "input-text") ||
                  (state === "enabled" && textConfigurations === "placeholder-text") ||
                  (state === "error" && textConfigurations === "input-text") ||
                  (state === "error" && textConfigurations === "placeholder-text") ||
                  state === "focused" ||
                  (state === "hovered" && textConfigurations === "input-text") ||
                  (state === "hovered" && textConfigurations === "placeholder-text")) && (
                  <>
                    <div
                      className={`inline-flex flex-[0_0_auto] relative ${
                        textConfigurations === "placeholder-text" ? "items-start" : "items-center"
                      } ${textConfigurations === "placeholder-text" ? "gap-[10px]" : ""}`}
                    >
                      {((state === "disabled" && textConfigurations === "input-text") ||
                        (state === "enabled" && textConfigurations === "input-text") ||
                        (state === "hovered" && textConfigurations === "input-text") ||
                        textConfigurations === "placeholder-text") && (
                        <div
                          className={`font-m3-body-large w-fit mt-[-1.00px] tracking-[var(--m3-body-large-letter-spacing)] text-[length:var(--m3-body-large-font-size)] [font-style:var(--m3-body-large-font-style)] text-m3syslighton-surface font-[number:var(--m3-body-large-font-weight)] leading-[var(--m3-body-large-line-height)] whitespace-nowrap relative ${
                            state === "disabled" ? "opacity-[0.38]" : ""
                          }`}
                        >
                          {textConfigurations === "input-text" && <>Input</>}

                          {textConfigurations === "placeholder-text" && <>Placeholder</>}
                        </div>
                      )}

                      {textConfigurations === "input-text" && ["error", "focused"].includes(state) && (
                        <>
                          <input
                            className="font-m3-body-large w-fit mt-[-1.00px] tracking-[var(--m3-body-large-letter-spacing)] text-[length:var(--m3-body-large-font-size)] [font-style:var(--m3-body-large-font-style)] text-m3syslighton-surface font-[number:var(--m3-body-large-font-weight)] leading-[var(--m3-body-large-line-height)] whitespace-nowrap relative [background:transparent] border-[none] p-0"
                            placeholder="Input"
                            type={inputType}
                          />
                          <img
                            className="w-px mr-[-0.50px] h-[17px] relative"
                            alt="Caret"
                            src={state === "error" ? "/img/caret-8.svg" : "/img/caret.svg"}
                          />
                        </>
                      )}

                      {textConfigurations === "label-text" && (
                        <img
                          className="w-px mt-[-0.50px] ml-[-0.50px] h-[17px] mb-[-0.50px] relative"
                          alt="Caret"
                          src="/img/caret.svg"
                        />
                      )}
                    </div>
                    <div
                      className={`inline-flex items-center top-[-16px] px-[4px] py-0 bg-m-3syslightsurface absolute ${
                        leadingIcon ? "left-[-36px]" : "left-[-4px]"
                      }`}
                    >
                      <div
                        className={`font-m3-body-small w-fit mt-[-1.00px] tracking-[var(--m3-body-small-letter-spacing)] text-[length:var(--m3-body-small-font-size)] [font-style:var(--m3-body-small-font-style)] font-[number:var(--m3-body-small-font-weight)] leading-[var(--m3-body-small-line-height)] whitespace-nowrap relative ${
                          state === "disabled" ? "opacity-[0.38]" : ""
                        } ${
                          state === "focused"
                            ? "text-m-3syslightprimary"
                            : state === "error"
                            ? "text-m-3syslighterror"
                            : "text-m3syslighton-surface"
                        }`}
                      >
                        {text}
                      </div>
                    </div>
                  </>
                )}

                {((state === "disabled" && textConfigurations === "label-text") ||
                  (state === "enabled" && textConfigurations === "label-text") ||
                  (state === "error" && textConfigurations === "label-text") ||
                  (state === "hovered" && textConfigurations === "label-text")) && (
                  <div className="inline-flex items-center flex-[0_0_auto] relative">
                    <div
                      className={`font-m3-body-large w-fit mt-[-1.00px] tracking-[var(--m3-body-large-letter-spacing)] text-[length:var(--m3-body-large-font-size)] [font-style:var(--m3-body-large-font-style)] text-m3syslighton-surface font-[number:var(--m3-body-large-font-weight)] leading-[var(--m3-body-large-line-height)] whitespace-nowrap relative ${
                        state === "disabled" ? "opacity-[0.38]" : ""
                      }`}
                    >
                      {text}
                    </div>
                  </div>
                )}
              </div>
              {trailingIcon && leadingIcon && (
                <IconButton
                  className={state === "disabled" ? "!opacity-[0.38]" : undefined}
                  configuration="standard"
                  icon={
                    state === "error" ? (
                      <IconsError24Px className="!relative !w-[24px] !h-[24px]" />
                    ) : (
                      <IconsCancel24Px1 className="!relative !w-[24px] !h-[24px]" color="#49454F" />
                    )
                  }
                  state="enabled"
                />
              )}

              {trailingIcon && !leadingIcon}
            </div>
          </div>
          <>
            {supportingText && (
              <div
                className={`w-full flex self-stretch items-start gap-[10px] flex-[0_0_auto] pt-[4px] pb-0 px-[16px] mb-[-20.00px] relative ${
                  state === "disabled" ? "opacity-[0.38]" : ""
                }`}
              >
                <div
                  className={`font-m3-body-small mt-[-1.00px] tracking-[var(--m3-body-small-letter-spacing)] text-[length:var(--m3-body-small-font-size)] [font-style:var(--m3-body-small-font-style)] flex-1 font-[number:var(--m3-body-small-font-weight)] leading-[var(--m3-body-small-line-height)] relative ${
                    state === "error" ? "text-m-3syslighterror" : "text-m3syslighton-surface"
                  }`}
                >
                  Supporting text
                </div>
              </div>
            )}
          </>
        </>
      )}

      {style === "filled" && state === "disabled" && (
        <>
          <div className="w-[210px] left-0 opacity-[0.04] top-0 h-[56px] rounded-[4px_4px_0px_0px] bg-m3syslighton-surface absolute" />
          <div className="w-full flex self-stretch flex-col items-start opacity-[0.38] gap-[10px] flex-[0_0_auto] rounded-[4px_4px_0px_0px] relative">
            <div
              className={`w-full flex self-stretch items-center flex-[0_0_auto] rounded-[4px_4px_0px_0px] relative ${
                !trailingIcon && !leadingIcon
                  ? "pl-[16px] pr-0 py-[8px]"
                  : trailingIcon && leadingIcon
                  ? "px-0 py-[4px]"
                  : !trailingIcon && leadingIcon
                  ? "pl-0 pr-[16px] py-[4px]"
                  : "pl-[16px] pr-0 py-[4px]"
              }`}
            >
              {leadingIcon && (
                <IconButton
                  configuration="standard"
                  icon={<IconsSearch24Px className="!relative !w-[24px] !h-[24px]" />}
                  state="enabled" className={undefined}                />
              )}

              <div className="flex flex-col items-start grow flex-1 h-[40px] justify-center relative">
                <div className="inline-flex items-center flex-[0_0_auto] relative">
                  <div
                    className={`w-fit mt-[-1.00px] text-m3syslighton-surface whitespace-nowrap relative ${
                      textConfigurations === "label-text" ? "font-m3-body-large" : "font-m3-body-small"
                    } ${
                      textConfigurations === "label-text"
                        ? "tracking-[var(--m3-body-large-letter-spacing)]"
                        : "tracking-[var(--m3-body-small-letter-spacing)]"
                    } ${
                      textConfigurations === "label-text"
                        ? "text-[length:var(--m3-body-large-font-size)]"
                        : "text-[length:var(--m3-body-small-font-size)]"
                    } ${
                      textConfigurations === "label-text"
                        ? "[font-style:var(--m3-body-large-font-style)]"
                        : "[font-style:var(--m3-body-small-font-style)]"
                    } ${
                      textConfigurations === "label-text"
                        ? "font-[number:var(--m3-body-large-font-weight)]"
                        : "font-[number:var(--m3-body-small-font-weight)]"
                    } ${
                      textConfigurations === "label-text"
                        ? "leading-[var(--m3-body-large-line-height)]"
                        : "leading-[var(--m3-body-small-line-height)]"
                    }`}
                  >
                    {text}
                  </div>
                </div>
                {["input-text", "placeholder-text"].includes(textConfigurations) && (
                  <div
                    className={`inline-flex flex-[0_0_auto] relative ${
                      textConfigurations === "placeholder-text" ? "items-start" : "items-center"
                    } ${textConfigurations === "placeholder-text" ? "gap-[10px]" : ""}`}
                  >
                    <div className="font-m3-body-large w-fit mt-[-1.00px] tracking-[var(--m3-body-large-letter-spacing)] text-[length:var(--m3-body-large-font-size)] [font-style:var(--m3-body-large-font-style)] text-m3syslighton-surface font-[number:var(--m3-body-large-font-weight)] leading-[var(--m3-body-large-line-height)] whitespace-nowrap relative">
                      {textConfigurations === "input-text" && <>Input</>}

                      {textConfigurations === "placeholder-text" && <>Placeholder</>}
                    </div>
                  </div>
                )}
              </div>
              {trailingIcon && (
                <IconButton
                  configuration="standard"
                  icon={<IconsCancel24Px1 className="!relative !w-[24px] !h-[24px]" color="#49454F" />}
                  state="enabled" className={undefined}                />
              )}
            </div>
          </div>
        </>
      )}

      {style === "filled" && (
        <img
          className={`w-full self-stretch relative ${
            ["disabled", "enabled", "hovered"].includes(state) ? "object-cover" : ""
          } ${["error", "focused"].includes(state) ? "h-[2px]" : "h-px"}`}
          alt="Stroke"
          src={
            state === "focused"
              ? "/img/stroke-7.svg"
              : state === "error"
              ? "/img/stroke-3.svg"
              : state === "disabled"
              ? "/img/stroke-15.svg"
              : stroke
          }
        />
      )}

      {style === "filled" && (
        <>
          <>
            {supportingText && (
              <div
                className={`w-full flex self-stretch items-start gap-[10px] flex-[0_0_auto] pt-[4px] pb-0 px-[16px] mb-[-20.00px] relative ${
                  state === "disabled" ? "opacity-[0.38]" : ""
                }`}
              >
                <div
                  className={`font-m3-body-small mt-[-1.00px] tracking-[var(--m3-body-small-letter-spacing)] text-[length:var(--m3-body-small-font-size)] [font-style:var(--m3-body-small-font-style)] flex-1 font-[number:var(--m3-body-small-font-weight)] leading-[var(--m3-body-small-line-height)] relative ${
                    state === "error" ? "text-m-3syslighterror" : "text-m3syslighton-surface"
                  }`}
                >
                  Supporting text
                </div>
              </div>
            )}
          </>
        </>
      )}
    </div>
  );
};

TextField.propTypes = {
  supportingText: PropTypes.bool,
  style: PropTypes.oneOf(["outlined", "filled"]),
  state: PropTypes.oneOf(["enabled", "focused", "hovered", "error", "disabled"]),
  textConfigurations: PropTypes.oneOf(["input-text", "label-text", "placeholder-text"]),
  leadingIcon: PropTypes.bool,
  trailingIcon: PropTypes.bool,
  text: PropTypes.string,
  stroke: PropTypes.string,
  inputType: PropTypes.string,
};
