import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AboutUs } from "@/components/AboutUs";
import { FinanceForm } from "@/components/FinanceForm";
import { HowItWorks } from "@/components/HowItWorks";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <FinanceForm />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
