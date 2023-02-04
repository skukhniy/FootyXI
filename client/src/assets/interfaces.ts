export interface firstTeamObject {
  [key: string | number]: playerObject;
}

interface playerObject {
  name: string;
  position: string;
  ovr: number;
}
