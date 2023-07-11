"use client";

import React, { useState } from "react";
import Image from "next/image";
import "@/app/globals.css";

// Custom Component Imports
import { GlowBackground } from "@/components";

const CreateTbaPage = () => {
  const [form, setForm] = useState();
  return (
    <main className="bg-backgroundColor min-w-[100vw] min-h-screen h-full flex items-center">
      <div className="px-24 z-[1]">
        <section className="bg-backgroundColorDark border border-white rounded-lg px-8 py-12">
          {/* Heading */}
          <h2 className="text-5xl font-bold">Create TBA</h2>
          {/* Create TBA Form */}
          <form className="flex flex-col mt-8 gap-4">
            {/* NFT Address */}
            <div className="flex flex-col gap-2">
              <p className="text-2xl text-textSecondary font-semibold">
                NFT Address
              </p>
              <input
                type="text"
                name="nft-address"
                placeholder="0x3E870F0Cb591646B3bD80935682ED3a970d99C46"
                className="outline-none border border-x-textTertiary focus:border-white bg-backgroundColor text-textTertiary text-xl w-[750px] px-4 py-1 rounded-sm"
              />
            </div>
            {/* Token Id */}
            <div className="flex flex-col gap-2">
              <p className="text-2xl text-textSecondary font-semibold">
                Token Id
              </p>
              <input
                type="text"
                name="token-Id"
                placeholder="121"
                className="outline-none border border-x-textTertiary focus:border-white bg-backgroundColor text-textTertiary text-xl w-[750px] px-4 py-1 rounded-sm"
              />
            </div>
            {/* Chain Id */}
            <div className="flex flex-col gap-2">
              <p className="text-2xl text-textSecondary font-semibold">
                Chain Id
              </p>
              <input
                type="text"
                name="chain-Id"
                placeholder="9331"
                className="outline-none border border-x-textTertiary focus:border-white bg-backgroundColor text-textTertiary text-xl w-[750px] px-4 py-1 rounded-sm"
              />
            </div>
            {/* Create Button */}
            <button
              className="text-2xl font-semibold px-16 py-1 mt-6 bg-primary rounded-sm"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Create
            </button>
          </form>
        </section>
      </div>
      <GlowBackground />
    </main>
  );
};

export default CreateTbaPage;
