import React from 'react';

interface playerInfoProp {
  playerInfo: playerObjectInfo;
}
interface playerObjectInfo {
  best_position: string;
  club_name: string;
  full_name: string;
  id: number;
  image_link: string;
  known_as: string;
  national_team_image_link: string;
  overall: number;
  potential: number;
}

export default function SearchResultPlayerCard({ playerInfo }: playerInfoProp) {
  console.log(`playerInfo`);
  console.log(playerInfo);
  return (
    <div className="flex justify-between items-center">
      <img id="playerPic" src={playerInfo.image_link}></img>
      <h3 id="fullName">{playerInfo.known_as}</h3>
      <h3 id="position">{playerInfo.best_position}</h3>
      <h3 id="overall">{playerInfo.overall}</h3>
      <h3 id="potential">{playerInfo.potential}</h3>
      <img
        id="nationFlag"
        src={
          playerInfo.national_team_image_link
            ? playerInfo.national_team_image_link
            : ''
        }
        className="w-[30px] h-[20px] text-center mt-1"
      ></img>
      <button className="rounded-full bg-green-400 inline-block h-8 w-8 text-white font-extrabold text-xl text-center">
        <p className="mb-1">+</p>
      </button>
    </div>
  );
}

{
  /* <img
id="playerPic"
src="https://cdn.sofifa.net/players/200/104/23_60.png"
></img>
<h3 id="fullName">Heung Min Son</h3>
<h3 id="position">LW</h3>
<h3 id="rating">89</h3>
<h3 id="potential">89</h3>
<img
id="nationFlag"
src="https://cdn.sofifa.net/flags/kr.png"
className="w-[30px] h-[20px] text-center mt-1"
></img>
<button className="rounded-full bg-green-400 inline-block h-8 w-8 text-white font-extrabold text-xl text-center">
<p className="mb-1">+</p>
</button> */
}
