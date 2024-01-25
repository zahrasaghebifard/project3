import React from "react";

type Props = { theme: "purple" | "green" };

export default function Squires({ theme }: Props) {
  return (
    <div className="relative  mx-4 my-4 border h-[150px] w-[150px] scale-110 ">
      <div
        className={`absolute  ${
          theme === "green" ? "bg-green-500" : "bg-purple-500"
        } w-[90px] h-[90px] top-0 left-0 z-10`}
      ></div>
      <div
        className={`absolute  ${
          theme === "green" ? "bg-green-700" : "bg-purple-700"
        } w-[60px] h-[60px] bottom-[40px] left-[60px]  z-20`}
      ></div>
      <div
        className={`absolute  ${
          theme === "green" ? "bg-green-900" : "bg-purple-900"
        } w-[40px] h-[40px] right-0 top-[20px] z-30`}
      ></div>
    </div>
  );
}
