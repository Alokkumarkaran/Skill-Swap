import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import Testimonials from "../../components/testimonials/Testimonials";
import { Carousel } from 'react-responsive-carousel'; // Importing Carousel component
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import Courses from "../courses/Courses";
import Instructor from "../../components/Instructor/Instructor"; // Importing Instructor component
import { sampleInstructors } from "../../components/Instructor/SampleInstructorData"; // Correctly import sampleInstructors
import videoFile from "../../assets/demo.mp4"; // Correct path to your video file

const teamMembers = [
  { name: "Shivam Kumar", role: "CEO", img: "ceo.jpg" },
  { name: "Arunjay Kumar", role: "FED", img: "team2.jpg" },
  { name: "Alok Kumar", role: "Lead Developer", img: "team3.jpg" },
  // Add more team members as needed
];

const services = [
  { title: "Distance Exam", description: "Stay up to date with our distance learning and exams.", img: "exam.png" },
  { title: "Interactive Course", description: "Learn interactively with engaging course materials.", img: "course.png" },
  { title: "Online Training", description: "Train remotely with live sessions.", img: "online.png" },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="carousel-container">
        <Carousel 
          showArrows={true}
          showThumbs={false}
          autoPlay
          infiniteLoop
          interval={3000}
          transitionTime={500}
          className="carousel"
        >
          <div className="carousel-slide">
            <img src="slide1.png" alt="Slide 1" />
            <button onClick={() => navigate("/courses")} className="common-btn carousel-btn">
              Get Started
            </button>
          </div>
          <div className="carousel-slide">
            <img src="slide2.png" alt="Slide 2" />
            <button onClick={() => navigate("/courses")} className="common-btn carousel-btn">
              Get Started
            </button>
          </div>
          <div className="carousel-slide">
            <img src="slide3.png" alt="Slide 3" />
            <button onClick={() => navigate("/courses")} className="common-btn carousel-btn">
              Get Started
            </button>
          </div>
        </Carousel>
      </div>

      {/* Service Cards Section */}
      <div className="services-section">
        <h2>Skill Swap Benefits</h2>
        <div className="services-cards">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <img src={service.img} alt={service.title} className="service-img" />
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <button className="download-btn">Download</button>
            </div>
          ))}
        </div>
      </div>

      {/* Video Section */}
      <div className="video-section">
        <h2>Introduction Video</h2>
        <video width="800" controls className="homepage-video">
          <source src={videoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <Courses />

      {/* Instructor Section */}
      <div className="instructor-section">
        <Instructor /> {/* Instructor component, data managed internally */}
      </div>

      {/* Team Section */}
      <div className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-cards">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <img src={member.img} alt={member.name} className="team-img" />
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      <Testimonials />
    </div>
  );
};

export default Home;
