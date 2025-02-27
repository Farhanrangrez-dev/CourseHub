import React, { useState } from "react";

const PostVisaApproval = () => {
  const [flightBooked, setFlightBooked] = useState(false);

  const handleFlightBooking = () => {
    setFlightBooked(true);
  };

  return (
    <div>
      <h3>Post-Visa Approval</h3>
      <button onClick={handleFlightBooking}>Confirm Flight Booking</button>
      {flightBooked && <p>Flight Booked</p>}
    </div>
  );
};

export default PostVisaApproval;
