import React from "react";
import Card from "../shared/Card";

type Props = {};

export default function PopularProducts({}: Props) {
  return (
    <div className="min-h-[750px] p-5 sm:p-36  text-center">
      <div className="my-[5em]">
        <p className=" text-neutral text-sm">Popular Choices</p>
        <p className="text-4xl">Popular Products</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  ">
        <Card
          image="https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          title="Apple"
          desc="test"
          price={150}
          discount={59}
          isNew={false}
          rating={2}
        />
        <Card
          image="https://images.pexels.com/photos/54369/pexels-photo-54369.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
          title="Orange"
          desc="test"
          price={70}
          discount={0}
          isNew={false}
          rating={5}
        />
        <Card
          image="https://images.pexels.com/photos/929137/pexels-photo-929137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          title="Organic Sausage"
          desc="test"
          price={450}
          discount={400}
          isNew={false}
          rating={4}
        />
        <Card
          image="https://images.pexels.com/photos/6870786/pexels-photo-6870786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          title="Linchee"
          desc="test"
          price={55}
          discount={30}
          isNew={false}
          rating={5}
        />
        <Card
          image="https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          title="Apple"
          desc="test"
          price={150}
          discount={59}
          isNew={false}
          rating={2}
        />
        <Card
          image="https://images.pexels.com/photos/54369/pexels-photo-54369.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
          title="Orange"
          desc="test"
          price={70}
          discount={0}
          isNew={false}
          rating={5}
        />
        <Card
          image="https://images.pexels.com/photos/929137/pexels-photo-929137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          title="Organic Sausage"
          desc="test"
          price={450}
          discount={400}
          isNew={false}
          rating={4}
        />
        <Card
          image="https://images.pexels.com/photos/6870786/pexels-photo-6870786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          title="Linchee"
          desc="test"
          price={55}
          discount={30}
          isNew={false}
          rating={5}
        />
      </div>
    </div>
  );
}
