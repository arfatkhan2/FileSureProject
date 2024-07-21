import type { NextPage } from "next";
import QuestionOneDetails from "./question-one-details";

export type QuestionOneType = {
  className?: string;
};

const QuestionOne: NextPage<QuestionOneType> = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border gap-[16px] min-w-[390px] max-w-full text-left text-xl text-gray-900 font-sf-title-2-semibold mq750:min-w-full ${className}`}
    >
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full shrink-0"
        alt=""
        src="/question-one-details.svg"
      />
      <QuestionOneDetails whatIsTheCostOfAMobileApp="What is the cost of a mobile application?" />
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full shrink-0"
        alt=""
        src="/question-one-details.svg"
      />
      <QuestionOneDetails whatIsTheCostOfAMobileApp="Do you provide a guarantee for the mobile application?" />
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full"
        alt=""
        src="/question-one-details.svg"
      />
    </div>
  );
};

export default QuestionOne;
