export default function StackSet({ data }: { data: Array<string> }) {
    const stackItems = data.map((stackItem, i) => {
        return <li key={i} className="project__stack-item">{stackItem}</li>
    });

    return (
        <ul className="stack">
            {stackItems}
        </ul>
    );
}