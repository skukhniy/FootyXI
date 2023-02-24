import React, { useState, useEffect } from 'react';
import { formationPositions } from '../assets/formationsData';
import {
  firstTeamObject,
  playerObject,
  substituteObject,
  rosterObject,
} from '../assets/interfaces';

export default function createEmptyRoster(formation: String) {
  const templatePlayerObj = {
    name: '',
    position: '',
    ovr: 0,
    player_id: undefined,
    player_photo: undefined,
  };

  const substituteTemplate = {
    s1: templatePlayerObj,
    s2: templatePlayerObj,
    s3: templatePlayerObj,
    s4: templatePlayerObj,
    s5: templatePlayerObj,
    s6: templatePlayerObj,
    s7: templatePlayerObj,
  } as substituteObject;

  const formationKey = `f_${formation}`;
  const formationArray =
    formationPositions[formationKey as keyof typeof formationPositions];
  const [allPositions, setAllPositions] = useState(formationArray);

  const createFirstTeamTemplate = (formationArray: any) => {
    let firstTeamTemplate = {} as firstTeamObject;
    formationArray.forEach((position: string) => {
      firstTeamTemplate[position] = {
        name: '',
        position: '',
        ovr: 0,
        player_id: undefined,
        player_photo: undefined,
      };
    });
    return firstTeamTemplate;
  };

  const rosterTemplate = {
    firstTeam: createFirstTeamTemplate(formationArray),
    substitutes: substituteTemplate,
    reserves: [] as Array<playerObject>,
  };
  return rosterTemplate;
}
