import React from 'react';
import { useParams } from 'react-router-dom';

const Profile = () => {
  const { firstName, lastName } = useParams(); // useParams ჰუკი URL-დან იღებს პარამეტრებს

  return (
    <div>
      <h1>Profile Page</h1>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
    </div>
  );
};

export default Profile;
