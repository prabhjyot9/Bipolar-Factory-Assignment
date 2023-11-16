/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  className: any;
  frameClassName: any;
  divClassName: any;
  text: string;
  hasFilter: boolean;
  frameClassNameOverride: any;
  divClassNameOverride: any;
  gameIconsCctv: string;
  infoClassName: any;
  typcnInfo: string;
}

export const OverallCamera = ({
  className,
  frameClassName,
  divClassName,
  text = "Overall Camera Health",
  hasFilter = true,
  frameClassNameOverride,
  divClassNameOverride,
  gameIconsCctv = "/img/game-icons-cctv-camera-1.svg",
  infoClassName,
  typcnInfo = "/img/typcn-info-1.svg",
}: Props): JSX.Element => {
  return (
    <div
      className={`inline-flex flex-col items-start gap-[10px] px-[24px] py-[20px] relative bg-white rounded-[12px] overflow-hidden ${className}`}
    >
      <div className={`inline-flex flex-col items-start gap-[25px] relative flex-[0_0_auto] ${frameClassName}`}>
        <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
          <div
            className={`relative w-fit [font-family:'Roboto',Helvetica] font-semibold text-black text-[20px] tracking-[0.10px] leading-[20px] whitespace-nowrap ${divClassName}`}
          >
            {text}
          </div>
          {hasFilter && (
            <div className="inline-flex h-[40px] items-start justify-end gap-[16px] relative flex-[0_0_auto]">
              <div className="inline-flex flex-col items-center justify-center gap-[10px] px-[16px] py-[8px] relative flex-[0_0_auto] bg-[#eeeeee] rounded-[8px] overflow-hidden">
                <div className="inline-flex items-start gap-[10px] relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-black text-[14px] tracking-[0.50px] leading-[24px] whitespace-nowrap">
                    Filter by Locations
                  </div>
                  <img className="relative w-[24px] h-[24px]" alt="Icon park down" src="/img/icon-park-down-1.svg" />
                </div>
              </div>
              <div className="inline-flex flex-col items-center justify-center gap-[10px] px-[16px] py-[8px] relative flex-[0_0_auto] bg-[#eeeeee] rounded-[8px] overflow-hidden">
                <div className="inline-flex items-start gap-[10px] relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-black text-[14px] tracking-[0.50px] leading-[24px] whitespace-nowrap">
                    Filter by Month
                  </div>
                  <img className="relative w-[24px] h-[24px]" alt="Icon park down" src="/img/icon-park-down-1.svg" />
                </div>
              </div>
            </div>
          )}
        </div>
        <div className={`inline-flex items-center gap-[24px] relative flex-[0_0_auto] ${frameClassNameOverride}`}>
          <div className="relative w-[190px] h-[190px] bg-[url(/img/ellipse-14-1.svg)] bg-[100%_100%]">
            <div className="relative h-[190px]">
              <img
                className="absolute w-[181px] h-[125px] top-0 left-[9px]"
                alt="Ellipse"
                src="/img/ellipse-15-1.svg"
              />
              <img
                className="absolute w-[147px] h-[71px] top-[119px] left-[39px]"
                alt="Ellipse"
                src="/img/ellipse-16-1.svg"
              />
              <img className="absolute w-[51px] h-[83px] top-[92px] left-0" alt="Ellipse" src="/img/ellipse-17-1.svg" />
              <img className="absolute w-[24px] h-[43px] top-[52px] left-0" alt="Ellipse" src="/img/ellipse-18-1.svg" />
              <div className="inline-flex flex-col items-center justify-center gap-[2px] absolute top-[64px] left-[63px]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-bold text-black text-[36px] tracking-[0.10px] leading-[normal] whitespace-nowrap">
                  124
                </div>
                <div className="relative w-fit [font-family:'Roboto',Helvetica] font-normal text-black text-[16px] tracking-[0.10px] leading-[normal] whitespace-nowrap">
                  Cameras
                </div>
              </div>
            </div>
          </div>
          <div className={`inline-flex flex-col items-end gap-[22px] relative flex-[0_0_auto] ${divClassNameOverride}`}>
            <div className="flex flex-col items-end gap-[14px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="gap-[10px] bg-[#f1f1f1] flex items-center p-[16px] relative self-stretch w-full flex-[0_0_auto] rounded-[6px]">
                <img className="relative w-[24px] h-[24px]" alt="Game icons cctv" src={gameIconsCctv} />
                <p className="relative w-fit [font-family:'Roboto',Helvetica] font-normal text-black text-[14px] tracking-[0.50px] leading-[normal]">
                  <span className="font-medium">Totally </span>
                  <span className="font-bold text-[16px]">124</span>
                  <span className="font-medium"> Cameras are in 9 NVRs and installed in 12 Locations</span>
                </p>
              </div>
              <div
                className={`gap-[16px] bg-[#ffbfcc] flex items-center p-[16px] relative self-stretch w-full flex-[0_0_auto] rounded-[6px] ${infoClassName}`}
              >
                <div className="inline-flex items-center gap-[8px] relative flex-[0_0_auto]">
                  <img className="relative w-[24px] h-[24px]" alt="Typcn info" src={typcnInfo} />
                  <p className="relative w-fit [font-family:'Roboto',Helvetica] font-normal text-black text-[16px] tracking-[0.50px] leading-[normal] whitespace-nowrap">
                    <span className="font-bold">6</span>
                    <span className="font-medium text-[14px]"> Cameras were experiencing downtime in Last 30 days</span>
                  </p>
                </div>
                <div className="inline-flex items-center justify-center gap-[10px] p-[10px] relative self-stretch flex-[0_0_auto] bg-white rounded-[6px] overflow-hidden">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-semibold text-[#222222] text-[12px] tracking-[0.50px] leading-[normal] whitespace-nowrap">
                    View Cameras
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-[16px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="inline-flex items-center gap-[6px] relative flex-[0_0_auto]">
                <div className="bg-[#19a01e] relative w-[16px] h-[16px] rounded-[100px]" />
                <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-black text-[14px] tracking-[0] leading-[18px] whitespace-nowrap">
                  Super Healthy (56)
                </div>
                <img className="relative w-[16px] h-[16px]" alt="Ph info fill" src="/img/ph-info-fill-4.svg" />
              </div>
              <div className="inline-flex items-center gap-[6px] relative flex-[0_0_auto]">
                <div className="bg-[#00db4a] relative w-[16px] h-[16px] rounded-[100px]" />
                <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-black text-[14px] tracking-[0] leading-[18px] whitespace-nowrap">
                  Healthy (35)
                </div>
                <img className="relative w-[16px] h-[16px]" alt="Ph info fill" src="/img/ph-info-fill-4.svg" />
              </div>
              <div className="inline-flex items-center gap-[6px] relative flex-[0_0_auto]">
                <div className="bg-[#fa8a34] relative w-[16px] h-[16px] rounded-[100px]" />
                <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-black text-[14px] tracking-[0] leading-[18px] whitespace-nowrap">
                  Warning (27)
                </div>
                <img className="relative w-[16px] h-[16px]" alt="Ph info fill" src="/img/ph-info-fill-4.svg" />
              </div>
              <div className="inline-flex items-center gap-[6px] relative flex-[0_0_auto]">
                <div className="bg-[#ed1c24] relative w-[16px] h-[16px] rounded-[100px]" />
                <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-black text-[14px] tracking-[0] leading-[18px] whitespace-nowrap">
                  Danger (6)
                </div>
                <img className="relative w-[16px] h-[16px]" alt="Ph info fill" src="/img/ph-info-fill-4.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

OverallCamera.propTypes = {
  text: PropTypes.string,
  hasFilter: PropTypes.bool,
  gameIconsCctv: PropTypes.string,
  typcnInfo: PropTypes.string,
};
