import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const firstName = 'დათო'; // სახელი
  const lastName = 'ზარანდია'; // გვარი

  return (
    <div>
      <h1>Home Page</h1>
      <Link to={`/profile/${firstName}/${lastName}`}>
        <button>Go to Profile</button>
      </Link>
    </div>
  );
};

export default Home;
