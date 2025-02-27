import React, { useState } from "react";

const InterviewAndOffer = () => {
  const [interviewOutcome, setInterviewOutcome] = useState(null);

  const handleOutcome = (outcome) => {
    setInterviewOutcome(outcome);
  };

  return (
    <div>
      <h3>Interview & Offer Process</h3>
      <button onClick={() => handleOutcome("Accepted")}>Accept</button>
      <button onClick={() => handleOutcome("Rejected")}>Reject</button>
      {interviewOutcome && <p>Interview Outcome: {interviewOutcome}</p>}
    </div>
  );
};

export default InterviewAndOffer;
