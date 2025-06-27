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
            <span className="sun"></span>
            <label htmlFor="theme-toggle" className="switch">
                <input id="theme-toggle" type="checkbox" onChange={toggleTheme} />
                <span className="slider round"></span>
            </label>
            <span className="moon"></span>
        </div>
    )
}