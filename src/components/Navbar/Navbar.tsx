import Logo from "../Navbar/Logo";
import Navlink from "../Navbar/Navlink";

export default function Navbar() {
    return (
        <nav>
            <Logo />
            <ul>
                <Navlink label={"About"} target={"#about"} />
                <Navlink label={"Skills"} target={"#skills"} />
                <Navlink label={"Projects"} target={"#projects"} />
                <Navlink label={"Contact"} target={"#contact"} />
            </ul>
        </nav>
    );
}