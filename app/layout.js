import "./globals.css";
import { Poppins, Inria_Serif } from "next/font/google";
import Script from "next/script";
import GlobalProvider from "./(main)/trademark-register/GlobalProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const inriaSerif = Inria_Serif({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-inria",
});

export const metadata = {
  title: "Register Trademark - Secure Your Mark",
  description:
    "At Secure Your Mark, we offer expert trademark registration services to protect your business name, logo, and brand identity. Get started today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Microsoft UET Tag */}
      <Script
        type="text/javascript"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
              (function(w,d,t,r,u){var f,n,i;w[u]=w[u]||[],f=function(){var o={ti:"343156876", enableAutoSpaTracking: true};o.q=w[u],w[u]=new UET(o),w[u].push("pageLoad")},n=d.createElement(t),n.src=r,n.async=1,n.onload=n.onreadystatechange=function(){var s=this.readyState;s&&s!=="loaded"&&s!=="complete"||(f(),n.onload=n.onreadystatechange=null)},i=d.getElementsByTagName(t)[0],i.parentNode.insertBefore(n,i)})(window,document,"script","//bat.bing.com/bat.js","uetq");
            `,
        }}
      />

      {/* Tawk.to */}
      <Script
        id="tawkTo"
        type="text/javascript"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/65c65f260ff6374032cb5fa4/1hm7e7bu5';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `,
        }}
      />

      {/* Google Tag Manager */}
      <Script
        id="gtm"
        type="text/javascript"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PXZMCZM2');`,
        }}
      />

      {/* MouseFlow Tracking */}
      <Script
        id="mouseflow"
        type="text/javascript"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window._mfq = window._mfq || [];
            (function() {
              var mf = document.createElement("script");
              mf.type = "text/javascript"; 
              mf.defer = true;
              mf.src = "//cdn.mouseflow.com/projects/7ded44f5-ebf3-445d-b673-1936a00b32d4.js";
              document.getElementsByTagName("head")[0].appendChild(mf);
            })();
           `,
        }}
      />

      <head>
        <meta
          name="keywords"
          content="where to register business name, trademark my name, trademark brand name, apply for trademark online, trade mark a company name, file my trademark, brand name trademark registration, best trademark registration service, trademark filing company, cheap trademark registration, trade mark registration, get a trademark, register my business, register my company name, trademark my logo, trademark my business name, apply for trademark, file trademark for business name, trademark registration, register my business name, register business name, trademark a name, file a trademark, get my brand trademarked, trademark and brand registration"
        />
        <meta name="author" content="Secure Your Mark" />
      </head>
      <body className={`${poppins.className} ${inriaSerif.variable}`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PXZMCZM2"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {/* <GlobalProvider> */}
        {children}
        {/* </GlobalProvider> */}
      </body>
    </html>
  );
}
