import "./App.css";
import Header from "./components/Header";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";
import OurClient from "./components/OurClient";
import OurBlog from "./components/OurBlog";

function App() {
  return (
    <>
      <Header />
      <OurBlog />
      <OurClient />
      <Faqs />
      <Footer />
    </>
  );
}

export default App;
