import GlobalContextProvider from "./context/GlobalContext";
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
    <GlobalContextProvider>
      <html lang="en" data-theme="night" className="overflow-x-hidden">
        <body className={montserrat.className}>{children}</body>
      </html>
    </GlobalContextProvider>
  );
}
