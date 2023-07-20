export default function SectionTitle({icon, value}: {icon: string, value: string}) {
    return (
        <hgroup>
            <img src={icon} />
            <h2>{value}</h2>
        </hgroup>
    );
}