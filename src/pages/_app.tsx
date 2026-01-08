import Meta from "@/Meta";
import "@/styles/globals.css";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ScrollToTop from "@/components/layout/ScrollToTop";
import ToasterContext from "@/components/ToasterContext";
import Clarity from "@/components/Clarity";
import { type ComponentType } from "react";

type AppProps = {
  Component: ComponentType<any>;
  pageProps: any;
};

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div style={{ fontFamily: '"Omnes", sans-serif' }}>
      <Meta />
      <Clarity />
      <ToasterContext />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;
