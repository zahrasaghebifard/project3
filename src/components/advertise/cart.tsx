import React, { useState } from "react";
import { toast } from "sonner";

type Props = { title: string; company: string; description: string };

export default function Cart({ title, company, description }: Props) {
  const [isAppliyed, setIsAppliyed] = useState(false);
  return (
    <div className="shadow-lg bg-green-200 px-6 py-4 mx-4 my-6 rounded-lg">
      <h1 className="underline font-semibold my-3">{title}</h1>
      <div className="w-full flex">
        <h1 className="text-gray-400 ">company:</h1>
        <h1 className="text-gray-700 mx-6">{company}</h1>
      </div>
      <p className="text-green-900 my-4">{description}</p>
      <div className="flex justify-end">
        <button
          className={`${
            isAppliyed
              ? "bg-gray-800 text-white cursor-not-allowed "
              : "bg-red-500 hover:scale-90 hover:border-red-800 hover:border-2 hover:text-red-900 hover:bg-white"
          } border-2 border-transparent rounded-xl px-8 py-3   transition-all`}
          onClick={() => {
            if (!isAppliyed) {
              toast("applied to " + title);
              setIsAppliyed(true);
            }
          }}
        >
          {!isAppliyed ? "Apply" : "Applied 😍"}
        </button>
      </div>
    </div>
  );
}
