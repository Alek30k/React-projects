import { Square } from "./Square.jsx";

export function WinnerModal({ winner, resetGame }) {
  if (winner === null) return null;

  const winnerText = winner === false ? "Empate" : "Ganó:";
  const winnerColor = winner === false ? "empate" : "winner";
  const textWinner = winner === false ? "text-empate" : "text-winner";

  return (
    <section className={winnerColor}>
      <div className="text">
        <div className={textWinner}>
          <h2>{winnerText}</h2>

          <header className="win">{winner && <Square>{winner}</Square>}</header>
        </div>
        <footer>
          <button onClick={resetGame}>Empezar de nuevo</button>
        </footer>
      </div>
    </section>
  );
}
