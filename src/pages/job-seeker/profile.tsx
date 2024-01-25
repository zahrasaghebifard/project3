import Input from "@/components/input/Input";
import Image from "next/image";
import { Router, useRouter } from "next/router";
import React, { useState } from "react";
import { toast } from "sonner";

type Props = {};

export default function Home({}: Props) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="mt-12">
      <div className="flex ">
        <div className="mx-12">
          {" "}
          <Image
            alt="logo"
            width={70}
            height={70}
            src={"/images/icons/headset.png"}
          />
        </div>
        <div className="text-2xl">
          Please select the part(s) you want to edit and press confirm when
          you’re finished.
        </div>
      </div>
      <div className="font-semibold  mx-12 mt-12 mb-6 text-6xl">
        Edit profile{" "}
      </div>
      <div className="flex mx-auto  w-max shadow-lg p-8 border-2 border-gray-100">
        <div className="grid grid-cols-2 gap-3">
          <Input
            value={email}
            setValue={setEmail}
            placeholder="New Email"
            theme="green"
          />
          <Input
            value={password}
            setValue={setPassword}
            placeholder="New Password"
            theme="green"
          />
          <Input
            value={phone}
            setValue={setPhone}
            placeholder="New Phone Number"
            theme="green"
          />
          <Input
            value={confirmPassword}
            setValue={setConfirmPassword}
            placeholder="Repeat New Password"
            theme="green"
          />
        </div>
        <div className="flex flex-col">
          <button
            className="w-[200px] min-h-[35px]  border-green-900 text-gray-900 border-2 hover:bg-green-900 hover:text-white my-4 px-6 py-8 mx-5  mt-auto hover:scale-105 transition-all"
            onClick={() => {
              router.push("/job-seeker");
            }}
          >
            Back to Dashboard
          </button>
          <button
            className="w-[200px] min-h-[35px] bg-green-900 text-white my-4 px-6 py-8 mx-5 hover:scale-105 mt-auto transition-all"
            onClick={() => {
              toast("Information Submitted Successfully. ");
            }}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
