import { Request, Response } from 'express';
import { pool } from '../db';

function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message;
  return String(error);
}

interface rosterObject {
  firstTeam: firstTeamObject;
  substitutes: substituteObject;
  reserves: Array<playerObject>;
}

interface firstTeamObject {
  [key: string | number]: playerObject;
}

interface substituteObject {
  [key: string | number]: playerObject;
}

interface playerObject {
  name: string;
  position: string;
  ovr: number;
  player_id?: number;
  player_photo?: string;
}

// const newPlayer = await pool.query(
//   'INSERT INTO players (player_name, position, team) VALUES($1, $2, $3) RETURNING *',
//   [playerName, position, team]
// );

// create squad row
// const newSquad = async (userID, formation, squad_name) => {};

// add First Team Players
const addFirstTeam = async (firstTeam: firstTeamObject, squadID: Number) => {
  for (const [i, position] of Object.keys(firstTeam).entries()) {
    const addPlayer = await pool.query(
      'INSERT INTO firstteam (squad_id, player_id, position, position_order) VALUES ($1, $2, $3, $4)',
      [squadID, firstTeam[position].player_id, position, i + 1]
    );
  }
};

// add Substitute Players
const addSubs = async (substitutes: substituteObject, squadID: Number) => {
  for (const position of Object.keys(substitutes)) {
    const addPlayer = await pool.query(
      'INSERT INTO substitutes (squad_id, player_id, position) VALUES ($1, $2, $3)',
      [squadID, substitutes[position].player_id, position]
    );
  }
};

// add Reserve Players
const addReserves = async (reserves: Array<playerObject>, squadID: Number) => {
  for (const player of reserves) {
    const addPlayer = await pool.query(
      'INSERT INTO reserves (squad_id, player_id) VALUES ($1, $2)',
      [squadID, player.player_id]
    );
  }
};

// save a new squad
exports.saveSquad = async (req: Request, res: Response) => {
  try {
    const { userID, squadName, formation } = req.body[0];
    const { firstTeam, substitutes, reserves } = req.body[1];
    const addSquad = await pool.query(
      'INSERT INTO squads (user_id, formation, squad_name) VALUES($1, $2, $3) RETURNING id',
      [userID, formation, squadName]
    );

    const squadID = addSquad.rows[0].id;
    addFirstTeam(firstTeam, squadID);
    addSubs(substitutes, squadID);
    addReserves(reserves, squadID);

    res.json(squadID);
  } catch (error) {
    res.status(500).json({ message: getErrorMessage(error) });
  }
};

// update a squad
exports.updateSquad = async (req: Request, res: Response) => {
  try {
    const { squadName, formation } = req.body[0];
    console.log(squadName);
    const { firstTeam, substitutes, reserves } = req.body[1];
    const squadID = Number(req.params.id);

    // update squad info
    const updateSquadInfo = await pool.query(
      'UPDATE squads SET squad_name = $1, formation = $2 WHERE id = $3',
      [squadName, formation, squadID]
    );
    console.log([squadName, formation, squadID]);
    console.log(updateSquadInfo);

    // update firstTeamInfo
    for (const [positionOrder, position] of Object.keys(firstTeam).entries()) {
      const updatePlayer = await pool.query(
        'UPDATE firstteam SET player_id = $1, position = $2 WHERE squad_id = $3 AND position_order = $4',
        [firstTeam[position].player_id, position, squadID, positionOrder + 1]
      );
    }

    // update sub info
    for (const position of Object.keys(substitutes)) {
      const updateSubPlayer = await pool.query(
        'UPDATE substitutes SET player_id = $1 WHERE squad_id = $2 and position = $3',
        [substitutes[position].player_id, squadID, position]
      );
    }

    // update reserve info
    const deleteReserves = await pool.query(
      'delete from reserves * where squad_id = $1',
      [squadID]
    );
    console.log(reserves);
    addReserves(reserves, squadID);

    res.json(squadID);
  } catch (error) {
    res.status(500).json({ message: getErrorMessage(error) });
  }
};

// save an updated squad

