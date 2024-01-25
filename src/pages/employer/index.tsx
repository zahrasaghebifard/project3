import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { toast } from "sonner";

type Props = {};

export default function Home({}: Props) {
  const router = useRouter();
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
          Welcome to your account, dear employer! you can choose any action you
          need from below.
        </div>
      </div>
      <div className="font-semibold  mx-12 mt-12 mb-6 text-6xl">Dashboard</div>
      <div className="grid grid-cols-2">
        <div className="grid grid-cols-1 gap-3 ">
          <div
            className="bg-purple-500 w-[250px] mx-auto py-4 flex rounded-full h-[85px] items-center px-6 m-3 justify-between flex-row-reverse cursor-pointer hover:scale-110 transition-all"
            onClick={() => {
              router.push("/employer/profile");
            }}
          >
            <div className="">
              <Image
                alt="logo"
                width={50}
                height={50}
                src={"/images/icons/user.png"}
              />
            </div>
            <div>Edit personal information</div>
          </div>
          <div
            className="bg-purple-600 w-[250px]  mx-auto py-4 flex rounded-full h-[85px] items-center px-6 m-3 justify-between flex-row-reverse cursor-pointer hover:scale-110 transition-all"
            onClick={() => {
              router.push("/employer/new-ad");
            }}
          >
            <div>
              <Image
                alt="logo"
                width={50}
                height={50}
                src={"/images/icons/plus.png"}
              />
            </div>
            <div> Produce new Ad </div>
          </div>

          <div
            className="bg-purple-800 w-[250px]  mx-auto py-4 flex rounded-full h-[85px] items-center px-6 m-3 justify-between flex-row-reverse cursor-pointer hover:scale-110 transition-all"
            onClick={() => {
              router.push("/employer/ads");
            }}
          >
            <div>
              <Image
                alt="logo"
                width={50}
                height={50}
                src={"/images/icons/task.png"}
              />
            </div>
            <div> Manage your Ad(s)</div>
          </div>
        </div>

        <div className="flex justify-center  items-center ">
          {" "}
          <button
            className="bg-purple-900 p-6 h-[85px] px-12 text-white rounded-full hover:scale-105 transition-all"
            onClick={() => {
              toast("You are Exited Now !!! ");
              router.push("/");
            }}
          >
            Log out{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
