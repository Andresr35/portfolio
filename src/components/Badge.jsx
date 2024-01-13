import PropTypes from "prop-types";
import "../assets/Badge.css";

const Badge = ({ repoName, description, languange, backgroundColor, link }) => {
  return (
    <a className="container" href={link} target="_blank" rel="noreferrer">
      <img className="bookIcon" src="/book.svg" alt="github book" />
      <h4 className="repoName">{repoName}</h4>
      <p className="description">{description}</p>
      <p className="languange">{languange}</p>
      <div
        className="languangeIcon"
        style={{ backgroundColor: backgroundColor }}
      />
    </a>
  );
};

Badge.propTypes = {
  repoName: PropTypes.string,
  description: PropTypes.string,
  languange: PropTypes.string,
  backgroundColor: PropTypes.string,
  link: PropTypes.string,
};

export default Badge;
