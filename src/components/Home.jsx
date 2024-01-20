import "../assets/Home.css";
import AboutMe from "./AboutMe";
import Projects from "./Projects";

const Home = () => {
  return (
    <div className="home">
      <div className="intro">
        {/* <Placecanvas className="threeJS" /> */}
        <div className="hero">
          <p className="hello">Hello, my name is Andres Ruiz</p>
          <p className="software">I am a software engineer.</p>
        </div>
        <a className="arrow" href="#aboutMe">
          <img src="/arrow.svg" alt="arrow" />
        </a>
      </div>
      <AboutMe />
      <Projects />
    </div>
  );
};

export default Home;
