export default function StackSet({ data }: { data: Array<string> }) {
    const stackItems = data.map((stackItem) => {
        return <li className="project__stack-item">{stackItem}</li>
    });

    return (
        <ul className="stack">
            {stackItems}
        </ul>
    );
}