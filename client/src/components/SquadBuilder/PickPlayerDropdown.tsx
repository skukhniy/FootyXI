import React, { useState } from 'react';
import {
  rosterObject,
  firstTeamObject,
  substituteObject,
} from '../../assets/interfaces';

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

  const areTherePlayers = (playerList: firstTeamObject | substituteObject) => {
    let checkBoolean = false;
    Object.keys(playerList).forEach((playerPos) => {
      if (playerList[playerPos].name !== '') {
        checkBoolean = true;
      }
    });
    return checkBoolean;
  };

  const areThereReserves = () => {
    let checkBoolean = false;
    roster.reserves.forEach((player) => {
      if (player.name !== '') {
        checkBoolean = true;
      }
    });
    return checkBoolean;
  };
  const subOptions = ['s1', 's2', 's3', 's4', 's5', 's6', 's7'].map(
    (subNum) => {
      if (roster.substitutes[subNum].name !== '') {
        return (
          <option value={`${subNum}-${roster.substitutes[subNum].name}`}>
            {roster.substitutes[subNum].name}
          </option>
        );
      }
    }
  );
  const reserveOptions = roster.reserves.map((player) => (
    <option value={player.name}>{player.name}</option>
  ));

  const firstTeamOptions = Object.keys(roster.firstTeam).map((mapPosition) => {
    if (roster.firstTeam[mapPosition].name !== '') {
      const playerName = roster.firstTeam[mapPosition].name;
      return (
        <option value={`${mapPosition}-${playerName}`}>{playerName}</option>
      );
    }
  });

  const getPlayerType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const index = e.target.selectedIndex;
    const option = e.target.options[index];
    const optgroup = option.parentElement;
    return optgroup!.getAttribute('label');
  };

  const swapPlayers = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const tempRoster = { ...roster };
    const swapType = getPlayerType(e);
    if (swapType === 'Substitutes') {
      const subNum = e.target.value.split('-')[0];
      let tempPlayer = tempRoster.substitutes[subNum];
      tempRoster.substitutes[subNum] = tempRoster.firstTeam[position];
      tempRoster.firstTeam[position] = tempPlayer;
      setRoster(tempRoster);
    } else if (swapType === 'Reserves') {
      let tempPlayer = tempRoster.reserves.filter((player) => {
        return player.name === e.target.value;
      });
      console.log('TEMP ROSTER CHECK');
      console.log(roster);
      let tempReserves = roster.reserves.filter((player) => {
        return player.name !== e.target.value;
      });
      tempRoster.reserves = tempReserves;
      tempRoster.reserves.push(tempRoster.firstTeam[position]);
      tempRoster.firstTeam[position] = tempPlayer[0];

      console.log(tempRoster);

      setRoster(tempRoster);
    } else if (swapType === 'First Team') {
      let tempPosition = e.target.value.split('-')[0];
      let tempPlayer = tempRoster.firstTeam[tempPosition];
      tempRoster.firstTeam[tempPosition] = tempRoster.firstTeam[position];
      tempRoster.firstTeam[position] = tempPlayer;
      console.log(tempRoster);
      setRoster(tempRoster);
    }
  };

  return (
    <div className="">
      <select
        onChange={(e) => swapPlayers(e)}
        className=" text-center bg-gray-500"
        placeholder="Pick Player"
        value={
          roster.firstTeam[position].name !== ''
            ? `${position}-${roster.firstTeam[position].name}`
            : 'Pick Player'
        }
      >
        <option disabled>Pick Player</option>
        {areTherePlayers(roster.firstTeam) ? (
          <optgroup label="First Team">{firstTeamOptions}</optgroup>
        ) : (
          ''
        )}
        {areTherePlayers(roster.substitutes) ? (
          <optgroup label="Substitutes">{subOptions}</optgroup>
        ) : (
          ''
        )}

        {areThereReserves() ? (
          <optgroup label="Reserves">{reserveOptions}</optgroup>
        ) : (
          ''
        )}
        {/* 
        <optgroup label=""></optgroup>
        <option>+ Add Player</option> */}
      </select>
    </div>
  );
}
