import Image from "next/image";
import React from "react";
import "@/app/globals.css";

// Assets Imports
import { GameNft } from "@/assets";

// Custom Componet Imports
import { GlowBackground } from "@/components";

const NftDetailsPage = () => {
  return (
    <main className="bg-backgroundColor min-w-[100vw] min-h-screen h-full flex justify-center items-center">
      <div className="flex flex-row w-full gap-8 px-24 z-[1]">
        {/* NFT Image */}
        <Image
          src={GameNft}
          alt="NFT IMAGE"
          className="w-[600px] h-[600px] object-cover rounded-lg border border-white "
        />
        {/* NFT Details */}
        <section className="flex flex-col justify-between grow">
          {/* Heading */}
          <h1 className="text-5xl font-bold">Borg-#121</h1>
          {/* Owns TBAs */}
          <div className="bg-backgroundColorDark border rounded-lg border-white p-4">
            <h2 className="text-2xl font-semibold pb-4">Owns TBAs:</h2>
            <div className="flex flex-col justify-between text-textTertiary text-lg">
              <p>0x3E870F0Cb591646B3bD80935682ED3a970d99C46</p>
              <p>0x3E870F0Cb591646B3bD80935682ED3a970d99C46</p>
              <p>0x3E870F0Cb591646B3bD80935682ED3a970d99C46</p>
              <p>0x3E870F0Cb591646B3bD80935682ED3a970d99C46</p>
            </div>
          </div>
          {/* NFT Detail */}
          <div className="bg-backgroundColorDark border rounded-lg border-white p-4">
            {/* Heading */}
            <h2 className="text-2xl font-semibold pb-4">Details:</h2>
            {/* Wrapper */}
            <div className="flex flex-col justify-between">
              {/* NFT Contract Address */}
              <div className="flex flex-row items-baseline gap-2">
                <h3 className="font-semibold text-xl text-textSecondary">
                  Contract Address:{" "}
                </h3>
                <p className="text-textTertiary text-lg">
                  0x3E870F0Cb591646B3bD80935682ED3a970d99C46
                </p>
              </div>
              {/* Token Id */}
              <div className="flex flex-row gap-2 items-baseline">
                <h3 className="font-semibold text-xl text-textSecondary">
                  Token Id:{" "}
                </h3>
                <p className="text-textTertiary text-lg">#121</p>
              </div>
            </div>
          </div>
          {/* Buy NFT */}
          <div className="bg-backgroundColorDark border rounded-lg border-white p-4 flex flex-row justify-between items-center">
            {/* Price */}
            <strong className="gradient-linear-primary-secondary-text text-2xl font-bold">
              3.14 ETH
            </strong>
            <p className="text-xl py-1 px-16 bg-primary rounded-sm font-semibold cursor-pointer">
              Buy
            </p>
          </div>
        </section>
      </div>
      <GlowBackground />
    </main>
  );
};

export default NftDetailsPage;
