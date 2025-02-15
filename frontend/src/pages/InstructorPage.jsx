import React from "react";
import Instructor from "../components/Instructor/Instructor";
import { sampleInstructors } from "../components/Instructor/SampleInstructorData"; // Ensure this path is correct

const InstructorPage = () => {
  return (
    <div className="instructor-page">
      <h1>Instructor Details</h1>
      <Instructor instructors={sampleInstructors} /> {/* Use the correct prop name */}
    </div>
  );
};

export default InstructorPage;
