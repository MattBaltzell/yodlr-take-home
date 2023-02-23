import React from "react";
import { Route } from "react-router-dom";
import Admin from "../Admin/Admin";
import Modal from "../Modal/Modal";
import Home from "../Home/Home";
import SignupForm from "../Form/SignupForm";

const Routes = ({ addUser, users, updateActiveCount, setModal }) => {
  return (
    <>
      <Route path="/admin/add-user">
        <Modal setModal={setModal}>
          <SignupForm
            add={addUser}
            title="Create New User"
            route="/admin"
            setModal={setModal}
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
        />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </>
  );
};

export default Routes;
