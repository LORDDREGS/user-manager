// src/components/PositionForm.js
import React, { useState, useEffect } from 'react';

const PositionForm = ({ position, onSave, plants, departments }) => {
  const [name, setName] = useState('');
  const [shortName, setShortName] = useState('');
  const [selectedPlant, setSelectedPlant] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');

  useEffect(() => {
    if (position) {
      setName(position.name);
      setShortName(position.shortName);
      setSelectedPlant(position.plant);
      setSelectedDepartment(position.department);
    }
  }, [position]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      _id: position ? position._id : undefined,
      name,
      shortName,
      plant: selectedPlant,
      department: selectedDepartment,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Short Name"
        value={shortName}
        onChange={(e) => setShortName(e.target.value)}
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
      <button type="submit">Save</button>
    </form>
  );
};

export default PositionForm;
