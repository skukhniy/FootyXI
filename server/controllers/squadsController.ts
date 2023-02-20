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
    console.log(position);
    console.log(squadID);
    console.log(firstTeam[position].player_id);
    console.log(i);
    const addPlayer = await pool.query(
      'INSERT INTO firstteam (squad_id, player_id, position, position_order) VALUES ($1, $2, $3, $4) RETURNING id',
      [squadID, firstTeam[position].player_id, position, i + 1]
    );
  }
};

// save a new squad
exports.saveSquad = async (req: Request, res: Response) => {
  try {
    const { userID, squadName, formation } = req.body[0];
    const { firstTeam, substitutes, reserves } = req.body[1];
    3;
    const addSquad = await pool.query(
      'INSERT INTO squads (user_id, formation, squad_name) VALUES($1, $2, $3) RETURNING id',
      [userID, formation, squadName]
    );

    const squadID = addSquad.rows[0].id;
    addFirstTeam(firstTeam, squadID);

    res.json(squadID);
    // res.json(req.body);
  } catch (error) {
    res.status(500).json({ message: getErrorMessage(error) });
  }
};

// save an updated squad

// get all squads
exports.getAllSquads = async (req: Request, res: Response) => {
  try {
    res.json('all squads');
  } catch (error) {
    res.status(500).json({ message: getErrorMessage(error) });
  }
};

// get a specific squad
