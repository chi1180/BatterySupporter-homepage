import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BatterySupporter home page",
  description: "A home page of BatterySupporter",
  verification: { google: "dVRTS_9lJ9SL6_YPh2Il8afiUi0v_3EbbHesLSBdDeo" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
