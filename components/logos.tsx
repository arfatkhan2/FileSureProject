import type { NextPage } from "next";
import Component from "./component";

export type LogosType = {
  className?: string;
};

const Logos: NextPage<LogosType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-[55px] pb-[73.8px] box-border max-w-full text-left text-xl text-gray-900 font-sf-title-2-semibold mq750:pl-[27px] mq750:pr-[27px] mq750:pb-12 mq750:box-border ${className} `}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[27.1px] max-w-full">
        <div className="self-stretch overflow-hidden flex flex-row items-start justify-between py-[58px] px-0 shrink-0 gap-[20px] border-t-[1px] border-solid border-gainsboro border-b-[1px] lg:flex-wrap lg:justify-center">
          <img
            className="self-stretch w-[163.6px] relative max-h-full object-contain min-h-[72px]"
            loading="lazy"
            alt=""
            src="/image-10@2x.png"
          />
          <img
            className="self-stretch w-[163.6px] relative max-h-full object-contain min-h-[72px]"
            loading="lazy"
            alt=""
            src="/image-11@2x.png"
          />
          <img
            className="self-stretch w-[163.6px] relative max-h-full object-contain min-h-[72px]"
            alt=""
            src="/image-12@2x.png"
          />
          <img
            className="self-stretch w-[163.6px] relative max-h-full object-contain min-h-[72px]"
            loading="lazy"
            alt=""
            src="/image-13@2x.png"
          />
          <img
            className="self-stretch w-[163.6px] relative max-h-full object-contain min-h-[72px]"
            loading="lazy"
            alt=""
            src="/image-15@2x.png"
          />
          <img
            className="self-stretch w-[163.6px] relative max-h-full object-contain min-h-[72px]"
            loading="lazy"
            alt=""
            src="/image-16@2x.png"
          />
        </div>
        <div className="w-[1067px] flex flex-row items-start justify-start py-0 px-[53px] box-border max-w-full mq1050:pl-[26px] mq1050:pr-[26px] mq1050:box-border">
          <div className="flex-1 flex flex-row items-start justify-between shrink-0 max-w-full gap-[20px] mq1050:flex-wrap">
            <div className="w-[600px] flex flex-col items-start justify-start gap-[32.7px] min-w-[600px] max-w-full mq750:gap-[16px] mq1050:flex-1 mq1050:min-w-full">
              <h1 className="m-0 self-stretch relative text-17xl tracking-[0.33px] leading-[52px] font-bold font-inter mq1050:text-10xl mq1050:leading-[41px] mq450:text-3xl mq450:leading-[31px]">
                Full development cycle
              </h1>
              <div className="self-stretch relative text-mini tracking-[-0.24px] leading-[20px] font-medium font-sf-caption-1-regular">
                We use proven technologies
              </div>
              <div className="w-[496px] flex flex-col items-start justify-start gap-[16px] max-w-full">
                <div className="self-stretch relative tracking-[0.38px] leading-[24px] font-semibold mq450:text-base mq450:leading-[19px]">
                  Web
                </div>
                <div className="self-stretch relative text-mid tracking-[-0.41px] leading-[22px] font-sf-caption-1-regular text-darkslategray-200">
                  <span>{`PHP `}</span>
                  <span className="text-olivedrab">/</span>
                  <span>{` Javascript `}</span>
                  <span className="text-olivedrab">/</span>
                  <span>{` Node.JS `}</span>
                  <span className="text-olivedrab">/</span>
                  <span>{` Web Socket `}</span>
                  <span className="text-olivedrab">/</span>
                  <span>{` Socket.io `}</span>
                  <span className="text-olivedrab">/</span>
                  <span> Vue.js</span>
                  <span className="text-olivedrab">/</span>
                  <span>{` Nuxt `}</span>
                  <span className="text-olivedrab">/</span>
                  <span>{` MySQL `}</span>
                  <span className="text-olivedrab">/</span>
                  <span>{` Laravel `}</span>
                  <span className="text-olivedrab">/</span>
                  <span>{` GO lang `}</span>
                  <span className="text-olivedrab">/</span>
                  <span>{` django `}</span>
                  <span className="text-olivedrab">{`/ `}</span>
                  <span>Python</span>
                </div>
              </div>
              <div className="w-[496px] flex flex-col items-start justify-start gap-[16px] max-w-full">
                <div className="self-stretch relative tracking-[0.38px] leading-[24px] font-semibold mq450:text-base mq450:leading-[19px]">
                  Mobile
                </div>
                <div className="self-stretch relative text-mid tracking-[-0.41px] leading-[22px] font-sf-caption-1-regular text-darkslategray-200">
                  <span>{`Swift `}</span>
                  <span className="text-olivedrab">/</span>
                  <span>{` Kotlin `}</span>
                  <span className="text-olivedrab">/</span>
                  <span>{` Alamofire `}</span>
                  <span className="text-olivedrab">/</span>
                  <span>{` Firebase `}</span>
                  <span className="text-olivedrab">/</span>
                  <span>{` CoreData `}</span>
                  <span className="text-olivedrab">/</span>
                  <span>{` Room `}</span>
                  <span className="text-olivedrab">/</span>
                  <span>{` Realm `}</span>
                  <span className="text-olivedrab">/</span>
                  <span>{` Coroutine `}</span>
                  <span className="text-olivedrab">/</span>
                  <span>{` RxJava `}</span>
                  <span className="text-olivedrab">/</span>
                  <span>{` RxSwift `}</span>
                  <span className="text-olivedrab">/</span>
                  <span>{` Unit Test `}</span>
                  <span className="text-olivedrab">/</span>
                  <span> Navigation</span>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start relative min-w-[233px] text-gray1-100 mq1050:flex-1">
              
              <div className="flex flex-col items-start justify-start z-[1]">
                <Component iOSDevelopment="iOS  development" />
                <div className="flex flex-row items-center justify-start py-3 px-0 gap-[12px] text-gray-900">
                  <div className="flex flex-col items-start justify-start gap-[4px]">
                    <div className="relative tracking-[0.38px] leading-[24px] font-semibold mq450:text-base mq450:leading-[19px]">
                      Android development
                    </div>
                    <div className="w-[189px] h-0 flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border">
                      <img
                        className="self-stretch h-px relative max-w-full overflow-hidden shrink-0"
                        alt=""
                        src="/project-growth.svg"
                      />
                    </div>
                  </div>
                  <img
                    className="h-6 w-6 relative"
                    alt=""
                    src="/chevron-right-small-24.svg"
                  />
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/chevron-right-outline-24.svg"
                  />
                </div>
                <Component iOSDevelopment="Web development" />
                <Component iOSDevelopment="UI/UX design" />
                <Component iOSDevelopment="Testing" />
                <Component iOSDevelopment="Launch" />
                <Component iOSDevelopment="IT consulting" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logos;
