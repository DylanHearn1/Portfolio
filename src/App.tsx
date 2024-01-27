import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Homepage from './pages/Homepage/Homepage';

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <section>
        <Homepage />
      </section>
    </>
  );
}

export default App;
