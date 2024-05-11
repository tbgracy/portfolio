import { Menu } from "lucide-react";

import Logo from "../Navbar/Logo";
import Navlink from "../Navbar/Navlink";
import { useRef } from "react";

export default function Navbar() {
    const navRef = useRef<HTMLUListElement>(null);

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
                <Navlink label={"About"} target={"#about"} />
                <Navlink label={"Skills"} target={"#skills"} />
                <Navlink label={"Projects"} target={"#projects"} />
                <Navlink label={"Contact"} target={"#contact"} />
            </ul>

            <div className="shrinked-navbar" onClick={handleClick}><Menu />
                <ul ref={navRef} className="hamburger-navbar">
                    <Navlink label={"About"} target={"#about"} />
                    <Navlink label={"Skills"} target={"#skills"} />
                    <Navlink label={"Projects"} target={"#projects"} />
                    <Navlink label={"Contact"} target={"#contact"} />
                </ul>
            </div>
        </nav>
    );
}