import { Request, Response } from 'express';
import { pool } from '../db';

function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message;
  return String(error);
}

// getPlayers

// getPlayer(specific)

// player search - squad builder
exports.playerSearch = async (req: Request, res: Response) => {
  try {
    const queryName = `%${req.query.name}%`;
    const searchResult = await pool.query(
      'SELECT full_name, known_as, overall, potential, best_position, image_link, club_name, national_team_image_link, id FROM fifa23 WHERE full_name LIKE $1 LIMIT 50',
      [queryName]
    );
    res.json(searchResult.rows);
  } catch (error) {
    res.status(500).json({ message: getErrorMessage(error) });
  }
};
