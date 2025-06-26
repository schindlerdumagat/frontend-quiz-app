import Title from "../components/Title";
import ThemeToggle from "../components/ThemeToggle";

export default function Layout({ children, subject }) {
  return (
    <div className="layout">
      <header className="header">
        {subject && <Title title={subject.title} imageSrc={subject.icon} />}
        <ThemeToggle />
      </header>
      <main className="main">
        {children}
      </main>
    </div>
  );
}
