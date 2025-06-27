export default function Subject({ children, imageSrc, onSubjectClick }) {
  return (
    <button type="button" className="subject" onClick={onSubjectClick}>
      <img className={`subject__icon subject__icon--${children.toLowerCase()}`} src={imageSrc} alt="" />
      <span className="subject__title">{children}</span>
    </button>
  );
}
