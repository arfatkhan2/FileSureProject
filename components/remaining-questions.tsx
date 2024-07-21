import type { NextPage } from "next";
import QuestionOneDetails from "./question-one-details";

export type RemainingQuestionsType = {
  className?: string;
};

const RemainingQuestions: NextPage<RemainingQuestionsType> = ({
  className = "",
}) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border gap-[16px] min-w-[390px] max-w-full text-left text-xl text-gray-900 font-sf-title-2-semibold mq750:min-w-full ${className}`}
    >
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full shrink-0"
        alt=""
        src="/question-one-details.svg"
      />
      <div className="self-stretch flex flex-row items-start justify-start py-3 px-0 box-border gap-[16px] max-w-full shrink-0 mq750:flex-wrap">
        <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[341px] max-w-full mq750:min-w-full">
          <div className="self-stretch relative tracking-[0.38px] leading-[24px] font-semibold mq450:text-base mq450:leading-[19px]">
            How long will development take?
          </div>
          <div className="self-stretch h-[200px] relative leading-[20px] inline-block text-mini font-sf-caption-1-regular">
            <p className="m-0 tracking-[-0.24px]">
              Development terms directly depend on the requirements for the
              mobile application, the characteristics of the company, as well as
              the wishes of the customer.
            </p>
            <p className="m-0 tracking-[-0.24px]">&nbsp;</p>
            <p className="m-0 tracking-[-0.24px]">
              Average development time from start to finished application:
            </p>
            <p className="m-0">
              <span className="tracking-[-0.24px]">Medium projects up to</span>
              <span className="text-base tracking-[-0.32px] font-semibold font-sf-caption-1-regular">
                {" "}
                3 months.
              </span>
            </p>
            <p className="m-0">
              <span className="tracking-[-0.24px]">
                <span>{`Large projects about `}</span>
                <span className="font-semibold font-sf-caption-1-regular">
                  4-6 months.
                </span>
              </span>
            </p>
            <p className="m-0">
              <span className="tracking-[-0.24px]">
                <span>
                  To get a more accurate estimate of the project completion
                  time, it is necessary to determine the main task of the
                  application, think over its logic and functionality.
                </span>
              </span>
            </p>
          </div>
        </div>
        <div className="h-[60px] w-[60px] rounded-81xl flex flex-row items-start justify-start p-3 box-border">
          <img
            className="h-9 w-9 relative"
            loading="lazy"
            alt=""
            src="/add-36-2.svg"
          />
        </div>
      </div>
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full shrink-0"
        alt=""
        src="/question-one-details.svg"
      />
      <QuestionOneDetails whatIsTheCostOfAMobileApp="I will not tell my idea, do you guarantee confidentiality?" />
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full"
        alt=""
        src="/question-one-details.svg"
      />
    </div>
  );
};

export default RemainingQuestions;
