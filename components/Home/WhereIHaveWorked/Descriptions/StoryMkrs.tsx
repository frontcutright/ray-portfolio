import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function StoryMkrs() {
  const tasks = [
    {
      text: "Engineered a responsive, customer-facing web application, resulting in a 20% increase in user engagement. ",
      keywords: ["ReactJS", "TailwindCSS v1", "TypeScript"],
    },
    {
      text: "Collaborated with a remote team of developers, UX designers, and product managers to ensure efficient project progress and high-quality outcomes.",
      keywords: ["Next.js"],
    },
    {
      text: "Developed and optimized APIs to enhance inter-system communication, lowering data response time by 30%.",
      keywords: [],
    }
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Web Developer{" "}
            <span className="text-AAsecondary">@ OPUS IT Service</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            March 2016 - February 2020
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(
                      item.text,
                      item.keywords
                    ),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
