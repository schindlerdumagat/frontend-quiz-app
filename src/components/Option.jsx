export default function Option({ children, letter, state = "", disabled = false }) {

    let className = "option";

    if (state === 'selected') {
        className += " option--selected";
    } else if (state === 'correct') {
        className += " option--correct";
    } else if (state === 'error') {
        className += " option--error";
    }

    return (
        <button disabled={disabled} className={className}>
            <span className="option__letter">{letter}</span>
            <p className="option__value">{children}</p>
        </button>
    )
}