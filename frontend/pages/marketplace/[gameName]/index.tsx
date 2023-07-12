"use client";

import React from "react";

// Custom Component Imports
import { Navbar, NftMarketplace } from "@/components";

const NftMarketplacePage = () => {
  return (
    <>
      <Navbar />

      <main className="bg-backgroundColor min-w-[100vw] min-h-screen h-full pt-12 text-textPrimary font-nunito">
        <NftMarketplace />
      </main>
    </>
  );
};

export default NftMarketplacePage;
