import React from 'react';
import { squadObj } from '../../assets/interfaces';

interface squadCardProps {
  squad: squadObj;
}

export default function ({ squad }: squadCardProps) {
  return (
    <div className="h-52 w-52 bg-green-200">
      <div className="h-52 w-52 bg-green-200"></div>
      <h3 className="text-center">{squad.squadInfo.squad_name}</h3>
      <h5 className="text-center">{squad.squadInfo.formation}</h5>
    </div>
  );
}
