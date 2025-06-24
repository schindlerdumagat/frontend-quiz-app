import ProgressBar from "../components/ProgressBar";
import Option from "../components/Option";
import Button from "../components/Button";

export default function Quiz() {
  return (
    <div className="quiz">
      <div className="quiz__question-container">
        <p className="quiz__number">Question 6 of 10</p>
        <p className="quiz__question">
          Which of these color contrast ratios defines the minimum WCAG 2.1
          Level AA requirement for normal text?
        </p>
        <ProgressBar value={60} />
      </div>
      <div className="quiz__option-container">
        <ol className="quiz__options" role="list">
          <li className="quiz__option-item">
            <Option letter="A" state="selected">4.5:1</Option>
          </li>
          <li className="quiz__option-item">
            <Option letter="B">4.5:1</Option>
          </li>
          <li className="quiz__option-item">
            <Option letter="C">4.5:1</Option>
          </li>
          <li className="quiz__option-item">
            <Option letter="D">4.5:1</Option>
          </li>
        </ol>
        <Button>Submit Answer</Button>
      </div>
    </div>
  );
}
