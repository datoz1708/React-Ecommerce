import React from 'react';
import { useParams } from 'react-router-dom';

const Profile = () => {
  const { firstName, lastName } = useParams();

  return (
    <div>
      <h1>Profile Page</h1>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
    </div>
  );
};

export default Profile;
