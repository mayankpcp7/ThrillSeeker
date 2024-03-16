import "./App.css";
import Header from "./components/Header";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";
import OurClient from "./components/OurClient";
import Bestoffers from "./components/Bestoffers";
import ChooseUs from "./components/ChooseUs";
import TicketPackage from "./components/TicketPackage";
function App() {
  return (
    <>
      <Header />
      <Bestoffers />
      <ChooseUs />
      <TicketPackage/>
      <OurClient />
      <Faqs />
      <Footer />
    </>
  );
}

export default App;
