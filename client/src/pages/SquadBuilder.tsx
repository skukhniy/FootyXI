import React, { useState, useEffect } from 'react';
import '../styles/modals.css';
import AddPlayer from '../components/SquadBuilder/AddPlayerModal/AddPlayer';
import BenchBar from '../components/SquadBuilder/BenchBar';
import FormationUi from '../components/SquadBuilder/FormationUi';
import OptionsBar from '../components/SquadBuilder/OptionsBar';
import SelectDbModal from '../components/SquadBuilder/SelectDbModal';
import createEmptyRoster from '../hooks/createEmptyRoster';
import { formationPositions } from '../assets/formationsData';
import {
  firstTeamObject,
  playerObject,
  substituteObject,
  rosterObject,
} from '../assets/interfaces';

interface SquadBuildProps {
  squadID: Number;
}

function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message;
  return String(error);
}

export default function SquadBuilder({ squadID }: SquadBuildProps) {
  const [dbType, setDbType] = useState(null);
  const [formation, setFormation] = useState('442');
  const [squadName, setSquadName] = useState('');
  const [showAddPlayer, setAddPlayerModal] = useState(false);
  const [currentPosition, setCurrentPosition] = useState('');
  const [draggingPlayer, setDraggingPlayer] = useState({
    position: '',
    type: '',
  });
  const [roster, setRoster] = useState(createEmptyRoster(formation));
  const grabRoster = async () => {
    try {
      const response = await fetch(`http://localhost:4007/squads/${squadID}`, {
        method: 'GET',
      });
      const squadObj = await response.json();
      setRoster(squadObj.roster);
      setFormation(squadObj.squadInfo.formation);
      setSquadName(squadObj.squadInfo.squad_name);
    } catch (error) {
      console.error(getErrorMessage(error));
    }
  };

  useEffect(() => {
    if (squadID !== 0) {
      grabRoster();
    }
  }, []);

  const formationArray =
    formationPositions[`f_${formation}` as keyof typeof formationPositions];
  // const [allPositions, setAllPositions] = useState(formationArray);

  return (
    <div className="flex flex-col">
      <SelectDbModal dbType={dbType} setDbType={setDbType} />
      {/* Conditional for the Add Player Modal */}
      {showAddPlayer ? (
        <AddPlayer
          showAddPlayer={showAddPlayer}
          setAddPlayerModal={setAddPlayerModal}
          currentPosition={currentPosition}
          roster={roster}
          setRoster={setRoster}
        />
      ) : null}
      <div className="flex">
        <OptionsBar
          formation={formation}
          setFormation={setFormation}
          setRoster={setRoster}
          roster={roster}
          squadName={squadName}
          setSquadName={setSquadName}
          squadID={squadID}
        />
        <FormationUi
          formation={formation}
          setAddPlayerModal={setAddPlayerModal}
          setCurrentPosition={setCurrentPosition}
          roster={roster}
          setRoster={setRoster}
          draggingPlayer={draggingPlayer}
          setDraggingPlayer={setDraggingPlayer}
        />
      </div>
      <BenchBar
        allPositions={formationArray}
        roster={roster}
        setRoster={setRoster}
        currentPosition={currentPosition}
        setCurrentPosition={setCurrentPosition}
        setAddPlayerModal={setAddPlayerModal}
        draggingPlayer={draggingPlayer}
        setDraggingPlayer={setDraggingPlayer}
      />
    </div>
  );
}

// test Roster:

