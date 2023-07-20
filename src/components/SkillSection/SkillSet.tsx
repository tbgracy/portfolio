type Skill = {
    category: string,
    items: Array<string>,
};

export default function SkillSet({ data }: { data: Skill }) {
    const skillItems: Array<JSX.Element> = [];

    for (const skillItem of data.items) {
        skillItems.push(<li className="skill-item">{skillItem}</li>);
    }

    return (
        <article>
            <h3>{data.category}</h3>
            <ul className="skill-list">
                {skillItems}
            </ul>
        </article>
    );
}