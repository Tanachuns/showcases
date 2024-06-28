import React from "react";

type Props = { pageTitle: string; image: string };

export default function HeroNavigation({ pageTitle, image }: Props) {
  return (
    <div>
      <div
        className={"hero min-h-[442.19px]  absolute brightness-50"}
        style={{ backgroundImage: `url('${image}')` }}
      ></div>
      <div className="hero min-h-[442.19px]">
        <div className="hero-content flex-col lg:flex-row-reverse text-primary  ">
          <div className="text-center">
            <h1 className="text-5xl font-bold">{pageTitle}</h1>
            <br />
            <p className="text-xl">Home || {pageTitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
