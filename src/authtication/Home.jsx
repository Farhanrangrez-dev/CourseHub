import React from "react";
import {
  Navbar,
  Nav,
  Button,
  Container,
  Row,
  Col,
  Card,
  Form,
} from "react-bootstrap";
import "./Home.css";
import { Link } from "react-router-dom";

const App = () => {
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
              <Nav.Link href="#" className="text-white">
                Courses
              </Nav.Link>
              <Nav.Link href="#" className="text-white">
                Programs
              </Nav.Link>
              <Nav.Link href="#" className="text-white">
                Explore
              </Nav.Link>
            </Nav>
            <Link to={"/login"} variant="outline-light" className="ms-3">
              Sign up
            </Link>
            <Link to={"/login"} variant="danger" className="ms-2">
              Log in
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <section
        className="hero-section text-center"
        style={{ backgroundImage: "url('/public/img/hero.png')" }}
      >
        <div className="hero-overlay d-flex flex-column align-items-center justify-content-center text-center">
          <h1 className="fw-bold">Join CourseHub for Students</h1>
          <p className="lead">Discover a world of knowledge with us!</p>

          {/* Search Form */}
          {/* <Form className="d-flex justify-content-center">
            <Row className="w-75">
              <Col md={3}>
                <Form.Control type="text" placeholder="Select your interest" />
              </Col>
              <Col md={2}>
                <Form.Control type="date" placeholder="Start date" />
              </Col>
              <Col md={2}>
                <Form.Control type="date" placeholder="End date" />
              </Col>
              <Col md={3}>
                <Form.Control type="number" placeholder="Number of students" />
              </Col>
              <Col md={2} className="text-center">
                <Button variant="danger" className="rounded-circle px-3">
                  ➜
                </Button>
              </Col>
            </Row>
          </Form> */}
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
            Want to stay updated on new courses and promotions? Sign up for our
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
    </div>
  );
};

export default App;
