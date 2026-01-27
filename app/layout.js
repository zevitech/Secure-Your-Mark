import "./globals.css";
import { Poppins, Inria_Serif } from "next/font/google";
import Script from "next/script";

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
      <head>
        <meta
          name="keywords"
          content="where to register business name, trademark my name, trademark brand name, apply for trademark online, trade mark a company name, file my trademark, brand name trademark registration, best trademark registration service, trademark filing company, cheap trademark registration, trade mark registration, get a trademark, register my business, register my company name, trademark my logo, trademark my business name, apply for trademark, file trademark for business name, trademark registration, register my business name, register business name, trademark a name, file a trademark, get my brand trademarked, trademark and brand registration"
        />
        <meta name="author" content="Secure Your Mark" />
        <meta name="author" content="Legal Trademark Office" />
        <meta name="developer" content="https://softenum.com/" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://secureyourmark.com/" />

        {/* Microsoft UET Tag */}
        <Script
          id="microsoftUET"
          type="text/javascript"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,t,r,u){var f,n,i;w[u]=w[u]||[],f=function(){var o={ti:"343156876", enableAutoSpaTracking: true};o.q=w[u],w[u]=new UET(o),w[u].push("pageLoad")},n=d.createElement(t),n.src=r,n.async=1,n.onload=n.onreadystatechange=function(){var s=this.readyState;s&&s!=="loaded"&&s!=="complete"||(f(),n.onload=n.onreadystatechange=null)},i=d.getElementsByTagName(t)[0],i.parentNode.insertBefore(n,i)})(window,document,"script","//bat.bing.com/bat.js","uetq");
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

        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4V3XW7Q5EG"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4V3XW7Q5EG');
            gtag('config', 'AW-16979187198');
          `}
        </Script>
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

        {/* Live Chat (noscript) */}
        {/* <noscript>
          <a href="https://www.livechat.com/chat-with/19119842/" rel="nofollow">
            Chat with us
          </a>
          , powered by{" "}
          <a
            href="https://www.livechat.com/?welcome"
            rel="noopener nofollow"
            target="_blank"
          >
            LiveChat
          </a>
        </noscript> */}
        {/* End Live Chat (noscript) */}

        {children}

        {/* Live Chat */}
        <Script
          id="livechat-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          window.__lc = window.__lc || {};
    window.__lc.license = 19119842;
    window.__lc.integration_name = "manual_channels";
    window.__lc.product_name = "livechat";
    ;(function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[LiveChatWidget] You can't use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.livechatinc.com/tracking.js",t.head.appendChild(n)}};!n.__lc.asyncInit&&e.init(),n.LiveChatWidget=n.LiveChatWidget||e}(window,document,[].slice))
`,
          }}
        />
      </body>
    </html>
  );
}
