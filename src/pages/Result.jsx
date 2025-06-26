import Button from "../components/Button";
import Title from "../components/Title";

export default function Result({ score, onPlayAgain }) {
  return (
    <div className="result">
      <h2 className="result__title">
        Quiz completed
        <strong className="result__title-highlight">You scored...</strong>
      </h2>
      <div className="result__body">
        <div className="result__score-container">
          <Title
            title="Accessibilty"
            imageSrc="/images/icon-accessibility.svg"
          />
          <p className="result__score">{score}</p>
          <p className="result__description">out of 10</p>
        </div>
        <Button onButtonClick={onPlayAgain}>Play Again</Button>
      </div>
    </div>
  );
}
