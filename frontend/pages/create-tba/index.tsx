"use client";

import React from "react";
// Custom Component Imports
import { ChooseNft, Navbar } from "@/components";

const CreateTbaPage = () => {
  return (
    <>
      <Navbar />
      <main className="bg-backgroundColor min-w-[100vw] min-h-screen h-full pt-12 text-textPrimary font-nunito">
        <ChooseNft />
      </main>
    </>
  );
};

export default CreateTbaPage;
