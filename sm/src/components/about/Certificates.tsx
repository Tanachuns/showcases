import React from "react";

type Props = {};

export default function Certificates({}: Props) {
  return (
    <div className="min-h-[750px] p-5 sm:p-16  text-center">
      <div className="mb-[5em]">
        <p className=" text-neutral text-sm">Gurantee</p>
        <p className="text-4xl">Our Certificates</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4  sm:w-[1000px] m-auto ">
        <div className="min-w-[300px] m-auto">
          <img
            src="https://img.freepik.com/free-psd/employee-month-certificate-diploma-template-realistic-frame_460848-17135.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1719446400&semt=ais_user"
            alt="certificate"
            width={400}
          />
        </div>
        <div className="min-w-[300px]">
          <img
            src="https://img.freepik.com/free-psd/employee-month-certificate-diploma-template-realistic-frame_460848-17135.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1719446400&semt=ais_user"
            alt="certificate"
            width={400}
          />
        </div>
        <div className="min-w-[300px]">
          <img
            src="https://img.freepik.com/free-psd/employee-month-certificate-diploma-template-realistic-frame_460848-17135.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1719446400&semt=ais_user"
            alt="certificate"
            width={400}
          />
        </div>
      </div>
    </div>
  );
}
