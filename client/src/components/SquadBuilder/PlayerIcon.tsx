import React from 'react';
import kitIcon from '../../assets/kit-icon.png';

interface positionProps {
  position: string;
}

export default function PlayerIcon(props: positionProps) {
  const positionTitle = props.position.toUpperCase();

  return (
    <div className={`playerBlock ${props.position}`}>
      <img src={kitIcon}></img>
      <span>{positionTitle}</span>
    </div>
  );
}
