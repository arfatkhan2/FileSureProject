import type { NextPage } from "next";

export type QuestionOneDetailsType = {
  className?: string;
  whatIsTheCostOfAMobileApp?: string;
};

const QuestionOneDetails: NextPage<QuestionOneDetailsType> = ({
  className = "",
  whatIsTheCostOfAMobileApp,
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-center justify-start py-3 px-0 box-border gap-[16px] max-w-full shrink-0 text-left text-xl text-gray-900 font-sf-title-2-semibold mq750:flex-wrap ${className}`}
    >
      <div className="flex-1 relative tracking-[0.38px] leading-[24px] font-semibold inline-block min-w-[294px] max-w-full mq450:text-base mq450:leading-[19px]">
        {whatIsTheCostOfAMobileApp}
      </div>
      <div className="h-[60px] w-[60px] shadow-[0px_2px_4px_rgba(0,_0,_0,_0.08)] rounded-81xl bg-white flex flex-row items-start justify-start p-3 box-border">
        <img
          className="h-9 w-9 relative"
          loading="lazy"
          alt=""
          src="/add-36.svg"
        />
      </div>
    </div>
  );
};

export default QuestionOneDetails;
