import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "NewsHub - Your Gateway to Global News",
  description:
    "A modern news aggregator featuring top sources like Financial Times, Bloomberg, Business Insider, and more. Stay updated with curated business and financial news.",
  keywords: [
    "news aggregator",
    "business news",
    "financial news",
    "Bloomberg",
    "Financial Times",
    "Business Insider",
    "Economic Times",
    "Times of India",
  ],
  authors: [
    {
      name: "Rohit Purkait",
      url: "https://github.com/codeswithroh",
    },
  ],
  creator: "Rohit Purkait",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
