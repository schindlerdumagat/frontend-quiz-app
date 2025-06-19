export default function Subject({ children, imageSrc }) {
  return (
    <button className="subject">
      <img src={imageSrc} alt="" />
      <h2 className="subject__title">{children}</h2>
    </button>
  );
}
