import Hero from './component/UI/Hero';
import About from './component/UI/About';
// import Problem from './component/UI/Problem';
// import Solution from './component/UI/Solution';
import SolutionV1 from './component/UI/solution-v1.jsx';
// import Prodact from './component/UI/Prodact.jsx';
import OverView from './component/UI/OverView.jsx';
import './App.css';
import Footer from './component/footer/footer.jsx';
import Navbar from './component/navbar/Navbar.jsx';
// import Business from './component/UI/Business.jsx';
import CursorGlow from './component/UI/CursorGlow.js';
import ProdactV1 from './component/UI/Prodact-v1.jsx';
import Team from './component/UI/Team.jsx';
import Uniqueness from './component/UI/Uniqueness.jsx';
import Market from './component/UI/Market.jsx';

function App() {
  return (
    <>
      <CursorGlow />
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <section id="about">
        <About />
      </section>
      {/* <span id="overview">
        <OverView />
      </span> */}
      {/* <section id="problem">
        <Problem />
      </section> */}
      <section id="solution">
        <SolutionV1 />
      </section>
      <section id="product">
        <ProdactV1 />
      </section>
      <section id="uniqueness">
        <Uniqueness />
      </section>
      <section id="market">
        <Market />
      </section>
      {/* <section id="solution1">
        <Solution />
      </section> */}
      {/* <section id="product">
        <Prodact />
      </section> */}
      {/* <section id="business">
        <Business />
      </section> */}
      <section id="team">
        <Team />
      </section>
      <div id="contact">
        <Footer  />
      </div>
    </>
  );
}

export default App;