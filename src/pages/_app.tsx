import Meta from "@/Meta";
import "@/styles/globals.css";
import { Roboto } from "next/font/google";
import type { AppProps } from "next/app";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
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
