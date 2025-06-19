export default function Title({ title, imageSrc }) {

    return (
        <div className="title">
            <img src={imageSrc} alt="" />
            <p>{title}</p>
        </div>
    )

}