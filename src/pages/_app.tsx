import Meta from "@/Meta";
import "@/styles/globals.css";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ToasterContext from "@/components/ToasterContext";
import { type ComponentType } from "react";

type AppProps = {
  Component: ComponentType<any>;
  pageProps: any;
};

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div style={{ fontFamily: '"Omnes", sans-serif' }}>
      <Meta />
      <ToasterContext />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
};

export default App;
