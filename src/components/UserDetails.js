import React from 'react';

const UserDetails = ({ user }) => {
  return (
    <div>
      <h2>User Details</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Position:</strong> {user.position}</p>
    </div>
  );
};

export default UserDetails;
