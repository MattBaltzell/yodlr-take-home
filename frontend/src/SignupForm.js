import React, { useState } from "react";
import axios from "axios";
import "./Form.css";

const INITIAL_STATE = {
  firstName: "",
  lastName: "",
  email: ""
};
const SignupForm = () => {
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  async function addUser(data) {}

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <form className="Form" onSubmit={handleSubmit}>
      <div className="Form-input-group">
        <label htmlFor="firstName">First Name</label>
        <input
          onChange={handleChange}
          id="firstName"
          name="firstName"
          value={formData.firstName}
          placeholder="First name"
          type="text"
        />
      </div>
      <div className="Form-input-group">
        <label htmlFor="lastName">Last Name</label>
        <input
          onChange={handleChange}
          id="lastName"
          name="lastName"
          value={formData.lastName}
          placeholder="Last name"
          type="text"
        />
      </div>
      <div className="Form-input-group">
        <label htmlFor="email">Email</label>
        <input
          onChange={handleChange}
          id="email"
          name="email"
          value={formData.email}
          placeholder="Email"
          type="email"
        />
      </div>
      <button>Submit</button>
    </form>
  );
};

export default SignupForm;
