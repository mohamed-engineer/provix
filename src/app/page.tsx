import Header from "./components/header";
import Navbar from "./components/navbar";
import AboutUs from "./components/aboutus";
import Services from "./components/services";
import Team from "./components/ourteem";
export default function Home() {
  return (
    <>
    <Navbar />
    <Header />
    <AboutUs />
    <Services />
    <Team />
    </>
  );
}
