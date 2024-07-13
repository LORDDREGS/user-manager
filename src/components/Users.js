// src/components/Users.js
import React from 'react';

const Users = ({ users, onSelect }) => {
  return (
    <div>
      <h3>Users</h3>
      <ul>
        {users.map(user => (
          <li key={user._id} onClick={() => onSelect(user)}>
            {user.firstname} {user.lastname} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;

