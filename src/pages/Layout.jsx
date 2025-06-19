import ThemeToggle from "../components/ThemeToggle";

export default function Layout({ children }) {
  return (
    <>
      <header className="header">
        <ThemeToggle />
      </header>
      <main className="main">
        {children}
      </main>
    </>
  );
}
