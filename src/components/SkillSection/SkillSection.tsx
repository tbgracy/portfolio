import SectionTitle from "../SectionTitle";

import skillIcon from "/src/assets/customIcons/skills.png";

import skills from "../../data/skills.json";
import SkillSet from "./SkillSet";
import { useTranslation } from "react-i18next";

export default function SkillSection() {
    const skillSets = skills.map((skill, i) => {
        return <SkillSet key={i} data={skill} />;
    })

    const { t } = useTranslation();

    return (
        <section id="skills">
            <SectionTitle icon={skillIcon} value={t("skills")} />
            <article id="skill-container">
                {skillSets}
            </article>
        </section>
    );
}