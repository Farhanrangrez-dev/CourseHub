import React, { useState, useEffect } from "react";

const FollowUpReminder = ({ days }) => {
  const [reminderSent, setReminderSent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setReminderSent(true);
    }, days * 24 * 60 * 60 * 1000); // Convert days to milliseconds

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [days]);

  return (
    <div>
      <h3>Follow-Up Reminder</h3>
      {reminderSent && <p>Time to follow-up!</p>}
    </div>
  );
};

export default FollowUpReminder;
