import React from "react";

type Props = {};

export default function Whatwedo({}: Props) {
  return (
    <div className="min-h-[750px] flex bg-base-200 p-36">
      <div className="w-1/2 flex justify-center items-center">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ZccslnMUH1U?si=yFN0p7KMr3qnUvKb"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <div className="w-3/4 text-left">
          <p className=" border-neutral border-l-2 text-xl my-4 pl-3">
            About Us
          </p>
          <p className="text-3xl">
            <span className="text-4xl">At </span>
            <span
              className=" text-4xl underline"
              style={{ textDecorationColor: "#009444" }}
            >
              GreenGroove
            </span>
          </p>
          <p>
            We strive to make organic living accessible and convenient, offering
            a seamless online shopping experience with doorstep delivery.
            Whether you are looking for fresh fruits and vegetables, pantry
            staples, or eco-friendly household items, GreenGroove is your
            trusted partner in nourishing both body and planet. Join us in
            embracing a greener, healthier lifestyle with every purchase.
          </p>
        </div>
      </div>
    </div>
  );
}
