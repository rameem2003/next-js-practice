import { DM_Sans, Source_Code_Pro } from "next/font/google";
import "./globals.css";
import Navbar from "./components/shared/Navbar";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm",
});

const code = Source_Code_Pro({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-code",
});

export const metadata = {
  title: "Mamood Hassan Rameem",
  description: "MERN Satck Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${code.variable}`}>
        <div className="relative w-full h-screen bg-slate-950">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_90%_90%_at_50%_0%,#000_70%,transparent_100%)]" />
          <div className=" absolute w-full h-screen z-10">
            <Navbar />

            <div className=" absolute top-[50%] translate-y-[-50%] left-0 w-full">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
