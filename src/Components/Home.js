import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const firstName = 'დათო';
  const lastName = 'ზარანდია';

  return (
    <div>
      <h1>Home Page</h1>
      <Link to={`/profile/${firstName}/${lastName}`}>
        <button>Profile</button>
      </Link>
    </div>
  );
};

export default Home;
