export default function Navlink({ label, target }: { label: string, target: string }) {
    return <li><a href={target}>{label}</a></li>
}