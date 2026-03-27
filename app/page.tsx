import About from "./components/about/about";
import BestSellers from "./components/best-sellers/best-sellers";
import Collection from "./components/collection/collection";
import FAQ from "./components/faq/faq";
import Footer from "./components/footer/footer";
import Hero from "./components/hero/hero";
import Navbar from "./components/navbar/navbar";
import NewArrivals from "./components/new-arrivals/new-arrivals";
import Testimonials from "./components/testimonials/testimonials";

function HomePage() {
  return ( 
    <>
    <Navbar />
    <Hero/>
    <About/>
    <Collection />
    <NewArrivals />
    {/* <BestSellers /> */}
     <FAQ />
    <Testimonials />
    <Footer />
    </>
   );
}

export default HomePage;