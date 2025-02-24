import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Form,
  Button,
  Container,
  Row,
  Col,
  InputGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { TagFill, TrashFill } from "react-bootstrap-icons";

const RolesManagement = () => {
  const [roles, setRoles] = useState([
    { name: "Admin", type: "System" },
    { name: "Counsellor", type: "System" },
    { name: "Student", type: "Customer" },
  ]);
  const [newRole, setNewRole] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddRole = () => {
    if (newRole.trim() !== "") {
      setRoles([...roles, { name: newRole, type: "Customer" }]);
      setNewRole("");
    }
  };

  const handleDeleteRole = (index) => {
    setRoles(roles.filter((_, i) => i !== index));
  };

  const filteredRoles = roles.filter((role) =>
    role.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container className="p-4">
      <Row>
        {/* Left Side - Role Form */}
        <Col md={4} sm={12} className="mb-3">
          <h4>Create Role</h4>
          <Form>
            <Form.Group controlId="roleName">
              <Form.Label>
                Name <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                value={newRole}
                onChange={(e) => setNewRole(e.target.value)}
                placeholder="Enter role name"
                className="mb-3"
              />
            </Form.Group>
            <Button className="w-100" variant="primary" onClick={handleAddRole} style={{backgroundColor:"gray" , color:"black", border:"none"}}>
              Save Role
            </Button>
          </Form>
        </Col>

        {/* Right Side - Role List */}
        <Col md={8} sm={12}>
          <h4>Manage Roles</h4>
          <InputGroup className="mb-4">
            <Form.Control
              placeholder="Search roles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-control-lg"
            />
          </InputGroup>

          <Table striped bordered hover responsive variant="light">
            <thead>
              <tr>
                <th>Role</th>
                <th>Type</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredRoles.map((role, index) => (
                <tr key={index}>
                  <td>{role.name}</td>
                  <td>{role.type}</td>
                  <td>
                    <Link to={`/permissions/${role.name}`}>
                      <TagFill
                        className="text-dark me-2"
                        style={{ cursor: "pointer" }}
                      />
                    </Link>

                    <TrashFill
                      className="text-danger"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleDeleteRole(index)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default RolesManagement;
