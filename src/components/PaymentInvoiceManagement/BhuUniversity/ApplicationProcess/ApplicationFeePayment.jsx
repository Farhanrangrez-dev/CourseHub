import React, { useState } from 'react';

const ApplicationFeePayment = () => {
  const [isPaid, setIsPaid] = useState(false);

  const handlePayment = () => {
    setIsPaid(true);
  };

  return (
    <div>
      <h3>Application Fee Payment</h3>
      <button onClick={handlePayment}>Confirm Payment</button>
      {isPaid && <p>Application Fee Paid</p>}
    </div>
  );
};

export default ApplicationFeePayment;
