import React from "react";
import "./about.css";
import peopleImage from './about.png'; // Update this path
import serviceImage1 from './s2.jpg';  // Example service image
import serviceImage2 from './s1.jpg';  // Example service image
import serviceImage3 from './s3.jpg';  // Example service image

const About = () => {
  return (
    <div>
      {/* About Us Section */}
      <div className="about-container">
        <div className="about-left">
          <h2>About Us</h2>
          <p>
            We are dedicated to providing high-quality online courses to help
            individuals learn and grow in their desired fields. Our experienced
            instructors ensure that each course is tailored for effective learning
            and practical application.
          </p>
          <button className="learn-more-btn">Learn More</button>
        </div>
        <div className="about-right">
          <img src={peopleImage} alt="People learning and collaborating" className="about-image" />
        </div>
      </div>

      {/* Our Services Section */}
      <div className="services-section">
        <h2>Our Services</h2>
        <div className="services-cards">
          {/* Service Card 1 */}
          <div className="service-card">
            <img src={serviceImage1} alt="Service 1" className="service-image" />
            <h3>Web Designing</h3>
            <p>Learn how to build web applications from <br />scratch with our comprehensive tutorials.</p>
            <button className="service-btn">Learn More</button>
          </div>

          {/* Service Card 2 */}
          <div className="service-card">
            <img src={serviceImage2} alt="Service 2" className="service-image" />
            <h3>Coding </h3>
            <p>Develop your coding skills with <br />personalized mentorship and guided projects.</p>
            <button className="service-btn">Learn More</button>
          </div>

          {/* Service Card 3 */}
          <div className="service-card">
            <img src={serviceImage3} alt="Service 3" className="service-image" />
            <h3>Data Anylatics</h3>
            <p>Access our library of resources to master <br />the latest in-demand technologies.</p>
            <button className="service-btn">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
