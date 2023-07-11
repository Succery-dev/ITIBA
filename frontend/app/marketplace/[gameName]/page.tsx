"use client";

import React from "react";
import "@/app/globals.css";

// Custom Component Imports
import { NftMarketplace } from "@/components";

const NftMarketplacePage = () => {
  return (
    <main className="bg-backgroundColor min-w-[100vw] min-h-screen h-full pt-12">
      <NftMarketplace />
    </main>
  );
};

export default NftMarketplacePage;
