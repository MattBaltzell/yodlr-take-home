import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Card from "../Card/Card";

import "./Form.css";

const INITIAL_STATE = {
  firstName: "",
  lastName: "",
  email: ""
};
const SignupForm = ({ add, title, route, closeModal }) => {
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    add(formData);
    setFormData(INITIAL_STATE);
    history.push(route);
  };

  return (
    <div className="Form">
      <Card>
        <h2>{title}</h2>
        <form onSubmit={handleSubmit}>
          <div className="Form-input-group">
            <label htmlFor="firstName">First Name</label>
            <input
              onChange={handleChange}
              id="firstName"
              name="firstName"
              value={formData.firstName}
              placeholder="Enter first name"
              type="text"
              required
            />
          </div>
          <div className="Form-input-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              onChange={handleChange}
              id="lastName"
              name="lastName"
              value={formData.lastName}
              placeholder="Enter last name"
              type="text"
              required
            />
          </div>
          <div className="Form-input-group">
            <label htmlFor="email">Email</label>
            <input
              onChange={handleChange}
              id="email"
              name="email"
              value={formData.email}
              placeholder="Enter email"
              type="email"
              required
            />
          </div>
          <button>Submit</button>
        </form>
      </Card>
    </div>
  );
};

export default SignupForm;
