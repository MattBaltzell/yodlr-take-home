import React from "react";
import { useHistory } from "react-router-dom";
import User from "../User/User";
import Card from "../Card/Card";
import YodlrApi from "../../Api/api";
import "./Admin.css";

const Admin = ({ users, updateActiveCount, setModal }) => {
  async function activate(id) {
    const user = await YodlrApi.activateUser(id);
    updateActiveCount();
    return user;
  }

  const history = useHistory();
  function handleCreateUser() {
    setModal(true);
    history.push("/admin/add-user");
  }

  return (
    <div className="Admin">
      <h1>Admin Dashboard</h1>

      <Card>
        <div className="Admin-section-title">
          <h2>Users</h2>
          <button onClick={handleCreateUser} className="btn-sm">
            Create new user
          </button>
        </div>
        <div className="Admin--user-list">
          {users.map(user => (
            <Card key={user.id}>
              <User user={user} activate={activate} />
            </Card>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Admin;
