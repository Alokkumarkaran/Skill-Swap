import React from "react";
import "./courses.css";
import { CourseData } from "../../context/CourseContext";
import CourseCard from "../../components/coursecard/CourseCard";

const Courses = () => {
  const { courses } = CourseData();

  return (
    <div className="courses">
      <h1 className="courses-title">Available Courses</h1>
  
      <div className="course-container">
        {courses && courses.length > 0 ? (
          courses.map((course) => (
            <CourseCard key={course._id} course={course} />
          ))
        ) : (
          <p className="no-courses">No Courses Yet!</p>
        )}
      </div>
    </div>
  );
};  

export default Courses;
