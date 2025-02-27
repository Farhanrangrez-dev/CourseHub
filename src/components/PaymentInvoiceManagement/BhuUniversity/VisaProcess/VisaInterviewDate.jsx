import React, { useState } from 'react';

const VisaInterviewDate = () => {
  const [interviewDate, setInterviewDate] = useState('');

  const handleDateChange = (e) => {
    setInterviewDate(e.target.value);
  };

  return (
    <div>
      <h3>Visa Interview Date</h3>
      <input
        type="date"
        value={interviewDate}
        onChange={handleDateChange}
      />
      {interviewDate && <p>Visa Interview Scheduled for: {interviewDate}</p>}
    </div>
  );
};

export default VisaInterviewDate;
