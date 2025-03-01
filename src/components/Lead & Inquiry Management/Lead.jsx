import React, { useState } from "react";
import { Container, Button, Table, Form, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaExpand,
  FaList,
  FaCommentAlt,
  FaBell,
  FaUserPlus,
  FaPlus,
  FaEdit,
  FaTrash,
} from "react-icons/fa";
import "./Lead.css";

const Lead = () => {
  // Sample counselors data
  const [counselors] = useState([
    { id: 1, name: "Sarah Wilson" },
    { id: 2, name: "Michael Johnson" },
    { id: 3, name: "Emily Davis" },
    { id: 4, name: "David Thompson" },
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
      status: "In Progress",
    },
  ]);

  // Modal states
  const [showModal, setShowModal] = useState(false);
  const [showAssignModal, setShowAssignModal] = useState(false);

  // Track which lead is selected for "assign counselor"
  const [selectedLead, setSelectedLead] = useState(null);
  const [selectedCounselor, setSelectedCounselor] = useState("");

  // Track whether we are adding or editing a lead
  const [isEditMode, setIsEditMode] = useState(false);
  const [currentLeadId, setCurrentLeadId] = useState(null);

  // State for the lead form (used for both add & edit)
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

  // ---------------------------------------
  // MODAL FUNCTIONS
  // ---------------------------------------

  const [filterStatus, setFilterStatus] = useState("");
  const [filterSource, setFilterSource] = useState("");
  const [filteredLeads, setFilteredLeads] = useState(null);

  const handleFilter = () => {
    const filtered = leads.filter((lead) => {
      const statusMatch = filterStatus === "" || lead.status === filterStatus;
      const sourceMatch = filterSource === "" || lead.source === filterSource;
      return statusMatch && sourceMatch;
    });
    setFilteredLeads(filtered);
  };

  const handleResetFilter = () => {
    setFilterStatus("");
    setFilterSource("");
    setFilteredLeads(null);
  };

  const displayLeads = filteredLeads !== null ? filteredLeads : leads;
  // Open "Add Lead" modal
  const handleShowModal = () => {
    setIsEditMode(false);
    setCurrentLeadId(null);
    // Reset form for a new lead
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
    setShowModal(true);
  };

  // Close modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Open "Edit Lead" modal
  const handleEditLead = (lead) => {
    setIsEditMode(true);
    setCurrentLeadId(lead.id);
    // Pre-fill the form with the lead’s data
    setNewLead({
      name: lead.name,
      phone: lead.phone,
      email: lead.email,
      assigned: lead.assigned,
      followUpDate: lead.followUpDate,
      notes: lead.notes,
      preferredCountries: lead.preferredCountries,
      source: lead.source,
      status: lead.status,
    });
    setShowModal(true);
  };

  // ---------------------------------------
  // ASSIGN COUNSELOR FUNCTIONS
  // ---------------------------------------
  const handleShowAssignModal = (lead) => {
    setSelectedLead(lead);
    setSelectedCounselor(lead.assigned || "");
    setShowAssignModal(true);
  };

  const handleCloseAssignModal = () => {
    setShowAssignModal(false);
    setSelectedLead(null);
    setSelectedCounselor("");
  };

  const handleAssignCounselor = () => {
    if (selectedLead && selectedCounselor) {
      const updatedLeads = leads.map((lead) =>
        lead.id === selectedLead.id
          ? { ...lead, assigned: selectedCounselor }
          : lead
      );
      setLeads(updatedLeads);
      handleCloseAssignModal();
    }
  };

  // ---------------------------------------
  // FORM INPUT & SUBMISSION (ADD/EDIT)
  // ---------------------------------------
  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewLead({
      ...newLead,
      [name]: value,
    });
  };

  // Handle "Add / Edit" form submission
  const handleSaveLead = (e) => {
    e.preventDefault();

    if (isEditMode) {
      // Update existing lead
      const updatedLeads = leads.map((lead) => {
        if (lead.id === currentLeadId) {
          return { ...lead, ...newLead };
        }
        return lead;
      });
      setLeads(updatedLeads);
    } else {
      // Add new lead
      const newLeadWithId = {
        id: leads.length + 1,
        ...newLead,
      };
      setLeads([...leads, newLeadWithId]);
    }

    // Close modal
    handleCloseModal();
  };

  // ---------------------------------------
  // DELETE LEAD
  // ---------------------------------------
  const handleDeleteLead = (leadId) => {
    const updatedLeads = leads.filter((lead) => lead.id !== leadId);
    setLeads(updatedLeads);
  };

  // ---------------------------------------
  // RENDER
  // ---------------------------------------
  return (
    <div className="lead-container">
      {/* Header */}
  
      {/* Search and Actions */}
      <div className="search-actions">
        <div className="search-container">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search in table..."
            className="search-input"
          />
        </div>
        <div className="action-buttons">
          <button className="btn-outline">Summary</button>
          
          <button className="btn-outline">Export</button>
          <button className="btn-outline">Import</button>
          <button className="btn-primary" onClick={handleShowModal}>
            New Lead
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="filters mb-2">
        <select
          className="filter-select"
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="">All Statuses</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
          <option value="Pending">Pending</option>
        </select>
        <select
          className="filter-select"
          value={filterSource}
          onChange={(e) => setFilterSource(e.target.value)}
        >
          <option value="">All Sources</option>
          <option value="Website">Website</option>
          <option value="Office Visit">Office Visit</option>
          <option value="Phone Call">Phone Call</option>
          <option value="Email Inquiry">Email Inquiry</option>
          <option value="Social Media">Social Media</option>
        </select>
        <div className="filter-buttons">
          <button className="btn-filter" onClick={handleFilter}>
            Filter
          </button>
          <button className="btn-reset" onClick={handleResetFilter}>
            Reset Filter
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="table-container">
        <table className="leads-table text-nowrap">
          <thead className="text-center">
            <tr>
              <th>
                <input type="checkbox" />
              </th>
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
                <td>
                  <input type="checkbox" />
                </td>
                <td>{lead.name}</td>
                <td>{lead.phone}</td>
                <td>{lead.email}</td>
                <td>{lead.assigned}</td>
                <td>{lead.followUpDate}</td>
                <td>{lead.notes}</td>
                <td>{lead.preferredCountries}</td>
                <td>
                  <span className="source-badge">{lead.source}</span>
                </td>
                <td>
                  <span className="status-badge">{lead.status}</span>
                </td>
                <td>
                  {/* Edit Icon */}
                  <span
                    className="action-icon edit-icon"
                    onClick={() => handleEditLead(lead)}
                  >
                    <FaEdit />
                  </span>
                  {/* Delete Icon */}
                  <span
                    className="action-icon delete-icon"
                    onClick={() => handleDeleteLead(lead.id)}
                  >
                    <FaTrash />
                  </span>
                  {/* Assign Counselor Icon */}
                  <span
                    className="action-icon assign-icon"
                    onClick={() => handleShowAssignModal(lead)}
                  >
                    <FaUserPlus />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add/Edit Lead Modal */}
      {/* Add/Edit Lead Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{isEditMode ? "Edit Lead" : "Add New Lead"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSaveLead}>
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
                {counselors.map((counselor) => (
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

            {/* Updated Source dropdown with 5 options */}
            <Form.Group className="mb-3">
              <Form.Label>Source</Form.Label>
              <Form.Select
                name="source"
                value={newLead.source}
                onChange={handleInputChange}
              >
                <option value="">Select Source</option>
                <option value="Website">Website</option>
                <option value="Office Visit">Office Visit</option>
                <option value="Phone Call">Phone Call</option>
                <option value="Email Inquiry">Email Inquiry</option>
                <option value="Social Media">Social Media</option>
              </Form.Select>
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
              <Button
                variant="secondary"
                className="me-2"
                onClick={handleCloseModal}
              >
                Cancel
              </Button>
              <Button variant="primary" type="submit">
                {isEditMode ? "Update Lead" : "Add Lead"}
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
              <p>
                <strong>Lead:</strong> {selectedLead.name}
              </p>
              <Form.Group className="mb-3">
                <Form.Label>Select Counselor</Form.Label>
                <Form.Select
                  value={selectedCounselor}
                  onChange={(e) => setSelectedCounselor(e.target.value)}
                >
                  <option value="">Select Counselor</option>
                  {counselors.map((counselor) => (
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
          <Link to="/contract">
            <Button variant="primary" onClick={handleAssignCounselor}>
              Assign
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Lead;
