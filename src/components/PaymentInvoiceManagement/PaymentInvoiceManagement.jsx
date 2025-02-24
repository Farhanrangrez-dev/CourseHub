import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

// Sample data for universities and programs
const universities = [
  {
    id: 1,
    name: "University of California, Berkeley",
    programs: [
      {
        id: 101,
        name: "Computer Science",
        eligibility: "Bachelor's degree in related field",
        fee: "$15,000 per semester",
      },
      {
        id: 102,
        name: "Business Administration",
        eligibility: "Bachelor's degree, GMAT score",
        fee: "$20,000 per semester",
      },
    ],
  },
  {
    id: 2,
    name: "Massachusetts Institute of Technology",
    programs: [
      {
        id: 201,
        name: "Artificial Intelligence",
        eligibility: "Bachelor's degree in Computer Science",
        fee: "$18,000 per semester",
      },
      {
        id: 202,
        name: "Mechanical Engineering",
        eligibility: "Bachelor's degree in Engineering",
        fee: "$16,000 per semester",
      },
    ],
  },
  {
    id: 3,
    name: "Stanford University",
    programs: [
      {
        id: 301,
        name: "Data Science",
        eligibility: "Bachelor's degree in STEM field",
        fee: "$22,000 per semester",
      },
      {
        id: 302,
        name: "Law",
        eligibility: "Bachelor's degree, LSAT score",
        fee: "$25,000 per semester",
      },
    ],
  },
];

function CourseUniversityDatabase() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUniversities, setFilteredUniversities] = useState(
    universities
  );
  const [showModal, setShowModal] = useState(false);
  const [showAddUniversityModal, setShowAddUniversityModal] = useState(false);
  const [newProgram, setNewProgram] = useState({
    universityId: 0,
    name: "",
    eligibility: "",
    fee: "",
  });
  const [newUniversity, setNewUniversity] = useState({
    name: "",
  });

  // Handle search input
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = universities.filter(
      (uni) =>
        uni.name.toLowerCase().includes(term) ||
        uni.programs.some((program) =>
          program.name.toLowerCase().includes(term)
        )
    );
    setFilteredUniversities(filtered);
  };

  // Handle course deletion
  const handleDelete = (universityId, programId) => {
    setFilteredUniversities((prevUniversities) =>
      prevUniversities.map((uni) =>
        uni.id === universityId
          ? {
              ...uni,
              programs: uni.programs.filter(
                (program) => program.id !== programId
              ),
            }
          : uni
      )
    );
  };

  // Handle adding new course
  const handleAddCourse = () => {
    const { universityId, name, eligibility, fee } = newProgram;
    if (universityId && name && eligibility && fee) {
      setFilteredUniversities((prevUniversities) =>
        prevUniversities.map((uni) =>
          uni.id === universityId
            ? {
                ...uni,
                programs: [
                  ...uni.programs,
                  {
                    id: Date.now(),
                    name,
                    eligibility,
                    fee,
                  },
                ],
              }
            : uni
        )
      );
      setShowModal(false); // Close modal after adding
    }
  };

  // Handle adding new university
  const handleAddUniversity = () => {
    const { name } = newUniversity;
    if (name) {
      const newUni = {
        id: Date.now(),
        name,
        programs: [],
      };
      universities.push(newUni);
      setFilteredUniversities([...universities]);
      setShowAddUniversityModal(false); // Close Add University modal after adding
      setNewUniversity({ name: "" });
    }
  };

  return (
    <div
      className="container mt-5"
      style={{
        backgroundColor: "#f8f9fa",
        padding: "20px",
        borderRadius: "10px",
        marginRight:"35px"
      }}
    >
      <div className="container mt-4">
        <h1
          className="text-center mb-4"
          style={{ color: "#2c3e50", fontWeight: "bold" }}
        >
          Course & University Database
        </h1>

        {/* Search Bar */}
        <div className="mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search by university or program..."
            value={searchTerm}
            onChange={handleSearch}
            style={{ borderRadius: "20px", border: "2px solid #3498db" }}
          />
        </div>

        {/* Add Course Button */}
        <div className="d-flex justify-content-end mb-3">
          <button
            className="btn btn-success mb-3"
            onClick={() => setShowModal(true)}
            style={{backgroundColor:"gray" , color:"black", border:"none"}}
          >
            ➕ Add Course
          </button>
        </div>

        {/* Universities Table */}
        <div className="table-responsive">
          <table className="table table-striped table-bordered table-hover">
            <thead className="table-light">
              <tr>
                <th>University Name</th>
                <th>Program</th>
                <th>Eligibility Criteria</th>
                <th>Fee</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUniversities.map((uni) =>
                uni.programs.map((program) => (
                  <tr key={program.id}>
                    <td>{uni.name}</td>
                    <td>{program.name}</td>
                    <td>{program.eligibility}</td>
                    <td>{program.fee}</td>
                    <td className="text-nowrap">
                      <Link to={"/admission"}>
                        <button className="btn btn-light btn-sm me-1">
                          <i className="fa fa-paper-plane me-2"></i>
                        </button>
                      </Link>
                      <button
                        className="btn btn-light btn-sm me-1"
                        onClick={() => handleDelete(uni.id, program.id)}
                      >
                        🗑️
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Course Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Course</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Select University</Form.Label>
              <Form.Control
                as="select"
                value={newProgram.universityId}
                onChange={(e) =>
                  setNewProgram({
                    ...newProgram,
                    universityId: Number(e.target.value),
                  })
                }
              >
                <option value={0}>Select University</option>
                {universities.map((uni) => (
                  <option key={uni.id} value={uni.id}>
                    {uni.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Program Name</Form.Label>
              <Form.Control
                type="text"
                value={newProgram.name}
                onChange={(e) =>
                  setNewProgram({ ...newProgram, name: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Eligibility</Form.Label>
              <Form.Control
                type="text"
                value={newProgram.eligibility}
                onChange={(e) =>
                  setNewProgram({ ...newProgram, eligibility: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Fee</Form.Label>
              <Form.Control
                type="text"
                value={newProgram.fee}
                onChange={(e) =>
                  setNewProgram({ ...newProgram, fee: e.target.value })
                }
              />
            </Form.Group>
          </Form>
          <Button
            variant="link"
            onClick={() => setShowAddUniversityModal(true)}
          >
            ➕ Add New University
          </Button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddCourse} style={{backgroundColor:"gray" , color:"black", border:"none"}}>
            Add Course
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Add University Modal */}
      <Modal
        show={showAddUniversityModal}
        onHide={() => setShowAddUniversityModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New University</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>University Name</Form.Label>
              <Form.Control
                type="text"
                value={newUniversity.name}
                onChange={(e) =>
                  setNewUniversity({ ...newUniversity, name: e.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShowAddUniversityModal(false)}
          >
            Close
          </Button>
          <Button variant="primary" onClick={handleAddUniversity}>
            Add University
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CourseUniversityDatabase;
