// src/components/UserForm.js
import React, { useState, useEffect } from 'react';

const UserForm = ({ user, onSave, plants, departments, positions }) => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [middlename, setMiddlename] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [selectedPlant, setSelectedPlant] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedPosition, setSelectedPosition] = useState('');

  useEffect(() => {
    if (user) {
      setFirstname(user.firstname);
      setLastname(user.lastname);
      setMiddlename(user.middlename);
      setEmail(user.email);
      setPassword(user.password);
      setRole(user.role);
      setSelectedPlant(user.plant);
      setSelectedDepartment(user.department);
      setSelectedPosition(user.position);
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      _id: user ? user._id : undefined,
      firstname,
      lastname,
      middlename,
      email,
      password,
      role,
      plant: selectedPlant,
      department: selectedDepartment,
      position: selectedPosition,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="First Name"
        value={firstname}
        onChange={(e) => setFirstname(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastname}
        onChange={(e) => setLastname(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Middle Name"
        value={middlename}
        onChange={(e) => setMiddlename(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        required
      />
      <select
        value={selectedPlant}
        onChange={(e) => setSelectedPlant(e.target.value)}
        required
      >
        <option value="">Select Plant</option>
        {plants.map((plant) => (
          <option key={plant._id} value={plant._id}>
            {plant.name}
          </option>
        ))}
      </select>
      <select
        value={selectedDepartment}
        onChange={(e) => setSelectedDepartment(e.target.value)}
        required
      >
        <option value="">Select Department</option>
        {departments.map((department) => (
          <option key={department._id} value={department._id}>
            {department.name}
          </option>
        ))}
      </select>
      <select
        value={selectedPosition}
        onChange={(e) => setSelectedPosition(e.target.value)}
        required
      >
        <option value="">Select Position</option>
        {positions.map((position) => (
          <option key={position._id} value={position._id}>
            {position.name}
          </option>
        ))}
      </select>
      <button type="submit">Save</button>
    </form>
  );
};

export default UserForm;
