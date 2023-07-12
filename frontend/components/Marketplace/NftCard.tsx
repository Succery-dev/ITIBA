import Image from "next/image";
import React from "react";
import Link from "next/link";

// Asset Imports
import { GameNft, CardDetailSection } from "@/assets";

const NftCard = ({ showPrice }: { showPrice: boolean }) => {
  return (
    <Link
      href={`${
        showPrice === true
          ? "/marketplace/0x3E870F0Cb591646B3bD80935682ED3a970d99C46/121"
          : "create-tba/0x3E870F0Cb591646B3bD80935682ED3a970d99C46-121"
      }`}
      className=" cursor-pointer"
    >
      <section className="bg-backgroundColorDark p-2 flex flex-col w-fit rounded-lg relative">
        {/* Card Image */}
        <Image
          src={GameNft}
          alt="Game Logo"
          className="w-80 h-[450px] object-cover rounded-lg"
        />
        {/* Card Detail */}
        <Image
          src={CardDetailSection}
          alt=""
          className="absolute bottom-0 left-0"
        />
        <div
          className={`absolute left-3 ${
            showPrice === true ? "bottom-3" : "bottom-6"
          } flex flex-col gap-2`}
        >
          <p
            className={`font-bold ${
              showPrice === true ? "text-xl" : "text-2xl"
            }`}
          >
            Borg-#1211...
          </p>
          {showPrice && (
            <p className=" bg-primary text-lg py-1 px-2 text-center font-semibold rounded-sm">
              3.14 ETH
            </p>
          )}
        </div>
      </section>
    </Link>
  );
};

export default NftCard;
