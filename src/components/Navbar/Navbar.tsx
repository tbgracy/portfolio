import { Menu } from "lucide-react";

import Logo from "../Navbar/Logo";
import Navlink from "../Navbar/Navlink";
import { useRef } from "react";
import LanguageSwitch from "./LanguageSwitch";
import { useTranslation } from "react-i18next";

export default function Navbar() {
    const navRef = useRef<HTMLUListElement>(null);
    const { t } = useTranslation();

    function handleClick() {
        if (navRef.current!.classList.contains('show')) {
            navRef.current!.classList.remove('show');
        } else {
            navRef.current!.classList.add('show');
        }
    }

    return (
        <nav>
            <Logo />
            <ul className="expanded-navbar">
                <Navlink label={t("about")} target={"#about"} />
                <Navlink label={t("skills")} target={"#skills"} />
                <Navlink label={t("projects")} target={"#projects"} />
                <Navlink label={t("contact")} target={"#contact"} />
            </ul>
            <LanguageSwitch />

            <div className="shrinked-navbar" onClick={handleClick}><Menu />
                <ul ref={navRef} className="hamburger-navbar">
                    <Navlink label={t("about")} target={"#about"} />
                    <Navlink label={t("contact")} target={"#skills"} />
                    <Navlink label={t("projects")} target={"#projects"} />
                    <Navlink label={t("contact")} target={"#contact"} />
                </ul>
            </div>
        </nav>
    );
}