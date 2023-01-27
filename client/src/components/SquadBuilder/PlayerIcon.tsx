import React from 'react';
import kitIcon from '../../assets/kit-icon.png';

interface positionProps {
  position: string;
  setAddPlayerModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function PlayerIcon(props: positionProps) {
  const positionTitle = props.position.toUpperCase();

  return (
    <div className={`playerBlock ${props.position}`}>
      <img
        className="hover:cursor-pointer "
        src={kitIcon}
        onClick={() => props.setAddPlayerModal(true)}
      ></img>
      <p>{positionTitle}</p>
      {/* <select>
        <option selected></option>
        <option>Kane</option>
        <option>Son</option>
        <option>Deki</option>
        <option>Romero</option>
        <option>Porro</option>
      </select> */}
    </div>
  );
}
