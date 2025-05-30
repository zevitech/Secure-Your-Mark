import "../../globals.css";
import { Inter } from "next/font/google";
import GlobalProvider from "./GlobalProvider";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Step 1 - Register Trademark | Secure Your Mark",
  description:
    "At Secure Your Mark, we offer expert trademark registration services to protect your business name, logo, and brand identity. Get started today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
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

        {/* New Google Tag Manager Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16979187198"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16979187198');
          `}
        </Script>
      </head>

      <body className={`${inter.className}`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PXZMCZM2"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <div className={`bg-form-body`}></div>

        <GlobalProvider>{children}</GlobalProvider>
      </body>
    </html>
  );
}
