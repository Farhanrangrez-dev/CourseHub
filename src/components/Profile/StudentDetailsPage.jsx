import React from "react";
import { Link, useParams } from "react-router-dom";

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

function StudentDetailsPage() {
  const { admissionNo } = useParams();
  const selectedStudent = students.find(
    (student) => student.admissionNo.toString() === admissionNo
  );

  if (!selectedStudent) {
    return <div>Student not found</div>;
  }

  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Student Details - {selectedStudent.name}</title>
      <link
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <div className="container"  >
        <div className="details-container">
          <div className="row">
            <div className="col-md-4 text-center">
              <div className="row mt-5">
                <div className="col-4 mb-3 align-content-center">
                  <img
                    src="https://i.ibb.co/QvjbvHzf/download.jpg"
                    className="profile-image" 
                    style={{width:80, height:100}}
                  />
                </div>
                <div className="col-8">
                  {selectedStudent.name} <br />
                  Admission No: {selectedStudent.admissionNo} <br />
                  Roll Number: {selectedStudent.rollNo}
                </div>
              </div>
              <table className="mt-3 table table-borderless table-spacing">
                <tbody>
                  <tr>
                    <td>
                      <strong>Class:</strong>
                    </td>
                    <td>{selectedStudent.class}</td>
                  </tr>
                  {/* <tr>
                    <td>
                      <strong>Section:</strong>
                    </td>
                    <td>B</td>
                  </tr> */}
                  <tr>
                    <td>
                      <strong>RTE:</strong>
                    </td>
                    <td>No</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Gender:</strong>
                    </td>
                    <td>{selectedStudent.gender}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-md-8">
              {/* <div className="navbar navbar-expand-lg navbar-light bg-light" style={{ zIndex:"0"}}>
                
                <div
                  className="collapse navbar-collapse"
                  id="navbarNavDropdown"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item active">
                      <a className="nav-link" href="#">
                        Profile
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Fees
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Exam
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        CBSE Examination
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Documents
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Timeline
                      </a>
                    </li>
                  </ul>
                </div>
               <Link to="/studentDetails">
               <button className="btn btn-dark">back</button>
               </Link>
              </div> */}
              <div className="m-3 p-4 border">
                <table className="table table-borderless table-spacing">
                  <tbody>
                    <tr>
                      <td>
                        <strong>Admission Date</strong>
                      </td>
                      <td>04/02/2024</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Date of Birth</strong>
                      </td>
                      <td>{selectedStudent.dob}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Category</strong>
                      </td>
                      <td />
                    </tr>
                    <tr>
                      <td>
                        <strong>Mobile Number</strong>
                      </td>
                      <td>{selectedStudent.guardianPhone}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Caste</strong>
                      </td>
                      <td />
                    </tr>
                    <tr>
                      <td>
                        <strong>Religion</strong>
                      </td>
                      <td />
                    </tr>
                    <tr>
                      <td>
                        <strong>Email</strong>
                      </td>
                      <td />
                    </tr>
                    <tr>
                      <td>
                        <strong>Medical History</strong>
                      </td>
                      <td />
                    </tr>
                    <tr>
                      <td>
                        <strong>Note</strong>
                      </td>
                      <td />
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="m-3 p-4 border">
                <p className="fw-bold border-bottom bg-light">Address</p>
                <table className="table table-borderless table-spacing">
                  <tbody>
                    <tr>
                      <td>
                        <strong>Current Address:</strong>
                      </td>
                      <td>[Current Address Placeholder]</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Permanent Address:</strong>
                      </td>
                      <td>[Permanent Address Placeholder]</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentDetailsPage;