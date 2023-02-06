import React from 'react';

export default function BenchPlayerCard() {
  return (
    <div className="flex flex-col border-r pr-7 pl-4 pb-1 pt-1">
      <div className="flex items-end justify-center">
        <div className="flex justify-center items-center">
          <div className="rounded-full bg-blue-300 h-3 w-3 mr-1"></div>
          <p id="POS" className="">
            RW
          </p>
        </div>
        <img src="https://cdn.sofifa.net/players/204/485/23_60.png"></img>
        <h1 className="font" id="OVR">
          84
        </h1>
      </div>
      <p id="name" className="text-center ml-4">
        Mahrez
      </p>
    </div>
  );
}
