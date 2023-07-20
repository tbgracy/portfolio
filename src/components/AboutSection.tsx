import ExternalLink from "./ExternalLinks";
import SectionTitle from "./SectionTitle";

import aboutImg from "../assets/customIcons/about.png";
import portrait from "../assets/portrait.png";

export default function AboutSection() {
    return (<section id="about">
        <SectionTitle icon={aboutImg} value={"About"} />
        <h2>Tsierenana Botramanagna Gracy</h2>
        <ExternalLink />
        <div className="content">
            <p>
                Hi, I'm Gracy, a Python and Flutter developer based in Antsirabe,
                Madagascar (but that doesn't mean I'm only familiar with those two
                techs 🙂). I recently graduated in Software Development at ASJA and
                I'm currently enrolled in Software Engineering graduate program in
                the same school. I'm also an ALX-T Udacity graduate (Full Stack Developer
                Nanodegree). I'm an avid reader and learner. Beside regular university courses,
                I discovered programming in highschool through OpenClassroom's old PDFs (a course
                about the C programming language).
            </p>
            <img src={portrait} alt="" />
        </div>
    </section>);
}