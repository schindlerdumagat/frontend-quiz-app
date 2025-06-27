export default function Subject({ children, imageSrc, onSubjectClick }) {
  return (
    <button type="button" className="subject" onClick={onSubjectClick}>
      <img className={`subject__icon subject__icon--${children.toLowerCase()}`} src={imageSrc} alt="" />
      <p className="subject__title">{children}</p>
    </button>
  );
}
