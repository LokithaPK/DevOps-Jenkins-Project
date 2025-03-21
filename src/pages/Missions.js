import MissionCard from '../components/MissionCard';
import '../styles/Missions.css';

function Missions() {
  const missions = [
    {
      title: 'Apollo 11',
      description: 'First manned moon landing in 1969.',
      details: 'Launched on July 16, 1969, Apollo 11 was the first mission to land humans on the moon. Neil Armstrong and Buzz Aldrin became the first and second humans to walk on the lunar surface.',
    },
    {
      title: 'Mars Perseverance',
      description: 'Exploring Mars since 2021.',
      details: 'Launched on July 30, 2020, the Perseverance rover is searching for signs of ancient life on Mars and collecting samples for future return to Earth.',
    },
  ];

  return (
    <div className="container fade-in">
      <h1>Our Missions</h1>
      <div className="mission-cards">
        {missions.map((mission, index) => (
          <MissionCard
            key={index}
            title={mission.title}
            description={mission.description}
            details={mission.details}
          />
        ))}
      </div>
    </div>
  );
}

export default Missions;