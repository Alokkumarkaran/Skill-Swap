import React from "react";
import { sampleInstructors } from "./SampleInstructorData"; // Ensure this path is correct
import "./instructor.css";

const Instructor = () => {
  return (
    <div className="instructor-section">
      <h2>Meet Our Instructors</h2>
      <div className="instructor-cards">
        {sampleInstructors.map((instructor, index) => (
          <div key={index} className="instructor-card">
            <img src={instructor.img} alt={instructor.name} className="instructor-img" />
            <h3 className="instructor-name">{instructor.name}</h3>
            <p className="instructor-specialization">{instructor.specialization}</p>
            <p className="instructor-qualification">{instructor.qualification}</p>
            <a 
              href={`https://wa.me/${instructor.whatsapp.replace('+', '')}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="whatsapp-btn"
            >
              Chat on WhatsApp
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructor;
