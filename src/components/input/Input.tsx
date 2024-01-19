import React from "react";

type Props = {};

export default function Input({}: Props) {
  return (
    <div
      className=" bg-green-300   h-[55px] px-12 py-2 my-4 "
      style={{
        borderRadius: "50%",
      }}
    >
      <input
        className="bg-transparent  w-full my-auto"
        placeholder="Enter text"
      />
    </div>
  );
}
