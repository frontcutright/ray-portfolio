import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function TrustToken() {
  const tasks = [
    {
      text: "Innovated an effective e-commerce solution using a MERN stack (MongoDB, Express.js, React, Node.js) that boosted the online sales by 15%.",
      keywords: ["Apache POI"],
    },
    {
      text: "Led an effort to establish a CI/CD pipeline for streamlined code integration and deployment, reducing the release cycle by 25%.",
      keywords: ["scripts"],
    }
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Full-Stack Engineer{" "}
            <span className="text-AAsecondary">@ SoftwareQ</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            March 2020 - December 2021
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
                <ArrowIcon className={"h-5 w-4 text-AAsecondary flex-none"} />
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
