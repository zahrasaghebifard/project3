import Image from "next/image";
import { Inter } from "next/font/google";
import Squires from "@/components/squires/squires";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center  p-24 ${inter.className}`}
    >
      <Squires theme="green" />
      <h1 className="text-6xl mt-8 font-extrabold">Job finder app</h1>
      <h3 className="text-3xl my-3 font-semibold">
        welcome to the app. this app helps you to find your dream job
      </h3>
      <div className="flex mt-20">
        <div className="">
          <Link
            className="bg-green-500 px-6 py-6 my-4 mx-2 rounded-md cursor-pointer hover:scale-105 "
            href={"/auth/sign-up"}
          >
            Register now !
          </Link>
        </div>

        <div className="">
          <Link
            className="border-green-500 border-2 text-green-500 px-6 py-6 my-4 mx-2 rounded-md hover:bg-green-500 cursor-pointer hover:text-black"
            href={"/auth/login"}
          >
            login {"->"}
          </Link>
        </div>
      </div>
    </main>
  );
}
