// src/components/Departments.js
import React from 'react';

const Departments = ({ departments, onSelect }) => {
  return (
    <div>
      <h3>Departments</h3>
      <ul>
        {departments.map(department => (
          <li key={department._id} onClick={() => onSelect(department)}>
            {department.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Departments;
