import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const animeAce = localFont({
  src: [
    {
      path: "./fonts/animeace2_reg.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/animeace2_ital.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/animeace2_bld.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://google.com/"),
  title: "Diox",
  // description:
  //   "Diox is a freelance Security Researcher who specializes on different fields of Cybersecurity such as but not limited to Penetration Testing, Security Operations (SOC), Digital Forensics and Incident Response (DFIR). He also participates on different CTF competitions both local and international.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${animeAce.className} bg-dark-green text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
