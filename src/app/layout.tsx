import { Metadata } from "next";
import { Dangrek } from "next/font/google";
import "./globals.css";
import { APP_METADATA } from "@/config/constants";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const dangrek = Dangrek({
  subsets: ["khmer"],
  weight: "400",
  variable: "--font-dangrek",
});

export const generateMetadata = (): Partial<Metadata> => {
  return {
    title: {
      template: "%s | Superhero",
      default: "SuperHeros Arcade",
    },
    ...APP_METADATA,
  };
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${dangrek.variable} font-sans 2xl:container mx-auto `}>
        <Header />
        <main className="min-h-screen m-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
