import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);

  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };

  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }

    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () =>
            handleClick(container)
          );
        }
      });
    };
  }, []);

  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>

      <div className="what-box">
        <div className="what-box-in">

          {/* 🔵 FRONTEND DEVELOPMENT */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-content-in">
              <h3>FRONTEND DEVELOPMENT</h3>
              <h4>Building Responsive & Interactive UI</h4>
              <p>
                I build responsive and user-friendly web interfaces using modern
                technologies with a focus on performance and clean UI/UX design.
              </p>

              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">HTML5</div>
                <div className="what-tags">CSS3</div>
                <div className="what-tags">JavaScript</div>
                <div className="what-tags">Responsive Design</div>
                <div className="what-tags">DOM Manipulation</div>
                <div className="what-tags">UI/UX</div>
              </div>
            </div>
          </div>

          {/* 🟣 PROGRAMMING & DSA */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-content-in">
              <h3>PROGRAMMING & DSA</h3>
              <h4>Problem Solving & Logic Building</h4>
              <p>
                I actively practice Data Structures and Algorithms to improve
                problem-solving skills and build efficient solutions for
                real-world applications.
              </p>

              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">C++</div>
                <div className="what-tags">Python</div>
                <div className="what-tags">OOP</div>
                <div className="what-tags">DBMS</div>
                <div className="what-tags">SQL</div>
                <div className="what-tags">Problem Solving</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");

  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}