// {
//   firstTeam: {
//     ls: {
//       name: 'R. Lukaku',
//       position: 'ST',
//       ovr: 86,
//       player_id: 46,
//       player_photo: 'https://cdn.sofifa.net/players/192/505/23_60.png',
//     },
//     rs: {
//       name: 'H. Kane',
//       position: 'ST',
//       ovr: 89,
//       player_id: 11,
//       player_photo: 'https://cdn.sofifa.net/players/202/126/23_60.png',
//     },
//     lm: {
//       name: 'M. Mudryk',
//       position: 'RM',
//       ovr: 75,
//       player_id: 1495,
//       player_photo: 'https://cdn.sofifa.net/players/246/340/23_60.png',
//     },
//     lcm: {
//       name: 'C. Eriksen',
//       position: 'CM',
//       ovr: 82,
//       player_id: 265,
//       player_photo: 'https://cdn.sofifa.net/players/190/460/23_60.png',
//     },
//     rcm: {
//       name: 'T. Adams',
//       position: 'CDM',
//       ovr: 76,
//       player_id: 1097,
//       player_photo: 'https://cdn.sofifa.net/players/232/999/23_60.png',
//     },
//     rm: {
//       name: 'G. Bale',
//       position: 'ST',
//       ovr: 81,
//       player_id: 339,
//       player_photo: 'https://cdn.sofifa.net/players/173/731/23_60.png',
//     },
//     lb: {
//       name: 'A. Davies',
//       position: 'LM',
//       ovr: 84,
//       player_id: 142,
//       player_photo: 'https://cdn.sofifa.net/players/234/396/23_60.png',
//     },
//     lcb: {
//       name: 'V. van Dijk',
//       position: 'CB',
//       ovr: 90,
//       player_id: 10,
//       player_photo: 'https://cdn.sofifa.net/players/203/376/23_60.png',
//     },
//     rcb: {
//       name: 'Marquinhos',
//       position: 'CB',
//       ovr: 88,
//       player_id: 26,
//       player_photo: 'https://cdn.sofifa.net/players/207/865/23_60.png',
//     },
//     rb: {
//       name: 'A. Hakimi',
//       position: 'RB',
//       ovr: 84,
//       player_id: 141,
//       player_photo: 'https://cdn.sofifa.net/players/235/212/23_60.png',
//     },
//     gk: {
//       name: 'Diogo Costa',
//       position: 'GK',
//       ovr: 79,
//       player_id: 611,
//       player_photo: 'https://cdn.sofifa.net/players/234/577/23_60.png',
//     },
//   },
//   substitutes: {
//     s1: {
//       name: 'H. Lloris',
//       position: 'GK',
//       ovr: 87,
//       player_id: 34,
//       player_photo: 'https://cdn.sofifa.net/players/167/948/23_60.png',
//     },
//     s2: {
//       name: 'R. Lewandowski',
//       position: 'ST',
//       ovr: 91,
//       player_id: 3,
//       player_photo: 'https://cdn.sofifa.net/players/188/545/23_60.png',
//     },
//     s3: {
//       name: 'T. Hern????ndez',
//       position: 'LWB',
//       ovr: 85,
//       player_id: 87,
//       player_photo: 'https://cdn.sofifa.net/players/232/656/23_60.png',
//     },
//     s4: {
//       name: 'Emerson Royal',
//       position: 'RWB',
//       ovr: 78,
//       player_id: 690,
//       player_photo: 'https://cdn.sofifa.net/players/247/204/23_60.png',
//     },
//     s5: {
//       name: 'R. Bentancur',
//       position: 'CDM',
//       ovr: 79,
//       player_id: 556,
//       player_photo: 'https://cdn.sofifa.net/players/227/535/23_60.png',
//     },
//     s6: {
//       name: 'D. Kulusevski',
//       position: 'CAM',
//       ovr: 81,
//       player_id: 303,
//       player_photo: 'https://cdn.sofifa.net/players/247/394/23_60.png',
//     },
//     s7: {
//       name: 'A. Bastoni',
//       position: 'CB',
//       ovr: 84,
//       player_id: 138,
//       player_photo: 'https://cdn.sofifa.net/players/237/383/23_60.png',
//     },
//   },
//   reserves: [
//     {
//       name: 'C. De Ketelaere',
//       position: 'CAM',
//       ovr: 78,
//       player_id: 692,
//       player_photo: 'https://cdn.sofifa.net/players/251/470/23_60.png',
//     },
//     {
//       name: 'F. Tomori',
//       position: 'CB',
//       ovr: 84,
//       player_id: 146,
//       player_photo: 'https://cdn.sofifa.net/players/232/756/23_60.png',
//     },
//     {
//       name: 'S. Tonali',
//       position: 'CDM',
//       ovr: 84,
//       player_id: 132,
//       player_photo: 'https://cdn.sofifa.net/players/241/096/23_60.png',
//     },
//     {
//       name: 'K. Kvaratskhelia',
//       position: 'CAM',
//       ovr: 76,
//       player_id: 1304,
//       player_photo: 'https://cdn.sofifa.net/players/247/635/23_60.png',
//     },
//     {
//       name: 'V. Osimhen',
//       position: 'ST',
//       ovr: 83,
//       player_id: 167,
//       player_photo: 'https://cdn.sofifa.net/players/232/293/23_60.png',
//     },
//     {
//       name: 'N. Zaniolo',
//       position: 'CAM',
//       ovr: 81,
//       player_id: 292,
//       player_photo: 'https://cdn.sofifa.net/players/238/067/23_60.png',
//     },
//     {
//       name: 'T. Lamptey',
//       position: 'RWB',
//       ovr: 75,
//       player_id: 1466,
//       player_photo: 'https://cdn.sofifa.net/players/242/418/23_60.png',
//     },
//     {
//       name: 'L. Messi',
//       position: 'CAM',
//       ovr: 91,
//       player_id: 1,
//       player_photo: 'https://cdn.sofifa.net/players/158/023/23_60.png',
//     },
//     {
//       name: 'I. Zabarnyi',
//       position: 'CB',
//       ovr: 73,
//       player_id: 2360,
//       player_photo: 'https://cdn.sofifa.net/players/258/781/23_60.png',
//     },
//   ],
// } as rosterObject
