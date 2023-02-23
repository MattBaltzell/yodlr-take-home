import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import "./Home.css";

const Home = ({ messages, clearMessages }) => {
  useEffect(() => {
    return () => {
      clearMessages();
    };
  }, []);

  return (
    <div className="Home">
      <h1>Welcome to Yodlr</h1>
      <div className="Home-btns">
        <Link className="btn btn-lg" to="/admin">
          Admin
        </Link>
        <Link className="btn btn-lg" to="/signup">
          Signup
        </Link>
      </div>
      {messages.map(message => {
        return (
          <div key={uuid()} className={`message ${message.status}`}>
            {message.text}
          </div>
        );
      })}
    </div>
  );
};

export default Home;
