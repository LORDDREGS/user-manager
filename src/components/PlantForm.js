// src/components/PlantForm.js
import React, { useState, useEffect } from 'react';

const PlantForm = ({ plant, onSave }) => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    if (plant) {
      setName(plant.name);
      setLocation(plant.location);
    }
  }, [plant]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      _id: plant ? plant._id : undefined,
      name,
      location,
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
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        required
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default PlantForm;
