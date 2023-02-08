export interface rosterObject {
  firstTeam: firstTeamObject;
  substitutes: substituteObject;
  reserves: Array<playerObject>;
}

export interface firstTeamObject {
  [key: string | number]: playerObject;
}

export interface substituteObject {
  [key: string | number]: playerObject;
}

export interface playerObject {
  name: string;
  position: string;
  ovr: number;
  player_id?: number;
  player_photo?: string;
}
