import React, { useState } from "react";
import {
  Container,
  Table,
  Button,
  Form,
  Row,
  Col,
  Card,
} from "react-bootstrap";

const TaskManagement = () => {
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [counselor, setCounselor] = useState("");
  const [student, setStudent] = useState("");
  const [description, setDescription] = useState("");
  const [descriptionError, setDescriptionError] = useState("");

  // Sample counselors list
  const counselors = ["John Smith", "Jane Doe", "Emily Davis"];
  const students = ["sanjana", "kabir singh", "Emily Davis"];

  // Add new task
  const addTask = () => {
    if (!taskTitle || !dueDate || !counselor || !student || !description) {
      alert("Please fill all fields!");
      return;
    }

    if (description.length > 200) {
      setDescriptionError("Description cannot exceed 200 characters.");
      return;
    }

    setTasks([
      ...tasks,
      {
        title: taskTitle,
        dueDate,
        counselor,
        description,
        reminder: "",
        student,
      },
    ]);

    // Reset form fields
    setTaskTitle("");
    setDueDate("");
    setCounselor("");
    setStudent("");
    setDescription("");
    setDescriptionError("");
  };

  // Handle reminder selection
  const handleReminderChange = (index, value) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].reminder = value;
    setTasks(updatedTasks);
  };

  return (
    <Container className="mt-4">
      {/* Task Entry Form */}
      <Card className="p-4 shadow-sm mb-4" style={{ background: "#f0f0ff" }}>
        <h4 className="mb-3">Task Entry Form</h4>
        <Row className="g-2">
          <Col md={4}>
            <Form.Control
              type="text"
              placeholder="Task Title"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
            />
          </Col>
          <Col md={4}>
            <Form.Control
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </Col>
          <Col md={4}>
            <Form.Select
              value={counselor}
              onChange={(e) => setCounselor(e.target.value)}
            >
              <option value="">Counselor Name</option>
              {counselors.map((name, index) => (
                <option key={index} value={name}>
                  {name}
                </option>
              ))}
            </Form.Select>
          </Col>

          <Col md={4}>
            <Form.Select
              value={student}
              onChange={(e) => setStudent(e.target.value)}
            >
              <option value="">Student Name</option>
              {students.map((student, index) => (
                <option key={index} value={student}>
                  {student}
                </option>
              ))}
            </Form.Select>
          </Col>
          <Col md={8}>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Description"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
                if (e.target.value.length > 200) {
                  setDescriptionError("Description cannot exceed 200 characters.");
                } else {
                  setDescriptionError("");
                }
              }}
            />
            <small className="text-muted">
              {description.length}/200 characters
            </small>
            {descriptionError && (
              <small className="text-danger">{descriptionError}</small>
            )}
          </Col>
        </Row>
        <Button className="mt-3" variant="primary" onClick={addTask}>
          Add Task
        </Button>
      </Card>

      {/* Task List */}
      <h4>Task List</h4>
      <Card className="p-3 shadow-sm">
        <Table bordered hover responsive>
          <thead>
            <tr>
              <th>Task Title</th>
              <th>Due Date</th>
              <th>Counselor Name</th>
              <th>Student Name</th>
              <th>Description</th>
              <th>Reminder</th>
            </tr>
          </thead>
          <tbody>
            {tasks.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center">
                  No tasks added.
                </td>
              </tr>
            ) : (
              tasks.map((task, index) => (
                <tr key={index}>
                  <td>{task.title}</td>
                  <td>{task.dueDate}</td>
                  <td>{task.counselor}</td>
                  <td>{task.student}</td>
                  <td>{task.description}</td>
                  <td>
                    <Form.Select
                      value={task.reminder}
                      onChange={(e) =>
                        handleReminderChange(index, e.target.value)
                      }
                    >
                      <option value="">Select Reminder</option>
                      <option value="Task Cancel">Task Cancel</option>
                      <option value="Upcoming">Upcoming</option>
                      <option value="Alert">Alert</option>
                    </Form.Select>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </Card>
    </Container>
  );
};

export default TaskManagement;