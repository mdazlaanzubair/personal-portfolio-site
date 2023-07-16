import SpotLight from "@/components/SpotLight";
import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  style: "normal",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Muhammad Azlaan Zubair",
  description: "Web developer portfolio.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`relative overflow-x-hidden text-base-content m-0 p-0 ${montserrat.className}`}
      >
        {children}
      </body>
    </html>
  );
}
