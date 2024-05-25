import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import People from "./components/People";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

export default function Home() {

  return (
    <main className="">
      <Header />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <People />
      <Footer />
    </main>
  );
}
