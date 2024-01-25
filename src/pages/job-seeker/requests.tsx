import React, { useEffect, useState } from "react";
import Data from "../../../public/mocks/mocks.json";
import { useRouter } from "next/router";
type Props = {};

export default function Requests({}: Props) {
  const [list, setList] = useState<(typeof Data.advertises)[0][]>([]);
  const router = useRouter();
  useEffect(() => {
    setList(Data.advertises.slice(0, 20));
  }, []);

  return (
    <div>
      <h1 className="text-center my-6 text-5xl">Requests</h1>

      <div className="flex flex-wrap justify-around mb-28">
        {list.map((req) => {
          const code = Math.floor(Math.random() * 4);
          return (
            <div
              key={req.title}
              className=" shrink-0 px-3 my-4 bg-gray-100 w-1/3 mx-4 py-6 rounded-md shadow-2xl"
            >
              <div className="opacity-55 my-3 text-red-500 font-semibold">
                {req.title}
              </div>
              <div className="opacity-55 my-3 text-green-700">
                {req.employer}
              </div>
              <div className="opacity-35 my-3">{req.description}</div>
              <div className="border-t-2 mt-4 pt-3">
                <span>Statue: </span>
                {code === 0 ? (
                  <span className="bg-gray-200 px-3 py-1 ">Not Seen</span>
                ) : code === 1 ? (
                  <span className="bg-orange-200 px-3 py-1 "> Seen </span>
                ) : code === 2 ? (
                  <span className="bg-green-200 px-3 py-1 "> Approved </span>
                ) : code === 3 ? (
                  <span className="bg-red-200 px-3 py-1 "> Rejected </span>
                ) : (
                  <span className="bg-green-200 px-3 py-1 "> Seen </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className="fixed bottom-0 flex justify-center w-full pb-3 pt-3 bg-white">
        <button
          className=" border-2 border-green-700 mx-4 py-3 px-4 rounded-lg"
          onClick={() => {
            router.push("/job-seeker");
          }}
        >
          {"<-"}
          return{" "}
        </button>
      </div>
    </div>
  );
}
