import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });
const serif = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

export const metadata = {
  title: "UrShield | Elite Consulting",
  description: "Market leaders in Compliance, Financial Strategy, and Venture Architecture.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${sans.variable} ${serif.variable} antialiased bg-white text-slate-900`}>
        {children}
      </body>
    </html>
  );
}
