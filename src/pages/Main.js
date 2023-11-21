import Header from "../components/Header";
import Home from "../sections/Home";
import Services from "../sections/Services";
import About from "../sections/About";
import Work from "../sections/Work";
import Contact from "../sections/Contact";
const Main = () => {
  return (
    <main id="main">
      <div className="main-grid">
        <Header />
        <Home />
        <Services />
        <Work />
        <About />
        <Contact />
      </div>
    </main>
  );
};
export default Main;
