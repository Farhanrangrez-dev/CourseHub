import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Task Reminders Component
const TaskReminders = ({ tasks }) => {
  const [reminders, setReminders] = useState([]);
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  useEffect(() => {
    // Filter tasks to show only upcoming ones
    const upcomingTasks = tasks.filter((task) => {
      const taskDate = new Date(task.date);
      const today = new Date();
      return taskDate >= today;
    });
    setReminders(upcomingTasks);
  }, [tasks]);

  // Function to handle enabling/disabling notifications
  const handleNotificationToggle = () => {
    setNotificationsEnabled((prev) => !prev);
  };

  // Function to format dates into a readable format
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="container p-3">
      <h4 className="fw-bold mb-4">Task Reminders</h4>
      <p>Get notified for upcoming tasks.</p>

      <ul className="list-group">
        {reminders.length > 0 ? (
          reminders.map((task, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between"
            >
              <div>
                <strong>{task.task}</strong> - {task.counselor}
                <br />
                <small>{formatDate(task.date)}</small>
              </div>
              {notificationsEnabled && (
                <span className="badge bg-primary">Reminder Enabled</span>
              )}
            </li>
          ))
        ) : (
          <li className="list-group-item">No upcoming tasks</li>
        )}
      </ul>

      <div className="d-flex justify-content-between align-items-center mt-2">
        <button
          className={`btn ${
            notificationsEnabled ? "btn-danger" : "btn-success"
          }`}
          onClick={handleNotificationToggle}
          style={{backgroundColor:"gray" , color:"black", border:"none"}}
        >
          {notificationsEnabled
            ? "Disable Notifications"
            : "Enable Notifications"}
        </button>
        <span className="text-muted">
          {notificationsEnabled
            ? "You will be notified for upcoming tasks"
            : ""}
        </span>
      </div>
    </div>
  );
};

export default TaskReminders;
