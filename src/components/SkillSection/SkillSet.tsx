import { useTranslation } from "react-i18next";

type Skill = {
    category: string,
    items: Array<string>,
};

export default function SkillSet({ data }: { data: Skill }) {
    const { t } = useTranslation();
    const skillItems = data.items.map((skillItem, i) => <li key={i} className="skill-item">{skillItem}</li>)

    return (
        <article>
            <h3>{t(data.category)}</h3>
            <ul className="skill-list">
                {skillItems}
            </ul>
        </article>
    );
}