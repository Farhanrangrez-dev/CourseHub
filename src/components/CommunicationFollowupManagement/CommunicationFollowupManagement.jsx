import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaEnvelope } from "react-icons/fa";
import EmailModal from "./EmailModel";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

const CommunicationFollowupManagement = () => {
  const sendEmail = (email) => {
    alert(`Email sent to: ${email}`); // ✅ Corrected Template Literal
  };

  const sendSMS = (phone) => {
    alert(`SMS sent to: ${phone}`); // ✅ Corrected
  };

  const sendWhatsApp = (phone) => {
    alert(`SMS sent to whatsapp: ${phone}`);
  };

  const openChat = () => {
    alert("Opening chat support...");
  };

  return (
    <div className="container mt-5"  >
      <h2 className="text-center mb-4">📩 Communication Follow-Up</h2>

      <div className="table-responsive">
        <table className="table table-striped table-bordered table-hover">
          <thead className="table ">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe</td>
              <td>john@example.com</td>
              <td>+1234567890</td>
              <td className="text-nowrap">
                <button
                  className="btn btn-primary me-2"
                  data-bs-toggle="modal"
                  data-bs-target="#emailModal"
                  style={{ background: "rgb(38 29 167)" }}
                >
                  <FaEnvelope className="me-2" />
                  Email
                </button>
                <EmailModal></EmailModal>
                <Link to={"/chatbox"} className="btn btn-warning me-2">
                  💬 Chat
                </Link>
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-success px-4 py-1"
                >
                  <FaWhatsapp size={30} />
                </a>
              </td>
            </tr>
            <tr>
              <td>John Doe</td>
              <td>john@example.com</td>
              <td>+1234567890</td>
              <td>
                <button
                  className="btn btn-primary me-2"
                  data-bs-toggle="modal"
                  data-bs-target="#emailModal"
                  style={{ background: "rgb(38 29 167)" }}
                >
                  <FaEnvelope className="me-2" />
                  Email
                </button>
                <EmailModal></EmailModal>
                <Link to={"/chatbox"} className="btn btn-warning me-2">
                  💬 Chat
                </Link>
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-success px-4 py-1"
                >
                  <FaWhatsapp size={30} />
                </a>
              </td>
            </tr>
            <tr>
              <td>John Doe</td>
              <td>john@example.com</td>
              <td>+1234567890</td>
              <td>
                <button
                  className="btn btn-primary me-2"
                  data-bs-toggle="modal"
                  data-bs-target="#emailModal"
                  style={{ background: "rgb(38 29 167)" }}
                >
                  <FaEnvelope className="me-2" />
                  Email
                </button>
                <EmailModal></EmailModal>
                <Link to={"/chatbox"} className="btn btn-warning me-2">
                  💬 Chat
                </Link>
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-success px-4 py-1"
                >
                  <FaWhatsapp size={30} />
                </a>
              </td>
            </tr>
            <tr>
              <td>John Doe</td>
              <td>john@example.com</td>
              <td>+1234567890</td>
              <td>
                <button
                  className="btn btn-primary me-2"
                  data-bs-toggle="modal"
                  data-bs-target="#emailModal"
                  style={{ background: "rgb(38 29 167)" }}
                >
                  <FaEnvelope className="me-2" />
                  Email
                </button>
                <EmailModal></EmailModal>
                <Link to={"/chatbox"} className="btn btn-warning me-2">
                  💬 Chat
                </Link>
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-success px-4 py-1"
                >
                  <FaWhatsapp size={30} />
                </a>
              </td>
            </tr>
            <tr>
              <td>John Doe</td>
              <td>john@example.com</td>
              <td>+1234567890</td>
              <td>
                <button
                  className="btn btn-primary me-2"
                  data-bs-toggle="modal"
                  data-bs-target="#emailModal"
                  style={{ background: "rgb(38 29 167)" }}
                >
                  <FaEnvelope className="me-2" />
                  Email
                </button>
                <EmailModal></EmailModal>
                <Link to={"/chatbox"} className="btn btn-warning me-2">
                  💬 Chat
                </Link>
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-success px-4 py-1"
                >
                  <FaWhatsapp size={30} />
                </a>
              </td>
            </tr>
            <tr>
              <td>Jane Smith</td>
              <td>jane@example.com</td>
              <td>+9876543210</td>

              <td>
                <button
                  className="btn btn-primary me-2"
                  data-bs-toggle="modal"
                  data-bs-target="#emailModal"
                  style={{ background: "rgb(38 29 167)" }}
                >
                  <FaEnvelope className="me-2" />
                  Email
                </button>
                <EmailModal></EmailModal>
                <Link to={"/chatbox"} className="btn btn-warning me-2">
                  💬 Chat
                </Link>
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-success px-4 py-1"
                >
                  <FaWhatsapp size={30} />
                </a>
              </td>
            </tr>
            <tr>
              <td>Jane Smith</td>
              <td>jane@example.com</td>
              <td>+9876543210</td>

              <td>
                <button
                  className="btn btn-primary me-2"
                  data-bs-toggle="modal"
                  data-bs-target="#emailModal"
                  style={{ background: "rgb(38 29 167)" }}
                >
                  <FaEnvelope className="me-2" />
                  Email
                </button>
                <EmailModal></EmailModal>
                <Link to={"/chatbox"} className="btn btn-warning me-2">
                  💬 Chat
                </Link>
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-success px-4 py-1"
                >
                  <FaWhatsapp size={30} />
                </a>
              </td>
            </tr>
            <tr>
              <td>Jane Smith</td>
              <td>jane@example.com</td>
              <td>+9876543210</td>

              <td>
                <button
                  className="btn btn-primary me-2"
                  data-bs-toggle="modal"
                  data-bs-target="#emailModal"
                  style={{ background: "rgb(38 29 167)" }}
                >
                  <FaEnvelope className="me-2" />
                  Email
                </button>
                <EmailModal></EmailModal>

                <Link to={"/chatbox"} className="btn btn-warning me-2">
                  💬 Chat
                </Link>
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-success px-4 py-1"
                >
                  <FaWhatsapp size={30} />
                </a>
              </td>
            </tr>
            <tr>
              <td>Jane Smith</td>
              <td>jane@example.com</td>
              <td>+9876543210</td>

              <td>
                <button
                  className="btn btn-primary me-2"
                  data-bs-toggle="modal"
                  data-bs-target="#emailModal"
                  style={{ background: "rgb(38 29 167)" }}
                >
                  <FaEnvelope className="me-2" />
                  Email
                </button>
                <EmailModal></EmailModal>
                <Link to={"/chatbox"} className="btn btn-warning me-2">
                  💬 Chat
                </Link>
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-success px-4 py-1"
                >
                  <FaWhatsapp size={30} />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CommunicationFollowupManagement;
