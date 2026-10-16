import Header from "@/components/Header";
import FeaturedPost from "@/components/FeaturedPost";
import RecentPosts from "@/components/RecentPosts";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <FeaturedPost />
        <RecentPosts />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
