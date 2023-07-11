"use client";

import { Navbar } from "@/components";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text-textPrimary font-sans">
        <div>
          <Navbar />
          <div style={{ flexGrow: 1 }}>{children}</div>
        </div>
      </body>
    </html>
  );
}
