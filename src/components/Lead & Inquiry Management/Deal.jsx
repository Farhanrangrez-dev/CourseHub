import React, { useState } from "react";
import { Table, FormControl, InputGroup } from "react-bootstrap";
import { Card, Button, Row, Col, Dropdown } from "react-bootstrap";
import { Modal, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const dealsData = [
  {
    title: "Total Deals",
    amount: "$232,000.00",
    color: "text-success",
    iconBg: "bg-success",
  },
  {
    title: "This Month Total Deals",
    amount: "$0.00",
    color: "text-primary",
    iconBg: "bg-primary",
  },
  {
    title: "This Week Total Deals",
    amount: "$0.00",
    color: "text-warning",
    iconBg: "bg-warning",
  },
  {
    title: "Last 30 Days Total Deals",
    amount: "$71,000.00",
    color: "text-danger",
    iconBg: "bg-danger",
  },
];

const initialData = [
  {
    name: "Smart Agriculture Project",
    price: "$50,000.00",
    stage: "Open",
    tasks: "0",
    users: ["https://via.placeholder.com/30"],
  },
  {
    name: "Hybrid",
    price: "$40,000.00",
    stage: "Proposal",
    tasks: "4",
    users: ["https://via.placeholder.com/30", "https://via.placeholder.com/30"],
  },
  {
    name: "Stella",
    price: "$35,000.00",
    stage: "Meeting",
    tasks: "3",
    users: ["https://via.placeholder.com/30", "https://via.placeholder.com/30"],
  },
  {
    name: "Refocus",
    price: "$30,000.00",
    stage: "Close",
    tasks: "3",
    users: ["https://via.placeholder.com/30", "https://via.placeholder.com/30"],
  },
  {
    name: "Whitecoat",
    price: "$25,000.00",
    stage: "Initial Contact",
    tasks: "4",
    users: ["https://via.placeholder.com/30", "https://via.placeholder.com/30"],
  },
];

const Deal = () => {
  const [dealName, setDealName] = useState("");
  const [tasks, setTasks] = useState("");
  const [stage, setStage] = useState("");
  const [price, setPrice] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState(initialData);
  const [editIndex, setEditIndex] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = data.filter((item) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleShowEditModal = (index) => {
    setEditIndex(index);
    setDealName(data[index].name);
    setStage(data[index].stage);
    setTasks(data[index].tasks);
    console.log(data[index].tasks);
    setPrice(parseFloat(data[index].price.replace("$", "").replace(",", "")));
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setEditIndex(null);
    setDealName("");
    setStage("");
    setPrice(0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDeal = {
      name: dealName,
      price: `$${price}.00`,
      stage: stage,
      tasks: tasks,
      users: ["https://via.placeholder.com/30"],
    };
    setData([...data, newDeal]);
    setDealName("");
    setStage("");
    setPrice(0);
    handleClose();
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const updatedData = [...data];
    updatedData[editIndex] = {
      ...updatedData[editIndex],
      name: dealName,
      price: `$${price}.00`,
      stage: stage,
      tasks: tasks,
    };
    setData(updatedData);
    handleCloseEditModal();
  };

  const handleDelete = (index) => {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
  };

  return (
    <>
      <div className="container p-3"  >
        <h4 className="fw-bold">Manage Deals - Plan</h4>
        <div className="d-flex justify-content-between align-items-center flex-wrap">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link
                  to="/dashboard"
                  className="text-success text-decoration-none"
                >
                  Home
                </Link>
              </li>
              <Link
                to={"/contract"}
                className="breadcrumb-item active text-decoration-none"
                aria-current="page"
              >
                Contact
              </Link>
            </ol>
          </nav>
          <Button
           style={{backgroundColor:"gray" , color:"black", border:"none"}}
            onClick={handleShow}
          >
            + Add
          </Button>
        </div>
        <br />
        <Row className="mt-3">
          {dealsData.map((deal, index) => (
            <Col key={index} md={3} sm={6} xs={12} className="mb-3">
              <Card className="shadow-sm border-0">
                <Card.Body className="d-flex justify-content-between align-items-center">
                  <div>
                    <Card.Title className="fw-bold">{deal.title}</Card.Title>
                    <h4 className={`fw-bold ${deal.color}`}>{deal.amount}</h4>
                  </div>
                  <div className={`p-3 rounded-circle ${deal.iconBg}`}>🚀</div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <InputGroup className="mb-3 w-50">
          <FormControl
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </InputGroup>

        <Table responsive bordered hover className="table text-center">
          <thead className="table-light">
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Stage</th>
              <th>Tasks</th>
              <th>Users</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, index) => (
              <tr key={index}>
                <td>{row.name}</td>
                <td>{row.price}</td>
                <td>{row.stage}</td>
                <td>{row.tasks}</td>
                <td>
                  {row.users.map((user, i) => (
                    <img
                      key={i}
                      src={user}
                      alt="User"
                      className="rounded-circle"
                      width="30"
                      height="30"
                    />
                  ))}
                </td>
                <td className="text-nowrap">
                  <Button className="btn btn-light btn-sm me-1">👁</Button>
                  <Button
                    size="sm"
                    className="btn btn-light btn-sm me-1"
                    onClick={() => handleShowEditModal(index)}
                  >
                    ✏️
                  </Button>
                  <Button
                    size="sm"
                    className="btn btn-light btn-sm me-1"
                    onClick={() => handleDelete(index)}
                  >
                    🗑️
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Modal show={showModal} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Create Deal</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Deal Name"
                  value={dealName}
                  onChange={(e) => setDealName(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Stage</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Stage"
                  value={stage}
                  onChange={(e) => setStage(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Tasks</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Tasks"
                  value={tasks}
                  onChange={(e) => setTasks(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </Form.Group>

              <div className="d-flex justify-content-end">
                <Button
                  variant="secondary"
                  onClick={handleClose}
                  className="me-2"
                >
                  Cancel
                </Button>
                <Button type="submit" variant="success">
                  Create
                </Button>
              </div>
            </Form>
          </Modal.Body>
        </Modal>

        <Modal show={showEditModal} onHide={handleCloseEditModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>Edit Deal</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleEditSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Deal Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Deal Name"
                  value={dealName}
                  onChange={(e) => setDealName(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Stage</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Stage"
                  value={stage}
                  onChange={(e) => setStage(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Tasks</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Tasks"
                  value={tasks}
                  onChange={(e) => setTasks(e.target.value)}
                  required
                />
              </Form.Group>

              <div className="d-flex justify-content-end">
                <Button
                  variant="secondary"
                  onClick={handleCloseEditModal}
                  className="me-2"
                >
                  Cancel
                </Button>
                <Button type="submit" variant="success">
                  Save Changes
                </Button>
              </div>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default Deal;
