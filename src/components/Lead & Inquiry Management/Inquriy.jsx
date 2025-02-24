import React, { useState } from "react";
import { Table, Button, Form, Badge, Modal } from "react-bootstrap";

const Inquiry = () => {
  // Sample inquiry data
  const [inquiries, setInquiries] = useState({
    todayInquiries: [
      {
        id: 1,
        title: "Complete monthly inquiry report",
        status: "In Progress",
        priority: "High priority",
        assignedTeam: "Marketing",
        counselor: "👤",
      },
      {
        id: 2,
        title: "Contact negotiation meeting",
        status: "In Progress",
        priority: "Medium priority",
        assignedTeam: "Operational",
        counselor: "👥",
      },
      {
        id: 3,
        title: "Keynote on market trends",
        status: "WhatsApp",
        priority: "WhatsApp",
        assignedTeam: "Counselor",
        counselor: "👨‍🏫",
      },
    ],
    todayFollowUps: [
      {
        id: 4,
        name: "John Doe", // Added name field
        title: "Service Inquiry",
        followUpDate: "Today",
        status: "New",
        urgency: "WhatsApp",
        department: "Lead Inquiry",
        responsible: "👤",
      },
      {
        id: 5,
        name: "Jane Smith", // Added name field
        title: "Advanced filters review",
        followUpDate: "Today",
        status: "In Progress",
        urgency: "Email",
        department: "Conversion",
        responsible: "👥",
      },
      {
        id: 6,
        name: "Michael Brown", // Added name field
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
        name: "Emily Johnson", // Added name field
        title: "Follow-up Tasks",
        followUpDate: "Thursday",
        status: "In Progress",
        urgency: "Email",
        department: "Lead Follow-ups",
        responsible: "👤",
      },
      {
        id: 8,
        name: "David Wilson", // Added name field
        title: "Lead Progress Review",
        followUpDate: "Thursday",
        status: "New",
        urgency: "Email",
        department: "Lead Management",
        responsible: "👥",
      },
      {
        id: 9,
        name: "Sarah Davis", // Added name field
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

  // State for new inquiry form data
  const [newInquiry, setNewInquiry] = useState({
    title: "",
    status: "New",
    priority: "Medium priority",
    assignedTeam: "",
    counselor: "👤",
  });

  // State for new follow-up form data
  const [newFollowUp, setNewFollowUp] = useState({
    name: "", // Added name field
    title: "",
    followUpDate: "Today",
    status: "New",
    urgency: "WhatsApp",
    department: "",
    responsible: "👤",
  });

  // Open inquiry modal
  const handleShowInquiryModal = () => setShowInquiryModal(true);

  // Close inquiry modal
  const handleCloseInquiryModal = () => {
    setShowInquiryModal(false);
    setNewInquiry({
      title: "",
      status: "New",
      priority: "Medium priority",
      assignedTeam: "",
      counselor: "👤",
    });
  };

  // Open follow-up modal
  const handleShowFollowUpModal = () => setShowFollowUpModal(true);

  // Close follow-up modal
  const handleCloseFollowUpModal = () => {
    setShowFollowUpModal(false);
    setNewFollowUp({
      name: "", // Reset name field
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

  return (
    <div className="container mt-4">
      {/* Header Section */}
      <div className="d-flex justify-content-between mb-3">
        <Form.Control type="text" placeholder="Search inquiries" className="w-50" />
        <div>
          <Button variant="success" className="me-2" onClick={handleShowInquiryModal} style={{backgroundColor:"gray", color:"black", border:"none"}}>
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
            <th>Inquiry</th>
            <th>Inquiry Stage</th>
            <th>Priority</th>
            <th>Assigned Team</th>
            <th>Counselor</th>
          </tr>
        </thead>
        <tbody>
          {inquiries.todayInquiries.map((inq) => (
            <tr key={inq.id}>
              <td>{inq.title}</td>
              <td>
                <Badge bg={getBadge(inq.status)}>{inq.status}</Badge>
              </td>
              <td>
                <Badge bg="danger">{inq.priority}</Badge>
              </td>
              <td>{inq.assignedTeam}</td>
              <td>{inq.counselor}</td>
            </tr>
          ))}
        </tbody>
      </Table>

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
          </tr>
        </thead>
        <tbody>
          {inquiries.todayFollowUps.map((inq) => (
            <tr key={inq.id}>
              <td>{inq.followUpDate}</td>
              <td>{inq.name}</td> {/* Display name */}
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
            </tr>
          ))}
        </tbody>
      </Table>

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
          </tr>
        </thead>
        <tbody>
          {inquiries.thisWeekFollowUps.map((inq) => (
            <tr key={inq.id}>
              <td>{inq.followUpDate}</td>
              <td>{inq.name}</td> {/* Display name */}
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
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter inquiry title"
                name="title"
                value={newInquiry.title}
                onChange={handleInquiryInputChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Status</Form.Label>
              <Form.Select
                name="status"
                value={newInquiry.status}
                onChange={handleInquiryInputChange}
              >
                <option value="New">New</option>
                <option value="In Progress">In Progress</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Priority</Form.Label>
              <Form.Select
                name="priority"
                value={newInquiry.priority}
                onChange={handleInquiryInputChange}
              >
                <option value="High priority">High priority</option>
                <option value="Medium priority">Medium priority</option>
                <option value="Low priority">Low priority</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Assigned Team</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter assigned team"
                name="assignedTeam"
                value={newInquiry.assignedTeam}
                onChange={handleInquiryInputChange}
                required
              />
            </Form.Group>
            <div className="d-flex gap-2">
              <Button variant="primary" type="submit" style={{backgroundColor:"gray", color:"black",border:"none"}}>
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
      <Modal show={showFollowUpModal} onHide={handleCloseFollowUpModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add New Follow-up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleAddFollowUp}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label> {/* Added Name field */}
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
              <Button variant="primary" type="submit" style={{backgroundColor:"gray", color:"black",border:"none"}}>
                Add Follow-up
              </Button>
              <Button variant="secondary" onClick={handleCloseFollowUpModal}>
                Cancel
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Inquiry;