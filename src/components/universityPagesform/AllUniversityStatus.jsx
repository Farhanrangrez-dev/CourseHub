import React, { useState } from 'react';
import { 
  Container, Row, Col, Form, Button, Card, ProgressBar, Badge, 
  Accordion, Modal, ListGroup 
} from 'react-bootstrap';
import { 
  CheckCircleFill, CircleFill, Calendar3, Building, 
  FileEarmarkText, PersonBadge, Airplane, House, 
  QuestionCircle, Bell, Person
} from 'react-bootstrap-icons';
import './AllUniversityStatus.css';

const AllUniversityStatus = () => {
  // State for file uploads
  const [files, setFiles] = useState({
    passport: null,
    academicCertificates: null,
    englishProficiency: null
  });

  // State for modal
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: '',
    content: ''
  });

  // Handle file upload
  const handleFileUpload = (event, documentType) => {
    const file = event.target.files[0];
    if (file) {
      setFiles({
        ...files,
        [documentType]: file
      });
    }
  };

  // Handle modal open
  const handleShowModal = (title, content) => {
    setModalContent({
      title,
      content
    });
    setShowModal(true);
  };

  return (
    <div className="debrecen-container">
      {/* Header */}
      <div className="header">
        <div className="logo">
          <div className="logo-icon">
            <Building />
          </div>
          <h5>DebrecenUniversity University Application </h5>
        </div>
        <div className="nav-links">
          <a href="#" className="nav-link">Dashboard</a>
          <a href="#" className="nav-link active">Applications</a>
          <a href="#" className="nav-link">Documents</a>
          <a href="#" className="nav-link">Support</a>
        </div>
        <div className="user-section">
          <div className="notification-icon">
            <Bell />
          </div>
          <div className="user-profile">
            <div className="avatar">
              <Person />
            </div>
            <span>John Smith</span>
          </div>
        </div>
      </div>

      {/* Application Progress */}
      <h2 className="section-title">Application Progress</h2>
      
      <div className="progress-bar-container">
        <div className="overall-progress-label">Overall Progress</div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: '25%' }}></div>
        </div>
      </div>

      <div className="progress-steps">
        <div className="progress-step step-completed">
          <div className="step-icon icon-completed">
            <CheckCircleFill />
          </div>
          <div className="step-title">Registration</div>
          <div className="step-status status-completed">Completed</div>
        </div>
        
        <div className="progress-step step-in-progress">
          <div className="step-icon icon-in-progress">
            <CircleFill />
          </div>
          <div className="step-title">Application</div>
          <div className="step-status status-in-progress">In Progress</div>
        </div>
        
        <div className="progress-step step-pending">
          <div className="step-icon icon-pending">
            <CircleFill />
          </div>
          <div className="step-title">Interview</div>
          <div className="step-status status-pending">Pending</div>
        </div>
        
        <div className="progress-step step-pending">
          <div className="step-icon icon-pending">
            <CircleFill />
          </div>
          <div className="step-title">Embassy</div>
          <div className="step-status status-pending">Pending</div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid-container">
        {/* University Enrollment & Follow-Ups */}
        <div className="card">
          <h3 className="card-title">University Enrollment & Follow-Ups</h3>
          
          <div className="follow-up-item" style={{ marginBottom: '15px' }}>
            <div className="follow-up-icon">
              <CircleFill size={12} />
            </div>
            <div className="follow-up-content">
              <div className="follow-up-title">Enrollment Confirmation</div>
              <div className="follow-up-status">Pending</div>
            </div>
          </div>
          
          <div className="follow-up-grid">
            <div className="follow-up-item">
              <div className="follow-up-icon">
                <CircleFill size={12} />
              </div>
              <div className="follow-up-content">
                <div className="follow-up-title">10 Days Follow-Up</div>
                <div className="follow-up-status">Not Started</div>
              </div>
            </div>
            
            <div className="follow-up-item">
              <div className="follow-up-icon">
                <CircleFill size={12} />
              </div>
              <div className="follow-up-content">
                <div className="follow-up-title">30 Days Follow-Up</div>
                <div className="follow-up-status">Not Started</div>
              </div>
            </div>
            
            <div className="follow-up-item">
              <div className="follow-up-icon">
                <CircleFill size={12} />
              </div>
              <div className="follow-up-content">
                <div className="follow-up-title">3 Months Follow-Up</div>
                <div className="follow-up-status">Not Started</div>
              </div>
            </div>
            
            <div className="follow-up-item">
              <div className="follow-up-icon">
                <CircleFill size={12} />
              </div>
              <div className="follow-up-content">
                <div className="follow-up-title">Next Semester Follow-Up</div>
                <div className="follow-up-status">Not Started</div>
              </div>
            </div>
          </div>
        </div>

        {/* Visa Process */}
        <div className="card">
          <h3 className="card-title">Visa Process</h3>
          
          <div className="follow-up-item" style={{ marginBottom: '15px', backgroundColor: '#f0f9ff' }}>
            <div className="follow-up-icon" style={{ backgroundColor: '#dbeafe', color: '#2563eb' }}>
              <Calendar3 size={14} />
            </div>
            <div className="follow-up-content">
              <div className="follow-up-title">Visa Interview</div>
              <div className="follow-up-status status-scheduled">Scheduled for July 1, 2024</div>
            </div>
          </div>
          
          <div className="follow-up-item" style={{ marginBottom: '15px' }}>
            <div className="follow-up-icon">
              <CircleFill size={12} />
            </div>
            <div className="follow-up-content">
              <div className="follow-up-title">Visa Decision</div>
              <div className="follow-up-status">Pending</div>
            </div>
          </div>
          
          <div className="follow-up-grid">
            <div className="follow-up-item">
              <div className="follow-up-icon">
                <CircleFill size={12} />
              </div>
              <div className="follow-up-content">
                <div className="follow-up-title">Visa Service Charge</div>
                <div className="follow-up-status">Pending</div>
              </div>
            </div>
            
            <div className="follow-up-item">
              <div className="follow-up-icon">
                <CircleFill size={12} />
              </div>
              <div className="follow-up-content">
                <div className="follow-up-title">Flight Booking</div>
                <div className="follow-up-status">Not Started</div>
              </div>
            </div>
            
            <div className="follow-up-item">
              <div className="follow-up-icon">
                <CircleFill size={12} />
              </div>
              <div className="follow-up-content">
                <div className="follow-up-title">Online Enrollment</div>
                <div className="follow-up-status">Not Started</div>
              </div>
            </div>
            
            <div className="follow-up-item">
              <div className="follow-up-icon">
                <CircleFill size={12} />
              </div>
              <div className="follow-up-content">
                <div className="follow-up-title">Accommodation</div>
                <div className="follow-up-status">Not Started</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Required Documents */}
      <h2 className="section-title">Required Documents</h2>
      
      <div className="document-list">
        <div className="document-item">
          <div className="document-info">
            <div className="document-icon">
              <FileEarmarkText />
            </div>
            <div className="document-details">
              <div className="document-title">Passport Copy</div>
              <div className="document-subtitle">Original + Color Photocopy</div>
            </div>
          </div>
          <Button 
            className="upload-button"
            onClick={() => document.getElementById('passport-upload').click()}
          >
            Upload
          </Button>
          <input
            id="passport-upload"
            type="file"
            style={{ display: 'none' }}
            onChange={(e) => handleFileUpload(e, 'passport')}
          />
        </div>
        
        <div className="document-item">
          <div className="document-info">
            <div className="document-icon">
              <FileEarmarkText />
            </div>
            <div className="document-details">
              <div className="document-title">Academic Certificates</div>
              <div className="document-subtitle">SSC, HSC + Ministry Approvals</div>
            </div>
          </div>
          <Button 
            className="upload-button"
            onClick={() => document.getElementById('academic-upload').click()}
          >
            Upload
          </Button>
          <input
            id="academic-upload"
            type="file"
            style={{ display: 'none' }}
            onChange={(e) => handleFileUpload(e, 'academicCertificates')}
          />
        </div>
        
        <div className="document-item">
          <div className="document-info">
            <div className="document-icon">
              <FileEarmarkText />
            </div>
            <div className="document-details">
              <div className="document-title">English Proficiency</div>
              <div className="document-subtitle">IELTS/TOEFL Certificate</div>
            </div>
          </div>
          <Button 
            className="upload-button"
            onClick={() => document.getElementById('english-upload').click()}
          >
            Upload
          </Button>
          <input
            id="english-upload"
            type="file"
            style={{ display: 'none' }}
            onChange={(e) => handleFileUpload(e, 'englishProficiency')}
          />
        </div>
      </div>

      {/* Upcoming Appointments */}
      <h2 className="section-title">Upcoming Appointments</h2>
      
      <div className="appointment-card">
        <div className="appointment-icon">
          <Calendar3 />
        </div>
        <div className="appointment-details">
          <div className="appointment-title">University Interview</div>
          <div className="appointment-date">June 15, 2024 · 10:00 AM</div>
        </div>
      </div>

      {/* Payment Status and Help & Support */}
      <div className="grid-container">
        <div className="card">
          <h3 className="card-title">Payment Status</h3>
          
          <div className="payment-status">
            <div className="payment-info">
              <div className="payment-title">Registration Fee</div>
              <div className="payment-amount">€100</div>
            </div>
            <div className="status-badge badge-paid">Paid</div>
          </div>
          
          <div className="payment-status">
            <div className="payment-info">
              <div className="payment-title">Application Fee</div>
              <div className="payment-amount">€150</div>
            </div>
            <div className="status-badge badge-pending">Pending</div>
          </div>
        </div>
        
        <div className="card">
          <h3 className="card-title">Help & Support</h3>
          
          <div className="help-list">
            <a href="#" className="help-item">
              <div className="help-icon">
                <FileEarmarkText size={14} />
              </div>
              <div className="help-title">Application Guide</div>
            </a>
            
            <a href="#" className="help-item">
              <div className="help-icon">
                <QuestionCircle size={14} />
              </div>
              <div className="help-title">FAQ</div>
            </a>
            
            <a href="#" className="help-item">
              <div className="help-icon">
                <PersonBadge size={14} />
              </div>
              <div className="help-title">Contact Support</div>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <div> 2024 Hungary University Application Portal. All rights reserved.</div>
        <div className="footer-links">
          <a href="#" className="footer-link">Privacy Policy</a>
          <a href="#" className="footer-link">Terms of Service</a>
        </div>
      </div>

      {/* Modal for document upload or info */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{modalContent.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modalContent.content}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AllUniversityStatus;
