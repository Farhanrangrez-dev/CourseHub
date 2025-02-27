import React, { useState } from 'react';

const ApplicationSubmission = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  return (
    <div>
      <h3>Application Submission</h3>
      <button onClick={handleSubmit}>Submit Application</button>
      {isSubmitted && <p>Application Submitted Successfully</p>}
    </div>
  );
};

export default ApplicationSubmission;
