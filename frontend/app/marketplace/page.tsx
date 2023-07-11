"use client";

import React from "react";
import "@/app/globals.css";

// Custom Component Imports
import { GameMarketplace, GlowBackground } from "@/components";

const GameMarketplacePage = () => {
  return (
    <div className="bg-backgroundColor min-w-[100vw] min-h-screen h-full pt-12">
      <GameMarketplace />
    </div>
  );
};

export default GameMarketplacePage;
