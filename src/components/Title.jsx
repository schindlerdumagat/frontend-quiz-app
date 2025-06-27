export default function Title({ title, imageSrc }) {

    return (
        <div className="title">
            <img className={`title__icon title__icon--${title.toLowerCase()}`} src={imageSrc} alt="" />
            <p>{title}</p>
        </div>
    )
}