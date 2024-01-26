import React from "react";
import "./Faq.css";

export const FaqItem = ({ question, answer }) => {
  return (
    <details className="group [&_summary::-webkit-details-marker]:hidden" >
      <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg p-4 bg-opacity-0">
        <h2 className="font-extrabold text-lg FaqHeading">{question}</h2>

        <svg
          className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </summary>

      <p className="mt-4 px-4 leading-relaxed FaqText font-medium max-h-[190px] overflow-auto ">{answer}</p>
    </details>
  );
};