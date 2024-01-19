import React from "react";

type Props = {};

export default function Home({}: Props) {
  return (
    <div className="mt-12">
      <div className="flex ">
        <div className="mx-12">Headphone logo</div>
        <div>
          Welcome to your account, dear employer! you can choose any action you
          need from below.
        </div>
      </div>
      <div className="font-semibold text-xl mx-12 mt-12 mb-6">Dashboard</div>
      <div className="grid grid-cols-2">
        <div className="grid grid-cols-1 gap-3 ">
          <div className="bg-purple-500 w-[250px] mx-auto py-4 flex rounded-full h-[85px] items-center px-6 m-3 justify-between flex-row-reverse">
            <div>logo</div>
            <div>Edit personal information</div>
          </div>
          <div className="bg-purple-600 w-[250px]  mx-auto py-4 flex rounded-full h-[85px] items-center px-6 m-3 justify-between flex-row-reverse">
            <div>logo</div>
            <div> Produce new Ad </div>
          </div>

          <div className="bg-purple-800 w-[250px]  mx-auto py-4 flex rounded-full h-[85px] items-center px-6 m-3 justify-between flex-row-reverse ">
            <div>logo</div>
            <div> Manage your Ad(s)</div>
          </div>
        </div>

        <div className="flex justify-center  items-center ">
          {" "}
          <button className="bg-purple-900 p-6 h-[85px] px-12 text-white rounded-full">
            Log out{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
