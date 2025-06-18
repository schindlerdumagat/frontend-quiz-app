export default function ThemeToggle() {
    return (
        <div className="toggle-container">
            <img src="/src/assets/images/icon-sun-dark.svg" alt="" />
            <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
            </label>
            <img src="/src/assets/images/icon-moon-dark.svg" alt="" />
        </div>
    )
}