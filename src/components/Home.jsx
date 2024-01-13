import { useState } from "react";
import "../assets/Home.css";
import Badge from "./Badge";

const Home = () => {
  const [animate, setAnimate] = useState(false);
  return (
    <div className="home">
      <div className="intro">
        <div className="hero">
          <p className="hello">Hello, my name is Andres Ruiz</p>
          <p className="software">I am a software engineer.</p>
        </div>
        <div className="arrow">
          <img src="/arrow.svg" alt="arrow" />
        </div>
      </div>
      <div className="aboutMe">
        <h2>About me</h2>
        <div className="aboutContainer">
          <p>
            I am a software/full stack engineer. I have worked on both the user
            functionality of the frontend and backend. I&apos;m hooked on
            learning new technologies and going through the creative process on
            the way there.
            <br /> I also have a passion for developing software. I have worked
            on many projects/teams to create different types of robots, from
            drones flying out of rockets, to autonomous driving robots that
            shoot balls.
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
        <div className="linkBadges">
          <a
            className="badge"
            href="https://www.linkedin.com/in/and-r/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/linkedIn.svg" alt="linkedIn" />
          </a>
          <a
            className="badge"
            href="https://github.com/Andresr35"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/github.svg" alt="github" />
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
      <div className="projects">
        <Badge
          repoName="valtra"
          description="PERN stack website for valtra"
          languange="javascript"
          backgroundColor="#f7df1e"
          link="https://github.com/Andresr35/Valtra"
        />
        <Badge
          repoName="sereneBook"
          description="The Odin Project: OdinBook"
          languange="javascript"
          backgroundColor="#F7DF1E"
          link="https://github.com/Andresr35/sereneBook"
        />
        <Badge
          repoName="5851-Code"
          description="FRC Robot code"
          languange="java"
          backgroundColor="#8B4B1D"
          link="https://github.com/Andresr35/5851-Code"
        />
        <Badge
          repoName="wheresWaldo"
          description="The Odin Project: Photo taggin app"
          languange="javascrip"
          backgroundColor="#F7DF1E"
          link="https://github.com/Andresr35/wheresWaldo"
        />
        <Badge
          repoName="adminDashboard"
          description="Admin dashboard for the Odin Project"
          languange="html"
          backgroundColor="#E34F26"
          link="https://github.com/Andresr35/adminDashboard"
        />
        <Badge
          repoName="plantProject"
          description="ECE3391 class plant project"
          languange="C++"
          backgroundColor="#00599C"
          link="https://github.com/Andresr35/plantProject"
        />
        <Badge
          repoName="3300VerilogProjects"
          description="digital circuit design using verilog"
          languange="Verilog"
          backgroundColor="#B2B7F8"
          link="https://github.com/Andresr35/3300VerilogProjects"
        />
        <Badge
          repoName="inforOrders"
          description="Selenium project for legacy infor app"
          languange="Python"
          backgroundColor="#3776AB"
          link="https://github.com/Andresr35/inforOrders"
        />
        <Badge
          repoName="odinLandingPage"
          description="Landing Page for Odin Project"
          languange="css"
          backgroundColor="#1572B6"
          link="https://github.com/Andresr35/odinLandingPage"
        />
        <Badge
          repoName="signUpForm"
          description="Sign Up form for Odin Project"
          languange="html"
          backgroundColor="#E34F26"
          link="https://github.com/Andresr35/signUpForm"
        />
      </div>
    </div>
  );
};

export default Home;
