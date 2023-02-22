import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import Navbar from './Navbar';
import Admin from './Admin';
import Modal from './Modal';
import Home from './Home';
import YodlrApi from './api';
import SignupForm from './SignupForm';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [activeCount, setActiveCount] = useState(
    users.map((u) => u.state === 'active').length
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
  }

  function updateActiveCount() {
    setActiveCount(activeCount + 1);
  }

  return (
    <div className="App">
      <Navbar />
      <main className="App-content">
        <Route path="/admin/add-user">
          <Modal>
            <SignupForm add={addUser} title="Create New User" route="/admin" />
          </Modal>
        </Route>
        <Route path="/admin">
          <Admin users={users} updateActiveCount={updateActiveCount} />
        </Route>
        <Route exact path="/signup">
          <SignupForm add={addUser} route="/" title="Signup" />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </main>
    </div>
  );
}

export default App;
