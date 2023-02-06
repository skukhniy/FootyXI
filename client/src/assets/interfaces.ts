export interface firstTeamObject {
  [key: string | number]: playerObject;
}

interface playerObject {
  name: string;
  position: string;
  ovr: number;
  player_id?: number;
  player_photo?: string;
}
