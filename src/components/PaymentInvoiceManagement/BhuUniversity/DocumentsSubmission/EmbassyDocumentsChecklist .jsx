import React, { useState } from 'react';

const EmbassyDocumentsChecklist = () => {
  const [documents, setDocuments] = useState({
    passportCopy: false,
    bankStatement: false,
    healthInsurance: false,
  });

  const handleCheckboxChange = (document) => {
    setDocuments((prevState) => ({
      ...prevState,
      [document]: !prevState[document],
    }));
  };

  return (
    <div>
      <h3>Embassy Documents Checklist</h3>
      <label>
        Passport Copy
        <input
          type="checkbox"
          checked={documents.passportCopy}
          onChange={() => handleCheckboxChange('passportCopy')}
        />
      </label>
      <label>
        Bank Account Statement
        <input
          type="checkbox"
          checked={documents.bankStatement}
          onChange={() => handleCheckboxChange('bankStatement')}
        />
      </label>
      <label>
        Health Insurance
        <input
          type="checkbox"
          checked={documents.healthInsurance}
          onChange={() => handleCheckboxChange('healthInsurance')}
        />
      </label>
    </div>
  );
};

export default EmbassyDocumentsChecklist;
