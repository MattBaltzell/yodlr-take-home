import React, { useState, useEffect } from "react";
import axios from "axios";
import Admin from "./Admin";
import SignupForm from "./SignupForm";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const res = await axios.get("http://localhost:3001/users");
      setUsers(res.data);
    }
    getUsers();
  }, []);

  return (
    <div className="App">
      <Admin users={users} />
      <SignupForm />
    </div>
  );
}

export default App;
