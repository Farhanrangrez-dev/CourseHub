import React, { useState } from "react";
import { Card, Button, ListGroup, Modal, Form } from "react-bootstrap";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { Pie, Bar } from "react-chartjs-2";
import "chart.js/auto";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const StudentProfile = () => {
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [name, setName] = useState("Kate Spade"); // State for name
  const [email, setEmail] = useState("kate.spade@email.com"); // State for email
  const [phone, setPhone] = useState("56925789"); // State for phone
  const [activeCourses, setActiveCourses] = useState([
    "Ballet Intro",
    "Acrobatics 1",
    "Pilates Intro",
    "Ballet Intro",
    "Acrobatics 1",
    "Pilates Intro",
    "Ballet Intro",
    "Acrobatics 1",
    "Pilates Intro",
  ]); // State for active courses
  const [profilePic, setProfilePic] = useState(
    "https://st.depositphotos.com/1000137/3075/i/450/depositphotos_30751345-stock-photo-cute-school-boy-studying-in.jpg"
  ); // State for profile picture

  const revenueData = {
    labels: ["March", "April", "May"],
    datasets: [
      {
        label: "Revenue by Classes",
        data: [100, 150, 200],
        backgroundColor: ["#f77f00", "#003f5c", "#d45087"],
      },
    ],
  };

  const classesData = {
    labels: ["Ballet", "Acrobatics", "Pilates"],
    datasets: [
      {
        data: [10, 7, 4],
        backgroundColor: ["#ff6384", "#36a2eb", "#ffce56"],
      },
    ],
  };

  // Function to handle profile picture change
  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Function to handle form submission
  const handleSave = () => {
    // Save logic here (e.g., update state or send data to an API)
    setShowModal(false); // Close the modal after saving
  };

  // Mock student data for demonstration
  const student = {
    admissionNo: "12345", // Example admission number
  };

  return (
    <div className="container mt-4"  >
      {/* Profile Card */}
      <Card className="shadow-lg p-4">
        <div className="d-flex align-items-center">
          <img
            src={profilePic}
            alt="Profile"
            className="profile-img me-3"
            style={{ width: "100px", height: "100px", borderRadius: "50%" }}
          />
          <div>
            <h3>{name}</h3>
            <p>
              <FaEnvelope /> {email}
            </p>
            <p>
              <FaPhone /> {phone}
            </p>

            {/* Link to view student profile */}
            
            <Button
              variant="primary"
              className="me-2"
              onClick={() => setShowModal(true)}
            >
              Edit profile
            </Button>
          </div>
        </div>
      </Card>

      {/* Modal for Editing Profile */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Active Courses</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={activeCourses.join(", ")}
                onChange={(e) =>
                  setActiveCourses(e.target.value.split(", "))
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Profile Picture</Form.Label>
              <Form.Control
                type="file"
                onChange={handleProfilePicChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Other Sections */}
      <div className="row mt-4">
        <div className="col-md-4">
          <Card className="p-3 shadow-sm">
            <h5>Active Courses</h5>
            <ListGroup>
              {activeCourses.map((course, index) => (
                <ListGroup.Item key={index}>{course}</ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        </div>
        <div className="col-md-4">
          <Card className="p-3 shadow-sm">
            <h5>Revenue this Month</h5>
            <Pie data={classesData} />
          </Card>
        </div>
        <div className="col-md-4">
          <Card className="p-3 shadow-sm">
            <h5>Classes this Month</h5>
            <Pie data={classesData} />
          </Card>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-12">
          <Card className="p-3 shadow-sm">
            <h5>Revenue by Classes (Monthly)</h5>
            <Bar data={revenueData} />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;