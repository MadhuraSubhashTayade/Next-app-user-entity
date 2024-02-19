"use client";
import Link from "next/link";
import React, { ReactElement } from "react";

export const Footer: React.FC = (): ReactElement => {
  return (
    <footer className="text-zinc-700 flex items-center p-4 h-full justify-between sm:flex sm:flex-col sm:p-2">
      <div className="flex flex-col">
        <span className="text-[18px] sm:text-[16px] sm:text-center">
          User Entity App
        </span>
        <span className="text-[14px] sm:text-[12px]">
          Copyright @2024. All rights reserved.
        </span>
      </div>
      <div className=" xs:mr-0">
        <Link
          className="text-[17px] sm:text-[15.5px] hover:text-zinc-900 hover:underline"
          href="/notfound"
        >
          Help
        </Link>
        <span className="m-1">|</span>
        <Link
          className="text-[17px] sm:text-[15.5px] hover:text-zinc-900 hover:underline"
          href="/notfound"
        >
          Contact us
        </Link>
        <span className="m-1">|</span>
        <Link
          className="text-[17px] sm:text-[15.5px] hover:text-zinc-900 hover:underline"
          href="/notfound"
        >
          Privacy policy
        </Link>
        <span className="m-1">|</span>
        <Link
          className="text-[17px] sm:text-[15.5px] hover:text-zinc-900 hover:underline"
          href="/notfound"
        >
          {" "}
          T & C
        </Link>
      </div>
    </footer>
  );
};
