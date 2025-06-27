export default function Button({ children, onButtonClick }) {
    return <button type="button" className="button" onClick={onButtonClick}>{children}</button>
}