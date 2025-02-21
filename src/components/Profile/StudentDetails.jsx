import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { useState } from "react";
import { Link } from "react-router-dom";

const StudentDetails = () => {
  const [show, setShow] = useState(false); // State for modal visibility
  const [selectedStudent, setSelectedStudent] = useState(null); // State for selected student
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const [selectedClass, setSelectedClass] = useState(""); // State for selected class
  const [selectedSection, setSelectedSection] = useState(""); // State for selected section

  // Sample student data
  const students = [
    {
      admissionNo: 1001,
      name: "Hudson",
      rollNo: "0201",
      class: "Class 1(A)",
      fatherName: "Emrys",
      dob: "02/06/2019",
      gender: "Male",
      category: "General",
      mobile: "16514840184",
    },
    {
      admissionNo: 1020,
      name: "Marlie",
      rollNo: "0204",
      class: "Class 1(B)",
      fatherName: "Lester",
      dob: "05/22/2019",
      gender: "Female",
      category: "General",
      mobile: "6595084801",
    },
    {
      admissionNo: 120036,
      name: "Ayan Desai",
      rollNo: "23620",
      class: "Class 1(C)",
      fatherName: "Abhinand",
      dob: "10/15/2015",
      gender: "Male",
      category: "General",
      mobile: "9067875674",
    },
    {
      admissionNo: 2152,
      name: "Kaylen",
      rollNo: "0205",
      class: "Class 2(A)",
      fatherName: "Lyndon",
      dob: "06/19/2019",
      gender: "Female",
      category: "General",
      mobile: "54180185420",
    },
    {
      admissionNo: 7663,
      name: "Paul S. Bealer",
      rollNo: "6230",
      class: "Class 2(B)",
      fatherName: "McMahon",
      dob: "08/13/2005",
      gender: "Male",
      category: "General",
      mobile: "789067867",
    },
    {
      admissionNo: 96302,
      name: "Jacob Bethell",
      rollNo: "221002",
      class: "Class 2(C)",
      fatherName: "Brydon",
      dob: "08/19/2016",
      gender: "Male",
      category: "General",
      mobile: "065758878",
    },
    {
      admissionNo: 96302,
      name: "Jacob Bethell",
      rollNo: "221002",
      class: "Class 3(A)",
      fatherName: "Brydon",
      dob: "08/19/2016",
      gender: "Male",
      category: "General",
      mobile: "065758878",
    },
    {
      admissionNo: 96302,
      name: "Jacob Bethell",
      rollNo: "221002",
      class: "Class 3(B)",
      fatherName: "Brydon",
      dob: "08/19/2016",
      gender: "Male",
      category: "General",
      mobile: "065758878",
    },
    {
      admissionNo: 96302,
      name: "Jacob Bethell",
      rollNo: "221002",
      class: "Class 3(C)",
      fatherName: "Brydon",
      dob: "08/19/2016",
      gender: "Male",
      category: "General",
      mobile: "065758878",
    },
  ];

  // Function to handle search
  const filteredStudents = students.filter((student) => {
    const matchesSearchQuery =
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.rollNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.admissionNo.toString().includes(searchQuery);

    const matchesClass = selectedClass
      ? student.class.includes(selectedClass)
      : true;
    const matchesSection = selectedSection
      ? student.class.includes(`(${selectedSection})`)
      : true;

    return matchesSearchQuery && matchesClass && matchesSection;
  });

  // Function to handle modal show
  const handleShow = (student) => {
    setSelectedStudent(student);
    setShow(true);
  };

  // Function to handle modal close
  const handleClose = () => setShow(false);

  return (
    <div className="container pt-3">
      <h4 className="fw-bold mb-4">Select Criteria</h4>
      <div className="row g-2 align-items-center">
        <div className="col-md-3">
          <label className="form-label">
            Class <span className="text-danger">*</span>
          </label>
          <select
            className="form-select"
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
          >
            <option value="">All Classes</option>
            <option>Class 1</option>
            <option>Class 2</option>
            <option>Class 3</option>
          </select>
        </div>

        <div className="col-md-3">
          <label className="form-label">Section</label>
          <select
            className="form-select"
            value={selectedSection}
            onChange={(e) => setSelectedSection(e.target.value)}
          >
            <option value="">All Sections</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
          </select>
        </div>

        <div className="col-md-4">
          <label className="form-label">Search By Keyword</label>
          <input
            type="text"
            className="form-control"
            placeholder="Search By Student Name, Roll Number, Enroll Number, etc."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="col-md-2 d-flex">
          <button className="btn btn-secondary mt-4 w-100" style={{backgroundColor:"gray" , color:"black", border:"none"}}>
            <i className="fas fa-search"></i> Search
          </button>
        </div>
      </div>

      <ul className="nav nav-tabs mt-4">
        <li className="nav-item">
          <Link className="nav-link active" to="/studentDetails">
            List View
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/manaDetails">
            Details View
          </Link>
        </li>
      </ul>

      <input
        type="text"
        className="form-control my-3"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <div className="table-responsive">
        <table className="table table-striped table-bordered text-center">
          <thead className="table-light text-nowrap">
            <tr>
              <th>Student Name</th>
              <th>Admission No</th>
              <th>Roll No.</th>
              <th>Class</th>
              <th>Father Name</th>
              <th>Date of Birth</th>
              <th>Gender</th>
              <th>Category</th>
              <th>Mobile Number</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student, index) => (
              <tr key={index} className="text-nowrap">
                <td>
                  <Link
                    to={{
                      pathname: `/studentProfile/${student.admissionNo}`,
                      state: { selectedStudent: student },
                    }}
                    className="text-decoration-none text-nowrap"
                  >
                    {student.name}
                  </Link>
                </td>
                <td>{student.admissionNo}</td>
                <td>{student.rollNo}</td>
                <td>{student.class}</td>
                <td>{student.fatherName}</td>
                <td>{student.dob}</td>
                <td>{student.gender}</td>
                <td>{student.category}</td>
                <td>{student.mobile}</td>
                <td>
                  <button
                    className="btn btn-light btn-sm me-1"
                    onClick={() => handleShow(student)}
                  >
                    ☰
                  </button>
                  <button className="btn btn-light btn-sm me-1">✎</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for student details (if needed) */}
      {selectedStudent && (
        <div
          className={`modal ${show ? "show" : ""}`}
          style={{ display: show ? "block" : "none" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {selectedStudent.name}'s Details
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleClose}
                ></button>
              </div>
              <div className="modal-body">
                <p>Admission No: {selectedStudent.admissionNo}</p>
                <p>Roll No: {selectedStudent.rollNo}</p>
                <p>Class: {selectedStudent.class}</p>
                <p>Father's Name: {selectedStudent.fatherName}</p>
                <p>Date of Birth: {selectedStudent.dob}</p>
                <p>Gender: {selectedStudent.gender}</p>
                <p>Category: {selectedStudent.category}</p>
                <p>Mobile: {selectedStudent.mobile}</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleClose}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentDetails;
