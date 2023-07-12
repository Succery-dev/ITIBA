"use client";

import React from "react";

// Custom Component Imports
import { GameMarketplace, Navbar } from "@/components";

const GameMarketplacePage = () => {
  return (
    <>
      <Navbar />
      <main className="bg-backgroundColor min-w-[100vw] min-h-screen h-full pt-12 text-textPrimary font-nunito">
        <GameMarketplace />
      </main>
    </>
  );
};

export default GameMarketplacePage;
