import React, { useEffect, useState } from "react";
import Data from "../../../public/mocks/mocks.json";
import { toast } from "sonner";
import { useRouter } from "next/router";
type Props = {};

export default function Ads({}: Props) {
  const [ads, setAds] = useState<(typeof Data.advertises)[0][]>([]);
  const router = useRouter();
  useEffect(() => {
    setAds(Data.advertises.slice(0, 5));
  }, []);

  return (
    <div>
      <h1 className="text-5xl my-4 text-center"> Your previous Ads</h1>

      <div className="mb-28">
        {ads.length === 0 && (
          <span className="bg-purple-700 mx-auto text-white text-5xl block mt-16 text-center">
            No Ads Exist !!{" "}
          </span>
        )}
        {ads.map((ad) => {
          return (
            <div
              key={ad.title}
              className="bg-white shadow-xl my-6 px-4 py-5 w-[80%] mx-auto rounded-lg "
            >
              <div>{ad.title}</div>
              <div>{ad.description}</div>
              <div className="flex justify-end ">
                <button
                  className="text-red-500 underline text-xl"
                  onClick={() => {
                    setAds((prev) =>
                      prev.filter((cur) => cur.title !== ad.title)
                    );
                    toast("Add has been deleted ");
                  }}
                >
                  delete this ad{" "}
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="fixed bottom-0 flex bg-white border-t-2 border-t-purple-700 pt-2 justify-center w-full pb-3">
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
    </div>
  );
}
