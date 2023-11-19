import Header from "../components/Header";
import Home from "../sections/Home";
import About from "../sections/About";
import Work from "../sections/Work";
import Contact from "../sections/Contact";
const Main = () => {
  return (
    <main>
      <div className="main-grid">
        <Header />
        <Home />
        <About />
        <Work />
        <Contact />
      </div>
    </main>
  );
};
export default Main;
