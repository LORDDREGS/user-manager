import React, { useState, useEffect } from 'react';

const DepartmentForm = ({ department, onSave, plants }) => {
  const [name, setName] = useState('');
  const [shortName, setShortName] = useState('');
  const [isAuditor, setIsAuditor] = useState(false);
  const [selectedPlant, setSelectedPlant] = useState('');

  useEffect(() => {
    if (department) {
      setName(department.name);
      setShortName(department.shortName);
      setIsAuditor(department.isAuditor);
      setSelectedPlant(department.plant);
    }
  }, [department]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      _id: department ? department._id : undefined,
      name,
      shortName,
      isAuditor,
      plant: selectedPlant,
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
      <input
        type="checkbox"
        checked={isAuditor}
        onChange={(e) => setIsAuditor(e.target.checked)}
      /> Is Auditor
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
      <button type="submit">Save</button>
    </form>
  );
};

export default DepartmentForm;