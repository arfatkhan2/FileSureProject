import type { NextPage } from "next";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-whitesmoke flex flex-row flex-wrap items-start justify-center py-20 px-[108px] box-border gap-[24px] max-w-full text-left text-mini text-gray-900 font-inter mq750:py-[52px] mq750:px-[54px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[67px] box-border gap-[32px] min-w-[390px] max-w-full mq750:gap-[16px] mq750:min-w-full mq450:pb-11 mq450:box-border">
        <h1 className="m-0 self-stretch relative text-17xl tracking-[0.33px] leading-[52px] font-bold font-inherit mq1050:text-10xl mq1050:leading-[41px] mq450:text-3xl mq450:leading-[31px]">
          Our team
        </h1>
        <div className="self-stretch relative tracking-[-0.24px] leading-[20px] font-medium font-sf-caption-1-regular">
          Thousand is a full-cycle digital production company with its own
          product analytics, design, web and mobile development.
        </div>
        <div className="w-[584px] flex flex-row items-start justify-start py-2 px-0 box-border gap-[16px] max-w-full text-29xl mq750:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[138px]">
            <b className="relative tracking-[0.33px] leading-[144%] inline-block min-w-[63px] mq1050:text-19xl mq1050:leading-[55px] mq450:text-10xl mq450:leading-[41px]">
              28
            </b>
            <div className="self-stretch relative text-mini tracking-[-0.24px] leading-[20px] font-medium font-sf-caption-1-regular text-gray-500">
              team members
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[138px]">
            <b className="relative tracking-[0.33px] leading-[144%] inline-block min-w-[124px] whitespace-nowrap mq1050:text-19xl mq1050:leading-[55px] mq450:text-10xl mq450:leading-[41px]">
              +100
            </b>
            <div className="self-stretch relative text-mini tracking-[-0.24px] leading-[20px] font-medium font-sf-caption-1-regular text-gray-500">
              projects
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[138px]">
            <h1 className="m-0 relative text-inherit tracking-[0.33px] leading-[144%] font-bold font-inherit mq1050:text-19xl mq1050:leading-[55px] mq450:text-10xl mq450:leading-[41px]">
              7 years
            </h1>
            <div className="self-stretch relative text-mini tracking-[-0.24px] leading-[20px] font-medium font-sf-caption-1-regular text-gray-500">
              in IT sphere
            </div>
          </div>
        </div>
        <div className="self-stretch relative tracking-[-0.24px] leading-[20px] font-medium font-sf-caption-1-regular">
          All the necessary specialists - from a designer to a tester - are on
          our staff. We hire the best specialists in the market. It's expensive
          but worth it
        </div>
      </div>
      <div className="h-[408px] flex-1 relative min-w-[390px] max-w-full mq750:min-w-full">
        <div className="absolute top-[48px] left-[20px] rounded-2xl w-[560px] h-[360px] flex items-center justify-center">
          <img
            className="w-full h-full object-contain absolute left-[0px] top-[0px] [transform:scale(1.178)]"
            alt=""
            src="/img-6115@2x.png"
          />
        </div>
        <div className="absolute top-[0px] left-[0px] rounded-xl w-full flex flex-row items-start justify-center py-[170px] px-5 box-border bg-[url('/img-61151@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full h-full z-[1]">
          <img
            className="h-[400px] w-[600px] relative rounded-xl object-cover hidden max-w-full"
            alt=""
            src="/img-61151@2x.png"
          />
          <div className="h-[60px] w-[60px] rounded-81xl flex flex-row items-start justify-start p-3 box-border z-[1]">
            <img
              className="h-9 w-9 relative"
              loading="lazy"
              alt=""
              src="/play-36.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
