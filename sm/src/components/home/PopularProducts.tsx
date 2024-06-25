import React from "react";
import Card from "../Card";

type Props = {};

export default function PopularProducts({}: Props) {
  return (
    <div className="min-h-[750px] p-36 text-center">
      <div className="my-[5em]">
        <p className=" text-neutral text-sm">Popular Choices</p>
        <p className="text-4xl">Popular Products</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
