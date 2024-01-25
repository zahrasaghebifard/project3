import Input from "@/components/input/Input";
import Squires from "@/components/squires/squires";
import Image from "next/image";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import React, { useState } from "react";
import { toast } from "sonner";

type Props = {};

export default function Login({}: Props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  return (
    <div>
      <Squires theme="green" />
      <div className="w-[500px] mx-auto bg-white rounded-md border-2 border-gray-200 px-5  py-5 shadow-xl mb-12 ">
        <div className="flex justify-center my-2">
          {" "}
          <Image
            src={"/images/user-icon.png"}
            width={85}
            height={85}
            alt="logo"
          ></Image>
        </div>
        <div className="font-semibold my-1">
          welcome back to our job seeking site! Please sign up to access your
          account.
        </div>

        <Input
          theme="green"
          value={username}
          setValue={setUsername as any}
          placeholder="username"
        />
        <Input
          theme="green"
          value={password}
          setValue={setPassword as any}
          placeholder="password"
        />

        <button
          className="border-2 border-green-500 my-3 px-3 w-full rounded-md py-4 hover:bg-green-200 cursor-pointer "
          onClick={() => {
            if (username === "emp" && password === "emp") {
              toast("welcome Employer");
              router.push("/employer");
            } else if (username === "job" && password === "job") {
              toast("welcome Job Seeker ");
              router.push("/job-seeker");
            } else {
              toast(
                "login with  username:emp , password:emp as employer \n or \n username:job  , password:job  as Job Seeker "
              );
            }
          }}
        >
          login{" "}
        </button>
        <p className="my-5">
          Do not have an account?{" "}
          <Link
            className="text-sky-700 font-extrabold text-2xl underline"
            href={"/auth/sign-up"}
          >
            Sign up{" "}
          </Link>{" "}
        </p>

        <div className="flex justify-around">
          <Image
            src={"/images/Group.png"}
            width={75}
            height={75}
            alt="logo"
          ></Image>
          <Image
            src={"/images/Facebook.png"}
            width={75}
            height={75}
            alt="logo"
          ></Image>
          <Image
            src={"/images/instagram.png"}
            width={75}
            height={75}
            alt="logo"
          ></Image>
        </div>
      </div>
    </div>
  );
}
