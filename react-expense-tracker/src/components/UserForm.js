import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import * as Yup from "yup";

const UserForm = ({ addItem }) => {
  return (
    <Formik
      initialValues={{
        description: "",
        amount: 0,
        transactiondate: null,
        category: "",
      }}
      validationSchema={Yup.object({
        description: Yup.string()
          .matches(/^[A-Za-z\s]*$/, "Please enter Alphabets only ")
          .min(5, "Must be 5 characters or less")
          .required("Please enter description"),
        amount: Yup.number()
          .min(500, "Amount must be greater then 500")
          .required(),
        transactiondate: Yup.date().required("Select Date"),
        category: Yup.string().required("Please select the category"),
      })}
      onSubmit={async (values) => {
        values["id"] = uuidv4();
        addItem(values);
        await axios.post("http://localhost:3001/list", values);
      }}
    >
      <Form>
        <div className="mb-3">
          <Field
            name="description"
            className="form-control"
            type="text"
            placeholder="Enter Description"
          />
          <ErrorMessage name="description" />
        </div>
        <div className="mb-3">
          <Field
            name="amount"
            className="form-control"
            type="text"
            placeholder="Enter Amount"
          />
          <ErrorMessage name="amount" />
        </div>
        <div className="mb-3">
          <Field
            name="transactiondate"
            className="form-control"
            type="date"
            placeholder="dd-mm-yy"
          />
          <ErrorMessage name="transactiondate" />
        </div>
        <div className="mb-3">
          <div role="group">
            <label>
              <Field type="radio" name="category" value="income" />
              INCOME
            </label>
            <label>
              <Field type="radio" name="category" value="expense" />
              EXPENSE
            </label>
          </div>
          <ErrorMessage name="category" />
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default UserForm;
