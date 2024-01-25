import Input from "@/components/input/Input";
import TextArea from "@/components/input/TextArea";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { toast } from "sonner";

type Props = {};

export default function NewAd({}: Props) {
  const [desc, setDesc] = useState("");
  const [company, setCompany] = useState("");
  const [title, setTitle] = useState("");
  const router = useRouter();
  return (
    <>
      <div className="w-[500px] mx-auto rounded-lg shadow-xl p-6 mt-16">
        <h1 className="text-5xl text-center my-3">Add New Advertise </h1>
        <div>
          <Input
            value={title}
            setValue={setTitle}
            placeholder="Job title"
            theme="purple"
          />
          <Input
            value={company}
            setValue={setCompany}
            placeholder="Company "
            theme="purple"
          />
          <TextArea
            theme="purple"
            value={desc}
            setValue={setDesc}
            placeholder="Enter description about job "
          />
          <button
            className="w-full border-2 border-purple-700 py-3 hover:bg-purple-300 text-purple-700 rounded-lg"
            onClick={() => {
              toast("Your New Advertisement has been added!");
            }}
          >
            Add{" "}
          </button>
        </div>
      </div>
      <div className="fixed bottom-0 w-screen flex justify-center  pb-3 pt-3 bg-white">
        <button
          className=" border-2 border-purple-700 mx-4 py-3 px-4 rounded-lg"
          onClick={() => {
            router.push("/employer");
          }}
        >
          {"<-"}
          return{" "}
        </button>
      </div>
    </>
  );
}
