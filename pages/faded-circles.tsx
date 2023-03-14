import FadedCircle from 'components/art/FadedCircle';
import { useMemo, useState } from 'react';

interface FadedCirclesProps {}

const FadedCircles: React.FC<FadedCirclesProps> = () => {
  const [selectedSeedIndex, setSelectedSeedIndex] = useState(0);
  const numCircles = 5;
  const seeds = useMemo(() => {
    const seeds = [];
    for (let i = 0; i < numCircles; i++) {
      seeds.push(Math.random().toString());
    }
    return seeds;
  }, [numCircles]);

  return (
    <div>
      Selected Seed: {seeds[selectedSeedIndex]}
      {seeds.map((seed, index) => (
        <button key={index} onClick={() => setSelectedSeedIndex(index)}>
          <FadedCircle seed={seed} />
        </button>
      ))}
    </div>
  );
};

export default FadedCircles;
