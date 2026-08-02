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
                I build responsive and user-friendly web interfaces using React.js, TypeScript, and standard design principles, focusing on clean UI/UX and seamless responsiveness.
              </p>

              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">React.js</div>
                <div className="what-tags">HTML5</div>
                <div className="what-tags">CSS3</div>
                <div className="what-tags">JavaScript</div>
                <div className="what-tags">TypeScript</div>
                <div className="what-tags">Responsive Design</div>
              </div>
            </div>
          </div>

          {/* 🟣 BACKEND & DATABASES */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-content-in">
              <h3>BACKEND & DATABASES</h3>
              <h4>Designing Scalable APIs & Cloud Architectures</h4>
              <p>
                I develop robust, secure backend services, RESTful APIs, and database models using Node.js, Express, and modern SQL/NoSQL databases.
              </p>

              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Node.js</div>
                <div className="what-tags">Express.js</div>
                <div className="what-tags">PostgreSQL</div>
                <div className="what-tags">Supabase</div>
                <div className="what-tags">Firebase</div>
                <div className="what-tags">REST APIs</div>
              </div>
            </div>
          </div>

          {/* 🟢 CS FUNDAMENTALS & AI */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 2)}
          >
            <div className="what-content-in">
              <h3>CS FUNDAMENTALS & AI</h3>
              <h4>Algorithmic Optimization & AI Integrations</h4>
              <p>
                I apply strong Data Structures and Algorithms in C++ and Python, and integrate AI APIs (such as Gemini and Dialogflow) to create smart tools.
              </p>

              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">C++</div>
                <div className="what-tags">Python</div>
                <div className="what-tags">DSA</div>
                <div className="what-tags">OOP</div>
                <div className="what-tags">Gemini API</div>
                <div className="what-tags">Dialogflow</div>
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