import { Request, Response } from 'express';

// // get all posts
// exports.getPosts = async (req, res) => {
// 	try {
// 		const posts = await Post.find();
// 		res.json(posts);
// 	} catch (err) {
// 		res.status(500).json({ message: err.message });
// 	}
// 	// res.json("Get Posts");
// };

function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message;
  return String(error);
}

// getPlayers

// getPlayer(specific)

// player search - squad builder
exports.playerSearch = async (req: Request, res: Response) => {
  try {
    res.json('player search');
  } catch (error) {
    res.status(500).json({ message: getErrorMessage(error) });
  }
};
