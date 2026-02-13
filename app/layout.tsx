import "./globals.css";
import { Instrument_Serif, Inter } from "next/font/google";

const sans = Inter({ 
  subsets: ["latin"], 
  variable: "--font-sans",
  display: 'swap',
});

const serif = Instrument_Serif({ 
  weight: "400",
  subsets: ["latin"], 
  variable: "--font-serif",
  display: 'swap',
});

export const metadata = {
  title: "UrShield | Elite Financial Strategy",
  description: "Architects of institutional resilience and capital sovereignty.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${sans.variable} ${serif.variable} antialiased bg-[#0a0a0a] text-white`}>
        <div className="bg-noise" />
        {children}
      </body>
    </html>
  );
}
