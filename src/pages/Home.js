import { useState } from 'react';
import '../styles/Home.css';

function Home() {
  const [mission1Visible, setMission1Visible] = useState(false);
  const [mission2Visible, setMission2Visible] = useState(false);

  const toggleMission = (mission) => {
    if (mission === 'mission1') {
      setMission1Visible(!mission1Visible);
      setMission2Visible(false);
    } else {
      setMission2Visible(!mission2Visible);
      setMission1Visible(false);
    }
  };

  return (
    <div className="container fade-in">
      <h1>Explore the Cosmos</h1>
      <p>Discover the wonders of space exploration with interactive missions.</p>

      <div className="button-container">
        <button
          className="slide-left glow"
          onClick={() => toggleMission('mission1')}
        >
          Launch Mission 1
        </button>
        <button
          className="slide-right glow"
          onClick={() => toggleMission('mission2')}
        >
          Launch Mission 2
        </button>
      </div>

      <div className={`mission ${mission1Visible ? 'visible' : 'hidden'}`}>
        <h2>Mission 1: Mars Rover</h2>
        <p>Explore the red planet with our advanced rover technology. 🚀</p>
      </div>
      <div className={`mission ${mission2Visible ? 'visible' : 'hidden'}`}>
        <h2>Mission 2: Lunar Base</h2>
        <p>Establish a human presence on the moon by 2030. 🌕</p>
      </div>
    </div>
  );
}

export default Home;