import React from "react";

type Props = {};

export default function Hero({}: Props) {
  return (
    <div>
      <div className="hero min-h-[750px] bg-[url('https://images.pexels.com/photos/965740/pexels-photo-965740.jpeg')] absolute brightness-50"></div>
      <div className="hero min-h-[750px]">
        <div className="hero-content flex-col lg:flex-row-reverse text-primary  ">
          <div>
            <h1 className="text-5xl font-bold">Your Organic Oasis Online!</h1>
            <p className="py-6 w-1/2">
              Your premier destination for organic goodness delivered right to
              your door! Discover a vibrant selection of fresh, sustainably
              sourced fruits, vegetables, and more.
            </p>
            <div className="flex gap-2">
              <button className="btn btn-neutral">Explore the Garden</button>
              <button className="btn btn-primary">Learn more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
