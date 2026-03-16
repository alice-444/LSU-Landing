import Meta from "@/Meta";
import "@/styles/globals.css";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import ScrollToTop from "@/components/ui/ScrollToTop";
import ToasterContext from "@/components/ui/ToasterContext";
import Clarity from "@/components/shared/Clarity";
import { type ComponentType } from "react";

type AppProps = {
  Component: ComponentType<any>;
  pageProps: any;
};

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
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
