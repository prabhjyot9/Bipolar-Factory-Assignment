import React from "react";
import { ComponentKeyboard } from "../../components/ComponentKeyboard";
import { TextField } from "../../components/TextField";

export const Forms = (): JSX.Element => {
  return (
    <div className="bg-[#e0e0e0] flex flex-row justify-center w-full">
      <div className="bg-[#e0e0e0] w-[1512px] h-[982px]">
        <div className="items-center gap-[31px] top-[141px] left-[455px] shadow-[2px_2px_20px_#0000001a] inline-flex flex-col relative">
          <div className="items-start gap-[10px] pt-[60px] pb-[90px] px-[72px] flex-[0_0_auto] bg-white rounded-[16px] overflow-hidden inline-flex flex-col relative">
            <div className="inline-flex flex-col items-center gap-[36px] relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-bold text-black text-[40px] tracking-[0] leading-[normal] whitespace-nowrap">
                XYZ
              </div>
              <div className="flex flex-col w-[458px] items-end gap-[30px] relative flex-[0_0_auto]">
                <div className="flex flex-col w-[458px] items-center gap-[30px] relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-black text-[36px] tracking-[0] leading-[normal] whitespace-nowrap">
                    Welcome Onboard
                  </div>
                  <div className="flex flex-col items-start gap-[20px] relative self-stretch w-full flex-[0_0_auto]">
                    <div className="flex items-start gap-[6px] relative self-stretch w-full flex-[0_0_auto]">
                      <TextField
                        className="!flex-1 !grow !w-[unset]"
                        leadingIcon={false}
                        state="enabled"
                        stroke="/img/stroke.svg"
                        style="filled"
                        supportingText={false}
                        text="Your Name"
                        textConfigurations="label-text"
                        trailingIcon={false}
                      />
                    </div>
                    <div className="flex items-start gap-[6px] relative self-stretch w-full flex-[0_0_auto]">
                      <TextField
                        className="!flex-1 !grow !w-[unset]"
                        leadingIcon={false}
                        state="enabled"
                        stroke="/img/stroke.svg"
                        style="filled"
                        supportingText={false}
                        text="Company Name"
                        textConfigurations="label-text"
                        trailingIcon={false}
                      />
                    </div>
                    <div className="flex items-start gap-[6px] relative self-stretch w-full flex-[0_0_auto]">
                      <TextField
                        className="!flex-1 !grow !w-[unset]"
                        iconButtonIcon={
                          <ComponentKeyboard className="bg-[url(/img/keyboard-arrow-down.svg)] !relative" />
                        }
                        leadingIcon={false}
                        state="enabled"
                        stroke="/img/stroke.svg"
                        style="filled"
                        supportingText={false}
                        text="Select Industry"
                        textConfigurations="label-text"
                        trailingIcon
                      />
                    </div>
                    <div className="inline-flex flex-col items-start gap-[12px] relative flex-[0_0_auto]">
                      <div className="font-medium text-m3syslighton-surface text-[16px] tracking-[0.50px] leading-[24px] relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] whitespace-nowrap">
                        Select Number of Locations
                      </div>
                      <div className="inline-flex items-start gap-[12px] relative flex-[0_0_auto]">
                        <div className="relative w-[80px] h-[42px] bg-[#e7e0ec] rounded-[4px] overflow-hidden">
                          <div className="absolute top-[8px] left-[23px] [font-family:'Roboto',Helvetica] font-semibold text-[#222222] text-[16px] tracking-[0.50px] leading-[24px] whitespace-nowrap">
                            1-10
                          </div>
                        </div>
                        <div className="relative w-[80px] h-[42px] bg-[#e7e0ec] rounded-[4px] overflow-hidden">
                          <div className="absolute top-[8px] left-[18px] [font-family:'Roboto',Helvetica] font-semibold text-[#222222] text-[16px] tracking-[0.50px] leading-[24px] whitespace-nowrap">
                            10-50
                          </div>
                        </div>
                        <div className="relative w-[80px] h-[42px] bg-[#222222] rounded-[4px] overflow-hidden">
                          <div className="absolute top-[8px] left-[13px] [font-family:'Roboto',Helvetica] font-semibold text-white text-[16px] tracking-[0.50px] leading-[24px] whitespace-nowrap">
                            50-150
                          </div>
                        </div>
                        <div className="relative w-[80px] h-[42px] bg-[#e7e0ec] rounded-[4px] overflow-hidden">
                          <div className="absolute top-[8px] left-[21px] [font-family:'Roboto',Helvetica] font-semibold text-[#222222] text-[16px] tracking-[0.50px] leading-[24px] whitespace-nowrap">
                            150+
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="flex flex-col items-center justify-center gap-[8px] px-[40px] py-[6px] relative self-stretch w-full flex-[0_0_auto] bg-[#333333] rounded-[8px] overflow-hidden all-[unset] box-border">
                <div className="inline-flex justify-center gap-[8px] px-[24px] py-[10px] items-center relative flex-[0_0_auto]">
                  <div className="font-medium text-m3syslighton-primary text-[18px] text-center tracking-[0.10px] leading-[20px] relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] whitespace-nowrap">
                    CONTINUE
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
