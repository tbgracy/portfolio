import ExternalLinkItem from "./ExternalLinkItem";
import { FaFacebook, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function ExternalLinkContainer() {
    return (
        <ul className="external-links">
            <ExternalLinkItem url="https://facebook.com/gracy.botramanagna" icon={<FaFacebook />} />
            <ExternalLinkItem url="https://github.com/tbgracy" icon={<FaGithub />} />
            <ExternalLinkItem url="https://linkedin.com/in/tbgracy" icon={<FaLinkedin />} />
            <ExternalLinkItem url="mailto:gtsierenana@gmail.com" icon={<FaEnvelope />} />
        </ul>
    );
}