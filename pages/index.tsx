import type { NextPage } from "next";
import FrameComponent2 from "../components/frame-component2";
import Logos from "../components/logos";
import DiscussionForm from "../components/discussion-form";
import TeamDescription from "../components/team-description";
import RentalProject from "../components/rental-project";
import DiscussProject from "../components/discuss-project";
import DevelopmentStages from "../components/development-stages";
import FrameComponent from "../components/frame-component";
import QuestionOne from "../components/question-one";
import RemainingQuestions from "../components/remaining-questions";
import Footer from "../components/footer";

const Desktop: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-6 box-border leading-[normal] tracking-[normal]">
      <FrameComponent2 />
      <Logos />
      <section className="self-stretch bg-whitesmoke overflow-hidden flex flex-col items-start justify-start pt-20 px-[108px] pb-[63px] box-border gap-[24px] max-w-full text-left text-17xl text-gray-900 font-inter lg:pt-[52px] lg:pb-[41px] lg:box-border mq750:pt-[34px] mq750:px-[54px] mq750:pb-[27px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div className="w-[600px] flex flex-row items-start justify-start pt-0 px-0 pb-1 box-border max-w-full">
          <h1 className="m-0 flex-1 relative text-inherit tracking-[0.33px] leading-[144%] font-bold font-inherit inline-block max-w-full mq1050:text-10xl mq1050:leading-[41px] mq450:text-3xl mq450:leading-[31px]">
            <span>{`Developed more than `}</span>
            <span className="text-olivedrab">100</span>
            <span>{` projects in `}</span>
            <span className="text-olivedrab">15</span>
            <span> industries</span>
          </h1>
        </div>
        <DiscussionForm />
        <h1 className="m-0 w-[600px] relative text-inherit tracking-[0.33px] leading-[52px] font-bold font-inherit inline-block max-w-full mq1050:text-10xl mq1050:leading-[41px] mq450:text-3xl mq450:leading-[31px]">
          Projects we are proud of
        </h1>
        <div className="w-[600px] flex flex-row items-start justify-start pt-0 px-0 pb-[30px] box-border max-w-full text-mini font-sf-caption-1-regular">
          <div className="flex-1 relative tracking-[-0.24px] leading-[20px] font-medium inline-block max-w-full">
            Our software development company is truly proud of the wonderful
            clients we have worked with. We enjoy a long-term partnership
          </div>
        </div>
        <div className="flex flex-row items-start justify-start pt-0 px-0 pb-4 box-border max-w-full">
          <TeamDescription />
        </div>
        <RentalProject />
      </section>
      <DiscussProject />
      <DevelopmentStages />
      <FrameComponent />
      <section className="self-stretch flex flex-col items-start justify-start py-20 px-[108px] box-border gap-[40px] max-w-full z-[1] text-left text-17xl text-gray-900 font-inter mq750:gap-[20px] mq750:py-[52px] mq750:px-[54px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div className="w-[600px] flex flex-col items-start justify-start max-w-full mq750:gap-[16px]">
          <h1 className="m-0 self-stretch relative text-inherit tracking-[0.33px] leading-[52px] font-bold font-inherit mq1050:text-10xl mq1050:leading-[41px] mq450:text-3xl mq450:leading-[31px]">
            FAQ
          </h1>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[24px] max-w-full">
          <QuestionOne />
          <RemainingQuestions />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Desktop;
