import { useState } from 'react';

function MissionCard({ title, description, details }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <button
        className="card-btn glow"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? 'Hide Details' : 'Details'}
      </button>
      <div className={`card-details ${isExpanded ? 'visible' : 'hidden'}`}>
        <p>{details}</p>
      </div>
    </div>
  );
}

export default MissionCard;