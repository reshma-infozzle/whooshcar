import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import FAQ from "./pages/FAQ";
import Calculator from "./pages/Calculator";
import HowItWorks from "./pages/HowItWorks";
import CarFinance from "./pages/CarFinance";
import BadCreditFinance from "./pages/BadCreditFinance";
import BusinessFinance from "./pages/BusinessFinance";
import VanFinance from "./pages/VanFinance";
import MotorbikeFinance from "./pages/MotorbikeFinance";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import TermsOfBusiness from "./pages/TermsOfBusiness";
import Complaints from "./pages/Complaints";
import CookiePolicy from "./pages/CookiePolicy";
import InitialDisclosure from "./pages/InitialDisclosure";
import Locations from "./pages/Locations";
import LocationDetail from "./pages/LocationDetail";
import LendersPresentation from "./pages/LendersPresentation";
import AdsContent from "./pages/AdsContent";
import Contact from "./pages/Contact";
import Sitemap from "./pages/Sitemap";
import Apply from "./pages/Apply";
import ApplicationComplete from "./pages/ApplicationComplete";
import Blog from "./pages/Blog";
import WhooshConcepts from "./pages/WhooshConcepts";
import NotFound from "@/pages/NotFound";
import BlogPost from "@/pages/BlogPost";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/car-finance" element={<CarFinance />} />
          <Route path="/bad-credit-finance" element={<BadCreditFinance />} />
          <Route path="/business-finance" element={<BusinessFinance />} />
          <Route path="/van-finance" element={<VanFinance />} />
          <Route path="/motorbike-finance" element={<MotorbikeFinance />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/terms-of-business" element={<TermsOfBusiness />} />
          <Route path="/complaints" element={<Complaints />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/initial-disclosure" element={<InitialDisclosure />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/locations/:city" element={<LocationDetail />} />
          <Route path="/lenders" element={<LendersPresentation />} />
          <Route path="/ads-content" element={<AdsContent />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/application-complete" element={<ApplicationComplete />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/concepts" element={<WhooshConcepts />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
