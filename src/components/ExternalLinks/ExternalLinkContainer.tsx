import ExternalLinkItem from "./ExternalLinkItem";
import { FaFacebook, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function ExternalLinkContainer() {
    return (
        <ul className="external-links">
            <ExternalLinkItem url="https://facebook.com/gracy.botramanagna" icon={<FaFacebook />} title="Botramanagna Gracy"/>
            <ExternalLinkItem url="https://github.com/tbgracy" icon={<FaGithub />} title="tbgracy"/>
            <ExternalLinkItem url="https://linkedin.com/in/tbgracy" icon={<FaLinkedin />} title="tbgracy"/>
            <ExternalLinkItem url="mailto:gtsierenana@gmail.com" icon={<FaEnvelope />} title="gtsierenana@gmail.com"/>
        </ul>
    );
}