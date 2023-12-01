import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";
export default function ItechArt() {
  const tasks = [
    {
      text: "Enhanced the existing legacy codebase, improving performance, scalability, and maintainability.",
      keywords: ["About Company"],
    },
    {
      text: "Designed and implemented a secure, cloud-based data storage system with AWS, reducing operational cost by 18%. ",
      keywords: ["VivaTech2022 event"],
    },
    {
      text: "Served as a key decision-maker in strategic tech debates and decisions, such as choosing the appropriate technology stack and framework",
      keywords: ["blockchain & Smart Contracts"],
    }
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Full Stack Engineer <span className="text-AAsecondary">@ Ariyes Online</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            January 2022 - June 2023
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
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
