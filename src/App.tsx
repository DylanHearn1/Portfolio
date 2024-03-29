import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Homepage from './pages/Homepage/Homepage';
import AboutMe from './pages/About/AboutMe';
import Footer from './components/Footer/Footer';
import Projects from './pages/Projects/Projects';

function App() {
  return (
    <div className="wrapper">
      <header>
        <Navbar />
      </header>
      <section className="px-10" id="home">
        <Homepage />
      </section>
      <div className="space-y-40 px-10">
        <section id="about">
          <AboutMe />
        </section>
        <section id="projects">
          <Projects />
        </section>
      </div>
      <footer className="mt-20">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
