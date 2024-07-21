import type { NextPage } from "next";
import { useState } from "react";

export type TeamDescriptionType = {
  className?: string;
};

const TeamDescription: NextPage<TeamDescriptionType> = ({ className = "" }) => {
  const [hovered, setHovered] = useState<number | null>(null);

  const projects = [
    "Project 1",
    "Project 2",
    "Project 3",
    "Project 4",
    "Project 5",
  ];

  return (
    <div
      className={`flex flex-row items-start justify-start max-w-full [row-gap:20px] text-left text-mid text-gray1-100 font-sf-caption-1-regular mq750:flex-wrap ${className}`}
    >
      {projects.map((project, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-start p-4 text-gray-900 cursor-pointer"
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
        >
          <div className="flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border gap-[4px]">
            <div className="relative tracking-[-0.41px] leading-[22px] font-medium inline-block min-w-[69px]">
              {project}
            </div>
            <div
              className={`w-12 h-0.5 relative transition-opacity duration-300 ${
                hovered === index ? "opacity-100 bg-yellow-500" : "opacity-0"
              }`}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamDescription;
