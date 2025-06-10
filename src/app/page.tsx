import Header from "./components/header";
import Navbar from "./components/navbar";
import AboutUs from "./components/aboutus";
import Services from "./components/services";
import Team from "./components/ourteem";
import ServicesSection from "./components/serv";
import Footer from "./components/footer";
import FaqSection from "./components/faq";
import ContactSection from "./components/contactus";
export default function Home() {
  return (
    <>
    <Navbar />
    <Header />
    <AboutUs />
    <Services />
    <Team />
    <ServicesSection />
    <FaqSection />
    <ContactSection />
    <Footer />
    </>
  );
}
