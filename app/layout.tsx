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
  metadataBase: new URL("https://briuwu.vercel.app"),
  title: "Brian Millonte - Full Stack Developer",
  description:
    "Brian Millonte is a Full Stack Developer based in the Philippines. He specializes in building web applications using modern technologies. He is passionate about building products that make a difference. He is currently a Undergraduate Student at the Cavite State University - Main Campus.",
  twitter: {
    title: "Brian Millonte - Full Stack Developer",
    description:
      "Brian Millonte is a Full Stack Developer based in the Philippines. He specializes in building web applications using modern technologies. He is passionate about building products that make a difference. He is currently a Undergraduate Student at the Cavite State University - Main Campus.",
    creator: "@brianmillonte",
    images: ["/website-preview.png"],
  },
  openGraph: {
    title: "Brian Millonte - Full Stack Developer",
    description:
      "Brian Millonte is a Full Stack Developer based in the Philippines. He specializes in building web applications using modern technologies. He is passionate about building products that make a difference. He is currently a Undergraduate Student at the Cavite State University - Main Campus.",
    type: "website",
    url: "https://briuwu.vercel.app",
    images: ["/website-preview.png"],
  },
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
