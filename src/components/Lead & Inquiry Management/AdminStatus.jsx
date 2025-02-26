import React, { useContext } from "react";
import { Table, Container, Card } from "react-bootstrap";
import { LeadContext } from "../../context/LeadContext";

const AdminStatus = () => {
  const { leads } = useContext(LeadContext);

  return (
    <Container className="mt-4">
      <Card className="p-4 shadow-sm mb-4">
        <h4 className="mb-3">Admin Panel - All Leads</h4>
        {/* Make the table scrollable horizontally on small screens */}
        <div className="table-responsive">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Lead Name</th>
                <th>Course Interested</th>
                <th>Assigned Counselor</th>
                <th>Status</th>
                <th>Inquiry Date</th>
                <th>Follow-Up Date</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <tr key={lead.id}>
                  <td>{lead.name}</td>
                  <td>{lead.course}</td>
                  <td>{lead.counselor}</td>
                  <td>{lead.status}</td>
                  <td>{lead.inquiryDate}</td>
                  <td>{lead.followUpDate}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Card>
    </Container>
  );
};

export default AdminStatus;