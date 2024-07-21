import type { NextPage } from "next";
import FrameComponent1 from "./frame-component1";

export type DevelopmentStagesType = {
  className?: string;
};

const DevelopmentStages: NextPage<DevelopmentStagesType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-20 box-border max-w-full text-left text-17xl text-gray-900 font-inter mq750:pb-[52px] mq750:box-border ${className}`}
    >
      <div className="w-[1224px] flex flex-col items-start justify-start gap-[34px] max-w-full mq750:gap-[17px]">
        <h1 className="m-0 w-[600px] relative text-inherit tracking-[0.33px] leading-[52px] font-bold font-inherit inline-block max-w-full mq1050:text-10xl mq1050:leading-[41px] mq450:text-3xl mq450:leading-[31px]">
          Application Development Stages
        </h1>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start [row-gap:20px] max-w-full text-xl font-sf-title-2-semibold">
          <div className="w-[392px] flex flex-col items-start justify-start gap-[24px] max-w-full">
            <FrameComponent1
              planing="/planing.svg"
              analysis="Analysis"
              weCraftPreciseTechnicalSp="We craft precise technical specs, aligning with your business, technology, and user requirements."
              placeholderThree="/1.svg"
            />
            <FrameComponent1
              planing="/graphicdesign.svg"
              analysis="Design"
              weCraftPreciseTechnicalSp="We adapt the customer's corporate identity to the platform guidelines. We draw convenient and understandable interfaces."
              placeholderThree="/2.svg"
            />
            <FrameComponent1
              planing="/codinglanguage.svg"
              analysis="Development"
              weCraftPreciseTechnicalSp="We create an extensible architecture, write clean and stable code. We integrate with customer technologies."
              placeholderThree="/3.svg"
            />
          </div>
          <img
            className="h-[564px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[286px] z-[1]"
            loading="lazy"
            alt=""
            src="/hopegif1@2x.png"
          />
          <div className="w-[392px] flex flex-col items-start justify-start gap-[24px] max-w-full">
            <FrameComponent1
              planing="/security.svg"
              analysis="Testing"
              weCraftPreciseTechnicalSp="We carry out functional testing and do bug fixes. We adapt the application to different phone resolutions"
              placeholderThree="/4.svg"
            />
            <div className="self-stretch flex flex-row items-start justify-start max-w-full">
              <div className="flex-1 shadow-[0px_0px_2px_rgba(0,_0,_0,_0.08),_0px_2px_24px_rgba(0,_0,_0,_0.08)] rounded-xl bg-white flex flex-col items-start justify-start py-6 pr-5 pl-6 box-border relative gap-[16px] max-w-full">
                <div className="flex flex-row items-start justify-start gap-[24px]">
                  <img
                    className="h-12 w-12 relative overflow-hidden shrink-0"
                    alt=""
                    src="/hosting-1.svg"
                  />
                  <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
                    <div className="relative tracking-[0.38px] leading-[24px] font-semibold inline-block min-w-[96px] mq450:text-base mq450:leading-[19px]">
                      Launching
                    </div>
                  </div>
                </div>
                <div className="self-stretch relative text-mini tracking-[-0.24px] leading-[20px] font-sf-caption-1-regular inline-block min-h-[60px]">
                  <p className="m-0">
                    We design the application page and publish it in the App
                    Store and Google Play stores.
                  </p>
                </div>
                <img
                  className="w-[134.3px] h-full absolute !m-[0] top-[0px] right-[-0.3px] bottom-[0px] max-h-full z-[1]"
                  loading="lazy"
                  alt=""
                  src="/5.svg"
                />
              </div>
            </div>
            <FrameComponent1
              planing="/application.svg"
              analysis="Support"
              weCraftPreciseTechnicalSp="We monitor the stability of the application, update it for new devices and versions of iOS and Android."
              placeholderThree="/6.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentStages;
