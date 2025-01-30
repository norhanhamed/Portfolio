import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const outfit = Outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"]
});

export const metadata = {
  title: "Norhan Hamed",
  description: "Frontend web developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth dark" >
      <body
        className={`${outfit.variable} ${ovo.variable} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >
        <Navbar />
        
        {children}
        <Footer />
      </body>
    </html>
  );
}
