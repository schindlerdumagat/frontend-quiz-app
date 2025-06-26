import { useState } from "react";

import ProgressBar from "../components/ProgressBar";
import Option from "../components/Option";
import Button from "../components/Button";

export default function Quiz({ questions, onViewScoreClick }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [error, setError] = useState(false);
  const [score, setScore] = useState(0);

  const currentQuestionNumber = questionIndex + 1;
  const question = questions[questionIndex].question;
  const answer = questions[questionIndex].answer;
  const options = questions[questionIndex].options.map((option, index) => {
    let state = "";
    if (showAnswer && selectedOption) {
      if (option === selectedOption) {
        state = option === answer ? "correct" : "error";
      } else {
        state = option === answer && "answer";
      }
    } else {
      if (option === selectedOption) {
        state = "selected";
      }
    }

    return (
      <li key={option} className="quiz__option-item">
        <Option
          letter={String.fromCharCode(index + 65)}
          state={state}
          onOptionClick={() => handleOptionClick(option)}
          disabled={showAnswer}
        >
          {option}
        </Option>
      </li>
    );
  });

  function handleOptionClick(option) {
    setSelectedOption(option);
  }

  function handleSubmitClick() {
    if (!selectedOption) {
      setError(true);
      return;
    }

    if (selectedOption === answer) {
      setScore((prev) => prev + 1);
    }

    setShowAnswer(true);
  }

  function handleNextQuestionClick() {
    if (questionIndex < 9) {
      setQuestionIndex((prev) => prev + 1);
      setSelectedOption(null);
      setShowAnswer(false);
      setError(false);
    } else {
      onViewScoreClick(score);
    }
  }

  return (
    <div className="quiz">
      <div className="quiz__question-container">
        <p className="quiz__number">
          Question {currentQuestionNumber} of {questions.length}
        </p>
        <p className="quiz__question">{question}</p>
        <ProgressBar value={currentQuestionNumber * 10} />
      </div>
      <div className="quiz__option-container">
        <ol className="quiz__options" role="list" type="A">
          {options}
        </ol>
        {showAnswer && selectedOption ? (
          <Button onButtonClick={handleNextQuestionClick}>{questionIndex < 9 ? "Next Question" : "View Score"}</Button>
        ) : (
          <Button onButtonClick={handleSubmitClick}>Submit Answer</Button>
        )}
        {error && (
          <p className="error">
            <img src="/images/icon-error.svg" alt="" /> Please select an answer
          </p>
        )}
      </div>
    </div>
  );
}
