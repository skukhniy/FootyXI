import { Request, Response } from 'express';
import { pool } from '../db';

function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message;
  return String(error);
}

// save a new squad
exports.saveSquad = async (req: Request, res: Response) => {
  try {
    res.json(req.body);
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
