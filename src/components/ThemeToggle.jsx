export default function ThemeToggle() {
    return (
        <div className="toggle-container">
            <img className="theme-logo" src="/images/icon-sun-dark.svg" alt="" />
            <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
            </label>
            <img className="theme-logo" src="/images/icon-moon-dark.svg" alt="" />
        </div>
    )
}