import Meta from "@/Meta";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ToasterContext from "@/components/ToasterContext";
import Script from "next/script";
import localFont from "next/font/local";

const omnes = localFont({
  src: [
    {
      path: "../../public/typo/omnes/Omnes Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/typo/omnes/Omnes Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/typo/omnes/Omnes SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/typo/omnes/Omnes Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-omnes",
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div className={`${omnes.className} font-sans`}>
      {process.env.NEXT_PUBLIC_CLARITY_ID && (
        <Script id="microsoft-clarity" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: `
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_ID}");
          `
        }} />
      )}
      <Meta />
      <ToasterContext />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
};

export default App;
