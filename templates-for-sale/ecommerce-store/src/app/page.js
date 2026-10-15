import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroBanner />
        <Categories />
        <FeaturedProducts />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
