import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navigation-Routes/Navbar";
import Routes from "./Components/Navigation-Routes/Routes";
import YodlrApi from "./Api/api";

import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [activeCount, setActiveCount] = useState(
    users.map(u => u.state === "active").length
  );

  useEffect(() => {
    async function getUsers() {
      const users = await YodlrApi.getAllUsers();
      setUsers(users);
    }
    getUsers();
  }, [activeCount]);

  // backend does not store users in a DB, so users only update in state
  async function addUser(data) {
    const newUser = await YodlrApi.addUser(data);
    setUsers([...users, newUser]);
    return newUser;
  }

  useEffect(() => {
    if (modalIsOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [modalIsOpen]);

  function updateActiveCount() {
    setActiveCount(activeCount + 1);
  }

  function setModal(bool) {
    setModalIsOpen(bool);
  }

  return (
    <div className="App">
      <Navbar />
      <main className="App-content">
        <Routes
          addUser={addUser}
          users={users}
          updateActiveCount={updateActiveCount}
          setModal={setModal}
        />
      </main>
    </div>
  );
}

export default App;
