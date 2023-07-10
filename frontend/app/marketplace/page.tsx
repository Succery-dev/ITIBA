"use client";

import React from "react";
import "../globals.css";

// Custom Component Imports
import { GameCard, MarketScaffold } from "@/components";

const GameMarketplace = () => {
  return (
    <div className="bg-backgroundColor min-w-[100vw] min-h-screen h-full">
      <MarketScaffold />
    </div>
  );
};

export default GameMarketplace;
