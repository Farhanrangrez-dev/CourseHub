import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, Card } from "react-bootstrap";

const AdmissionTracking = () => {
  const [step, setStep] = useState(1);

  // Validation Schemas
  const validationSchemas = [
    // Step 1: Personal Details
    Yup.object().shape({
      fullName: Yup.string().required("Full Name is required"),
      dob: Yup.date().required("Date of Birth is required"),
      gender: Yup.string().required("Gender is required"),
      phone: Yup.string()
        .matches(/^[0-9]{10}$/, "Phone must be 10 digits")
        .required("Phone number is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
    }),

    // Step 2: Academic Background
    Yup.object().shape({
      highSchool: Yup.string().required("High School is required"),
      highSchoolYear: Yup.string().required("Year is required"),
      highSchoolGrade: Yup.string().required("Grade is required"),
    }),

    // Step 3: Declaration & Consent
    Yup.object().shape({
      terms: Yup.boolean().oneOf([true], "You must agree to the terms"),
    }),
  ];

  // Initial Values
  const initialValues = {
    fullName: "",
    dob: "",
    gender: "",
    phone: "",
    email: "",
    highSchool: "",
    highSchoolYear: "",
    highSchoolGrade: "",
    terms: false,
  };

  return (
    <div className="container p-3">
      <h4 className="fw-bold mb-4">Admission Form</h4>

      <Card className="p-4 mb-4">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchemas[step - 1]}
          onSubmit={(values) => {
            if (step === 3) {
              console.log("Form Submitted:", values);
              alert("Application Submitted Successfully!");
            } else {
              setStep(step + 1);
            }
          }}
        >
          {({ values, setFieldValue }) => (
            <Form>
              {step === 1 && (
                <>
                  <h4>Personal Details</h4>

                  <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <Field type="text" name="fullName" className="form-control" />
                    <ErrorMessage name="fullName" component="p" className="text-danger" />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Date of Birth</label>
                    <Field type="date" name="dob" className="form-control" />
                    <ErrorMessage name="dob" component="p" className="text-danger" />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Gender</label>
                    <Field as="select" name="gender" className="form-select">
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </Field>
                    <ErrorMessage name="gender" component="p" className="text-danger" />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <Field type="text" name="phone" className="form-control" />
                    <ErrorMessage name="phone" component="p" className="text-danger" />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <Field type="email" name="email" className="form-control" />
                    <ErrorMessage name="email" component="p" className="text-danger" />
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  <h4>Academic Background</h4>

                  <div className="mb-3">
                    <label className="form-label">High School</label>
                    <Field type="text" name="highSchool" className="form-control" />
                    <ErrorMessage name="highSchool" component="p" className="text-danger" />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Year</label>
                    <Field type="text" name="highSchoolYear" className="form-control" />
                    <ErrorMessage name="highSchoolYear" component="p" className="text-danger" />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Grade</label>
                    <Field type="text" name="highSchoolGrade" className="form-control" />
                    <ErrorMessage name="highSchoolGrade" component="p" className="text-danger" />
                  </div>
                </>
              )}

              {step === 3 && (
                <>
                  <h4>Declaration & Consent</h4>

                  <div className="mb-3">
                    <Field
                      type="checkbox"
                      name="terms"
                      className="form-check-input"
                      onChange={(e) => setFieldValue("terms", e.target.checked)}
                    />
                    <label className="form-check-label ms-2">
                      I agree to the terms and conditions
                    </label>
                    <ErrorMessage name="terms" component="p" className="text-danger" />
                  </div>
                </>
              )}

              {/* Buttons */}
              <div className="d-flex justify-content-between mt-3">
                {step > 1 && (
                  <Button variant="secondary" onClick={() => setStep(step - 1)}>
                    Back
                  </Button>
                )}

                {step < 3 ? (
                  <Button variant="primary" type="submit">
                    Next
                  </Button>
                ) : (
                  <Button variant="success" type="submit">
                    Submit
                  </Button>
                )}
              </div>
            </Form>
          )}
        </Formik>
      </Card>
    </div>
  );
};

export default AdmissionTracking;
