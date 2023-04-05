import { Game } from "../lib/gameStore";
import {
  calculateWinner,
  calculateTie,
  getPlayerNameFromSign,
  getRandomPepTalk,
  getWhosTurnItIs,
} from "../utils/gameUtils";
import styles from "../styles/Home.module.css";
import { WinnerAnnouncement } from "./WinnerAnnouncement";
import { TieAnnouncement } from "./TieAnnouncement";

interface Props {
  game: Game;
}

export function BoardHeader({ game }: Props) {
  const nextTurnSign = getWhosTurnItIs(game.moves);
  const winner = calculateWinner(game.moves);
  const tie = calculateTie(game.moves);

  if (winner) {
    return <WinnerAnnouncement winner={winner} game={game} />;
  }
  if (tie) {
    return <TieAnnouncement />;
  }
  return (
    <h1 className={styles.title}>
      {getRandomPepTalk()}
      <div>{getPlayerNameFromSign(nextTurnSign, game)}</div>
    </h1>
  );
}
