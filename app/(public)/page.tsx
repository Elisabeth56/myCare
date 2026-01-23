import { Metadata } from "next";
import Hero from "@/components/public/hero";
import Features from "@/components/public/features/features";
import FeaturesTab from "@/components/public/features-tab/features-tab";
import Integration from "@/components/public/integrations";
import Testimonial from "@/components/public/testimonial/testimonial";
import FAQ from "@/components/public/faq/faq";

export const metadata: Metadata = {
  title: "MyCare - Home",

  // other metadata
  description: "MyCare - Your Ultimate Healthcare Companion. Manage appointments, access medical records, and connect with healthcare providers seamlessly.",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <FeaturesTab />
      <Integration />
      <FAQ />
      <Testimonial />
    </main>
  );
}
