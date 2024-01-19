import Input from "@/components/input/Input";
import Squires from "@/components/squires/squires";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

export default function Login({}: Props) {
  return (
    <div>
      <Squires />
      <div className="w-[500px] mx-auto">
        <div>logo</div>
        <div className="font-semibold my-1">
          welcome back to our job seeking site! Please sign up to access your
          account.
        </div>

        <Input />
        <Input />

        <p>
          Do not have an account? <Link href={"/auth/sign-up"}>Sign up </Link>{" "}
        </p>

        <div className="flex">
          <Image src={"/chrome"} width={100} height={100} alt="logo"></Image>
          <Image src={"/chrome"} width={100} height={100} alt="logo"></Image>
          <Image src={"/chrome"} width={100} height={100} alt="logo"></Image>
        </div>
      </div>
    </div>
  );
}
