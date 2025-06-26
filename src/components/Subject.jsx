export default function Subject({ children, imageSrc, onSubjectClick }) {
  return (
    <button className="subject" onClick={onSubjectClick}>
      <img src={imageSrc} alt="" />
      <h2 className="subject__title">{children}</h2>
    </button>
  );
}
