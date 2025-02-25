import React, { useState } from "react";
import {
  Table,
  Button,
  Form,
  Badge,
  Modal,
  Pagination,
  Dropdown,
} from "react-bootstrap";

const Inquiry = () => {
  // Sample inquiry data
  const [inquiries, setInquiries] = useState({
    todayInquiries: [
      {
        
        name: "Raja",
        email: "raja@email.com",
        phone: "123456789",
        city: "Indore",
        address: "Vijay Nagar",
        course: "Maths",
        source:"Whatsapp"
      },
    ],
    todayFollowUps: [
      {
        id: 4,
        name: "John Doe",
        title: "Service Inquiry",
        followUpDate: "Today",
        status: "New",
        urgency: "WhatsApp",
        department: "Lead Inquiry",
        responsible: "👤",
      },
      {
        id: 5,
        name: "Jane Smith",
        title: "Advanced filters review",
        followUpDate: "Today",
        status: "In Progress",
        urgency: "Email",
        department: "Conversion",
        responsible: "👥",
      },
      {
        id: 6,
        name: "Michael Brown",
        title: "Lead Conversion Report",
        followUpDate: "Today",
        status: "New",
        urgency: "Call",
        department: "Follow-up",
        responsible: "👨‍💼",
      },
    ],
    thisWeekFollowUps: [
      {
        id: 7,
        name: "Emily Johnson",
        title: "Follow-up Tasks",
        followUpDate: "Thursday",
        status: "In Progress",
        urgency: "Email",
        department: "Lead Follow-ups",
        responsible: "👤",
      },
      {
        id: 8,
        name: "David Wilson",
        title: "Lead Progress Review",
        followUpDate: "Thursday",
        status: "New",
        urgency: "Email",
        department: "Lead Management",
        responsible: "👥",
      },
      {
        id: 9,
        name: "Sarah Davis",
        title: "Lead Conversion Report",
        followUpDate: "Friday",
        status: "New",
        urgency: "Call",
        department: "Lead Development",
        responsible: "👨‍💼",
      },
    ],
  });

  // State for modals
  const [showInquiryModal, setShowInquiryModal] = useState(false);
  const [showFollowUpModal, setShowFollowUpModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedInquiry, setSelectedInquiry] = useState(null);

  // State for new inquiry form data
  const [newInquiry, setNewInquiry] = useState({
   
    name: "",
    email: "",
    phone: "",
    city: "",
    address: "",
    course: "Maths",
    source:"",
  });

  // State for new follow-up form data
  const [newFollowUp, setNewFollowUp] = useState({
    name: "",
    title: "",
    followUpDate: "Today",
    status: "New",
    urgency: "WhatsApp",
    department: "",
    responsible: "👤",
  });

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Open inquiry modal
  const handleShowInquiryModal = () => setShowInquiryModal(true);

  // Close inquiry modal
  const handleCloseInquiryModal = () => {
    setShowInquiryModal(false);
    setNewInquiry({
      id: "",
      name: "",
      email: "",
      phone: "",
      city: "",
      address: "",
      course: "Maths",
      source:"WhatSapp",
    });
  };

  // Open follow-up modal
  const handleShowFollowUpModal = () => setShowFollowUpModal(true);

  // Close follow-up modal
  const handleCloseFollowUpModal = () => {
    setShowFollowUpModal(false);
    setNewFollowUp({
      name: "",
      title: "",
      followUpDate: "Today",
      status: "New",
      urgency: "WhatsApp",
      department: "",
      responsible: "👤",
    });
  };

  // Handle input changes for new inquiry
  const handleInquiryInputChange = (e) => {
    const { name, value } = e.target;
    setNewInquiry({
      ...newInquiry,
      [name]: value,
    });
  };

  // Handle input changes for new follow-up
  const handleFollowUpInputChange = (e) => {
    const { name, value } = e.target;
    setNewFollowUp({
      ...newFollowUp,
      [name]: value,
    });
  };

  // Handle form submission for new inquiry
  const handleAddInquiry = (e) => {
    e.preventDefault();

    // Create a new inquiry object
    const inquiry = {
      id: inquiries.todayInquiries.length + 1,
      ...newInquiry,
    };

    // Add the new inquiry to the list
    setInquiries({
      ...inquiries,
      todayInquiries: [...inquiries.todayInquiries, inquiry],
    });

    // Close the modal
    handleCloseInquiryModal();
  };

  // Handle form submission for new follow-up
  const handleAddFollowUp = (e) => {
    e.preventDefault();

    // Create a new follow-up object
    const followUp = {
      id: inquiries.todayFollowUps.length + 1,
      ...newFollowUp,
    };

    // Add the new follow-up to the list
    setInquiries({
      ...inquiries,
      todayFollowUps: [...inquiries.todayFollowUps, followUp],
    });

    // Close the modal
    handleCloseFollowUpModal();
  };

  // Handle follow-up actions (WhatsApp, Email, Call)
  const handleFollowUpAction = (action, title) => {
    alert(`Performing ${action} for: ${title}`);
  };

  // Handle inquiry detail view
  const handleViewDetail = (inquiry) => {
    setSelectedInquiry(inquiry);
    setShowDetailModal(true);
  };

  // Handle delete inquiry
  const handleDeleteInquiry = (id) => {
    setInquiries({
      ...inquiries,
      todayInquiries: inquiries.todayInquiries.filter((inq) => inq.id !== id),
    });
  };

  // Handle delete follow-up
  const handleDeleteFollowUp = (id) => {
    setInquiries({
      ...inquiries,
      todayFollowUps: inquiries.todayFollowUps.filter(
        (followUp) => followUp.id !== id
      ),
    });
  };

  // Badge colors based on status
  const getBadge = (status) => {
    switch (status) {
      case "In Progress":
        return "success";
      case "New":
        return "primary";
      case "WhatsApp":
        return "warning";
      case "Email":
        return "info";
      case "Call":
        return "danger";
      default:
        return "secondary";
    }
  };

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentInquiries = inquiries.todayInquiries.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const currentFollowUps = inquiries.todayFollowUps.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mt-4">
      {/* Header Section */}
      <div className="d-flex justify-content-between mb-3">
        <Form.Control
          type="text"
          placeholder="Search inquiries"
          className="w-50"
        />
        <div>
          <Button
            variant="success"
            className="me-2"
            onClick={handleShowInquiryModal}
            style={{ backgroundColor: "gray", color: "black", border: "none" }}
          >
            Add Inquiry
          </Button>
          <Button variant="light" onClick={handleShowFollowUpModal}>
            Follow-up
          </Button>
        </div>
      </div>

      {/* Today's Inquiries */}
      <h4 className="mb-3">Today's Inquiries</h4>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
          
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>City</th>
            <th>Address</th>
            <th>Course</th>
            <th>Source</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentInquiries.map((inq) => (
            <tr>
              
              <td>{inq.name}</td>
              <td>{inq.email}</td>
              <td>{inq.phone}</td>
              <td>{inq.city}</td>
              <td>{inq.address}</td>
              <td>{inq.course}</td>
              <td>{inq.source}</td>
              <td className="d-flex">
                <Button
                  variant="info"
                  size="sm"
                  onClick={() => handleViewDetail(inq)}
                >
                  View
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDeleteInquiry(inq.id)}
                  className="ms-2"
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination>
        {Array.from({
          length: Math.ceil(inquiries.todayInquiries.length / itemsPerPage),
        }).map((_, index) => (
          <Pagination.Item
            key={index + 1}
            active={index + 1 === currentPage}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>

      {/* Today Follow-ups */}
      <h4 className="mb-3">Today</h4>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Follow-up Date</th>
            <th>Name</th>
            <th>Status Update</th>
            <th>Urgency Level</th>
            <th>Department</th>
            <th>Responsible</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentFollowUps.map((inq) => (
            <tr key={inq.id}>
              <td>{inq.followUpDate}</td>
              <td>{inq.name}</td>
              <td>
                <Badge bg={getBadge(inq.status)}>{inq.status}</Badge>
              </td>
              <td>
                <Badge bg={getBadge(inq.urgency)}>{inq.urgency}</Badge>
              </td>
              <td>{inq.department}</td>
              <td>
                <Button
                  variant="outline-primary"
                  size="sm"
                  onClick={() => handleFollowUpAction(inq.urgency, inq.title)}
                >
                  {inq.urgency}
                </Button>
              </td>
              <td>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDeleteFollowUp(inq.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination>
        {Array.from({
          length: Math.ceil(inquiries.todayFollowUps.length / itemsPerPage),
        }).map((_, index) => (
          <Pagination.Item
            key={index + 1}
            active={index + 1 === currentPage}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>

      {/* This Week Follow-ups */}
      <h4 className="mb-3">This Week</h4>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Follow-up Date</th>
            <th>Name</th>
            <th>Status Update</th>
            <th>Urgency Level</th>
            <th>Department</th>
            <th>Responsible</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {inquiries.thisWeekFollowUps.map((inq) => (
            <tr key={inq.id}>
              <td>{inq.followUpDate}</td>
              <td>{inq.name}</td>
              <td>
                <Badge bg={getBadge(inq.status)}>{inq.status}</Badge>
              </td>
              <td>
                <Badge bg={getBadge(inq.urgency)}>{inq.urgency}</Badge>
              </td>
              <td>{inq.department}</td>
              <td>
                <Button
                  variant="outline-primary"
                  size="sm"
                  onClick={() => handleFollowUpAction(inq.urgency, inq.title)}
                >
                  {inq.urgency}
                </Button>
              </td>
              <td>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDeleteFollowUp(inq.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal for Adding New Inquiry */}
      <Modal show={showInquiryModal} onHide={handleCloseInquiryModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add New Inquiry</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleAddInquiry}>
            
           
          <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter inquiry Name"
                name="name"
                value={newInquiry.name}
                onChange={handleInquiryInputChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter inquiry email"
                name="email"
                value={newInquiry.email}
                onChange={handleInquiryInputChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Phone Number"
                name="phone"
                value={newInquiry.phone}
                onChange={handleInquiryInputChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your City"
                name="city"
                value={newInquiry.city}
                onChange={handleInquiryInputChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your Address"
                name="address"
                value={newInquiry.address}
                onChange={handleInquiryInputChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Course</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your Course"
                name="course"
                value={newInquiry.course}
                onChange={handleInquiryInputChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Source</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Inquiry Source"
                name="source"
                value={newInquiry.source}
                onChange={handleInquiryInputChange}
                required
              />
            </Form.Group>
            <div className="d-flex gap-2">
              <Button
                variant="primary"
                type="submit"
                style={{
                  backgroundColor: "gray",
                  color: "black",
                  border: "none",
                }}
              >
                Add Inquiry
              </Button>
              <Button variant="secondary" onClick={handleCloseInquiryModal}>
                Cancel
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Modal for Adding New Follow-up */}
      <Modal
        show={showFollowUpModal}
        onHide={handleCloseFollowUpModal}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Follow-up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleAddFollowUp}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                name="name"
                value={newFollowUp.name}
                onChange={handleFollowUpInputChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter follow-up title"
                name="title"
                value={newFollowUp.title}
                onChange={handleFollowUpInputChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Follow-up Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="date"
                name="followUpDate"
                value={newFollowUp.followUpDate}
                onChange={handleFollowUpInputChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Status</Form.Label>
              <Form.Select
                name="status"
                value={newFollowUp.status}
                onChange={handleFollowUpInputChange}
              >
                <option value="New">New</option>
                <option value="In Progress">In Progress</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Urgency Level</Form.Label>
              <Form.Select
                name="urgency"
                value={newFollowUp.urgency}
                onChange={handleFollowUpInputChange}
              >
                <option value="WhatsApp">WhatsApp</option>
                <option value="Email">Email</option>
                <option value="Call">Call</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Department</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter department"
                name="department"
                value={newFollowUp.department}
                onChange={handleFollowUpInputChange}
                required
              />
            </Form.Group>
            <div className="d-flex gap-2">
              <Button
                variant="primary"
                type="submit"
                style={{
                  backgroundColor: "gray",
                  color: "black",
                  border: "none",
                }}
              >
                Add Follow-up
              </Button>
              <Button variant="secondary" onClick={handleCloseFollowUpModal}>
                Cancel
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Modal for Inquiry Detail */}
      <Modal
        show={showDetailModal}
        onHide={() => setShowDetailModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Inquiry Detail</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedInquiry && (
            <div>
              <p>
                <strong>Name:</strong> {selectedInquiry.name}
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <Badge bg={getBadge(selectedInquiry.email)}>
                  {selectedInquiry.email}
                </Badge>
              </p>
              <p>
                <strong>Phone No.:</strong>{" "}
                <Badge bg="danger">{selectedInquiry.phone}</Badge>
              </p>
              <p>
                <strong>City:</strong> {selectedInquiry.city}
              </p>
              <p>
                <strong>Address:</strong> {selectedInquiry.address}
              </p>
              <p>
                <strong>Course:</strong> {selectedInquiry.course}
              </p>
              <p>
                <strong>Source:</strong> {selectedInquiry.source}
              </p>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Inquiry;
