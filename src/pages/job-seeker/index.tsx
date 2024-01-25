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
        <div className="text-3xl">
          Welcome to your account, dear job seeker! you can choose any action
          you need from below.
        </div>
      </div>
      <div className="font-semibold text-6xl mx-12 mt-12 mb-6">Dashboard</div>
      <div>
        <div className="grid grid-cols-2 gap-3 ">
          <div
            className="bg-green-500 w-[250px] mx-auto py-4 flex rounded-full h-[85px] items-center px-6 m-3 justify-between flex-row-reverse cursor-pointer hover:scale-110 transition-all"
            onClick={() => {
              router.push("/job-seeker/profile");
            }}
          >
            <div>
              {" "}
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
            className="bg-green-600 w-[250px]  mx-auto py-4 flex rounded-full h-[85px] items-center px-6 m-3 justify-between flex-row-reverse cursor-pointer hover:scale-110 transition-all"
            onClick={() => {
              router.push("/job-seeker/edit-cv");
            }}
          >
            <div>
              {" "}
              <Image
                alt="logo"
                width={50}
                height={50}
                src={"/images/icons/cv.png"}
              />
            </div>
            <div> manage your CV(s) </div>
          </div>
          <div
            className="bg-green-700 w-[250px]  mx-auto py-4 flex rounded-full h-[85px] items-center px-6 m-3 justify-between flex-row-reverse cursor-pointer hover:scale-110 transition-all"
            onClick={() => {
              router.push("/job-seeker/advertises");
            }}
          >
            <div>
              {" "}
              <Image
                alt="logo"
                width={50}
                height={50}
                src={"/images/icons/task.png"}
              />
            </div>
            <div> observe the advertise list </div>
          </div>
          <div
            className="bg-green-800 w-[250px]  mx-auto py-4 flex rounded-full h-[85px] items-center px-6 m-3 justify-between flex-row-reverse cursor-pointer hover:scale-110 transition-all"
            onClick={() => {
              router.push("/job-seeker/requests");
            }}
          >
            <div>
              {" "}
              <Image
                alt="logo"
                width={50}
                height={50}
                src={"/images/icons/search.png"}
              />
            </div>
            <div> Manage your request(s)</div>
          </div>
        </div>

        <div className="flex justify-center ">
          {" "}
          <button
            className="bg-green-900 p-6 px-12 text-white rounded-full cursor-pointer hover:scale-110 transition-all"
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
