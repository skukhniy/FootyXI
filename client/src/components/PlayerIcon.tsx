import React from 'react';

interface positionProps {
  position: string;
}

export default function PlayerIcon(props: positionProps) {
  return (
    <div className={`playerBlock ${props.position}`}>{props.position}</div>
  );
}
