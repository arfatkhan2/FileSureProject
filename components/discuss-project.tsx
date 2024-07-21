import type { NextPage } from "next";

export type DiscussProjectType = {
  className?: string;
};

const DiscussProject: NextPage<DiscussProjectType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-20 box-border max-w-full text-left text-17xl text-white font-inter mq450:pb-[52px] mq450:box-border ${className}`}
    >
      <div className="flex-1 [background:linear-gradient(90deg,_#fabc1f,_#7ca546)] overflow-hidden flex flex-row items-start justify-start max-w-full">
        <div className="flex-1 flex flex-row items-start justify-center py-[53px] px-5 box-border relative max-w-full">
          <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
            <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] bg-[url('/noise@3x.png')] bg-cover bg-no-repeat bg-[top] mix-blend-overlay" />
            <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] bg-[url('/noise@3x.png')] bg-cover bg-no-repeat bg-[top] mix-blend-overlay z-[1]" />
          </div>
          <div className="w-[1221px] flex flex-row items-start justify-start [row-gap:20px] max-w-full z-[2] mq1050:flex-wrap">
            <div className="flex-1 flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[24px] min-w-[456px] max-w-full mq750:min-w-full">
              <h1 className="m-0 w-[600px] relative text-inherit tracking-[0.33px] leading-[144%] font-bold font-inherit inline-block max-w-full mq1050:text-10xl mq1050:leading-[41px] mq450:text-3xl mq450:leading-[31px]">
                <p className="m-0">Let's discuss</p>
                <p className="m-0">Your project</p>
              </h1>
              <div className="w-[600px] relative text-mini leading-[20px] font-medium font-sf-caption-1-regular inline-block max-w-full">
                <p className="m-0">
                  Let's figure out how to create an effective application,
                </p>
                <p className="m-0">its cost and terms of its development</p>
              </div>
            </div>
            <form className="m-0 w-[520px] shadow-[0px_0px_2px_rgba(0,_0,_0,_0.08),_0px_0px_24px_rgba(0,_0,_0,_0.16)] rounded-xl bg-white flex flex-col items-end justify-center p-6 box-border gap-[24px] min-w-[520px] max-w-full mq750:min-w-full mq1050:flex-1">
              <div className="self-stretch flex flex-row items-start justify-start gap-[24px] mq750:flex-wrap">
                <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border gap-[8px] min-w-[146px]">
                  <div className="self-stretch relative text-smi tracking-[-0.08px] leading-[16px] font-medium font-sf-caption-1-regular text-gray-500 text-left">
                    Full name
                  </div>
                  <input
                    className="w-[69px] [border:none] [outline:none] bg-[transparent] h-[22px] flex flex-row items-start justify-start font-sf-caption-1-regular text-base text-gray-900"
                    placeholder="My Name"
                    type="text"
                  />
                  <img
                    className="self-stretch h-[0.7px] relative max-w-full overflow-hidden shrink-0"
                    alt=""
                    src="/vector-214.svg"
                  />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border gap-[8px] min-w-[146px]">
                  <div className="self-stretch relative tracking-[-0.08px] leading-[16px] font-medium">
                    Phone number
                  </div>
                  <div className="w-[150px] flex flex-row items-start justify-start gap-[8px]">
                    <div className="flex flex-col items-center justify-center py-[5px] px-0">
                      <img
                        className="w-[18px] h-3 relative object-cover"
                        alt=""
                        src="/image-4@2x.png"
                      />
                    </div>
                    <div className="relative text-base tracking-[-0.41px] leading-[22px] font-sf-caption-1-regular text-gray-900 text-left inline-block min-w-[28px] whitespace-nowrap">
                      +91
                    </div>
                    <div className="flex-1 relative text-base tracking-[-0.41px] leading-[22px] font-sf-caption-1-regular text-gray-900 text-left">
                      000000000
                    </div>
                  </div>
                  <img
                    className="self-stretch h-[0.7px] relative max-w-full overflow-hidden shrink-0"
                    alt=""
                    src="/vector-214.svg"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[24px] mq750:flex-wrap">
                <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border gap-[8px] min-w-[146px]">
                  <div className="self-stretch relative text-smi tracking-[-0.08px] leading-[16px] font-medium font-sf-caption-1-regular text-gray-500 text-left">
                    Business name
                  </div>
                  <div className="w-[198px] flex flex-row items-start justify-start">
                    <div className="flex-1 relative text-base tracking-[-0.41px] leading-[22px] font-sf-caption-1-regular text-gray-900 text-left">
                      ABC Technologies PVT LTD
                    </div>
                  </div>
                  <img
                    className="self-stretch h-[0.7px] relative max-w-full overflow-hidden shrink-0"
                    alt=""
                    src="/vector-214.svg"
                  />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border gap-[8px] min-w-[146px]">
                  <div className="self-stretch relative text-smi tracking-[-0.08px] leading-[16px] font-medium font-sf-caption-1-regular text-gray-500 text-left">
                    Business mail
                  </div>
                  <input
                    className="w-[187px] [border:none] [outline:none] bg-[transparent] h-[22px] flex flex-row items-start justify-start font-sf-caption-1-regular text-base text-gray-900"
                    placeholder="demoaccount@gmail.com"
                    type="text"
                  />
                  <img
                    className="self-stretch h-[0.7px] relative max-w-full overflow-hidden shrink-0"
                    alt=""
                    src="/vector-214.svg"
                  />
                </div>
              </div>
              <button className="cursor-pointer [border:none] py-[11px] px-6 bg-orange-200 w-[178px] rounded-lg flex flex-row items-start justify-start box-border whitespace-nowrap hover:bg-darkgoldenrod">
                <div className="flex-1 relative text-sm tracking-[-0.15px] leading-[18px] font-semibold font-sf-caption-1-regular text-white text-center">
                  Discuss the project
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscussProject;
