import React, { useState } from "react";

const RegistrationFeePayment = () => {
  const [isPaid, setIsPaid] = useState(false);

  const handlePayment = () => {
    setIsPaid(true);
  };

  return (
    <div>
      <h3>Registration Fee Payment</h3>
      <button onClick={handlePayment}>Confirm Payment</button>
      {isPaid && <p>Registration Fee Paid</p>}
    </div>
  );
};

export default RegistrationFeePayment;
