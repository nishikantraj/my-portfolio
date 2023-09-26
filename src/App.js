import Nav from "./components/NavBar"
import Home from "./components/Home"
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    // <div className="py-10 flex items-center justify-center">
    //   <h1 className="text-4xl font-bold text-red-500 font-signature">Aastha</h1>
    // </div>
    <div>
      <Nav />
      <Home />
      <About />
      <Portfolio />
      <Experience/>
      <Contact/>
      <SocialLinks/>
    </div>
  );
}

export default App;
