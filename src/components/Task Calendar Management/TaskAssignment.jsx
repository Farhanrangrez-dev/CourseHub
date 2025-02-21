import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const TaskAssignment = ({ onTaskAssign, onLeadAssign }) => {
  const [task, setTask] = useState("");
  const [counselor, setCounselor] = useState("");
  const [date, setDate] = useState("");
  const [lead, setLead] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [tasks, setTasks] = useState([
    {
      task: "Task 1",
      counselor: "Counselor 1",
      lead: "Lead 1",
      date: "2025-02-20",
    },
    {
      task: "Task 2",
      counselor: "Counselor 2",
      lead: "Lead 2",
      date: "2025-02-21",
    },
    {
      task: "Task 3",
      counselor: "Counselor 3",
      lead: "Lead 3",
      date: "2025-02-22",
    },
  ]);

  const leads = [
    { name: "Lead 1", email: "lead1@example.com" },
    { name: "Lead 2", email: "lead2@example.com" },
    { name: "Lead 3", email: "lead3@example.com" },
  ];

  const counselors = [
    { name: "Counselor 1", email: "counselor1@example.com" },
    { name: "Counselor 2", email: "counselor2@example.com" },
    { name: "Counselor 3", email: "counselor3@example.com" },
  ];

  const handleAssignTask = () => {
    if (task && counselor && date && lead) {
      const newTask = { task, counselor, date, lead };
      setTasks([...tasks, newTask]); // Update tasks state
      onTaskAssign([...tasks, newTask]); // Pass updated tasks to parent
      onLeadAssign({ lead, counselor });

      setTask("");
      setCounselor("");
      setDate("");
      setLead("");
      setShowModal(false);
    }
  };

  const handleEditTask = (index) => {
    const taskToEdit = tasks[index];
    setTask(taskToEdit.task);
    setCounselor(taskToEdit.counselor);
    setDate(taskToEdit.date);
    setLead(taskToEdit.lead);
    setEditingTask(index);
    setShowModal(true);
  };

  const handleSaveEdit = () => {
    const updatedTasks = tasks.map((t, index) =>
      index === editingTask ? { task, counselor, date, lead } : t
    );
    setTasks(updatedTasks);
    onTaskAssign(updatedTasks);

    setTask("");
    setCounselor("");
    setDate("");
    setLead("");
    setEditingTask(null);
    setShowModal(false);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    onTaskAssign(updatedTasks);
  };

  return (
    <div className="container p-3"  >
      <h4 className="fw-bold mb-4">Assign Tasks</h4>
      <div className="text-end mb-3">
        <button className="btn btn-primary" onClick={() => setShowModal(true)} style={{backgroundColor:"gray" , color:"black", border:"none"}}>
          Add Task
        </button>
      </div>

      <table className="table mt-3">
        <thead>
          <tr>
            <th>Counselor</th>
            <th>Lead</th>
            <th>Date</th>
            <th>Task</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((t, index) => (
            <tr key={index}>
              <td>{t.counselor}</td>
              <td>{t.lead}</td>
              <td>{t.date}</td>
              <td>{t.task}</td>
              <td>
                <button
                  className="btn btn-warning btn-sm"
                  onClick={() => handleEditTask(index)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm ms-2"
                  onClick={() => handleDeleteTask(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <div
          className="modal show"
          style={{
            display: "block",
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1050,
          }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {editingTask === null ? "Assign Task" : "Edit Task"}
                </h5>
                <button
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <div className="row mb-3">
                  <div className="col-md-4">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter task..."
                      value={task}
                      onChange={(e) => setTask(e.target.value)}
                    />
                  </div>
                  <div className="col-md-4">
                    <select
                      className="form-control"
                      value={counselor}
                      onChange={(e) => setCounselor(e.target.value)}
                    >
                      <option value="">Select Counselor</option>
                      {counselors.map((c, index) => (
                        <option key={index} value={c.name}>
                          {c.name} ({c.email})
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-4">
                    <select
                      className="form-control"
                      value={lead}
                      onChange={(e) => setLead(e.target.value)}
                    >
                      <option value="">Select Lead</option>
                      {leads.map((l, index) => (
                        <option key={index} value={l.name}>
                          {l.name} ({l.email})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-6">
                    <input
                      type="date"
                      className="form-control"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
                <button
                  className="btn btn-success"
                  onClick={
                    editingTask === null ? handleAssignTask : handleSaveEdit
                  }
                >
                  {editingTask === null ? "Assign Task" : "Save Changes"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskAssignment;
