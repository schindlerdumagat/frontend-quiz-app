export default function Subject({ children, imageSrc, onSubjectClick }) {
  return (
    <button className="subject" onClick={onSubjectClick}>
      <img className={`subject__icon subject__icon--${children.toLowerCase()}`} src={imageSrc} alt="" />
      <h2 className="subject__title">{children}</h2>
    </button>
  );
}
