import type { NextPage } from "next";

export type FooterType = {
  className?: string;
};

const Footer: NextPage<FooterType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full ${className}`}
    >
      <footer className="w-[1224px] shadow-[0px_0px_2px_rgba(0,_0,_0,_0.08),_0px_2px_24px_rgba(0,_0,_0,_0.08)] rounded-xl bg-gray1-200 flex flex-col items-center justify-start p-6 box-border gap-[40px] max-w-full z-[2] text-left text-sm text-darkgray font-sf-caption-1-regular mq750:gap-[20px]">
        <img
          className="w-[290px] h-[113px] relative object-contain"
          loading="lazy"
          alt=""
          src="/logobg3-2@2x.png"
        />
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start [row-gap:20px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[220px] max-w-[294px]">
            <div className="w-[125px] flex flex-row items-center justify-start gap-[8px]">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/smartphone-outline-24-1.svg"
              />
              <div className="flex-1 relative tracking-[-0.15px] leading-[18px] font-medium">
                Contact nums
              </div>
            </div>
            <div className="self-stretch relative text-mid tracking-[-0.41px] leading-[22px] font-semibold text-white whitespace-nowrap">
              +91 0000000000
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[220px] max-w-[294px]">
            <div className="flex flex-row items-center justify-start gap-[8px]">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 object-cover"
                loading="lazy"
                alt=""
                src="/mail-outline-24-1@2x.png"
              />
              <div className="relative tracking-[-0.15px] leading-[18px] font-medium inline-block min-w-[38px]">
                Gmail
              </div>
            </div>
            <div className="self-stretch relative text-mid tracking-[-0.41px] leading-[22px] font-semibold text-white whitespace-nowrap">
              demo@gmail.com
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[220px] max-w-[294px]">
            <div className="w-[78px] flex flex-row items-center justify-start gap-[8px]">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 object-cover"
                loading="lazy"
                alt=""
                src="/place-outline-24-1@2x.png"
              />
              <div className="flex-1 relative tracking-[-0.15px] leading-[18px] font-medium">
                Adress
              </div>
            </div>
            <div className="self-stretch relative text-mid tracking-[-0.41px] leading-[22px] font-semibold text-white">
              Mumbai, India
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[220px] max-w-[294px]">
            <div className="w-[137px] flex flex-row items-center justify-start gap-[8px]">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/document-outline-24.svg"
              />
              <div className="flex-1 relative tracking-[-0.15px] leading-[18px] font-medium">
                Leave a request
              </div>
            </div>
            <div className="self-stretch relative text-mid tracking-[-0.41px] leading-[22px] font-semibold text-white">
              Leave a request
            </div>
          </div>
        </div>
        <div className="w-[184px] flex flex-row items-center justify-start text-smi text-white">
          <div className="flex-1 relative tracking-[-0.08px] leading-[16px]">
            We work throughout the world
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
