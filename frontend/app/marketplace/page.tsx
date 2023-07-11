"use client";

import React from "react";
import "@/app/globals.css";

// Custom Component Imports
import { GameMarketplace } from "@/components";

const GameMarketplacePage = () => {
  return (
    <div className="bg-backgroundColor min-w-[100vw] min-h-screen h-full">
      <GameMarketplace />
    </div>
  );
};

export default GameMarketplacePage;
