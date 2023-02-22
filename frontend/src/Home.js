import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="Home">
      <h1>Welcome to Yodlr</h1>
      <div className="Home-btns">
        <Link className="btn btn-lg" to="/admin">
          Admin
        </Link>
        <Link className="btn btn-lg" to="/admin">
          Signup
        </Link>
      </div>
    </div>
  );
};

export default Home;
