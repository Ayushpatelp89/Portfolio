import "./styles/Career.css";
import { portfolioData } from "../data/portfolioData";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> Certifications
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {portfolioData.education.map((edu, index) => (
            <div className="career-info-box" key={index}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{edu.degree}</h4>
                  <h5>{edu.institution}</h5>
                </div>
                <h3>{edu.period}</h3>
              </div>
              <p>{edu.details} - {edu.location}</p>
            </div>
          ))}
          <h2 style={{ marginTop: "50px" }}>Certifications</h2>
          {portfolioData.certifications.map((cert, index) => (
            <div className="career-info-box" key={`cert-${index}`}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{cert.title}</h4>
                  <h5>{cert.issuer}</h5>
                </div>
                <h3>{cert.date}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
