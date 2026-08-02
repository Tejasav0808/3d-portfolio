import "./styles/Landing.css";

const Landing = () => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container hero-center">
          <div className="hero-content">
            <h3 className="hero-greeting">Hello, I'm</h3>
            <h1 className="hero-name">
              TEJASAV <span>BHATIA</span>
            </h1>
            <h2 className="hero-role">
              Aspiring Software Developer
            </h2>
            <p className="hero-subtext">
              Third-year Computer Science student at Manav Rachna University.
              Skilled in full-stack web development, software engineering, and algorithmic problem-solving.
            </p>
            <div className="hero-badges">
              <span className="hero-badge">C++ & Python</span>
              <span className="hero-badge">React & Node.js</span>
              <span className="hero-badge">DSA & Databases</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;