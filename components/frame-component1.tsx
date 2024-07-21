import type { NextPage } from "next";

export type FrameComponent1Type = {
  className?: string;
  planing?: string;
  analysis?: string;
  weCraftPreciseTechnicalSp?: string;
  placeholderThree?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({
  className = "",
  planing,
  analysis,
  weCraftPreciseTechnicalSp,
  placeholderThree,
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start max-w-full text-left text-xl text-gray-900 font-sf-title-2-semibold ${className}`}
    >
      <div className="flex-1 shadow-[0px_0px_2px_rgba(0,_0,_0,_0.08),_0px_2px_24px_rgba(0,_0,_0,_0.08)] rounded-xl bg-white flex flex-col items-start justify-start py-6 pr-5 pl-6 box-border relative gap-[16px] max-w-full">
        <div className="flex flex-row items-start justify-start gap-[24px]">
          <img
            className="h-12 w-12 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src={planing}
          />
          <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
            <div className="relative tracking-[0.38px] leading-[24px] font-semibold inline-block min-w-[78px] mq450:text-base mq450:leading-[19px]">
              {analysis}
            </div>
          </div>
        </div>
        <div className="self-stretch h-[60px] relative text-mini tracking-[-0.24px] leading-[20px] font-sf-caption-1-regular inline-block">
          {weCraftPreciseTechnicalSp}
        </div>
        <img
          className="w-[85.9px] h-full absolute !m-[0] top-[0px] right-[0.1px] bottom-[0px] max-h-full z-[1]"
          loading="lazy"
          alt=""
          src={placeholderThree}
        />
      </div>
    </div>
  );
};

export default FrameComponent1;
