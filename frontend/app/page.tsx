import Image from "next/image";
import Link from "next/link";
import "./globals.css";

// Asset Imports
import { HomeGameAvatar, WaveBackground } from "@/assets";

export default function Home() {
  return (
    <main className="bg-backgroundColor min-w-[100vw] min-h-screen h-full pt-16">
      {/* Footer-Gradient */}
      <div className="w-full h-[250px] gradient-linear-transparent-primary-secondary absolute bottom-0"></div>

      {/* Waves */}
      <Image
        src={WaveBackground}
        alt=""
        className="absolute top-[30px] left-0"
      />
      {/* Avatar */}
      <Image
        src={HomeGameAvatar}
        alt="Avatar"
        className="absolute left-[-115px] -bottom-7"
      />

      <section className="flex flex-col gap-8 w-fit absolute right-0 mr-28 top-[45%] -translate-y-1/2">
        {/* Heading */}
        <h1 className="font-extrabold text-[64px] leading-[85px]">
          <p className="block">Discover, Collect</p>
          <p className="block">
            and Sell{" "}
            <span className="gradient-linear-primary-secondary-text">TBAs</span>
          </p>
        </h1>
        {/* Sub-Heading */}
        <h2 className="font-bold text-textSecondary text-4xl">
          <p className="block">Discover the most exclusive Gaming</p>
          <p className="block">account TBAs in our marketplace</p>
        </h2>
        {/* Links */}
        <div className="flex flex-row justify-between text-3xl mt-4">
          <Link
            href="/marketplace"
            className="py-2 px-20 bg-primary rounded-md cursor-pointer"
          >
            Buy
          </Link>
          <Link
            href="/create-tba"
            className="py-2 px-20 bg-secondary rounded-md cursor-pointer"
          >
            Sell
          </Link>
        </div>
      </section>
    </main>
  );
}
