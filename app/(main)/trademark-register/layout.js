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
        {/* Microsoft Clarity - inherited from parent layout */}
        {/* MouseFlow Tracking - inherited from parent layout */}
        {/* Google Analytics & Ads tracking - inherited from parent layout */}
      </head>

      <body className={`${inter.className}`}>
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

        <div className={`bg-form-body`}></div>

        <GlobalProvider>{children}</GlobalProvider>

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
