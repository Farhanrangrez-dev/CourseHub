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
    { title: "Mathematics", img: "/public/img/course1.jpeg" },
    { title: "Physics", img: "/public/img/course2.jpeg" },
    { title: "History", img: "/public/img/course3.jpeg" },
    { title: "Literature", img: "/public/img/course4.png" },
    { title: "Computer Science", img: "/public/img/course5.png" },
    { title: "Languages", img: "/public/img/course6.png" },
  ];

  const topCourses = [
    {
      title: "Science Lab Basics",
      category: "Physics",
      price: "$50",
      rating: "3.6",
      img: "/public/img/image1.jpeg",
    },
    {
      title: "Digital Literacy",
      category: "Computer Science",
      price: "$70",
      rating: "5.0",
      img: "/public/img/image2.png",
    },
    {
      title: "Literary Analysis",
      category: "Literature",
      price: "$60",
      rating: "3.8",
      img: "/public/img/image3.jpeg",
    },
    {
      title: "Historical Research",
      category: "History",
      price: "$80",
      rating: "5.5",
      img: "/public/img/image4.jpeg",
    },
    {
      title: "Language Proficiency",
      category: "Languages",
      price: "$40",
      rating: "5.5",
      img: "/public/img/image5.jpeg",
    },
  ];
  return (
    <div className="bg-dark text-white">
      {/* Navbar */}
      <Navbar expand="lg" className="navbar-dark bg-dark py-3">
        <Container>
          <Navbar.Brand href="#" className="fw-bold">
            CourseHub
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link
                to={"/login"}
                className="text-white me-2 text-decoration-none"
                style={{ color: "white" }}
              >
                Log in
              </Link>
              <Link
                to={"/login"}
                className="me-2 text-decoration-none"
                style={{ color: "white" }}
              >
                Sign up
              </Link>
            </Nav>
            <Button onClick={handleOpenInquiry}>Inquiry</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section
        className="hero-section text-center"
        style={{ backgroundImage: "url('/public/img/hero.png')" }}
      >
        <div className="hero-overlay d-flex flex-column align-items-center justify-content-center text-center">
          <h1 className="fw-bold">Join CourseHub for Students</h1>
          <p className="lead">Discover a world of knowledge with us!</p>
        </div>
      </section>

      {/* Featured Courses */}
      <Container className="py-5">
        <h2 className="text-center fw-bold">Featured Courses</h2>
        <Row className="mt-4">
          {featuredCourses.map((course, index) => (
            <Col key={index} md={4} className="mb-3">
              <Card className="bg-secondary text-white p-2">
                <Card.Img src={course.img} className="rounded" />
                <Card.Body>
                  <span className="badge bg-light text-dark">
                    {course.title}
                  </span>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Top-rated Courses */}
      <Container className="py-5">
        <h2 className="text-center fw-bold">Top-rated Courses</h2>
        <Row className="mt-4">
          {topCourses.map((course, index) => (
            <Col key={index} md={3} className="mb-3">
              <Card className="bg-dark text-white">
                <Card.Img src={course.img} />
                <Card.Body>
                  <span className="badge bg-danger">{course.rating}</span>
                  <Card.Title>{course.title}</Card.Title>
                  <Card.Text>{course.category}</Card.Text>
                  <p>
                    <strong>From {course.price}/course</strong>
                  </p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Exclusive Offer */}
      <section className="offer-section text-center py-4 bg-secondary">
        <Container>
          <h5>🎁 Exclusive Offer!</h5>
          <p>
            Want to  updated on new courses and promotions? Sign up for our
            Newsletter
          </p>
          <Button variant="light">Subscribe</Button>
        </Container>
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

// import React from 'react';
// import './Landing.css'; // External CSS file for custom styles
// import 'bootstrap/dist/css/bootstrap.min.css';

// const LandingPage= () => {
//     return (
//         <div className="lms-landing-page">
//             {/* Navbar */}
//             <nav className="navbar navbar-expand-lg bg-white shadow-sm px-4 py-3">
//                 <a className="navbar-brand" href="#">
//                     <img src="https://www.hibob.com/wp-content/themes/hibob/assets/images/bob-logo.svg" alt="HiBob Logo" height="40" />
//                 </a>
//                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
//                     <ul className="navbar-nav gap-3">
//                         {["Platform", "Solutions", "About", "Resources", "Partners", "Pricing", "Login"].map((item) => (
//                             <li className="nav-item" key={item}>
//                                 <a className="nav-link" href="#">{item}</a>
//                             </li>
//                         ))}
//                         <li className="nav-item">
//                             <button className="btn btn-primary">REQUEST DEMO</button>
//                         </li>
//                     </ul>
//                 </div>
//             </nav>

//             {/* Hero Section */}
//             <header className="container py-5">
//                 <div className="row align-items-center">
//                     <div className="col-lg-6">
//                         <h1 className="display-4">LMS System</h1>
//                         <p className="lead">Keep learning in the flow of work and align with employee lifecycle events.</p>
//                         <button className="btn btn-primary btn-lg">WATCH A DEMO (3:27)</button>
//                         <div className="d-flex gap-4 mt-4">
//                             {/* G2 Rating */}
//                             <div className="d-flex align-items-center">
//                                 <img src="https://www.g2.com/assets/g2-logo-2-87f4c5015b91b8c95df6ad0c806533c4.svg" alt="G2" height="30" />
//                                 <div className="ms-2">
//                                     <div className="stars">★★★★★</div>
//                                     <small>1232 reviews | 4.5</small>
//                                 </div>
//                             </div>
//                             {/* Capterra Rating */}
//                             <div className="d-flex align-items-center">
//                                 <img src="https://www.capterra.com/reviews/images/capterra-logo.svg" alt="Capterra" height="30" />
//                                 <div className="ms-2">
//                                     <div className="stars">★★★★★</div>
//                                     <small>149 reviews | 4.6</small>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Learning Card */}
//                     <div className="col-lg-6 mt-4 mt-lg-0">
//                         <div className="card shadow-sm p-4">
//                             <div className="bg-light p-2 rounded mb-3">
//                                 <strong>100% Score</strong>
//                                 <span className="text-success ms-2">✓ Passed!</span>
//                             </div>
//                             <div className="text-center my-3">
//                                 <div className="fs-2">5</div>
//                                 <div>Very satisfied</div>
//                             </div>
//                             <h5>My Learning</h5>
//                             <div className="progress mb-2">
//                                 <div className="progress-bar bg-primary" style={{width: '80%'}}>80%</div>
//                             </div>
//                             <div className="d-flex justify-content-between">
//                                 <small>80%</small>
//                                 <small>11:10m</small>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </header>

//             {/* Features Section */}
//             <section className="container py-5">
//                 <div className="row g-4">
//                     {[
//                         "Course builder",
//                         "Personalized training",
//                         "Dynamic learning",
//                         "Measurable insights",
//                         "Content integrations"
//                     ].map((feature, index) => (
//                         <div className="col-6 col-md-4 col-lg-2" key={index}>
//                             <div className="p-3 bg-white shadow-sm text-center rounded">
//                                 <div className="fs-3">📚</div>
//                                 <h6 className="mt-2">{feature}</h6>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </section>

//             {/* About Section */}
//             <section className="bg-light py-5">
//                 <div className="container">
//                     <div className="row align-items-center">
//                         <div className="col-md-6">
//                             <h2>About Us</h2>
//                             <p className="text-secondary">Empowering Learning Through Innovation</p>
//                             <p>We are dedicated to revolutionizing the way people learn and grow. Our platform combines cutting-edge technology with expert-led courses to create an engaging and effective learning experience.</p>
//                             <div className="d-flex gap-4 mt-4">
//                                 <div>
//                                     <h4 className="text-primary">50K+</h4>
//                                     <small>Active Learners</small>
//                                 </div>
//                                 <div>
//                                     <h4 className="text-primary">200+</h4>
//                                     <small>Expert Instructors</small>
//                                 </div>
//                                 <div>
//                                     <h4 className="text-primary">1000+</h4>
//                                     <small>Courses Available</small>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-md-6">
//                             <img className="img-fluid rounded" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f" alt="Team Learning" />
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Footer */}
//             <footer className="bg-dark text-white py-4">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-md-4">
//                             <h5>Contact Us</h5>
//                             <ul className="list-unstyled">
//                                 <li>📧 support@learningplatform.com</li>
//                                 <li>📞 +1 (555) 123-4567</li>
//                                 <li>📍 123 Learning Street, CA</li>
//                             </ul>
//                         </div>
//                         <div className="col-md-4">
//                             <h5>Quick Links</h5>
//                             <ul className="list-unstyled">
//                                 <li><a href="#" className="text-white">Home</a></li>
//                                 <li><a href="#" className="text-white">Courses</a></li>
//                                 <li><a href="#" className="text-white">About Us</a></li>
//                                 <li><a href="#" className="text-white">Contact</a></li>
//                             </ul>
//                         </div>
//                         <div className="col-md-4">
//                             <h5>Follow Us</h5>
//                             <div className="d-flex gap-3">
//                                 <a href="#" className="text-white">Facebook</a>
//                                 <a href="#" className="text-white">Twitter</a>
//                                 <a href="#" className="text-white">LinkedIn</a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </footer>
//         </div>
//     );
// };

// export default LandingPage;
