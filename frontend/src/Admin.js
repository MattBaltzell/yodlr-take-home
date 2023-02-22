import React from "react";
import User from "./User";
import Card from "./Card";
import "./Admin.css";

function Admin({ users }) {
  return (
    <main className="Admin">
      <h1>Admin Dashboard</h1>
      <div className="flex align-items-center">
        <h2>Users</h2>
        <button className="btn-sm">Create new user</button>
      </div>
      <div className="Admin--user-list">
        {users.map(user => (
          <Card key={user.id}>
            <User user={user} />
          </Card>
        ))}
      </div>
    </main>
  );
}

export default Admin;
