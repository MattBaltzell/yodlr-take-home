import React from "react";
import "./User.css";

const User = ({ user }) => {
  return (
    <div className="User">
      <h3>{user.firstName + " " + user.lastName}</h3>
      <p>{user.email}</p>
      {user.state === "pending" ? (
        <button>Activate</button>
      ) : (
        <p className="User--activated">
          <small>
            <em>Activated</em>
          </small>
        </p>
      )}
    </div>
  );
};

export default User;
