import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DealsOfDay from "@/components/DealsOfDay";
import Categories from "@/components/Categories";
import BestSellers from "@/components/BestSellers";
import WhyBanana from "@/components/WhyBanana";
import PromoBanners from "@/components/PromoBanners";
import NewArrivals from "@/components/NewArrivals";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { StoreProvider } from "@/components/Store";

export default function Home() {
  return (
    <StoreProvider>
      <ScrollProgress />
      <TopBar />
      <Header />
      <main>
        <Hero />
        <DealsOfDay />
        <Categories />
        <BestSellers />
        <WhyBanana />
        <PromoBanners />
        <NewArrivals />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </StoreProvider>
  );
}
