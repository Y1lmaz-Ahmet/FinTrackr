import Analytics from "./components/Analytics";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import NewsLetter from "./components/NewsLetter";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Analytics />
      <NewsLetter />
      <Card />
      <Footer />
    </>
  );
}

export default App;
