import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Card from "../Card/Card";

import "./Form.css";

const INITIAL_STATE = {
  firstName: "",
  lastName: "",
  email: ""
};
const SignupForm = ({ add, title, route, setModal, addMessage }) => {
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const history = useHistory();

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const user = await add(
        route === "/admin" ? { ...formData, state: "active" } : formData
      );
      addMessage(
        `Successfully added user: ${user.firstName} ${user.lastName}`,
        "success"
      );
      setFormData(INITIAL_STATE);
      setModal(false);
      history.push(route);
    } catch (error) {
      addMessage(`Something went wrong. Could not create user`, "error");
      console.error(error);
    }
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
