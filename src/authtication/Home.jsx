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
        style={{ backgroundImage: "url('/img/hero.png')" }}
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
            Want to updated on new courses and promotions? Sign up for our
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
