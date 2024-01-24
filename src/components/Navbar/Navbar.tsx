import { Menu } from "lucide-react";

import Logo from "../Navbar/Logo";
import Navlink from "../Navbar/Navlink";

export default function Navbar() {
    return (
        <nav>
            <Logo />
            <ul className="expanded-navbar">
                <Navlink label={"About"} target={"#about"} />
                <Navlink label={"Skills"} target={"#skills"} />
                <Navlink label={"Projects"} target={"#projects"} />
                <Navlink label={"Contact"} target={"#contact"} />
            </ul>

            <div className="shrinked-navbar"><Menu />
                <ul className="hamburger-navbar">
                    <Navlink label={"About"} target={"#about"} />
                    <Navlink label={"Skills"} target={"#skills"} />
                    <Navlink label={"Projects"} target={"#projects"} />
                    <Navlink label={"Contact"} target={"#contact"} />
                </ul>
            </div>
        </nav>
    );
}