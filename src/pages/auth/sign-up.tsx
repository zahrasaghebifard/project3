import Input from "@/components/input/Input";
import Squires from "@/components/squires/squires";
import Image from "next/image";
import React, { useState } from "react";
import userImage from "../../../public/images/user-icon.png";
import { toast } from "sonner";
type Props = {};

export default function SignUp({}: Props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isJobSeeker, setIsJobSeeker] = useState(true);

  return (
    <div>
      <Squires theme="purple" />
      <div className="w-[700px] mx-auto px-6 py-6 shadow-lg border-2 border-gray-200 rounded-md mb-12 ">
        <div className="flex justify-center my-3">
          <Image src={userImage} width={100} height={100} alt="user-icon" />
        </div>
        <div className="font-semibold my-1">
          Hello, new comer. we’d love to help you find a job! Please import the
          required information to sign up.
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Input
            value={username}
            setValue={setUsername}
            placeholder="Username"
            theme="purple"
          />
          <Input
            value={password}
            setValue={setPassword}
            placeholder="Password"
            theme="purple"
          />
          <Input
            value={confirmPassword}
            setValue={setConfirmPassword}
            placeholder="confirm password"
            theme="purple"
          />
          <Input
            value={email}
            setValue={setEmail}
            placeholder="Email"
            theme="purple"
          />
          <Input
            value={phone}
            setValue={setPhone}
            placeholder="Phone"
            theme="purple"
          />
          <div>
            Sign-in As :
            <div
              className="bg-gray-200 h-[60px] flex justify-center overflow-hidden"
              style={{ borderRadius: "60%" }}
            >
              <button
                className={`${
                  isJobSeeker ? "bg-green-700 text-white" : ""
                } mx-3`}
                onClick={() => {
                  setIsJobSeeker(true);
                }}
              >
                job seeker{" "}
              </button>
              <div className="w-[2px] bg-black h-full inline-block"></div>
              <button
                className={`${
                  !isJobSeeker ? "bg-purple-700 text-white" : ""
                } mx-3`}
                onClick={() => {
                  setIsJobSeeker(false);
                }}
              >
                {" "}
                employer
              </button>
            </div>
          </div>
        </div>
        <div className={`flex justify-end mt-6`}>
          <button
            className="bg-purple-300 py-5 px-3 w-[150px] text-xl rounded-md"
            onClick={() => {
              toast("you have registered successfully ");
            }}
          >
            Confirm{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
