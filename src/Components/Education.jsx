import React from "react";
import "../styles.css"; // Import the custom CSS file for the component

const Education = () => {
  const educationData = [
    {
      institution: "Usman Institute of Technology",
      degree: "Software Engineering",
      location: "Karachi, Pakistan",
    },
    {
      institution: "Fazaia Degree College",
      degree: "Pre-Engineering",
      duration: "2019 - 2021",
      location: "Karachi, Pakistan",
    },
  ];

  return (
    <section className="light" id="education">
      <h2 className="section-title">Education</h2>
      <div className="education-container">
        {educationData.map((education) => (
          <div key={education.institution} className="education-item">
            <h3>{education.degree}</h3>
            <p className="education-institution">{education.institution}</p>
            {education.duration && <p className="education-duration">{education.duration}</p>}
            <p className="education-location">{education.location}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
