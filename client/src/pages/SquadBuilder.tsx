import React, { useState } from 'react';
import SelectDbModal from '../components/SelectDbModal';

export default function SquadBuilder() {
  const [dbType, setDbType] = useState(null);

  return (
    <div>
      <SelectDbModal dbType={dbType} setDbType={setDbType} />
    </div>
  );
}
