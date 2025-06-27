import { useState, useEffect } from "react"

export default function ThemeToggle() {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <div className="toggle-container">
            {/* <img className="theme-logo" src="/images/icon-sun-dark.svg" alt="" /> */}
            <span className="sun"></span>
            <label className="switch">
                <input type="checkbox" onChange={toggleTheme} />
                <span className="slider round"></span>
            </label>
            <span className="moon"></span>
            {/* <img className="theme-logo" src="/images/icon-moon-dark.svg" alt="" /> */}
        </div>
    )
}