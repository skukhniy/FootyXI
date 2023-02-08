import React from 'react';
import { rosterObject } from '../../assets/interfaces';

interface PickPlayerProps {
  roster: rosterObject;
  setRoster: React.Dispatch<React.SetStateAction<rosterObject>>;
}

export default function PickPlayerDropdown({
  roster,
  setRoster,
}: PickPlayerProps) {
  const substituteOrder = ['s1', 's2', 's3', 's4', 's5', 's6', 's7'];
  const subOptions = substituteOrder.map((subNum) => {
    if (roster.substitutes[subNum].name !== '') {
      return <option>{roster.substitutes[subNum].name}</option>;
    }
  });
  const reserveOptions = roster.reserves.map((player) => (
    <option>{player.name}</option>
  ));

  const firstTeamOptions = Object.keys(roster.firstTeam).map((position) => {
    if (roster.firstTeam[position].name !== '') {
      return <option>{roster.firstTeam[position].name}</option>;
    }
  });
  return (
    <div className="">
      <select className=" bg-gray-500">
        <option>Pick Player</option>
        <optgroup label="Substitutes"></optgroup>
        {subOptions}
        <optgroup label="Reserves"></optgroup>
        {reserveOptions}
        <optgroup label="First Team"></optgroup>
        {firstTeamOptions}
        <optgroup label=""></optgroup>
        <option>+ Add Player</option>
      </select>
    </div>
  );
}
