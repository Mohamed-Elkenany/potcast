import React from "react";
import Link from "next/link";
import Image from "next/image";

const SignIn = () => {
  return (
    <div className="bg-black-1 py-14 px-8 rounded-xl flex flex-col gap-y-12">
      <div>
        <Link href={"/"}>
          <div className="flex items-center gap-x-2">
            <Image src={"/icons/LOGO.svg"} width={23} height={23} alt="logo" />
            <h2 className="font-extrabold text-4xl text-white-1 tracking-wide">
              Potcastr
            </h2>
          </div>
        </Link>
        <h6 className="text-base font-normal text-gray-1 mt-4">
          to continue to Podcastr
        </h6>
      </div>
      <div className="flex items-center gap-x-4">
        <div>
          <Link href={"/"}>
            <Image
              src={"/icons/google.svg"}
              width={23}
              height={23}
              alt="google_logo"
            />
          </Link>
        </div>
        <div>
          <Link href={"/"}>
            <Image
              src={"/icons/github.svg"}
              width={23}
              height={23}
              alt="github_logo"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
