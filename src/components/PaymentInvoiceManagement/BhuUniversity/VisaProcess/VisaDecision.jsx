import React, { useState } from "react";

const VisaDecision = () => {
  const [visaDecision, setVisaDecision] = useState("");

  const handleDecision = (decision) => {
    setVisaDecision(decision);
  };

  return (
    <div>
      <h3>Visa Decision</h3>
      <button onClick={() => handleDecision("Approved")}>Approve</button>
      <button onClick={() => handleDecision("Rejected")}>Reject</button>
      {visaDecision && <p>Visa Decision: {visaDecision}</p>}
    </div>
  );
};

export default VisaDecision;
