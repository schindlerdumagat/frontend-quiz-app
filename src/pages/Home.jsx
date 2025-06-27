import Subject from "../components/Subject";

export default function Home({ subjects, onSubjectClick }) {
  const subjectList = subjects.map((subject, index) => {
    return (
      <li key={subject.title} className="home__subject-item">
        <Subject imageSrc={subject.icon} onSubjectClick={() => onSubjectClick(index)}>
          {subject.title}
        </Subject>
      </li>
    );
  });

  return (
    <div className="home">
      <div className="home__title-container">
        <h1 className="home__title">
          Welcome to the{" "}
          <strong className="home__title-highlight">Frontend Quiz!</strong>
        </h1>
        <p className="home__description">Pick a subject to get started.</p>
      </div>
      <ul className="home__subjects">
        {subjectList}
      </ul>
    </div>
  );
}
