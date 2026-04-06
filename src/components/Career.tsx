import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>

        <div className="career-info">

          {/* 🎓 CURRENT EDUCATION */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech CSE</h4>
                <h5>Manav Rachna University</h5>
              </div>
              <h3>2023 – Present</h3>
            </div>
            <p>
              Pursuing Computer Science & Engineering with a focus on Data
              Structures, Web Development, and Software Engineering. Actively
              building projects and improving problem-solving skills.
            </p>
          </div>

          {/* 💼 INTERNSHIP */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer Intern</h4>
                <h5>Codsoft</h5>
              </div>
              <h3>July 2025 – Aug 2025</h3>
            </div>
            <p>
              Developed responsive web interfaces using HTML, CSS, and
              JavaScript. Focused on UI/UX design, performance optimization,
              and building real-world projects including a personal portfolio.
            </p>
          </div>

          {/* 🎓 SCHOOL */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Secondary (CBSE)</h4>
                <h5>Delhi Public School</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Completed higher secondary education with a strong academic
              foundation in science and mathematics.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;