import React, { useState, useEffect } from "react";
import {
  Navbar,
  Nav,
  Button,
  Container,
  Row,
  Col,
  Card,
  Modal,
  Form,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import InquiryForm from "./InquiryForm";
import "./Home.css";

const App = () => {
  const [showInquiryModal, setShowInquiryModal] = useState(false);

  // 2) Handlers to open/close the modal
  const handleOpenInquiry = () => setShowInquiryModal(true);
  const handleCloseInquiry = () => setShowInquiryModal(false);

  const featuredCourses = [
    { title: "Mathematics", img: "/img/course1.jpeg" },
    { title: "Physics", img: "/img/course2.jpeg" },
    { title: "History", img: "/img/course3.jpeg" },
    { title: "Literature", img: "/img/course4.png" },
    { title: "Computer Science", img: "/img/course5.png" },
    { title: "Languages", img: "/img/course6.png" },
  ];

  const topCourses = [
    {
      title: "Science Lab Basics",
      category: "Physics",
      price: "$50",
      rating: "3.6",
      img: "/img/image1.jpeg",
    },
    {
      title: "Digital Literacy",
      category: "Computer Science",
      price: "$70",
      rating: "5.0",
      img: "/img/image2.png",
    },
    {
      title: "Literary Analysis",
      category: "Literature",
      price: "$60",
      rating: "3.8",
      img: "/img/image3.jpeg",
    },
    {
      title: "Historical Research",
      category: "History",
      price: "$80",
      rating: "5.5",
      img: "/img/image4.jpeg",
    },
    {
      title: "Language Proficiency",
      category: "Languages",
      price: "$40",
      rating: "5.5",
      img: "/img/image5.jpeg",
    },
  ];
  return (
    <div className="bg-dark text-white">
      {/* Navbar */}
   <Navbar expand="lg" className="navbar py-3 fixed-top backdrop-blur">
  <Container>
    <Navbar.Brand href="#" className="d-flex align-items-center">
      <img 
        src="/img/logo.png" 
        alt="CourseHub" 
        height="40" 
        className="me-2"
      />
      <div className="brand-text">
        <span className="text-gradient">Course</span>
        <span className="fw-bold">Hub</span>
      </div>
    </Navbar.Brand>
    
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mx-auto">
        <Nav.Link href="#courses" className="nav-link-hover mx-2">Courses</Nav.Link>
        <Nav.Link href="#about" className="nav-link-hover mx-2">About</Nav.Link>
        <Nav.Link href="#teachers" className="nav-link-hover mx-2">Teachers</Nav.Link>
        <Nav.Link href="#contact" className="nav-link-hover mx-2">Contact</Nav.Link>
      </Nav>
      
      <div className="d-flex align-items-center gap-3">
        <Link
          to={"/login"}
          className="nav-link-special"
        >
          Log in
        </Link>
        <Link
          to={"/signup"}
          className="btn btn-gradient px-4 py-2"
        >
          Sign up
        </Link>
        <Button 
          variant="outline-light"
          className="inquiry-btn"
          onClick={handleOpenInquiry}
        >
          <i className="fas fa-question-circle me-2"></i>
          Inquiry
        </Button>
      </div>
    </Navbar.Collapse>
  </Container>
</Navbar>

<section className="hero-section text-center position-relative">
  <div className="hero-video-bg"></div>
  <div className="hero-overlay d-flex flex-column align-items-center justify-content-center">
    <div className="hero-content" data-aos="fade-up">
      <h1 className="hero-title mb-4">
        <span className="gradient-text">Transform</span> Your Future with
        <span className="gradient-text"> CourseHub</span>
      </h1>
      <p className="hero-subtitle mb-5">
        Unlock your potential with world-class courses and expert instructors
      </p>
      <div className="hero-buttons d-flex gap-3 justify-content-center">
        <Button variant="gradient" size="lg" className="pulse-button">
          <i className="fas fa-play-circle me-2"></i>
          Start Learning
        </Button>
        <Button variant="outline-light" size="lg" className="hover-fill">
          <i className="fas fa-book me-2"></i>
          Browse Courses
        </Button>
      </div>
      <div className="hero-stats d-flex gap-5 justify-content-center mt-5">
        <div className="stat-item">
          <h3 className="gradient-text">10K+</h3>
          <p>Active Students</p>
        </div>
        <div className="stat-item">
          <h3 className="gradient-text">500+</h3>
          <p>Expert Teachers</p>
        </div>
        <div className="stat-item">
          <h3 className="gradient-text">1000+</h3>
          <p>Online Courses</p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Featured Courses */}
<Container className="featured-courses py-5">
  <h2 className="text-center fw-bold mb-5">
    <span className="gradient-text">Featured</span> Courses
  </h2>
  <Row className="g-4">
    {featuredCourses.map((course, index) => (
      <Col key={index} md={4} className="mb-4">
        <Card className="course-card h-100">
          <div className="card-image-wrapper">
            <Card.Img src={course.img} className="course-image" />
            <div className="card-overlay">
              <Button variant="light" className="view-btn">
                <i className="fas fa-play-circle me-2"></i>Preview Course
              </Button>
            </div>
          </div>
          <Card.Body className="position-relative">
            <div className="course-badge">
              <i className={`fas fa-${
                course.title === "Mathematics" ? "square-root-alt" :
                course.title === "Physics" ? "atom" :
                course.title === "History" ? "landmark" :
                course.title === "Literature" ? "book-reader" :
                course.title === "Computer Science" ? "laptop-code" :
                "language"
              }`}></i>
            </div>
            <h5 className="course-title mb-3">{course.title}</h5>
            <div className="course-info mb-3">
              <span><i className="fas fa-user-graduate me-2"></i>2.5k Students</span>
              <span><i className="fas fa-clock me-2"></i>6 Weeks</span>
            </div>
            <div className="course-rating mb-3">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </div>
              <span className="rating-count">(1,250 ratings)</span>
            </div>
            <Button variant="gradient" className="enroll-btn w-100">
              Enroll Now
            </Button>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
</Container>
      {/* Top-rated Courses */}
<Container className="py-5">
  <h2 className="text-center fw-bold mb-5">
    <span className="gradient-text">Top-rated</span> Courses
  </h2>
  <Row className="g-4">
    {topCourses.map((course, index) => (
      <Col key={index} md={4} className="mb-4"> {/* Changed from md={3} to md={4} */}
        <Card className="top-course-card h-100">
          <div className="card-image-wrapper">
            <Card.Img src={course.img} className="course-image" />
            <div className="price-tag">{course.price}</div>
            <div className="rating-badge">
              <i className="fas fa-star"></i> {course.rating}
            </div>
          </div>
          <Card.Body>
            <div className="category-badge">
              <i className={`fas fa-${
                course.category === "Physics" ? "atom" :
                course.category === "Computer Science" ? "laptop-code" :
                course.category === "Literature" ? "book" :
                course.category === "History" ? "landmark" :
                "language"
              }`}></i>
              {course.category}
            </div>
            <h5 className="course-title">{course.title}</h5>
            <div className="course-features">
              <span><i className="fas fa-users me-2"></i>156 Students</span>
              <span><i className="fas fa-video me-2"></i>18 Lessons</span>
            </div>
            <div className="course-progress">
              <div className="progress-bar" style={{width: '75%'}}></div>
              <span>75% Success Rate</span>
            </div>
            <Button className="enroll-now-btn w-100">
              <i className="fas fa-graduation-cap me-2"></i>
              Enroll Now
            </Button>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
</Container>


      {/* Exclusive Offer */}
 <section className="offer-section text-center position-relative">
  <div className="offer-overlay">
    <Container>
      <div className="offer-content">
        <div className="offer-icon mb-4">
          <i className="fas fa-gift"></i>
        </div>
        <h3 className="offer-title mb-4">
          <span className="gradient-text">Special Offer</span> for New Students
        </h3>
        <p className="offer-description mb-4">
          Join our community today and get 20% off on all courses!
          Subscribe to our newsletter for exclusive updates and promotions.
        </p>
        <Form className="newsletter-form">
          <Row className="justify-content-center">
            <Col md={6}>
              <div className="input-group">
                <Form.Control
                  type="email"
                  placeholder="Enter your email address"
                  className="newsletter-input"
                />
                <Button className="subscribe-btn">
                  <i className="fas fa-paper-plane me-2"></i>
                  Subscribe Now
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
        <div className="offer-features mt-4">
          <span><i className="fas fa-check-circle me-2"></i>Weekly Updates</span>
          <span><i className="fas fa-check-circle me-2"></i>Special Discounts</span>
          <span><i className="fas fa-check-circle me-2"></i>New Course Alerts</span>
        </div>
      </div>
    </Container>
  </div>
</section>
      {/* Footer */}
      <footer className="bg-dark text-white py-4">
        <Container>
          <Row>
            <Col md={6}>
              <h5>Contact Us</h5>
              <p>Email: info@studentrecruit.com</p>
              <p>Phone: +123 456 7890</p>
            </Col>
            <Col md={6} className="text-md-end">
              <p>Privacy Policy | Terms of Use</p>
            </Col>
          </Row>
        </Container>
      </footer>

      <Modal
        show={showInquiryModal}
        onHide={handleCloseInquiry}
        size="xl"
        backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title>Inquiry</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InquiryForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseInquiry}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default App;
