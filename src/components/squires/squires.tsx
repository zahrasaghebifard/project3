import React from "react";

type Props = {};

export default function Squires({}: Props) {
  return (
    <div className="relative  mx-4 my-4 border h-[150px] w-[150px] ">
      <div className="absolute bg-green-500 w-[90px] h-[90px] top-0 left-0 z-10"></div>
      <div className="absolute bg-green-700 w-[60px] h-[60px] bottom-[45px] left-[75px]  z-20"></div>
      <div className="absolute bg-green-900 w-[40px] h-[40px] right-0 top-[20px] z-30"></div>
    </div>
  );
}
