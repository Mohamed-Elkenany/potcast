"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { navLinks } from "../constant";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
const LeftSidebar = () => {
  const pathname = usePathname();
  return (
    <div className="sticky top-0 left-0 min-h-full flex flex-col gap-y-12 pt-[30px] col-span-2 bg-black-1">
      <div className="px-7">
        <Link href={"/"} className="flex items-center gap-x-1">
          <Image src={"/icons/logo.svg"} width={23} height={23} alt="logo" />
          <h1 className="text-2xl text-white-1 font-extrabold">Potcast</h1>
        </Link>
      </div>
      <div>
        <nav>
          <ul className="flex flex-col gap-y-4">
            {navLinks.map((nav, i) => {
              const isActive: boolean = pathname === nav.path;
              return (
                <li
                  key={i}
                  className={`relative ${
                    isActive && "link-isActive"
                  } px-8 py-1 re`}
                >
                  <Link
                    href={nav.path}
                    className={cn(
                      "flex items-center gap-x-2 w-full py-2 text-base text-white-2 font-semibold",
                      isActive && "text-white-1"
                    )}
                  >
                    <Image
                      src={nav.icon}
                      width={24}
                      height={24}
                      alt={`${nav.name}_logo`}
                      className={cn(" invert-[70%]", isActive && "invert-0")}
                    />
                    <h5>{nav.name}</h5>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default LeftSidebar;
