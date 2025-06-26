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
  const { question, options, answer } = questions[questionIndex];

  // This will be rerendered to update the state of the options after each user interactions
  const choices = options.map((option, index) => {
    let state = ""; 
    
    // This will run after selecting an answer and clicking the submit button.
    if (showAnswer) {

      // This will show the user if his selected answer is correct or wrong.
      if (option === selectedOption) {
        state = option === answer ? "correct" : "error";
      } else {

        // This will show the correct answer after submission if the user selected the wrong answer.
        if (option === answer) {
          state = "answer"
        }
      }
    } else {

      // This will show the currently selected option by the user before they click submit.
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
          disabled={showAnswer} // Disables the options after submissions
        >
          {option}
        </Option>
      </li>
    );
  });
  
  // Sets the currectly selected option
  function handleOptionClick(option) {
      setSelectedOption(option); 
  }

  function handleSubmitClick() {
    // If the user clicked submit without selecting an option, it will show an error message
    if (!selectedOption) {
      setError(true);
      return;
    }

    // Checks if the selected option is the correct answer.
    // It will increment the score if it is correct.
    if (selectedOption === answer) {
      setScore((prev) => prev + 1);
    }
    
    // This triggers the evaluation of the selected option and revealing the correct answer
    setShowAnswer(true);
  }

  // This redirects you to the next question or to the results page
  function handleNextQuestionClick() {
  
    // This will reset the state of the quiz upon moving on to the next question
    if (questionIndex < questions.length - 1) {
      setQuestionIndex((prev) => prev + 1);
      setSelectedOption(null);
      setShowAnswer(false);
      setError(false);
    } else {

      // It will redirect you to the results page after finishing the quiz
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
          {choices}
        </ol>
        {showAnswer && selectedOption ? (
          <Button onButtonClick={handleNextQuestionClick}>{questionIndex < questions.length - 1 ? "Next Question" : "View Score"}</Button>
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
