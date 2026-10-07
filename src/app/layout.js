import { Geist, Geist_Mono, Poppins } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CTAProvider from "./components/CTAProvider";
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
  metadataBase: new URL("https://prioritizelabs.com"),
  alternates: { canonical: "/" },
  title: "Prioritize Labs | Growth Engineering for Ambitious Brands",
  description:
    "We build the complete growth engine — performance marketing, technology, and creative — so Indian founders see revenue, not just reach.",
  openGraph: {
    title: "Prioritize Labs | Growth Engineering for Ambitious Brands",
    description:
      "We build the complete growth engine — performance marketing, technology, and creative — so Indian founders see revenue, not just reach.",
    url: "https://prioritizelabs.com/",
    siteName: "Prioritize Labs",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://prioritizelabs.com/prioritizelabs-og.png",
        width: 1200,
        height: 630,
        alt: "Prioritize Labs — growth marketing, creative production, technology and automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prioritize Labs | Growth Engineering for Ambitious Brands",
    description:
      "We build the complete growth engine — performance marketing, technology, and creative — so Indian founders see revenue, not just reach.",
    images: ["https://prioritizelabs.com/prioritizelabs-og.png"],
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${neueKaine.variable} antialiased`}

      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": ["Organization", "LocalBusiness"],
                  "@id": "https://prioritizelabs.com/#organization",
                  name: "Prioritize Labs",
                  url: "https://prioritizelabs.com/",
                  logo: "https://prioritizelabs.com/prioritizelabs_logo.png",
                  email: "info@prioritizelabs.com",
                  telephone: "+919410424657",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "E-3/2060 Shaheed Nagar",
                    addressLocality: "Agra",
                    addressRegion: "Uttar Pradesh",
                    addressCountry: "IN",
                  },
                  areaServed: [
                    { "@type": "City", name: "Agra" },
                    { "@type": "Country", name: "India" },
                  ],
                  sameAs: [
                    "https://www.instagram.com/prioritizelabs/",
                    "https://www.linkedin.com/company/prioritize-labs/people/?viewAsMember=true",
                    "https://www.facebook.com/profile.php?id=61586540791615",
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://prioritizelabs.com/#website",
                  url: "https://prioritizelabs.com/",
                  name: "Prioritize Labs",
                  publisher: {
                    "@id": "https://prioritizelabs.com/#organization",
                  },
                  inLanguage: "en-IN",
                },
              ],
            }).replace(/</g, "\\u003c"),
          }}
        />
        <CTAProvider>
          <Navbar />
          {children}
          <Footer />
        </CTAProvider>
      </body>
    </html>
  );
}
