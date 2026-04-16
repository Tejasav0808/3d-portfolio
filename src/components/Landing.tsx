import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              TEJASAV
              <br />
              <span>BHATIA</span>
            </h1>
          </div>

          <div className="landing-info">
            <h3>B.Tech CSE Student &</h3>

            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Frontend</div>
              <div className="landing-h2-2">Developer</div>
            </h2>

            {/* Added class here for spacing */}
            <h2 className="dsa-section">
              <div className="landing-h2-info">DSA</div>
              <div className="landing-h2-info-1">Enthusiast</div>
            </h2>
          </div>

        </div>

        {children}
      </div>
    </>
  );
};

export default Landing;