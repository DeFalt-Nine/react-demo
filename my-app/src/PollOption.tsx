// src/PollOption.tsx
import React from 'react';

interface PollOptionProps {
  option: string;
  count: number;
  onVote: (index: number) => void;
  index: number;
}

const PollOption = ({ option, count, onVote, index }: PollOptionProps): React.ReactElement => {
  return (
    <div className="vote-button">
      <button onClick={() => onVote(index)} className="vote-button">
        {option} - {count} votes
      </button>
    </div>
  );
};

export default PollOption;
