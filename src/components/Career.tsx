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
          {/* Animated Timeline & Dot */}
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* 💼 IT INTERNSHIP (AAI) */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>IT Intern</h4>
                <h5>Airports Authority of India (AAI)</h5>
              </div>
              <h3>June 2026 – July 2026</h3>
            </div>
            <p>
              Developed an AI-powered mobile study application (StudyLens) using React Native, Node.js, Express, MongoDB, and Gemini AI. Implemented native Android screenshot detection, Tesseract.js OCR, JWT authentication, and ImageKit cloud storage for automated screenshot processing, summarization, and quiz generation.
            </p>
          </div>

          {/* 🏆 ACHIEVEMENT - CDC RECOGNITION */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>CDC Recognition & Reward</h4>
                <h5>Manav Rachna University</h5>
              </div>
              <h3>May 2026</h3>
            </div>
            <p>
              Awarded Career Development Centre (CDC) Recognition & Reward, outperforming 536+ participants in competitive performance and software development categories.
            </p>
          </div>

          {/* 💼 WEB DEVELOPER INTERNSHIP */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer Intern</h4>
                <h5>Bharat Infraprojects Pvt. Ltd.</h5>
              </div>
              <h3>March 2026 – May 2026</h3>
            </div>
            <p>
              Developed and maintained the official company website using WordPress. Enhanced UI/UX, responsiveness, and performance across various devices, and managed live deployments and customizations to improve customer engagement.
            </p>
          </div>

          {/* 📄 RESEARCH PAPER PUBLICATION */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Published Research Paper</h4>
                <h5>Blockchain-based MFA Security</h5>
              </div>
              <h3>March 2026</h3>
            </div>
            <p>
              Published a research paper on Blockchain-based Multi-Factor Authentication (MFA) security for Mobile Banking, focused on preventing unauthorized access with decentralized authentication and utilizing smart contracts.
            </p>
          </div>

          {/* 🎓 CURRENT EDUCATION - MRU */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech CSE</h4>
                <h5>Manav Rachna University</h5>
              </div>
              <h3>2023 – 2027</h3>
            </div>
            <p>
              Pursuing Computer Science & Engineering with an aggregate CGPA of 8.12/10. Focus on OOP, Data Structures & Algorithms, Operating Systems, Database Management Systems, and Software Development Life Cycle (SDLC).
            </p>
          </div>

          {/* 🏅 NPTEL CERTIFICATIONS */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>NPTEL Certifications</h4>
                <h5>Design Thinking & Security</h5>
              </div>
              <h3>Oct 2025</h3>
            </div>
            <p>
              Completed multiple NPTEL certifications in Design Thinking and Social Media Security, strengthening user-centered UI/UX methodology and data security understanding.
            </p>
          </div>

          {/* 📜 TRAININGS & OTHER CERTIFICATIONS */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Professional Certifications</h4>
                <h5>IT & Development</h5>
              </div>
              <h3>2024 – 2025</h3>
            </div>
            <p>
              Acquired credentials including Quick Heal Academy Linux Fundamentals, MongoDB Data Modeling Path, and Cisco Networking Academy JavaScript Essentials.
            </p>
          </div>

          {/* 🎓 SCHOOL - CLASS 12 */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Class 12 (CBSE)</h4>
                <h5>Delhi Public School, Mathura Road</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Completed Senior Secondary CBSE education with a score of 75.2%, developing a solid background in Science and Mathematics.
            </p>
          </div>

          {/* 🎓 SCHOOL - CLASS 10 */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Class 10 (CBSE)</h4>
                <h5>Delhi Public School, Sector 19</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Completed Secondary CBSE school education with an overall score of 90%.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;