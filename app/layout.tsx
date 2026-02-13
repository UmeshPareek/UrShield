import "./globals.css";

export const metadata = {
  title: "UrShield | Elite Consulting",
  description: "Market leaders in Compliance and Financial Strategy.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
