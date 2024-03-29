import React from "react";

type Props = {
  theme: "green" | "purple";
  placeholder: string;
  value: string;
  setValue: any;
};

export default function Input({ theme, placeholder, value, setValue }: Props) {
  return (
    <div
      className={` ${
        theme === "green" ? "bg-green-300" : "bg-purple-300"
      }   h-[55px] px-12 py-2 my-4  flex justify-center items-center`}
      style={{
        borderRadius: "50%",
      }}
    >
      <input
        className="bg-transparent  w-full my-auto"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder || "Enter text"}
      />
    </div>
  );
}
