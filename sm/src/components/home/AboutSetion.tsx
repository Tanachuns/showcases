import React from "react";

type Props = {};

export default function AboutSetion({}: Props) {
  return (
    <div className="min-h-[750px] flex-col sm:flex-row sm:flex p-5 sm:p-36 bg-primary ">
      <div className="sm:w-1/2 justify-center items-center">
        <div className="diff aspect-[16/9] h-full rounded-3xl">
          <div className="diff-item-1">
            <img
              alt="prosesses foods"
              src="https://www.tastingtable.com/img/gallery/new-report-shows-organic-food-is-set-to-become-more-popular-than-ever/l-intro-1654106213.jpg"
            />
          </div>
          <div className="diff-item-2">
            <img
              alt="organic foods"
              src="https://www.datocms-assets.com/46938/1656336767-variety-of-food-in-packages.jpg"
            />
          </div>
          <div className="diff-resizer"></div>
        </div>
      </div>
      <div className="sm:w-1/2 flex justify-center items-center">
        <div className="w-3/4 text-left">
          <p className=" border-neutral border-l-2 text-xl my-4 pl-3">
            About Us
          </p>
          <p className="text-3xl">
            <span
              className=" text-4xl underline"
              style={{ textDecorationColor: "#009444" }}
            >
              GreenGroove
            </span>{" "}
            is not just an organic ecommerce platform;
          </p>
          <p>
            It is a commitment to sustainability and health. We curate a diverse
            selection of high-quality organic produce and products, sourced
            directly from responsible farmers and suppliers who share our
            dedication to environmental stewardship.
          </p>
        </div>
      </div>
    </div>
  );
}
