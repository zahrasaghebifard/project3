import React from "react";

type Props = {
  theme: "green" | "purple";
  placeholder: string;
  value: string;
  setValue: any;
};

export default function TextArea({
  theme,
  placeholder,
  value,
  setValue,
}: Props) {
  return (
    <div
      className={` ${
        theme === "green" ? "bg-green-300" : "bg-purple-300"
      }   min-h-[110px] px-12 py-2 my-4  flex justify-center items-center`}
      style={{
        borderRadius: "50%",
      }}
    >
      <textarea
        rows={5}
        className="bg-transparent h-full w-full my-auto "
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder || "Enter text"}
      />
    </div>
  );
}
