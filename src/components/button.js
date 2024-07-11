export default function Button({onClick,label}) {
    return(
        <button onClick={onClick} classname="btn">
            {label}
        </button>
    )
}