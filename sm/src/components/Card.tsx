import React from "react";

type Props = {
  image: string;
  title: string;
  desc: string;
  price: number;
  discount: number;
  isNew: boolean;
  rating: number;
};

function setStar(rate: number) {
  const _arr: React.JSX.Element[] = [];
  for (let i = 0; i < 5; i++) {
    if (i < rate) {
      _arr.push(
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6"
          key={i}
        >
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
            clipRule="evenodd"
          />
        </svg>
      );
    } else {
      _arr.push(
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
          key={i}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
          />
        </svg>
      );
    }
  }
  return _arr;
}

export default function card(props: Props) {
  const rate = setStar(props.rating);
  return (
    <div className="flex flex-col mx-auto items-start px-[15px] pb-[40px]  w-[300px]">
      <img
        className=" flex-none order-0 self-stretch flex-grow-0 z-1 min-h-[270px] object-cover"
        src={props.image}
        alt={props.title}
      />
      <div className="text-center w-full p-5">
        <b>{props.title}</b>
        <p
          className={
            props.discount ? " line-through  text-gray-400" : "text-neutral"
          }
        >
          {props.price.toLocaleString("th-TH", {
            style: "currency",
            currency: "THB",
          })}
        </p>
        {props.discount !== 0 ? (
          <p className="text-neutral">
            {props.discount.toLocaleString("th-TH", {
              style: "currency",
              currency: "THB",
            })}
          </p>
        ) : (
          <p> &nbsp;</p>
        )}

        <br />
        <div className="flex justify-around w-3/4 m-auto text-neutral">
          {rate}
        </div>
      </div>
    </div>
  );
}
