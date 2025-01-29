import Meta from "@/Meta";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ToasterContext from "@/components/ToasterContext";

const inter = Roboto({ subsets: ["latin"], weight: "400" });

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div className={`${inter.className}`}>
      <Meta />
      <ToasterContext />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
};

export default App;
