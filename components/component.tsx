import type { NextPage } from "next";

export type ComponentType = {
  className?: string;
  iOSDevelopment?: string;
};

const Component: NextPage<ComponentType> = ({
  className = "",
  iOSDevelopment,
}) => {
  return (
    <div
      className={`flex flex-row items-center justify-start py-3 px-0 gap-[12px] text-left text-xl text-gray1-100 font-sf-title-2-semibold ${className}`}
    >
      <div className="relative tracking-[0.38px] leading-[24px] whitespace-pre-wrap mq450:text-base mq450:leading-[19px]">
        {iOSDevelopment}
      </div>
      <img
        className="h-6 w-6 relative min-h-[24px]"
        loading="lazy"
        alt=""
        src="/chevron-right-small-24.svg"
      />
      <img
        className="h-6 w-6 relative overflow-hidden shrink-0 hidden min-h-[24px]"
        alt=""
        src="/chevron-right-outline-24.svg"
      />
    </div>
  );
};

export default Component;
