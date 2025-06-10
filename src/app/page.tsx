import Header from "./components/header";
import Navbar from "./components/navbar";
import AboutUs from "./components/aboutus";
import Services from "./components/services";
import Team from "./components/ourteem";
import ServicesSection from "./components/serv";
import Footer from "./components/footer";
import FaqSection from "./components/faq";
import ContactSection from "./components/contactus";
import I18nProvider from './components/I18nProvider';


export default function Home() {
  return (
    <>
  <I18nProvider>
    <Navbar />
    <Header />
    <AboutUs />
    <Services />
    <Team />
    <ServicesSection />
    <FaqSection />
    <ContactSection />
    <Footer />
  </I18nProvider>
    </>
  );
}
