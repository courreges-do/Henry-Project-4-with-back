import type { Metadata } from "next";
import { Nunito, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Contexts from "./contexts";

const primaryFont = Nunito({
  subsets: ["latin"],
  variable: "--primary-font",
  weight: ["400", "700"],
});

const secondaryFont = Roboto({
  subsets: ["latin"],
  variable: "--secondary-font",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Vintage Furniture, Lighting & Art",
  description: "Style your home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Contexts>
      <html lang="en">
        <body
          className={`${primaryFont.variable} ${secondaryFont.variable} antialiased`}
        >
          <div className="container">
            <Navbar />
            <main className="bleed">{children}</main>
            <Footer />
          </div>
        </body>
      </html>
    </Contexts>
  );
}
