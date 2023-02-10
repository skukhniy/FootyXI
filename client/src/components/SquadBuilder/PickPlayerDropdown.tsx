import React, { useState } from 'react';
import { rosterObject } from '../../assets/interfaces';

interface PickPlayerProps {
  roster: rosterObject;
  setRoster: React.Dispatch<React.SetStateAction<rosterObject>>;
  position: string;
}

export default function PickPlayerDropdown({
  roster,
  setRoster,
  position,
}: PickPlayerProps) {
  const currentPlayer = roster.firstTeam[position];

  const substituteOrder = ['s1', 's2', 's3', 's4', 's5', 's6', 's7'];
  const subOptions = substituteOrder.map((subNum) => {
    if (roster.substitutes[subNum].name !== '') {
      return (
        <option value={`${subNum}-${roster.substitutes[subNum].name}`}>
          {roster.substitutes[subNum].name}
        </option>
      );
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

  const getPlayerType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const index = e.target.selectedIndex;
    const option = e.target.options[index];
    const optgroup = option.parentElement;
    return optgroup!.getAttribute('label');
  };

  const swapPlayers = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const tempRoster = roster;
    const swapType = getPlayerType(e);
    if (swapType === 'Substitutes') {
      const subNum = e.target.value.split('-')[0];
      tempRoster.firstTeam[position] = roster.substitutes[subNum];
      tempRoster.substitutes[subNum] = roster.firstTeam[position];
      setRoster((tempRoster) => ({ ...tempRoster }));
    }
  };

  return (
    <div className="">
      <select
        onChange={(e) => swapPlayers(e)}
        className=" text-center bg-gray-500"
      >
        <option>Pick Player</option>
        <optgroup label="Substitutes">{subOptions}</optgroup>

        <optgroup label="Reserves">{reserveOptions}</optgroup>

        <optgroup label="First Team">{firstTeamOptions}</optgroup>

        <optgroup label=""></optgroup>
        <option>+ Add Player</option>
      </select>
    </div>
  );
}
