import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  style: "normal",
  weight: ["100", "200", "400", "800"],
});

export const metadata = {
  title: "Muhammad Azlaan Zubair",
  description: "Web developer portfolio.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="night" className="bg-navy-dark overflow-x-hidden">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
