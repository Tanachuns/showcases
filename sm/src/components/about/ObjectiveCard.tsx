import React from "react";

type Props = { title: string; desc: string; iconD: string };

export default function ObjectiveCard({ title, desc, iconD }: Props) {
  return (
    <div className="w-[400px] flex">
      <div className=" px-3">
        <div className="bg-secondary w-24 h-24 flex justify-center items-center rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-12"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d={iconD} />
          </svg>
        </div>
      </div>
      <div className=" text-start">
        <b>{title}</b>
        <p>{desc}</p>
      </div>
    </div>
  );
}
