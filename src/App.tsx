import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Homepage from './pages/Homepage/Homepage';
import AboutMe from './pages/About/AboutMe';

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <section>
        <Homepage />
      </section>
      <section>
        <AboutMe />
      </section>
    </>
  );
}

export default App;
