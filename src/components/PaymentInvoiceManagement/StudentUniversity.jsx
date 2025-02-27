import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import HungryUniversity from "../universityPagesform/HungryUniversity";
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

function StudentUniversity() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUniversities, setFilteredUniversities] =
    useState(universities);

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

  return (
    <div
      className="container mt-5"
      style={{
        backgroundColor: "#f8f9fa",
        padding: "20px",
        borderRadius: "10px",
        marginRight: "35px",
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

        {/* Universities Table */}
        <div className="table-responsive">
          <table className="table table-bordered table-hover">
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
                      <Link to={"/HungryUniversity"}>
                        <button type="button"className=" btn btn-primary me-2">
                         Apply
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
    </div>
  );
}

export default StudentUniversity;
