import type { NextPage } from "next";

export type RentalProjectType = {
  className?: string;
};

const RentalProject: NextPage<RentalProjectType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start gap-[24px] max-w-full text-left text-17xl text-gray-900 font-inter lg:flex-wrap ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start py-0 pr-[154px] pl-0 box-border gap-[32px] min-w-[490px] max-w-full mq750:gap-[16px] mq750:pr-[77px] mq750:box-border mq750:min-w-full mq450:pr-5 mq450:box-border">
        <h1 className="m-0 relative text-inherit tracking-[0.33px] leading-[52px] font-bold font-inherit mq1050:text-10xl mq1050:leading-[41px] mq450:text-3xl mq450:leading-[31px]">
          Project 1
        </h1>
        <div className="self-stretch flex flex-col items-start justify-start gap-[40px] max-w-full text-mini font-sf-caption-1-regular mq750:gap-[20px]">
          <div className="self-stretch relative tracking-[-0.24px] leading-[20px]">
            Crafted an innovative rental property management app, seamlessly
            integrating secure login, absence registration, and a tenant notice
            board. Elevating the resident experience with user-friendly design
            and efficient communication channels
          </div>
          <div className="w-[496px] relative text-mid tracking-[-0.41px] leading-[22px] inline-block max-w-full text-darkslategray-100">
            <span>{`Business analysis `}</span>
            <span className="text-orange-100">/</span>
            <span>{` iOS `}</span>
            <span className="text-orange-100">/</span>
            <span>{` Android `}</span>
            <span className="text-orange-100">/</span>
            <span>{` QA `}</span>
            <span className="text-orange-100">/</span>
            <span> UI/UX Design</span>
          </div>
          <div className="flex flex-row items-start justify-start gap-[32px]">
            <div className="flex flex-row items-center justify-start gap-[8px]">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 object-cover"
                loading="lazy"
                alt=""
                src="/place-outline-24@2x.png"
              />
              <div className="relative tracking-[-0.24px] leading-[20px] inline-block min-w-[33px]">
                India
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[8px]">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 object-cover"
                loading="lazy"
                alt=""
                src="/work-outline-24@2x.png"
              />
              <div className="relative tracking-[-0.24px] leading-[20px] inline-block min-w-[77px]">
                Real Estate
              </div>
            </div>
          </div>
          <div className="w-[252px] flex flex-row items-start justify-between gap-[20px] text-5xl font-inter">
            <div className="flex flex-col items-start justify-start gap-[8px]">
              <b className="relative tracking-[0.33px] leading-[35px] inline-block min-w-[72px] mq450:text-lgi mq450:leading-[28px]">
                400%
              </b>
              <div className="relative text-smi tracking-[-0.08px] leading-[16px] font-sf-caption-1-regular text-gray-500 inline-block min-w-[76px]">
                User Growth
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[8px]">
              <b className="relative tracking-[0.33px] leading-[144%] inline-block min-w-[128px] whitespace-nowrap mq450:text-lgi mq450:leading-[28px]">
                + 200 000
              </b>
              <div className="relative text-smi tracking-[-0.08px] leading-[16px] font-sf-caption-1-regular text-gray-500 inline-block min-w-[77px]">
                Active Users
              </div>
            </div>
          </div>
          <div className="w-[456px] rounded-xl box-border hidden flex-col items-start justify-center py-[22px] px-[23px] max-w-full text-mid border-[1px] border-solid border-gray-200">
            <div className="self-stretch flex flex-row items-center justify-start gap-[8px] max-w-full mq450:flex-wrap">
              <img
                className="h-11 w-11 relative rounded-81xl object-cover"
                alt=""
                src="/telegrampeerphotosize23904150204805392305100-1@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start gap-[4px] min-w-[211px] max-w-full">
                <div className="self-stretch relative tracking-[-0.41px] leading-[22px] font-medium">
                  Назерке Дильдаханова
                </div>
                <div className="relative text-smi tracking-[-0.08px] leading-[16px] text-gray-500">
                  Со-основатель Vibe
                </div>
              </div>
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                alt=""
                src="/chevron-right-outline-241.svg"
              />
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[16px]">
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
              className="self-stretch w-[148px] relative max-h-full overflow-hidden shrink-0 min-h-[40px]"
            >
              <img
                loading="lazy"
                alt="App Store"
                src="/ios.svg"
                className="w-full h-full object-cover rounded-xl"
              />
            </a>
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="self-stretch w-[136px] relative max-h-full min-h-[40px]"
            >
              <img 
                loading="lazy"
                alt="Google Play Store"
                src="/frame-10782.svg"
                className="w-full h-full object-cover rounded-xl"
              />
            </a>
          </div>
        </div>
      </div>
      <img
        className="w-[446px] relative max-h-full object-cover max-w-full lg:flex-1"
        loading="lazy"
        alt=""
        src="/image-15-1@2x.png"
      />
    </div>
  );
};

export default RentalProject;
