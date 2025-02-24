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
  const [status, setStatus] = useState("");

  // Sample counselors list
  const counselors = ["John Smith", "Jane Doe", "Emily Davis"];

  const students = ["sanjana", "kabir singh", "Emily Davis"];

  const statuss = ["progress", "pending", "completed"];
  // Add new task
  const addTask = () => {
    if (!taskTitle || !dueDate || !counselor || !student || !status) {
      alert("Please fill all fields!");
      return;
    }

    setTasks([
      ...tasks,
      {
        title: taskTitle,
        dueDate,
        counselor,
        status,
        reminder: "",
        student,
      },
    ]);
    setTaskTitle("");
    setDueDate("");
    setCounselor("");
    setStudent("");
    setStatus("");
  };

  // Mark task as completed
  const completeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].status = "Completed";
    setTasks(updatedTasks);
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
              <option value="">Councelor Name</option>
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

          <Col md={4}>
            <Form.Select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="">Status</option>
              {statuss.map((statuss, index) => (
                <option key={index} value={statuss}>
                  {statuss}
                </option>
              ))}
            </Form.Select>
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
              <th>Name</th>
              <th>Status</th>

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
                  <td>{task.status}</td>
                  {/* <td>
                    {task.status === "Pending" && (
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => completeTask(index)}
                      >
                        Complete
                      </Button>
                    )}
                  </td> */}
                  <td>
                    <Form.Select
                      value={task.reminder}
                      onChange={(e) =>
                        handleReminderChange(index, e.target.value)
                      }
                    >
                      <option value="">Select Reminder</option>
                      <option value="Task Cancel">Task Cancel</option>
                      <option value="Upcoming ">Upcoming</option>
                      <option value=" Alert"> Alert</option>
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
