import { Languages } from "lucide-react";
import './LanguageSwitch.scss';

export default function LanguageSwitch() {
    return <div className="language-switch">
        <Languages />
        <ul>
            <li>French</li>
            <li>English</li>
        </ul>
    </div>
}