import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Homepage from './pages/Homepage/Homepage';
import AboutMe from './pages/About/AboutMe';
import Footer from './components/Footer/Footer';
import Projects from './pages/Projects/Projects';
import ContactMe from './pages/Contact/ContactMe';

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <section className="px-10" id="home">
        <Homepage />
      </section>
      <div className="space-y-40">
        <section className="px-10" id="about">
          <AboutMe />
        </section>
        <section className="px-10" id="projects">
          <Projects />
        </section>
        <section id="contact">
          <ContactMe />
        </section>
        <footer className="mt-20">
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
