import "../assets/Preloader.css";

export const Preloader = () => {
  return (
    <div className="preloader">
      <img src="/logo.jpeg" alt="logo" className="icon" />
      <div className="loadbar">
        <div className="bar">
          <div className="progress" />
        </div>
      </div>
    </div>
  );
};
