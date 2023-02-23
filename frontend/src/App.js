import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navigation-Routes/Navbar";
import Routes from "./Components/Navigation-Routes/Routes";
import YodlrApi from "./Api/api";

import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [activeCount, setActiveCount] = useState(
    users.map(u => u.state === "active").length
  );

  useEffect(() => {
    async function getUsers() {
      try {
        const users = await YodlrApi.getAllUsers();
        setUsers(users);
      } catch (error) {
        console.error(error);
      }
    }
    getUsers();
  }, [activeCount]);

  // backend does not store users in a DB, so users only update in state
  async function addUser(data) {
    try {
      const newUser = await YodlrApi.addUser(data);
      setUsers([...users, newUser]);
      return newUser;
    } catch (error) {
      console.error(error);
    }
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

  function addMessage(msg, status) {
    setMessages([...messages, { text: msg, status: status }]);
  }

  function clearMessages() {
    setMessages([]);
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
          addMessage={addMessage}
          clearMessages={clearMessages}
          messages={messages}
        />
      </main>
    </div>
  );
}

export default App;
