"use-client";

import { SearchIcon } from "@/assets";
import Image from "next/image";
import React from "react";

// Custom Component Imports
import NftCard from "./NftCard";

const GameMarketplace = () => {
  return (
    <div>
      {/* Header */}
      <section className="w-full h-80 flex items-center">
        <div className="w-full flex flex-col gap-8 p-14 mt-11 gradient-linear-transparent-secondary-primary">
          <h1 className="font-extrabold text-[64px] leading-[85px]">
            Explore TBAs
          </h1>
          <div className="bg-backgroundColorDark flex flex-row gap-8 w-1/2 items-center py-2 px-4 rounded-lg">
            <Image src={SearchIcon} alt="Search" className=" w-[8%]" />
            <input
              type="text"
              name="search"
              className="outline-none bg-transparent text-2xl w-[92%]"
              placeholder="Search TBA"
            />
          </div>
        </div>
      </section>
      {/* Cards */}
      <section className="w-full grid grid-cols-3 place-items-center gap-8 px-20 py-24">
        <NftCard />
        <NftCard />
        <NftCard />
        <NftCard />
        <NftCard />
        <NftCard />
      </section>
    </div>
  );
};

export default GameMarketplace;
