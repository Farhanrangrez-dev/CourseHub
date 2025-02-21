import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Table,
  Badge,
  Button,
  Modal,
  Form,
  Tabs,
  Tab,
  Alert,
} from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  FaFileInvoice,
  FaMoneyBillWave,
  FaBell,
  FaEnvelope,
  FaFilter,
  FaEdit,
  FaTrash,
  FaDownload,
} from "react-icons/fa";

const Payments = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState("payments");
  const [modalMode, setModalMode] = useState("add");
  const [selectedPayment, setSelectedPayment] = useState(null);

  // Sample data
  const [payments, setPayments] = useState([
    {
      id: "INV-2025-001",
      date: "2025-02-15",
      studentName: "Alice Johnson",
      course: "Computer Science",
      type: "Application Fee",
      amount: 500,
      amountPaid: 500,
      paymentMethod: "Razorpay",
      status: "Paid",
      dueDate: "2025-02-20",
    },
    {
      id: "INV-2025-002",
      date: "2025-02-15",
      studentName: "Bob Wilson",
      course: "Business Administration",
      type: "Tuition Fee",
      amount: 5000,
      amountPaid: 2500,
      paymentMethod: "PayPal",
      status: "Partial",
      dueDate: "2025-03-01",
    },
  ]);

  const validationSchema = Yup.object({
    studentName: Yup.string().required("Required"),
    course: Yup.string().required("Required"),
    type: Yup.string().required("Required"),
    amount: Yup.number().required("Required").min(0, "Must be greater than 0"),
    amountPaid: Yup.number()
      .required("Required")
      .min(0, "Must be greater than 0"),
    paymentMethod: Yup.string().required("Required"),
    dueDate: Yup.date().required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      studentName: "",
      course: "",
      type: "",
      amount: "",
      amountPaid: "",
      paymentMethod: "",
      dueDate: "",
      status: "Pending",
    },
    validationSchema,
    onSubmit: (values) => {
      if (modalMode === "add") {
        const newPayment = {
          id: `INV-2025-${String(payments.length + 1).padStart(3, "0")}`,
          date: new Date().toISOString().split("T")[0],
          ...values,
          status:
            values.amount === values.amountPaid
              ? "Paid"
              : values.amountPaid > 0
              ? "Partial"
              : "Pending",
        };
        setPayments([...payments, newPayment]);
      } else {
        const updatedPayments = payments.map((payment) =>
          payment.id === selectedPayment.id
            ? {
                ...payment,
                ...values,
                status:
                  values.amount === values.amountPaid
                    ? "Paid"
                    : values.amountPaid > 0
                    ? "Partial"
                    : "Pending",
              }
            : payment
        );
        setPayments(updatedPayments);
      }
      setShowModal(false);
      formik.resetForm();
    },
  });

  const handleEdit = (payment) => {
    setSelectedPayment(payment);
    setModalMode("edit");
    formik.setValues(payment);
    setShowModal(true);
  };

  const handleDelete = (paymentId) => {
    if (
      window.confirm("Are you sure you want to delete this payment record?")
    ) {
      setPayments(payments.filter((payment) => payment.id !== paymentId));
    }
  };

  const handleAddNew = () => {
    setModalMode("add");
    setSelectedPayment(null);
    formik.resetForm();
    setShowModal(true);
  };

  const getStatusBadge = (status) => {
    const variants = {
      Paid: "success",
      Partial: "warning",
      Pending: "danger",
    };
    return <Badge bg={variants[status]}>{status}</Badge>;
  };

  const handleSendReminder = (payment) => {
    // Mock function for sending payment reminder
    alert(
      `Payment reminder sent to ${payment.studentName} for invoice ${payment.id}`
    );
  };

  const handleGenerateInvoice = (payment) => {
    // Mock function for generating invoice
    alert(`Invoice generated for ${payment.id}`);
  };

  return (
    <Container className="p-3">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="fw-bold mb-4">Payment Management</h4>
        <Button variant="primary" onClick={handleAddNew} style={{backgroundColor:"gray" , color:"black", border:"none"}}>
          <FaFileInvoice className="me-2" /> Create New Payment
        </Button>
      </div>

      <Tabs
        activeKey={activeTab}
        onSelect={(k) => setActiveTab(k)}
        className="mb-4"
      >
        <Tab eventKey="payments" title="Payments Overview">
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="d-flex gap-2">
                  <Button variant="outline-primary" size="sm">
                    <FaMoneyBillWave className="me-2" /> All Payments
                  </Button>
                  <Button variant="outline-warning" size="sm">
                    <FaBell className="me-2" /> Pending
                  </Button>
                </div>
                <Button variant="outline-secondary" size="sm">
                  <FaFilter className="me-2" /> Filter
                </Button>
              </div>

              <div className="table-responsive">
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th>Invoice ID</th>
                      <th>Date</th>
                      <th>Student</th>
                      <th>Course</th>
                      <th>Type</th>
                      <th>Amount</th>
                      <th>Paid</th>
                      <th>Method</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {payments.map((payment) => (
                      <tr key={payment.id}>
                        <td>{payment.id}</td>
                        <td>{payment.date}</td>
                        <td>{payment.studentName}</td>
                        <td>{payment.course}</td>
                        <td>{payment.type}</td>
                        <td>${payment.amount}</td>
                        <td>${payment.amountPaid}</td>
                        <td>{payment.paymentMethod}</td>
                        <td>{getStatusBadge(payment.status)}</td>
                        <td>
                          <div className="d-flex gap-2">
                            <Button
                              variant="link"
                              className="p-0"
                              onClick={() => handleEdit(payment)}
                              title="Edit"
                            >
                              <FaEdit className="text-primary" />
                            </Button>
                            <Button
                              variant="link"
                              className="p-0"
                              onClick={() => handleDelete(payment.id)}
                              title="Delete"
                            >
                              <FaTrash className="text-danger" />
                            </Button>
                            <Button
                              variant="link"
                              className="p-0"
                              onClick={() => handleGenerateInvoice(payment)}
                              title="Generate Invoice"
                            >
                              <FaDownload className="text-success" />
                            </Button>
                            {payment.status !== "Paid" && (
                              <Button
                                variant="link"
                                className="p-0"
                                onClick={() => handleSendReminder(payment)}
                                title="Send Reminder"
                              >
                                <FaEnvelope className="text-warning" />
                              </Button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
        </Tab>
        <Tab eventKey="analytics" title="Payment Analytics">
          <Card>
            <Card.Body>
              <h5>Payment Statistics</h5>
              <Row className="g-4 mb-4">
                <Col md={3} sm={6}>
                  <Card className="bg-primary text-white">
                    <Card.Body>
                      <h6>Total Collected</h6>
                      <h3>
                        ${payments.reduce((sum, p) => sum + p.amountPaid, 0)}
                      </h3>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={3} sm={6}>
                  <Card className="bg-warning text-white">
                    <Card.Body>
                      <h6>Pending Amount</h6>
                      <h3>
                        $
                        {payments.reduce(
                          (sum, p) => sum + (p.amount - p.amountPaid),
                          0
                        )}
                      </h3>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={3} sm={6}>
                  <Card className="bg-success text-white">
                    <Card.Body>
                      <h6>Paid Invoices</h6>
                      <h3>
                        {payments.filter((p) => p.status === "Paid").length}
                      </h3>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={3} sm={6}>
                  <Card className="bg-danger text-white">
                    <Card.Body>
                      <h6>Pending Invoices</h6>
                      <h3>
                        {payments.filter((p) => p.status !== "Paid").length}
                      </h3>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Tab>
      </Tabs>

      {/* Add/Edit Payment Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>
            {modalMode === "add" ? "Create New Payment" : "Edit Payment"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={formik.handleSubmit}>
            <Row>
              <Col md={6} sm={12}>
                <Form.Group className="mb-3">
                  <Form.Label>Student Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="studentName"
                    value={formik.values.studentName}
                    onChange={formik.handleChange}
                    isInvalid={
                      formik.touched.studentName && formik.errors.studentName
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.studentName}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6} sm={12}>
                <Form.Group className="mb-3">
                  <Form.Label>Course</Form.Label>
                  <Form.Control
                    type="text"
                    name="course"
                    value={formik.values.course}
                    onChange={formik.handleChange}
                    isInvalid={formik.touched.course && formik.errors.course}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.course}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6} sm={12}>
                <Form.Group className="mb-3">
                  <Form.Label>Payment Type</Form.Label>
                  <Form.Select
                    name="type"
                    value={formik.values.type}
                    onChange={formik.handleChange}
                    isInvalid={formik.touched.type && formik.errors.type}
                  >
                    <option value="">Select Type</option>
                    <option value="Application Fee">Application Fee</option>
                    <option value="Tuition Fee">Tuition Fee</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.type}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6} sm={12}>
                <Form.Group className="mb-3">
                  <Form.Label>Payment Method</Form.Label>
                  <Form.Select
                    name="paymentMethod"
                    value={formik.values.paymentMethod}
                    onChange={formik.handleChange}
                    isInvalid={
                      formik.touched.paymentMethod &&
                      formik.errors.paymentMethod
                    }
                  >
                    <option value="">Select Method</option>
                    <option value="Razorpay">Razorpay</option>
                    <option value="PayPal">PayPal</option>
                    <option value="Stripe">Stripe</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.paymentMethod}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6} sm={12}>
                <Form.Group className="mb-3">
                  <Form.Label>Total Amount</Form.Label>
                  <Form.Control
                    type="number"
                    name="amount"
                    value={formik.values.amount}
                    onChange={formik.handleChange}
                    isInvalid={formik.touched.amount && formik.errors.amount}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.amount}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6} sm={12}>
                <Form.Group className="mb-3">
                  <Form.Label>Amount Paid</Form.Label>
                  <Form.Control
                    type="number"
                    name="amountPaid"
                    value={formik.values.amountPaid}
                    onChange={formik.handleChange}
                    isInvalid={
                      formik.touched.amountPaid && formik.errors.amountPaid
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.amountPaid}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6} sm={12}>
                <Form.Group className="mb-3">
                  <Form.Label>Due Date</Form.Label>

                  
                  <Form.Control
                    type="date"
                    name="dueDate"
                    value={formik.values.dueDate}
                    onChange={formik.handleChange}
                    isInvalid={formik.touched.dueDate && formik.errors.dueDate}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.dueDate}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            <div className="d-flex justify-content-end gap-2">
              <Button variant="secondary" onClick={() => setShowModal(false)}>
                Cancel
              </Button>
              <Button variant="primary" type="submit">
                {modalMode === "add" ? "Create Payment" : "Update Payment"}
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Payments;
