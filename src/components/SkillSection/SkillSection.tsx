import SectionTitle from "../SectionTitle";

import skillIcon from "/src/assets/customIcons/skills.png";

import skills from "../../data/skills.json";
import SkillSet from "./SkillSet";

export default function SkillSection() {
    const skillSets = skills.map((skill, i) => {
        return <SkillSet key={i} data={skill} />;
    })

    return (
        <section id="skills">
            <SectionTitle icon={skillIcon} value={"Skills"} />
            <article id="skill-container">
                {skillSets}
            </article>
        </section>
    );
}