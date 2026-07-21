import CTA from "@/components/CTA";
import DashboardShowcase from "@/components/DashboardShowcase";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Workflow from "@/components/Workflow";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <Features />
      <Workflow />
      <DashboardShowcase />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}