// src/App.tsx
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import PollOption from './PollOption';

interface PollOptionType {
  option: string;
  count: number;
}

const App: React.FC = () => {
  const [pollOptions, setPollOptions] = useState<PollOptionType[]>([
    { option: 'Dog', count: 0 },
    { option: 'Cat', count: 0 },
    { option: 'Bird', count: 0 },
  ]);

  const handleVote = (index: number): void => {
    const updatedPollOptions = [...pollOptions];
    updatedPollOptions[index].count += 1;
    setPollOptions(updatedPollOptions);
  };

  const getLeader = (): string => {
    const maxCount = Math.max(...pollOptions.map(option => option.count));
    const leaders = pollOptions.filter(option => option.count === maxCount);
  
    return leaders.length === 1 ? leaders[0].option : 'Draw';
  };  

  const [count, setCount] = useState<number>(0);

  const MyButton: React.FC = () => {
    return (
      <button className="my-button" onClick={Greet}>Click Me</button>
    );
  };

  const Greet = (): void => {
    alert("Di kaya ng Criminology toh");
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <div className="button-container">
          <button className="count-button" onClick={() => setCount(count + 1)}>
            count is {count}
          </button>
          <MyButton />
        </div>

        <div className="vote-button-container">
          {pollOptions.map((pollOption, index) => (
            <PollOption
              key={index}
              option={pollOption.option}
              count={pollOption.count}
              onVote={handleVote}
              index={index}
            />
          ))}
        </div>

        <div>
          <h3 className="winner">Current Leader: {getLeader()}</h3>
        </div>
      </div>

      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
