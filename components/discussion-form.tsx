import type { NextPage } from "next";
import DiscussionNameFields from "./discussion-name-fields";

export type DiscussionFormType = {
  className?: string;
};

const DiscussionForm: NextPage<DiscussionFormType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-24 box-border max-w-full text-left text-mid text-gray-900 font-sf-caption-1-regular mq450:pb-[62px] mq450:box-border ${className}`}
    >
      <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[25px] max-w-full">
        <DiscussionNameFields
          narrativeActiveOutline24="/narrative-active-outline-24.svg"
          socialMedia="Social media"
          ballOutline24="/ball-outline-24@2x.png"
          fitnessAndSport="Fitness and sport"
          bankOutline24="/bank-outline-24@2x.png"
          bank="Bank"
          employeeOutline24="/employee-outline-24@2x.png"
          construction="Construction"
          gameOutline24="/game-outline-24.svg"
          gameProjects="Game projects"
        />
        <DiscussionNameFields
          narrativeActiveOutline24="/education-outline-24@2x.png"
          socialMedia="Education"
          ballOutline24="/car-outline-24.svg"
          fitnessAndSport="Auto, transport"
          bankOutline24="/health-outline-24.svg"
          bank="Medicine, health"
          employeeOutline24="/bowl-sticks-outline-24.svg"
          construction="Restaurants, food delivery"
          gameOutline24="/market-outline-24.svg"
          gameProjects="Marketplaces"
        />
        <DiscussionNameFields
          narrativeActiveOutline24="/live-outline-24.svg"
          socialMedia="AR technology"
          ballOutline24="/video-outline-24.svg"
          fitnessAndSport="TV series"
          bankOutline24="/work-outline-24@2x.png"
          bank="Startups"
          employeeOutline24="/magic-wand-outline-24.svg"
          construction="Religion"
          gameOutline24="/video-circle-outline-24.svg"
          gameProjects="Online cources"
        />
      </div>
    </div>
  );
};

export default DiscussionForm;
