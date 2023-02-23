import React from "react";
import { Route } from "react-router-dom";
import Admin from "../Admin/Admin";
import Modal from "../Modal/Modal";
import Home from "../Home/Home";
import SignupForm from "../Form/SignupForm";

const Routes = ({
  addUser,
  users,
  updateActiveCount,
  setModal,
  addMessage,
  messages,
  clearMessages
}) => {
  return (
    <>
      <Route path="/admin/add-user">
        <Modal setModal={setModal}>
          <SignupForm
            add={addUser}
            title="Create New User"
            route="/admin"
            setModal={setModal}
            addMessage={addMessage}
          />
        </Modal>
      </Route>
      <Route path="/admin">
        <Admin
          users={users}
          updateActiveCount={updateActiveCount}
          setModal={setModal}
        />
      </Route>
      <Route exact path="/signup">
        <SignupForm
          add={addUser}
          setModal={setModal}
          route="/"
          title="Signup"
          addMessage={addMessage}
        />
      </Route>
      <Route exact path="/">
        <Home messages={messages} clearMessages={clearMessages} />
      </Route>
    </>
  );
};

export default Routes;
