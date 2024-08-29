import { useTranslation } from "react-i18next";

import ExternalLink from "./ExternalLinks";
import SectionTitle from "./SectionTitle";
import Button from "./Button";

import aboutImg from "../assets/customIcons/about.png";
import portrait from "../assets/portrait.png";

import personal_info from "../data/personal_info.json";

export default function AboutSection() {
    function handleResumeButtonClick() {
        window.location.href = personal_info.resume_link;
    }

    const { t } = useTranslation();

    return (<section id="about">
        <SectionTitle icon={aboutImg} value={t("about")} />
        <h2>Tsierenana Botramanagna Gracy</h2>
        <ExternalLink />
        <div className="content">
            <div>
                <p>
                    {t("about-me")}
                </p>
                <Button label={t("my-resume")} onClick={handleResumeButtonClick} />
            </div>
            <img src={portrait} alt="" />
        </div>
    </section>);
}