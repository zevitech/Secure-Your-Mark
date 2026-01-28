import FormHero from "@/components/form/FormHero";
import ThankYou from "@/components/form/steps/ThankYou";
import ConversionTracker from "@/components/tracking/ConversionTracker";

export const metadata = {
  title: "Thank You - Register Trademark | Secure Your Mark",
  description:
    "At Secure Your Mark, we offer expert trademark registration services to protect your business name, logo, and brand identity. Get started today!",
};

const page = () => {
  // You can dynamically pass value if needed
  // For example, get it from URL params or server-side props
  const conversionValue = 35.0; // or get from payment data

  return (
    <>
      {/* Single source of conversion tracking */}
      <ConversionTracker value={conversionValue} currency="USD" />

      <main className="mb-10">
        <FormHero />
        <ThankYou />
      </main>
    </>
  );
};

export default page;
