import Title from "../components/Title";
import ThemeToggle from "../components/ThemeToggle";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header className="header">
        <Title title="Accessibility" imageSrc="/images/icon-accessibility.svg" />
        <ThemeToggle />
      </header>
      <main className="main">
        {children}
      </main>
    </div>
  );
}
