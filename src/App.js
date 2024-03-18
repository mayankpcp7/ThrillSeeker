import "./App.css";
import Header from "./components/Header";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";
import OurClient from "./components/OurClient";
import Bestoffers from "./components/Bestoffers";
import ChooseUs from "./components/ChooseUs";
import TicketPackage from "./components/TicketPackage";
import OurBlog from "./components/OurBlog";
import PlaceCards from "./components/PlaceCards";
import BackToTop from "./components/common/BackToTop";

function App() {
  return (
    <>
      <div className="overflow-hidden">
        <Header />
        <Bestoffers />
        <ChooseUs />
        <TicketPackage />
        <OurBlog />
        <PlaceCards />
        <OurClient />
        <Faqs />
        <Footer />
        <BackToTop />
      </div>
    </>
  );
}

export default App;
