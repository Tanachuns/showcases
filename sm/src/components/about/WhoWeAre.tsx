import React from "react";
import Card from "../shared/Card";

type Props = {};

export default function WhoWeAre({}: Props) {
  return (
    <>
      <div className=" flex-col sm:flex-row sm:flex p-5 sm:p-16 bg-primary ">
        <div className="sm:w-1/2 flex justify-center items-center">
          <div className="w-3/4 text-left">
            <p className=" border-neutral text-neutral border-l-2 text-xl my-4 pl-3">
              About GreenGroove
            </p>
            <h1 className="text-4xl">How we work at GreenGroove.</h1>
          </div>
        </div>
        <div className="sm:w-1/2">
          <p>
            Our commitment to sustainability and health goes beyond mere
            words—it&apos;s the driving force behind everything we do. We
            meticulously curate an extensive and diverse selection of
            high-quality organic produce and products, ensuring each item meets
            our rigorous standards. Our sourcing process is both thorough and
            conscientious; we partner directly with responsible farmers and
            suppliers who share our unwavering dedication to environmental
            stewardship. These partnerships are built on a shared vision of
            nurturing the planet while providing wholesome, nutritious options
            for our customers. By choosing our products, you are supporting a
            sustainable future and making a conscious decision to prioritize
            your health and well-being. Together, we are fostering a community
            that values and practices ecological responsibility, one organic
            product at a time.
          </p>
        </div>
      </div>
      <div className="bg-primary p-5 sm:p-16">
        <div className="flex-col sm:flex-row sm:flex ms:w-[1000px] m-auto ">
          <div className="flex flex-col mx-auto items-start px-[15px] pb-[40px] sm:mb-0 mb-5  sm:w-[400px] border ">
            <div className="text-center w-full p-5">
              <div className="flex justify-aroundtext-neutral">
                <img
                  src="https://images.pexels.com/photos/3658482/pexels-photo-3658482.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="mission"
                  className=" relative top-16 right-5 sm:ight-20 "
                />
              </div>
              <div className="relative bg-base-200 p-5 min-h-[250px] z-10">
                <b className=" text-xl font-bold">Mission</b>
                <br />
                <br />
                <p>
                  Our mission is to inspire sustainable living by offering
                  high-quality organic products. We partner with responsible
                  farmers and suppliers to promote health and environmental
                  stewardship, ensuring a positive impact on our planet and
                  customers&apos; well-being.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col mx-auto items-start  px-[15px] pb-[40px] sm:mb-0 mb-5  sm:w-[400px] border  ">
            <div className="text-center w-full p-5">
              <div className="flex justify-aroundtext-neutral">
                <img
                  src="https://images.pexels.com/photos/169523/pexels-photo-169523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="vision"
                  className=" relative top-16 right-5 sm:ight-20  "
                />
              </div>
              <div className="relative bg-base-200 p-5 min-h-[250px] z-10">
                <b className=" text-xl font-bold ">Vision</b>
                <br />
                <br />
                <p>
                  Our vision is to lead the transformation towards a
                  sustainable, health-focused food industry, where organic
                  products are the norm, and everyone has access to nutritious,
                  responsibly-sourced food for a healthier future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
