import { Sign } from "../src/utils/constants";

export interface Game {
	id: string;
	player1_name: string;
	player2_name?: string | null;
	moves: Sign[] | string[];
	createdAt?: Date;
}

const EMPTY_MOVES = Array(9).fill("");

export async function createGame(
	playerName: string,
	secondPlayerName: string
): Promise<Game> {

	const game = {
		id: "",
		player1_name: playerName,
		player2_name: secondPlayerName,
		moves: EMPTY_MOVES,
	};

	return game;
}

export async function getGameById(gameId: string): Promise<Game | null> {
	const games = [{ id: "gameId", player1_name: "", player2_name: "", moves: EMPTY_MOVES }];

	const game = games.find(game => game.id === gameId);

	return game ?? null;
}

export async function updateGame(
	gameId: string | undefined,
	moves: string[]
): Promise<Game> {

	const game = { id: "gameId", player1_name: "", player2_name: "", moves: EMPTY_MOVES };

	if (game.id === gameId) {
		game.moves = moves;
	}
	else {
		// Game not found
	}

	return game;
}

export async function getGames(): Promise<Game[]> {
	const games = [{ id: "gameId", player1_name: "", player2_name: "", moves: EMPTY_MOVES }];

	return games;
}
