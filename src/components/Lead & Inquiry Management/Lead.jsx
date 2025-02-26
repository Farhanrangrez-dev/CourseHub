import React, { useState } from "react";
import { Container, Button, Table, Form, Modal, Badge, Row, Col } from "react-bootstrap";
import { FaSearch, FaFilter, FaFileExport, FaFileImport, FaPlus, FaEdit, FaTrash, FaExpand, FaList, FaCommentAlt, FaBell, FaUserPlus } from "react-icons/fa";
import "./Lead.css";

const Lead = () => {
  // Sample counselors data
  const [counselors, setCounselors] = useState([
    { id: 1, name: "Sarah Wilson" },
    { id: 2, name: "Michael Johnson" },
    { id: 3, name: "Emily Davis" },
    { id: 4, name: "David Thompson" }
  ]);

  // Sample lead data
  const [leads, setLeads] = useState([
    { 
      id: 1, 
      name: "John Smith", 
      phone: "+1 234 567 8900", 
      email: "john.smith@example.com", 
      assigned: "Sarah Wilson", 
      followUpDate: "2024-02-28", 
      notes: "Interested in premium package", 
      preferredCountries: "USA, Canada", 
      source: "Website", 
      status: "In Progress" 
    },
  ]);

  // State for modal visibility
  const [showModal, setShowModal] = useState(false);
  const [showAssignModal, setShowAssignModal] = useState(false);
  const [selectedLead, setSelectedLead] = useState(null);
  const [selectedCounselor, setSelectedCounselor] = useState("");

  // State for new lead form data
  const [newLead, setNewLead] = useState({
    name: "",
    phone: "",
    email: "",
    assigned: "",
    followUpDate: "",
    notes: "",
    preferredCountries: "",
    source: "",
    status: "",
  });

  // Open modal
  const handleShowModal = () => setShowModal(true);

  // Close modal
  const handleCloseModal = () => {
    setShowModal(false);
    setNewLead({
      name: "",
      phone: "",
      email: "",
      assigned: "",
      followUpDate: "",
      notes: "",
      preferredCountries: "",
      source: "",
      status: "",
    });
  };

  // Function to open assign counselor modal
  const handleShowAssignModal = (lead) => {
    setSelectedLead(lead);
    setSelectedCounselor(lead.assigned || "");
    setShowAssignModal(true);
  };

  // Function to close assign counselor modal
  const handleCloseAssignModal = () => {
    setShowAssignModal(false);
    setSelectedLead(null);
    setSelectedCounselor("");
  };

  // Function to handle counselor assignment
  const handleAssignCounselor = () => {
    if (selectedLead && selectedCounselor) {
      const updatedLeads = leads.map(lead => 
        lead.id === selectedLead.id ? { ...lead, assigned: selectedCounselor } : lead
      );
      setLeads(updatedLeads);
      handleCloseAssignModal();
    }
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewLead({
      ...newLead,
      [name]: value,
    });
  };

  // Handle form submission
  const handleAddLead = (e) => {
    e.preventDefault();
    const newLeadWithId = {
      id: leads.length + 1,
      ...newLead,
    };
    setLeads([...leads, newLeadWithId]);
    handleCloseModal();
  };

  return (
    <div className="lead-container">
      {/* Header */}
      <div className="header">
        <div className="header-left">
          <span className="menu-icon">☰</span>
          <h4>Leads</h4>
        </div>
        <div className="header-right">
          <span className="icon"><FaExpand /></span>
          <span className="icon"><FaList /></span>
          <span className="icon"><FaCommentAlt /></span>
          <span className="icon notification-icon">
            <FaBell />
            <span className="notification-badge">5</span>
          </span>
          <span className="date-time">Tue, 25 February 9:00 PM</span>
          <span className="user-avatar">👤</span>
        </div>
      </div>

      {/* Search and Actions */}
      <div className="search-actions">
        <div className="search-container">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search in table..." className="search-input" />
        </div>
        <div className="action-buttons">
          <button className="btn-outline">Summary</button>
          <button className="btn-outline">Advanced Filters</button>
          <button className="btn-outline">Export</button>
          <button className="btn-outline">Import</button>
          <button className="btn-primary" onClick={handleShowModal}>New Lead</button>
        </div>
      </div>

      {/* Filters */}
      <div className="filters">
        <select className="filter-select">
          <option>All Statuses</option>
        </select>
        <select className="filter-select">
          <option>All Sources</option>
        </select>
        <select className="filter-select">
          <option>All Assignees</option>
        </select>
        <input type="text" placeholder="dd-mm-yyyy" className="date-input" />
        <div className="filter-buttons">
          <button className="btn-filter">Filter</button>
          <button className="btn-reset">Reset Filter</button>
        </div>
      </div>

      {/* Table */}
      <div className="table-container">
        <table className="leads-table">
          <thead>
            <tr>
              <th><input type="checkbox" /></th>
              <th>NAME</th>
              <th>PHONE</th>
              <th>EMAIL</th>
              <th>ASSIGNED</th>
              <th>FOLLOWUP DATE</th>
              <th>NOTES</th>
              <th>PREFERRED COUNTRIES</th>
              <th>SOURCE</th>
              <th>STATUS</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead.id}>
                <td><input type="checkbox" /></td>
                <td>{lead.name}</td>
                <td>{lead.phone}</td>
                <td>{lead.email}</td>
                <td>{lead.assigned}</td>
                <td>{lead.followUpDate}</td>
                <td>{lead.notes}</td>
                <td>{lead.preferredCountries}</td>
                <td><span className="source-badge">{lead.source}</span></td>
                <td><span className="status-badge">{lead.status}</span></td>
                <td>
                  <span className="action-icon edit-icon"><FaEdit /></span>
                  <span className="action-icon delete-icon"><FaTrash /></span>
                  <span className="action-icon assign-icon" onClick={() => handleShowAssignModal(lead)}>
                    <FaUserPlus />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Lead Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Lead</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleAddLead}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                name="name"
                value={newLead.name}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter phone"
                name="phone"
                value={newLead.phone}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={newLead.email}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Assigned</Form.Label>
              <Form.Select
                name="assigned"
                value={newLead.assigned}
                onChange={handleInputChange}
              >
                <option value="">Select Counselor</option>
                {counselors.map(counselor => (
                  <option key={counselor.id} value={counselor.name}>
                    {counselor.name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Follow-up Date</Form.Label>
              <Form.Control
                type="date"
                name="followUpDate"
                value={newLead.followUpDate}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Notes</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter notes"
                name="notes"
                value={newLead.notes}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Preferred Countries</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter preferred countries"
                name="preferredCountries"
                value={newLead.preferredCountries}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Source</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter source"
                name="source"
                value={newLead.source}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Status</Form.Label>
              <Form.Select
                name="status"
                value={newLead.status}
                onChange={handleInputChange}
              >
                <option value="">Select status</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
                <option value="Pending">Pending</option>
              </Form.Select>
            </Form.Group>
            <div className="d-flex justify-content-end">
              <Button variant="secondary" className="me-2" onClick={handleCloseModal}>
                Cancel
              </Button>
              <Button variant="primary" type="submit">
                Add Lead
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Assign Counselor Modal */}
      <Modal show={showAssignModal} onHide={handleCloseAssignModal}>
        <Modal.Header closeButton>
          <Modal.Title>Assign Counselor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedLead && (
            <>
              <p><strong>Lead:</strong> {selectedLead.name}</p>
              <Form.Group className="mb-3">
                <Form.Label>Select Counselor</Form.Label>
                <Form.Select
                  value={selectedCounselor}
                  onChange={(e) => setSelectedCounselor(e.target.value)}
                >
                  <option value="">Select Counselor</option>
                  {counselors.map(counselor => (
                    <option key={counselor.id} value={counselor.name}>
                      {counselor.name}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAssignModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAssignCounselor}>
            Assign
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Lead;