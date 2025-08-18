import logo from './logo.svg';
import Hero from './component/UI/Hero';
import About from './component/UI/About';
import Problem from './component/UI/Problem';
import Solution from './component/UI/Solution';
import Prodact from './component/UI/Prodact.jsx';
import OverView from './component/UI/OverView.jsx';
import './App.css';
import Footer from './component/footer/footer.jsx';
import Navbar from './component/navbar/Navbar.jsx';
import Business from './component/UI/Business.jsx';
import CursorGlow from './component/UI/CursorGlow.js';

function App() {
  return (
    <>
      <CursorGlow />
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <span id="overview">
        <OverView />
      </span>
      <section id="problem">
        <Problem />
      </section>
      <section id="solution">
        <Solution />
      </section>
      <section id="product">
        <Prodact />
      </section>
      <section id="business">
        <Business />
      </section>
      <Footer />
    </>
  );
}

export default App;