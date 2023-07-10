"use client";
// import { WagmiConfig, createConfig } from "wagmi";
// import { ConnectKitProvider, getDefaultConfig } from "connectkit";
// import Navbar from "@/components/instructionsComponent/navigation/navbar";
// import Footer from "@/components/instructionsComponent/navigation/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text-textPrimary font-sans">
        <div>
          {/* <Navbar /> */}
          <div style={{ flexGrow: 1 }}>{children}</div>
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
