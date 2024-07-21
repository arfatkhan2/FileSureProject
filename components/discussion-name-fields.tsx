import type { NextPage } from "next";

export type DiscussionNameFieldsType = {
  className?: string;
  narrativeActiveOutline24?: string;
  socialMedia?: string;
  ballOutline24?: string;
  fitnessAndSport?: string;
  bankOutline24?: string;
  bank?: string;
  employeeOutline24?: string;
  construction?: string;
  gameOutline24?: string;
  gameProjects?: string;
};

const DiscussionNameFields: NextPage<DiscussionNameFieldsType> = ({
  className = "",
  narrativeActiveOutline24,
  socialMedia,
  ballOutline24,
  fitnessAndSport,
  bankOutline24,
  bank,
  employeeOutline24,
  construction,
  gameOutline24,
  gameProjects,
}) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-[15px] min-w-[293px] max-w-full text-left text-mid text-gray-900 font-sf-caption-1-regular ${className}`}
    >
      <div className="self-stretch flex flex-row items-center justify-start gap-[16px] max-w-full mq450:flex-wrap">
        <div className="h-11 w-11 shadow-[0px_2px_4px_rgba(0,_0,_0,_0.08)] rounded-81xl bg-white flex flex-row items-start justify-start p-2.5 box-border">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src={narrativeActiveOutline24}
          />
        </div>
        <div className="flex-1 relative tracking-[-0.41px] leading-[22px] font-medium inline-block min-w-[78px] max-w-full">
          {socialMedia}
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-start gap-[16px] max-w-full mq450:flex-wrap">
        <div className="h-11 w-11 shadow-[0px_2px_4px_rgba(0,_0,_0,_0.08)] rounded-81xl bg-white flex flex-row items-start justify-start p-2.5 box-border">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 object-contain"
            loading="lazy"
            alt=""
            src={ballOutline24}
          />
        </div>
        <div className="flex-1 relative tracking-[-0.41px] leading-[22px] font-medium inline-block min-w-[107px] max-w-full">
          {fitnessAndSport}
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-start gap-[16px] max-w-full mq450:flex-wrap">
        <div className="h-11 w-11 shadow-[0px_2px_4px_rgba(0,_0,_0,_0.08)] rounded-81xl bg-white flex flex-row items-start justify-start p-2.5 box-border">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 object-contain"
            loading="lazy"
            alt=""
            src={bankOutline24}
          />
        </div>
        <div className="flex-1 relative tracking-[-0.41px] leading-[22px] font-medium inline-block min-w-[30px] max-w-full">
          {bank}
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-start gap-[16px] max-w-full mq450:flex-wrap">
        <div className="h-11 w-11 shadow-[0px_2px_4px_rgba(0,_0,_0,_0.08)] rounded-81xl bg-white flex flex-row items-start justify-start p-2.5 box-border">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 object-contain"
            loading="lazy"
            alt=""
            src={employeeOutline24}
          />
        </div>
        <div className="flex-1 relative tracking-[-0.41px] leading-[22px] font-medium inline-block min-w-[80px] max-w-full">
          {construction}
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-start gap-[16px] max-w-full mq450:flex-wrap">
        <div className="h-11 w-11 shadow-[0px_2px_4px_rgba(0,_0,_0,_0.08)] rounded-81xl bg-white flex flex-row items-start justify-start p-2.5 box-border">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src={gameOutline24}
          />
        </div>
        <div className="flex-1 relative tracking-[-0.41px] leading-[22px] font-medium inline-block min-w-[90px] max-w-full">
          {gameProjects}
        </div>
      </div>
    </div>
  );
};

export default DiscussionNameFields;
