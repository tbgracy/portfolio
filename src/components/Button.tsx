type ButtonProps = {
    type?: "reset" | "submit",
    label: string,
    onClick?: () => void,
}

export default function Button({ type, label, onClick }: ButtonProps) {
    return <button type={type} onClick={onClick}>
        {label}
    </button>
}