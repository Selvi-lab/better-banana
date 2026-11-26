import "./globals.css";
import { Playfair_Display, Poppins } from "next/font/google";

const serif = Playfair_Display({ subsets: ["latin"], variable: "--font-serif", weight: ["500", "600", "700"] });
const sans = Poppins({ subsets: ["latin"], variable: "--font-sans", weight: ["300", "400", "500", "600", "700"] });

export const metadata = {
  title: "BANANA FIBRE – Nature in every thread",
  description: "Eco-friendly handcrafted banana fibre bags, mats, décor, fabrics, yarn and stationery.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
