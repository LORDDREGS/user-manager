
import React from 'react';

const Positions = ({ positions, onSelect }) => {
  return (
    <div>
      <h3>Positions</h3>
      <ul>
        {positions.map(position => (
          <li key={position._id} onClick={() => onSelect(position)}>
            {position.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Positions;
