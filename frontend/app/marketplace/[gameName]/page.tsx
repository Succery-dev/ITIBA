"use client";

import React from "react";
import "@/app/globals.css";

// Custom Component Imports
import { NftMarketplace } from "@/components";

const NftMarketplacePage = () => {
  return (
    <div className="bg-backgroundColor min-w-[100vw] min-h-screen h-full">
      <NftMarketplace />
    </div>
  );
};

export default NftMarketplacePage;
