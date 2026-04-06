import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>

        <div className="contact-flex">

          {/* 🔵 LEFT BOX */}
          <div className="contact-box">
            <h4>Connect</h4>

            <p>
              <a
                href="mailto:tejasav8007@gmail.com"
                data-cursor="disable"
              >
                Email — tejasav8007@gmail.com
              </a>
            </p>

            <p>
              <a
                href="https://www.linkedin.com/in/tejasav-bhatia-a84720287"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — tejasav-bhatia
              </a>
            </p>

            <h4>Education</h4>
            <p>
              B.Tech Computer Science & Engineering <br />
              Manav Rachna University (2023 – Present)
            </p>
          </div>

          {/* 🟣 MIDDLE BOX */}
          <div className="contact-box">
            <h4>Social</h4>

            <a
              href="https://github.com/Tejasav0808"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>

            <a
              href="https://www.linkedin.com/in/tejasav-bhatia-a84720287"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>

            <a
              href="mailto:tejasav8007@gmail.com"
              data-cursor="disable"
              className="contact-social"
            >
              Email <MdArrowOutward />
            </a>
          </div>

          {/* ⚫ RIGHT BOX */}
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Tejasav Bhatia</span>
            </h2>

            <h5>
              <MdCopyright /> {new Date().getFullYear()}
            </h5>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;