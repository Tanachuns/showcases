import React from "react";

type Props = {};

export default function MeetOurTeam({}: Props) {
  return (
    <div className="min-h-[750px] p-5 sm:p-16  text-center bg-primary">
      <div className="mb-[5em]">
        <p className=" text-neutral text-sm">Meet Our Team</p>
        <p className="text-4xl">Our Management</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center w-[1000px] m-auto ">
        <div className="min-w-[300px]">
          <img
            src="https://scontent.fbkk12-1.fna.fbcdn.net/v/t39.30808-6/434826798_7790488497651143_7974704950030636526_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=Q-l8KbrAhyIQ7kNvgGie6mT&_nc_ht=scontent.fbkk12-1.fna&oh=00_AYB8C06r4yd5GBkn_MuNP74TgnLMEwCQKr8vj6n3tHONVQ&oe=6684D4AD"
            alt="CEO TAMATA"
            width={300}
            className=" rounded-2xl"
          />
          <div className=" my-3">
            <b className="text-2xl">Ayam Fillinzrd</b>
            <br />
            <b>Chief Executive Officer </b>
          </div>
        </div>
        <div className="min-w-[300px]">
          <img
            src="https://scontent.fbkk12-1.fna.fbcdn.net/v/t1.6435-9/51116804_2277438552289526_6790008845872660480_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=53a332&_nc_ohc=E19slfrmjeYQ7kNvgHQG8hR&_nc_ht=scontent.fbkk12-1.fna&oh=00_AYAD8UNlLbAXdQs3AioFmaiVFaLnCyoJctMEhM9PgZ3Vfg&oe=66A657AB"
            alt="CFO Youngon"
            width={300}
            className=" rounded-2xl"
          />
          <div className=" my-3">
            <b className="text-2xl">Youngon</b>
            <br />
            <b>Chief Farmer Officer </b>
          </div>
        </div>
        <div className="min-w-[300px]">
          <img
            src="https://scontent.fbkk13-2.fna.fbcdn.net/v/t1.6435-9/32290840_1899197270113658_203828741162401792_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=53a332&_nc_ohc=XP3gC2QJsQQQ7kNvgHvWLVF&_nc_ht=scontent.fbkk13-2.fna&oh=00_AYDEKwE5tM10YZy4sgdD6EtBi2bLFRcivT2KFgyWfsbNGg&oe=66A654E3"
            alt="CPO Jack"
            width={300}
            className=" rounded-2xl"
          />
          <div className=" my-3">
            <b className="text-2xl">Jack</b>
            <br />
            <b>Chief Pirate Officer </b>
          </div>
        </div>
      </div>
    </div>
  );
}
