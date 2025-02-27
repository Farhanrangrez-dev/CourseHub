import React, { useState } from "react";

const PreSubmission = () => {
  const [documents, setDocuments] = useState({
    offerLetterPaid: false,
    passportCopy: false,
    appendixForm: false,
  });

  const handleCheckboxChange = (document) => {
    setDocuments((prevState) => ({
      ...prevState,
      [document]: !prevState[document],
    }));
  };

  return (
    <div>
      <h3>Pre-Submission Requirements</h3>
      <label>
        Offer Letter Service Charge Paid
        <input
          type="checkbox"
          checked={documents.offerLetterPaid}
          onChange={() => handleCheckboxChange("offerLetterPaid")}
        />
      </label>
      <label>
        Passport Copy
        <input
          type="checkbox"
          checked={documents.passportCopy}
          onChange={() => handleCheckboxChange("passportCopy")}
        />
      </label>
      <label>
        Appendix Form Completed
        <input
          type="checkbox"
          checked={documents.appendixForm}
          onChange={() => handleCheckboxChange("appendixForm")}
        />
      </label>
    </div>
  );
};

export default PreSubmission;
