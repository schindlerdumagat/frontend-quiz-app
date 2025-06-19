import Subject from "../components/Subject";

export default function Home() {
  return (
    <div className="home-container">
      <div className="home">
        <h1 className="home__title">
          Welcome to the{" "}
          <strong className="home__title-highlight">Frontend Quiz!</strong>
        </h1>
        <p className="home__description">Pick a subject to get started.</p>
      </div>
      <ul className="subjects" role="list">
        <li>
          <Subject imageSrc="/images/icon-html.svg">HTML</Subject>
        </li>
        <li>
          <Subject imageSrc="/images/icon-css.svg">CSS</Subject>
        </li>
        <li>
          <Subject imageSrc="/images/icon-js.svg">Javascript</Subject>
        </li>
        <li>
          <Subject imageSrc="/images/icon-accessibility.svg">
            Accessibility
          </Subject>
        </li>
      </ul>
    </div>
  );
}
