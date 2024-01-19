import Input from "@/components/input/Input";
import Squires from "@/components/squires/squires";
import Image from "next/image";
import React from "react";
import userImage from "../../../public/images/user-icon.png";
type Props = {};

export default function SignUp({}: Props) {
  return (
    <div>
      <Squires />
      <div className="w-[500px] mx-auto">
        <div className="flex justify-center my-3">
          <Image src={userImage} width={100} height={100} alt="user-icon" />
        </div>
        <div className="font-semibold my-1">
          Hello, new comer. we’d love to help you find a job! Please import the
          required information to sign up.
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Input />
          <Input />
          <Input />
          <Input />
          <Input />
          <div>
            <div
              className="bg-gray-200 h-[60px] flex justify-center"
              style={{ borderRadius: "60%" }}
            >
              <button className="mx-3">job seeker </button>
              <div className="w-[2px] bg-black h-full inline-block"></div>
              <button className="mx-3"> employer</button>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <button className="bg-purple-300 py-5 px-3 w-[150px] text-xl rounded-md">
            Confirm{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
