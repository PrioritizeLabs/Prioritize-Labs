import { Geist, Geist_Mono, Poppins } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Providers from "./providers";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});


const neueKaine = localFont({
  src: "../fonts/neue-kaine-variable.ttf",
  variable: "--font-neue-kaine",
  weight: "100 900", // adjust if needed
  display: "swap",
});



export const metadata = {
  title: "Prioritize Labs | Growth Engineering for Ambitious Brands",
  description:
    "We build the complete growth engine — performance marketing, technology, and creative — so Indian founders see revenue, not just reach.",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${neueKaine.variable} antialiased`}

      >
        {/* <Providers> */}
          <Navbar />
          {children}
          <Footer />
        {/* </Providers> */}
      </body>
    </html>
  );
}
