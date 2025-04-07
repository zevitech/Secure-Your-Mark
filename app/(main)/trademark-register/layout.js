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
        {/* Live Chat */}
        <Script
          id="livechat-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
       window._lc = window._lc || {};
    window.__lc.license = 19119842;
    window.__lc.integration_name = "manual_onboarding";
    window.__lc.product_name = "livechat";
    ;(function(n,t,c){function i(n){return e.h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[LiveChatWidget] You can't use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.livechatinc.com/tracking.js",t.head.appendChild(n)}};!n._lc.asyncInit&&e.init(),n.LiveChatWidget=n.LiveChatWidget||e}(window,document,[].slice))
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

        {/* Live Chat (noscript) */}
        <noscript>
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
        </noscript>
        {/* End Live Chat (noscript) */}

        <div className={`bg-form-body`}></div>

        <GlobalProvider>{children}</GlobalProvider>
      </body>
    </html>
  );
}
