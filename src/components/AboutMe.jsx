import { useState } from "react";
import "../assets/aboutMe.css";
import Github from "../assets/icons/Github";
import LinkedIn from "../assets/icons/LinkedIn";

const AboutMe = () => {
  const [animate, setAnimate] = useState(false);

  return (
    <div className="aboutMe" id="aboutMe">
      <h2>About me</h2>
      <div className="aboutContainer">
        <p>
          I am a software/full stack engineer. I have worked on both the user
          functionality of the frontend and backend. I&apos;m hooked on learning
          new technologies and going through the creative process on the way
          there.
          <br /> I also have a passion for developing software. I have worked on
          many projects/teams to create different types of robots, from drones
          flying out of rockets, to autonomous driving robots that shoot balls.
          <br />
          <br />
          Besides that, I run marathons, hike, and own a cat :)
        </p>
        <div className="icons">
          <div>
            <img src="/js.svg" alt="js icon" />
          </div>
          <div>
            <img src="/html.svg" alt="html icon" />
          </div>
          <div>
            <img src="/c.svg" alt="c icon" />
          </div>
          <div>
            <img src="/cpp.svg" alt="cpp icon" />
          </div>
          <div>
            <img src="/git.svg" alt="git icon" />
          </div>
          <div>
            <img src="/java.svg" alt="java icon" />
          </div>
          <div>
            <img src="/python.svg" alt="python icon" />
          </div>
          <div>
            <img src="/express.svg" alt="express icon" />
          </div>
          <div>
            <img src="/node.svg" alt="express icon" />
          </div>
          <div>
            <img src="/react.svg" alt="express icon" />
          </div>
        </div>
      </div>
      <a className="arrow" href="#works">
        <img src="/arrow.svg" alt="arrow" />
      </a>
      <div className="linkBadges">
        <a
          className="badge"
          href="https://www.linkedin.com/in/and-r/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedIn />
        </a>
        <a
          className="badge"
          href="https://github.com/Andresr35"
          target="_blank"
          rel="noreferrer"
        >
          <Github />
        </a>
        <a
          href="/resume.pdf"
          download="Andres Resume"
          onClick={() => setAnimate(true)}
          onAnimationEnd={() => setAnimate(false)}
          className={animate ? "click button" : "button"}
        >
          Download CV
        </a>
      </div>
    </div>
  );
};

export default AboutMe;
