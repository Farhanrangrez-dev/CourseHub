import React, { useState } from "react";

const TuitionFeePayment = () => {
  const [isPaid, setIsPaid] = useState(false);

  const handlePayment = () => {
    setIsPaid(true);
  };

  return (
    <div>
      <h3>Tuition Fee Payment</h3>
      <button onClick={handlePayment}>Confirm Tuition Fee Payment</button>
      {isPaid && <p>Tuition Fee Paid Successfully</p>}
    </div>
  );
};

export default TuitionFeePayment;
