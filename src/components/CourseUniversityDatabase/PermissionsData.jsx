import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Form, Container } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";

const permissionsData = [
  {
    module: "Dashboard",
    features: ["Dashboard"],
  },
  {
    module: "Leads & inquiries",
    features: ["Contact", "Inquiry", "Lead", "Deal"],   
  },
  {
    module: "Student Managenement",
    features: ["Student Details", "Student Admission", "Communication"],
  },
  {
    module: "Appication",
    features: [
      "Application Tracker",
      "Document Upload",
      "University Details",
      "Admission Decision",
    ],
  },
  {
    module: "Communication",
    features: ["Follow Up", "Reminder"],
  },
  {
    module: "Tasks Management",
    features: ["Counselor", "Tasks", "Reminder"],
  },
  {
    module: "Roles Permission",
    features: ["Roles Permission"],
  },
  {
    module: "Reports & Analytics",
    features: ["Reports & Analytics"],
  },
  {
    module: "Payments & Invoices",
    features: ["Payments & Invoices"],
  },
  {
    module: "User Management",
    features: ["User Management"],
  },
];

const PermissionsTable = () => {
  const { role } = useParams(); // Get the role from URL
  const [permissions, setPermissions] = useState(
    permissionsData.map((module) => ({
      ...module,
      features: module.features.map((feature) => ({
        name: feature,
        view: true,
        add: true,
        edit: true,
        delete: true,
      })),
    }))
  );

  const handleCheckboxChange = (moduleIndex, featureIndex, permissionType) => {
    const updatedPermissions = [...permissions];
    updatedPermissions[moduleIndex].features[featureIndex][
      permissionType
    ] = !updatedPermissions[moduleIndex].features[featureIndex][permissionType];
    setPermissions(updatedPermissions);
  };

  return (
    <Container className="mt-4">
      <div className="d-flex justify-content-between mb-3">
        <h2>Assign Permission for {role}</h2>
        <Link to="/RolesManagement" className="btn btn-secondary mb-3">
          Back to Roles
        </Link>
      </div>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Module</th>
            <th>Feature</th>
            <th>View</th>
            <th>Add</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {permissions.map((module, moduleIndex) => (
            <React.Fragment key={moduleIndex}>
              <tr>
                <td rowSpan={module.features.length + 1}>
                  <strong>{module.module}</strong>
                </td>
              </tr>
              {module.features.map((feature, featureIndex) => (
                <tr key={featureIndex}>
                  <td>{feature.name}</td>
                  {["view", "add", "edit", "delete"].map((permType) => (
                    <td key={permType}>
                      <Form.Check
                        type="checkbox"
                        checked={feature[permType]}
                        onChange={() =>
                          handleCheckboxChange(
                            moduleIndex,
                            featureIndex,
                            permType
                          )
                        }
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </Table>
      <div className="d-flex justify-content-end">
        <Link className="btn btn-primary mb-3" style={{backgroundColor:"gray" , color:"black", border:"none"}}>Save</Link>
      </div>
    </Container>
  );
};

export default PermissionsTable;
