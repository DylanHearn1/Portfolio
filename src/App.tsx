import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Homepage from './pages/Homepage/Homepage';
import AboutMe from './pages/About/AboutMe';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <section className="px-10">
        <Homepage />
      </section>
      <section className="px-10 pb-20">
        <AboutMe />
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
