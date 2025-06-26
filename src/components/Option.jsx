export default function Option({
  children,
  letter,
  state = "",
  disabled = false,
  onOptionClick,
}) {
  let className = "option";

  if (state === "selected") {
    className += " option--selected";
  } else if (state === "correct") {
    className += " option--correct";
  } else if (state === "error") {
    className += " option--error";
  } else if (state === "answer") {
    className += " option--answer";
  }

  return (
    <button disabled={disabled} className={className} onClick={onOptionClick}>
      <span className="option__letter">{letter}</span>
      <p className="option__value">{children}</p>
    </button>
  );
}
