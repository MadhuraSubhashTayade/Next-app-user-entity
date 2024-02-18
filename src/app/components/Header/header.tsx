"use client";
import React, { ReactElement } from "react";

export const Header: React.FC = (): ReactElement => {
  return (
    <header className="text-zinc-800 p-4 h-full">
      <h1 className="text-2xl font-bold uppercase text-center tracking-wider">
        User Entity App
      </h1>
    </header>
  );
};
