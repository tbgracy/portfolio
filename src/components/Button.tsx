export default function Button({ type, label }: { type?: "reset" | "submit", label: string }) {
    // TOOD : Add onClick event
    return <button type={type} >
        {label}
    </button>
}