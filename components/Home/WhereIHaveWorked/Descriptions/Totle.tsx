import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Totle() {
  const tasks = [
    {
      text: "Key Player I was responsible for all phases of system development, from design to front-end and back-end implementation, database construction, SEO measures, and final release.",
      keywords: ["Vue.js", "Nuxt.js"],
    },
    {
      text: "Tokyo Daiko The website is based on WordPress and designed using a custom theme. We have also implemented SSL certificates as a security measure and use security plugins to protect user data.",
      keywords: ["Figma", "AWS", "UI/UX"],
    }
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-200 sm:text-lg text-sm font-Arimo tracking-wide">
          Full Stack Engineer
            <span className="text-AAsecondary"> @ Singapore and Japanese company, individual consignment development</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            July 2023 - Present
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-base text-base">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-base text-base"
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
