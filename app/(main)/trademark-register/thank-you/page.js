import FormHero from "@/components/form/FormHero";
import ThankYou from "@/components/form/steps/ThankYou";

// error bypassing
import Script from "next/script";

export const metadata = {
  title: "Thank You - Register Trademark | Secure Your Mark",
  description:
    "At Secure Your Mark, we offer expert trademark registration services to protect your business name, logo, and brand identity. Get started today!",
};

const page = () => {
  return (
    <>
      {/* Error Bypassing */}
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

      <main className="mb-10">
        {/* Error Bypassing */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PXZMCZM2"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <FormHero />
        <ThankYou />
      </main>
    </>
  );
};

export default page;
