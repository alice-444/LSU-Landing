import "@/styles/globals.css";
import type { AppProps } from "next/app";
import ToasterContext from "@/components/ToasterContext";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <ToasterContext />
      <Component {...pageProps} />
    </div>
  );
};

export default App;
