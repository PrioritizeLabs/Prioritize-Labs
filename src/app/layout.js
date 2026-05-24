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
  title: "PrioritizeLabs | Digital Creative Agency",
  description:
    "PrioritizeLabs is a digital creative agency specializing in web development, social media, video production, 3D visualization, and creative staffing.",
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
