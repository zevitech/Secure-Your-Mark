import FormHero from "@/components/form/FormHero";
import ThankYou from "@/components/form/steps/ThankYou";
import ConversionTracker from "@/components/tracking/ConversionTracker";
import Script from "next/script";

export const metadata = {
  title: "Thank You - Register Trademark | Secure Your Mark",
  description:
    "At Secure Your Mark, we offer expert trademark registration services to protect your business name, logo, and brand identity. Get started today!",
};

const page = () => {
  return (
    <>
      {/* Event snippet for Order conversion page */}
      <Script
        id="conversion-event"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            gtag('event', 'conversion', {
              'send_to': 'AW-16979187198/cYc6CMq_-90bEP6rp6A_',
              'value': 35.0,
              'currency': 'USD',
              'transaction_id': 'TM-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9)
            });
          `,
        }}
      />
      <ConversionTracker />
      <main className="mb-10">
        <FormHero />
        <ThankYou />
      </main>
    </>
  );
};

export default page;
