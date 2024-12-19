import "@/styles/globals.css";
import Meta from "@/Meta";
import type { AppProps } from "next/app";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ToasterContext from "@/components/ToasterContext";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <Meta />
      <ToasterContext />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
};

export default App;
