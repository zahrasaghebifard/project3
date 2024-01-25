import React from "react";
import Data from "../../../public/mocks/mocks.json";
import Cart from "@/components/advertise/cart";
import { useRouter } from "next/router";
type Props = {};

export default function Advertises({}: Props) {
  const router = useRouter();
  return (
    <div>
      <h1
        className="text-center pt-10 pb-10 font-extrabold text-6xl sticky  top-0 bg-[#fff3] border-b-2 border-b-green-700"
        style={{
          backdropFilter: "blur(12px)",
        }}
      >
        Advertises
      </h1>
      <div>
        {Data.advertises.map((ad) => {
          return (
            <Cart
              title={ad.title}
              company={ad.employer}
              description={ad.description}
              key={ad.title}
            />
          );
        })}
      </div>
      <div
        className="fixed bottom-0 w-screen h-[30px] text-center text-black bg-white/50 border-t-2 border-t-green-800"
        style={{
          backdropFilter: "blur(12px)",
        }}
      >
        <button
          className="bg-yellow-400 px-5 hover:bg-yellow-500"
          onClick={() => {
            router.push("/job-seeker");
          }}
        >
          {" "}
          go back{" "}
        </button>
      </div>
    </div>
  );
}
