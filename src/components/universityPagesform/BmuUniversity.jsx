import React from 'react';
import { Container, Row, Col, Card, Button, ProgressBar, Badge } from 'react-bootstrap';
import { Calendar, Clock, FileEarmark, Building, FileEarmarkCheck, ArrowClockwise, Download, Upload, QuestionCircle } from 'react-bootstrap-icons';
import './BmuUniversity.css';

const BmuUniversity = () => {
  return (
    <Container className="application-container">
      <h2 className="main-title">Application Progress</h2>
      
      {/* Progress Steps */}
      <div className="progress-steps-container">
        <Row className="progress-steps">
          <Col md={4} className="step-column">
            <div className="step-circle completed">
              <Building size={24} />
            </div>
            <div className="step-label">University Application</div>
            <div className="step-status completed-text">Completed</div>
          </Col>
          
          <Col md={4} className="step-column">
            <div className="step-circle in-progress">
              <FileEarmark size={24} />
            </div>
            <div className="step-label">Embassy Documents</div>
            <div className="step-status in-progress-text">In Progress</div>
          </Col>
          
          <Col md={4} className="step-column">
            <div className="step-circle pending">
              <FileEarmarkCheck size={24} />
            </div>
            <div className="step-label">Visa Process</div>
            <div className="step-status pending-text">Pending</div>
          </Col>
        </Row>
        
        <div className="progress-bar-container">
          <ProgressBar>
            <ProgressBar variant="success" now={33} key={1} />
            <ProgressBar variant="warning" now={33} key={2} />
            <ProgressBar variant="light" now={34} key={3} />
          </ProgressBar>
        </div>
      </div>
      
      <Row className="mt-5">
        {/* Document Checklist */}
        <Col md={7}>
          <Card className="document-checklist">
            <Card.Header>
              <h4>Document Checklist</h4>
            </Card.Header>
            <Card.Body>
              {/* Passport Document */}
              <div className="document-item">
                <div className="document-header">
                  <h5>Passport</h5>
                  <Badge bg="success" className="uploaded-badge">Uploaded</Badge>
                </div>
                <div className="document-details">
                  <div className="document-preview">
                    <img src="/passport-preview.jpg" alt="Passport Preview" className="preview-image" />
                  </div>
                  <div className="document-info">
                    <p>Uploaded on May 15, 2024 · Verified by embassy</p>
                    <Button variant="outline-primary" size="sm" className="download-btn">
                      <Download size={16} className="me-1" /> Download
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Academic Certificates */}
              <div className="document-item mt-4">
                <div className="document-header">
                  <h5>Academic Certificates</h5>
                  <Badge bg="warning" className="pending-badge">Pending Verification</Badge>
                </div>
                <div className="document-details">
                  <div className="document-preview">
                    <FileEarmark size={40} className="file-icon" />
                  </div>
                  <div className="document-info">
                    <p>Uploaded on May 18, 2024 · Pending verification from university</p>
                    <Button variant="outline-primary" size="sm" className="reupload-btn">
                      <ArrowClockwise size={16} className="me-1" /> Re-upload
                    </Button>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        
        {/* Important Dates */}
        <Col md={5}>
          <Card className="important-dates">
            <Card.Header>
              <h4>Important Dates</h4>
            </Card.Header>
            <Card.Body>
              <div className="date-item">
                <div className="date-icon embassy">
                  <Calendar size={20} />
                </div>
                <div className="date-info">
                  <h5>Embassy Interview</h5>
                  <p>
                    <Calendar size={14} className="me-1" />
                    June 15, 2024 at 
                    <Clock size={14} className="ms-2 me-1" />
                    10:30 AM
                  </p>
                </div>
              </div>
              
              <div className="date-item">
                <div className="date-icon documents">
                  <FileEarmark size={20} />
                </div>
                <div className="date-info">
                  <h5>Documents Submission</h5>
                  <p>
                    <Calendar size={14} className="me-1" />
                    May 30, 2024 at 
                    <Clock size={14} className="ms-2 me-1" />
                    11:59 PM
                  </p>
                </div>
              </div>
              
              <div className="date-item">
                <div className="date-icon orientation">
                  <Calendar size={20} />
                </div>
                <div className="date-info">
                  <h5>Orientation Session</h5>
                  <p>
                    <Calendar size={14} className="me-1" />
                    July 1, 2024 at 
                    <Clock size={14} className="ms-2 me-1" />
                    2:00 PM
                  </p>
                </div>
              </div>
              
              <div className="date-item">
                <div className="date-icon term">
                  <Calendar size={20} />
                </div>
                <div className="date-info">
                  <h5>Term Start Date</h5>
                  <p>
                    <Calendar size={14} className="me-1" />
                    August 15, 2024
                  </p>
                </div>
              </div>
            </Card.Body>
          </Card>
          
          {/* Help Section */}
          <Card className="help-section mt-4">
            <Card.Body>
              <h4>Need Help?</h4>
              <Button variant="dark" className="support-btn w-100 mb-3">
                <QuestionCircle size={16} className="me-2" /> Contact Support
              </Button>
              <Button variant="outline-secondary" className="guidelines-btn w-100">
                <FileEarmark size={16} className="me-2" /> View Guidelines
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      <footer className="mt-5 text-muted">
        <small> 2024 BMU Application System. All rights reserved.</small>
        <div className="footer-links">
          <a href="#">Privacy Policy</a> · <a href="#">Terms of Service</a>
        </div>
      </footer>
    </Container>
  );
};

export default BmuUniversity;