const getSquadObject = async (squad_id: Number) => {
  // query first team players and create matching first team object for front end
  const firstTeamObject = {} as firstTeamObject;
  const firstTeamQuery = await pool.query(
    'select player_id, firstTeam.position, known_as, best_position, overall, fifa23.id, image_link FROM squads inner join firstTeam on squads.id = firstteam.squad_id inner join fifa23 on firstTeam.player_id = fifa23.id WHERE squads.id = $1 ORDER BY firstteam.position_order',
    [squad_id]
  );
  for (const player of firstTeamQuery.rows) {
    firstTeamObject[player.position] = {
      name: player.known_as,
      position: player.best_position,
      ovr: player.overall,
      player_id: player.player_id,
      player_photo: player.image_link,
    };
  }
  // query substitute players & create matching sub object for frontend
  const substituteObject = {} as substituteObject;
  const substituteQuery = await pool.query(
    'select squad_id, player_id, substitutes.position, known_as, best_position, overall, fifa23.id, image_link FROM squads inner join substitutes on squads.id = substitutes.squad_id inner join fifa23 on substitutes.player_id = fifa23.id WHERE squads.id = $1',
    [squad_id]
  );
  for (const player of substituteQuery.rows) {
    substituteObject[player.position] = {
      name: player.known_as,
      position: player.best_position,
      ovr: player.overall,
      player_id: player.player_id,
      player_photo: player.image_link,
    };
  }

  // query reserves, can send as is
  const reservesQuery = await pool.query(
    'select known_as, best_position, overall, fifa23.id, image_link FROM squads inner join reserves on squads.id = reserves.squad_id inner join fifa23 on reserves.player_id = fifa23.id WHERE squads.id = $1',
    [squad_id]
  );
  const reservesArray = [];
  for (const player of reservesQuery.rows) {
    reservesArray.push({
      name: player.known_as,
      position: player.best_position,
      ovr: player.overall,
      player_id: player.player_id,
      player_photo: player.image_link,
    });
  }

  const squadInfo = await pool.query(
    'SELECT squad_name, formation from squads where id = $1',
    [squad_id]
  );
  const roster = {
    firstTeam: firstTeamObject,
    substitutes: substituteObject,
    reserves: reservesArray,
  };
  const returnObj = {
    squadInfo: {
      squad_id: squad_id,
      squad_name: squadInfo.rows[0].squad_name,
      formation: squadInfo.rows[0].formation,
    },
    roster: roster,
  };
  return returnObj;
};

// get a specific squad
exports.getSpecificSquad = async (req: Request, res: Response) => {
  try {
    const squadID = req.params.id;
    const roster = await getSquadObject(Number(squadID));
    res.json(roster);
  } catch (error) {
    res.status(500).json({ message: getErrorMessage(error) });
  }
};

// get all squads
exports.getAllSquads = async (req: Request, res: Response) => {
  try {
    const squadIdQuery = await pool.query('SELECT id from squads', []);
    const rosterArray = [];
    for (const squadIdObject of squadIdQuery.rows) {
      const roster = await getSquadObject(squadIdObject.id);
      rosterArray.push(roster);
    }
    res.json(rosterArray);
  } catch (error) {
    res.status(500).json({ message: getErrorMessage(error) });
  }
};
// get all squads
exports.getUsersSquads = async (req: Request, res: Response) => {
  try {
    const squadIdQuery = await pool.query(
      'SELECT id from squads where user_id = $1',
      [req.params.user]
    );
    const rosterArray = [];
    for (const squadIdObject of squadIdQuery.rows) {
      const roster = await getSquadObject(squadIdObject.id);
      rosterArray.push(roster);
    }
    res.json(rosterArray);
  } catch (error) {
    res.status(500).json({ message: getErrorMessage(error) });
  }
};

// get all squad IDS
exports.getSquadIDs = async (req: Request, res: Response) => {
  try {
    const squadIdQuery = await pool.query('SELECT id from squads');
    const squadIdArray = [];
    for (const squadIdObject of squadIdQuery.rows) {
      squadIdArray.push(squadIdObject.id);
    }
    res.json(squadIdArray);
  } catch (error) {
    res.status(500).json({ message: getErrorMessage(error) });
  }
};

// delete specific squad
exports.deleteSquad = async (req: Request, res: Response) => {
  try {
    const squadID = req.params.id;
    const deleteReserves = await pool.query(
      'delete from reserves where squad_id = $1',
      [squadID]
    );
    const deleteSubs = await pool.query(
      'delete from substitutes where squad_id = $1',
      [squadID]
    );
    const deleteFirstTeam = await pool.query(
      'delete from firstteam where squad_id = $1',
      [squadID]
    );
    const deleteSquad = await pool.query('delete from squads where id = $1', [
      squadID,
    ]);
    res.json(`Squad : ${squadID} has been deleted`);
  } catch (error) {
    res.status(500).json({ message: getErrorMessage(error) });
  }
};
