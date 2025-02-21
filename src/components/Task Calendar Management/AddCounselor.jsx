import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Add Counselor Component
const AddCounselor = ({ onAdd }) => {
  const [counselorName, setCounselorName] = useState("");
  const [counselorEmail, setCounselorEmail] = useState("");
  const [counselorPhone, setCounselorPhone] = useState("");
  const [university, setUniversity] = useState(""); // New field for University
  const [counselors, setCounselors] = useState([
    {
      name: "John Doe",
      email: "john@example.com",
      phone: "123-456-7890",
      date: "02/15/2025",
      university: "University A", // Add dummy university data
    },
    {
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "987-654-3210",
      date: "02/14/2025",
      university: "University B", // Add dummy university data
    },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingCounselor, setEditingCounselor] = useState(null);

  const handleAddCounselor = () => {
    if (counselorName && counselorEmail && counselorPhone && university) {
      const newCounselor = {
        name: counselorName,
        email: counselorEmail,
        phone: counselorPhone,
        date: new Date().toLocaleDateString(),
        university, // Include university in the new counselor data
      };
      setCounselors([...counselors, newCounselor]);
      onAdd(newCounselor);
      setCounselorName("");
      setCounselorEmail("");
      setCounselorPhone("");
      setUniversity(""); // Reset university field
      setShowModal(false); // Close the modal after adding
    }
  };

  const handleEditCounselor = (index) => {
    const counselorToEdit = counselors[index];
    setCounselorName(counselorToEdit.name);
    setCounselorEmail(counselorToEdit.email);
    setCounselorPhone(counselorToEdit.phone);
    setUniversity(counselorToEdit.university); // Populate university for editing
    setEditingCounselor(index);
    setShowModal(true);
  };

  const handleDeleteCounselor = (index) => {
    const updatedCounselors = counselors.filter((_, i) => i !== index);
    setCounselors(updatedCounselors);
  };

  const handleSaveEdit = () => {
    if (editingCounselor !== null) {
      const updatedCounselors = counselors.map((counselor, index) =>
        index === editingCounselor
          ? {
              ...counselor,
              name: counselorName,
              email: counselorEmail,
              phone: counselorPhone,
              university, // Save university during edit
            }
          : counselor
      );
      setCounselors(updatedCounselors);
      setEditingCounselor(null);
      setCounselorName("");
      setCounselorEmail("");
      setCounselorPhone("");
      setUniversity(""); // Reset university field
      setShowModal(false); // Close the modal after saving
    }
  };

  const filteredCounselors = counselors.filter((counselor) =>
    counselor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container p-3"  >
      {/* Search input on the left and Add button on the right */}
      <h4 className="fw-bold mb-4" >Add Counselor</h4>
      <div className="row">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="col-md-6 text-end">
          <button
            className="btn btn-primary"
            onClick={() => setShowModal(true)}
            style={{backgroundColor:"gray" , color:"black", border:"none"}}s
          >
            Add Counselor
          </button>
        </div>
      </div>

      {/* Modal for adding/editing counselor */}
      {showModal && (
        <div
          className="modal show"
          tabIndex="-1"
          style={{
            display: "block",
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1050,
          }}
          aria-hidden="false"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {editingCounselor !== null
                    ? "Edit Counselor"
                    : "Add New Counselor"}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                {/* First row: Counselor Name and Email */}
                <div className="row mb-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      id="counselorName"
                      className="form-control"
                      placeholder="Enter counselor name..."
                      value={counselorName}
                      onChange={(e) => setCounselorName(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      id="counselorEmail"
                      className="form-control"
                      placeholder="Enter counselor email..."
                      value={counselorEmail}
                      onChange={(e) => setCounselorEmail(e.target.value)}
                    />
                  </div>
                </div>

                {/* Second row: Counselor Phone */}
                <div className="row mb-3">
                  <div className="col-md-6">
                    <input
                      type="tel"
                      id="counselorPhone"
                      className="form-control"
                      placeholder="Enter counselor phone..."
                      value={counselorPhone}
                      onChange={(e) => setCounselorPhone(e.target.value)}
                    />
                  </div>
                  {/* Third row: University */}
                  <div className="col-md-6">
                    <input
                      type="text"
                      id="university"
                      className="form-control"
                      placeholder="Enter university name..."
                      value={university}
                      onChange={(e) => setUniversity(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={
                    editingCounselor !== null
                      ? handleSaveEdit
                      : handleAddCounselor
                  }
                >
                  {editingCounselor !== null ? "Save Changes" : "Add Counselor"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Counselors Table */}
      {filteredCounselors.length > 0 && (
        <div className="mt-4">
          <h5>Counselor List</h5>
          <table className="table table-bordered">
            <thead>
              <tr className="text-nowrap">
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>University</th> {/* New University Column */}
                <th>Date Added</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredCounselors.map((c, index) => (
                <tr className="text-nowrap" key={index}>
                  <td>{c.name}</td>
                  <td>{c.email}</td>
                  <td>{c.phone}</td>
                  <td>{c.university}</td> {/* Display University */}
                  <td>{c.date}</td>
                  <td>
                    <button
                      className="btn btn-warning btn-sm"
                      onClick={() => handleEditCounselor(index)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger btn-sm ms-2"
                      onClick={() => handleDeleteCounselor(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AddCounselor;
