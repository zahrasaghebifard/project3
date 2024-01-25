import { useRouter } from "next/router";
import React, { useState } from "react";
import { toast } from "sonner";

type Props = {};

export default function EditCv({}: Props) {
  const [skills, setSkills] = useState<any[]>([]);
  const [value, setValue] = useState("");

  const router = useRouter();
  return (
    <div>
      <h1 className="text-center my-7 text-5xl">Add Skills to your C.V</h1>
      <div className="bg-green-400 px-12  py-3">
        <input
          className="border-2 border-green-700 text-green-700 bg-white  px-4 rounded-md py-3 mx-3"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          className="border-2 border-green-700 text-green-700 bg-white hover:bg-green-300 px-4 rounded-md py-3"
          onClick={() => {
            setSkills((prev) => [...prev, value]);
            setValue("");
          }}
        >
          add skill
        </button>
        <span className="ml-12">EXAMPLES: </span>
        <span
          className=" ml-4 mx-3 cursor-pointer hover:text-red-500 select-none bg-white px-3 py-3 rounded-md"
          onClick={() => {
            setSkills((prev) => [...prev, "Python"]);
          }}
        >
          Python
        </span>
        <span
          className="mx-3 cursor-pointer hover:text-red-500 select-none bg-white px-3 py-3 rounded-md"
          onClick={() => {
            setSkills((prev) => [...prev, "Django"]);
          }}
        >
          Django
        </span>
        <span
          className="mx-3 cursor-pointer hover:text-red-500 select-none bg-white px-3 py-3 rounded-md"
          onClick={() => {
            setSkills((prev) => [...prev, "FastApi"]);
          }}
        >
          FastApi
        </span>
      </div>
      <div className="flex flex-wrap">
        {skills.map((skill) => {
          return (
            <span
              className="mx-3 px-5 py-4 font-extrabold border-2 my-3 rounded-lg"
              key={skill}
            >
              {skill}
            </span>
          );
        })}
      </div>
      <div className="fixed bottom-0 flex justify-center w-full pb-3">
        <button
          className=" border-2 border-green-700 mx-4 py-3 px-4 rounded-lg"
          onClick={() => {
            router.push("/job-seeker");
          }}
        >
          {"<-"}
          return{" "}
        </button>
        <button
          className="bg-green-700 mx-4 py-3 px-12 text-white rounded-lg"
          onClick={() => {
            toast("your skills has been Updated Successfully  !");
          }}
        >
          Submit{" "}
        </button>
      </div>
    </div>
  );
}
