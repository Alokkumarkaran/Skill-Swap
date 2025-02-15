import React, { useEffect } from "react";
import "./coursestudy.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CourseData } from "../../context/CourseContext";
import { server } from "../../main";

const CourseStudy = ({ user }) => {
  const params = useParams();
  const { fetchCourse, course } = CourseData();
  const navigate = useNavigate();

  useEffect(() => {
    if (user && user.role !== "admin" && !user.subscription.includes(params.id))
      navigate("/");
    fetchCourse(params.id);
  }, [params.id, user, fetchCourse, navigate]);

  return (
    <div className="course-study-page">
      {course && (
        <>
          {/* Course Banner Section */}
          <div className="course-banner">
            <div className="course-details">
              <h1 className="course-title">{course.title} Course with Guaranteed Placement</h1>
              <p className="course-subtitle">Get placed with ₹{course.salaryRange} LPA salary</p>
              <div className="badges">
                <span className="badge">Government-certified</span>
                <span className="badge">AI-Powered</span>
              </div>
              <Link to={`/lectures/${course._id}`} className="apply-btn">
                Start Lectures
              </Link>
              <p className="already-applied">
                <strong>{course.applied}</strong> already applied
              </p>
            </div>
            <div className="course-image-section">
              <img
                src={`${server}/${course.image}`}
                alt={course.title}
                className="course-image"
              />
            </div>
          </div>

          {/* Course Information Section */}
          <div className="course-info-section">
            <div className="info-box">
              <p>Online</p>
              <h3>{course.duration} months</h3>
            </div>
            <div className="info-box">
              <p>Admission Closes On</p>
              <h3>1st Nov</h3>
            </div>
            <div className="info-box">
              <p>Course Fee</p>
              <h3>
                ₹{course.price} <span className="striked"><h3>₹20000</h3>{course.originalPrice}</span>
              </h3>
            </div>
            <div className="info-box">
              <p>Guarantee</p>
              <h3>100% refund if not hired</h3>
            </div>
          </div>

          {/* Course Description Section */}
          <div className="course-description-section">
            <h2 className="section-title">Course Description</h2>
            <p className="course-description">{course.description}</p>
          </div>

          {/* Course Instructor Section */}
          <div className="course-instructor-section">
            <h2 className="section-title">Instructor</h2>
            <p className="instructor-name">{course.createdBy}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default CourseStudy;
