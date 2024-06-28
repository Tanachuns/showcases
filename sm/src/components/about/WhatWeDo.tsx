import React from "react";
import Card from "../shared/Card";
import ObjectiveCard from "./ObjectiveCard";

type Props = {};

export default function WhatWeDo({}: Props) {
  return (
    <div className="min-h-[750px] p-5 sm:p-16  text-center m-auto">
      <div className="mb-[5em]">
        <p className=" text-neutral text-sm">What we do</p>
        <p className="text-4xl">Our Objectives</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4  ">
        <ObjectiveCard
          title="Promote Sustainable Agriculture"
          desc="Foster partnerships with responsible farmers and suppliers to ensure the adoption of eco-friendly farming practices, minimizing environmental impact and supporting biodiversity."
          iconD="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
        />
        <ObjectiveCard
          title="Enhance Product Quality"
          desc="Maintain rigorous quality standards for all products, ensuring they meet high nutritional value and safety criteria, and continuously improve based on customer feedback and scientific advancements."
          iconD="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
        <ObjectiveCard
          title="Increase Community Engagement"
          desc="Develop and implement programs that educate and engage the community on the benefits of organic living, sustainability, and health, fostering a culture of environmental responsibility."
          iconD="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
        />
        <ObjectiveCard
          title="Expand Product Range"
          desc=" Diversify our offerings by introducing new organic products that cater to a wide range of dietary needs and preferences, ensuring accessibility and variety for all customers."
          iconD="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
        />

        <ObjectiveCard
          title="Improve Supply Chain Transparency"
          desc="Enhance transparency throughout our supply chain by implementing robust tracking and reporting systems, allowing customers to make informed choices about the origins and sustainability of their purchases."
          iconD="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
        />

        <ObjectiveCard
          title="Reduce Carbon Footprint"
          desc="Implement strategies to minimize our carbon footprint, including optimizing logistics, reducing waste, and promoting energy-efficient practices across all operations."
          iconD="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
        />
      </div>
    </div>
  );
}
