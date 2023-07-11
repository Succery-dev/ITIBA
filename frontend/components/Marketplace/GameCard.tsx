import Image from "next/image";
import React from "react";
import Link from "next/link";

// Asset Imports
import { GameLogo, CardDetailSection } from "@/assets";

const GameCard = () => {
  return (
    <Link href="/marketplace/xociety/" className="cursor-pointer">
      <section className="bg-backgroundColorDark p-2 flex flex-col w-fit rounded-lg relative">
        {/* Card Image */}
        <Image
          src={GameLogo}
          alt="Game Logo"
          className="w-80 h-80 object-cover rounded-lg"
        />
        {/* Card Detail */}
        <Image
          src={CardDetailSection}
          alt=""
          className="absolute bottom-0 left-0"
        />
        <p className="absolute left-4 bottom-7 font-bold text-2xl">XOCIETY</p>
        {/* <p className="font-bold pt-4 pb-2 text-2xl">XOCIETY</p> */}
      </section>
    </Link>
  );
};

export default GameCard;
