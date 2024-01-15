import Badge from "./Badge";
import "../assets/Projects.css";

const Projects = () => {
  return (
    <div id="works">
      <h2>Works</h2>
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

export default Projects;
