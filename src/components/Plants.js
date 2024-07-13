
import React from 'react';

const Plants = ({ plants, onSelect }) => {
  return (
    <div>
      <h3>Plants</h3>
      <ul>
        {plants.map(plant => (
          <li key={plant._id} onClick={() => onSelect(plant)}>
            {plant.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Plants;
