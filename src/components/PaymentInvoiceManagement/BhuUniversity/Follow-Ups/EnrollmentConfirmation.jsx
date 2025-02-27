import React, { useState } from 'react';

const EnrollmentConfirmation = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirmation = () => {
    setIsConfirmed(true);
  };

  return (
    <div>
      <h3>Enrollment Confirmation</h3>
      <button onClick={handleConfirmation}>Confirm Enrollment</button>
      {isConfirmed && <p>Enrollment Confirmed</p>}
    </div>
  );
};

export default EnrollmentConfirmation;
