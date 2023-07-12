import Image from "next/image";
import React from "react";

// Assets Imports
import { GameNft } from "@/assets";

// Custom Componet Imports
import { GlowBackground, Navbar } from "@/components";

const NftDetailsPage = () => {
  return (
    <>
      <Navbar />

      <main className="bg-backgroundColor min-w-[100vw] min-h-screen h-full flex justify-center items-center pt-20 text-textPrimary font-nunito">
        <div className="w-full px-24 z-[1] py-16">
          <div className="flex flex-row gap-8">
            {/* NFT Image */}
            <Image
              src={GameNft}
              alt="NFT IMAGE"
              className="w-[600px] h-[600px] object-cover rounded-lg border border-white "
            />
            {/* NFT Details */}
            <section className="flex flex-col justify-around grow">
              {/* Heading */}
              <h1 className="text-5xl font-bold">Borg-#121</h1>
              {/* NFT Detail */}
              <div className="bg-backgroundColorDark border rounded-lg border-white p-4">
                {/* Heading */}
                <h2 className="text-2xl font-semibold pb-4">Details:</h2>
                {/* Wrapper */}
                <div className="flex flex-col justify-between gap-2">
                  {/* Token Standard */}
                  <div>
                    <h3 className="font-semibold text-xl text-textSecondary">
                      Token Standard:{" "}
                    </h3>
                    <p className="text-textTertiary text-lg block">ERC-721</p>
                  </div>
                  {/* NFT Contract Address */}
                  <div>
                    <h3 className="font-semibold text-xl text-textSecondary">
                      Contract Address:{" "}
                    </h3>
                    <p className="text-textTertiary text-lg block">
                      0x3E870F0Cb591646B3bD80935682ED3a970d99C46
                    </p>
                  </div>
                  {/* Token Id */}
                  <div>
                    <h3 className="font-semibold text-xl text-textSecondary">
                      Token Id:{" "}
                    </h3>
                    <p className="text-textTertiary text-lg block">#121</p>
                  </div>
                  {/* Owner's Address */}
                  <div>
                    <h3 className="font-semibold text-xl text-textSecondary">
                      Owner&apos;s Address:{" "}
                    </h3>
                    <p className="text-textTertiary text-lg block">
                      0x3E870F0Cb591646B3bD80935682ED3a970d99C46
                    </p>
                  </div>
                </div>
              </div>

              {/* Deploy TBA */}
              <button className="text-2xl py-2 px-16 bg-primary rounded-md font-bold cursor-pointer w-full">
                Deploy TBA
              </button>
            </section>
          </div>
          {/* TBA Details */}
          <div className="bg-backgroundColorDark border rounded-lg border-white p-8 mt-8">
            <h2 className="text-2xl font-semibold pb-4">TBA Details:</h2>
            <div className="flex flex-row">
              <div className="flex flex-row gap-x-16 gap-y-2 text-textTertiary text-lg">
                {/* TBA Addresses */}
                <div className="flex flex-col">
                  {/* Sub-Heading */}
                  <h3 className="font-semibold text-xl text-textSecondary">
                    TBA Address
                  </h3>
                  <p className="text-textTertiary text-xl">
                    0x3E870F0Cb591646B3bD80935682ED3a970d99C46
                  </p>
                  <p className="text-textTertiary text-xl">
                    0x3E870F0Cb591646B3bD80935682ED3a970d99C46
                  </p>
                  <p className="text-textTertiary text-xl">
                    0x3E870F0Cb591646B3bD80935682ED3a970d99C46
                  </p>
                  <p className="text-textTertiary text-xl">
                    0x3E870F0Cb591646B3bD80935682ED3a970d99C46
                  </p>
                </div>
                {/* ETH Owned */}
                <div className="flex flex-col">
                  <h3 className="font-semibold text-xl text-textSecondary">
                    ETH
                  </h3>
                  <strong className="gradient-linear-primary-secondary-text text-xl font-bold">
                    3.14 ETH
                  </strong>
                  <strong className="gradient-linear-primary-secondary-text text-xl font-bold">
                    3.14 ETH
                  </strong>
                  <strong className="gradient-linear-primary-secondary-text text-xl font-bold">
                    3.14 ETH
                  </strong>
                  <strong className="gradient-linear-primary-secondary-text text-xl font-bold">
                    3.14 ETH
                  </strong>
                </div>
                {/* NFTs Owned */}
                <div className="flex flex-col">
                  {/* Sub-Heading */}
                  <h3 className="font-semibold text-xl text-textSecondary">
                    NFTs
                  </h3>
                  <p className="text-textTertiary text-xl">10</p>
                  <p className="text-textTertiary text-xl">4</p>
                  <p className="text-textTertiary text-xl">3</p>
                  <p className="text-textTertiary text-xl">1</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <GlowBackground />
      </main>
    </>
  );
};

export default NftDetailsPage;
