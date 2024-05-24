import { Languages } from "lucide-react";
import './LanguageSwitch.scss';
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";

export default function LanguageSwitch() {
    function changeLanguage(lng: string) {
        i18n.changeLanguage(lng).then(() => {
            localStorage.setItem('lng', lng);
            console.log();
        }).catch(() => {
            console.log();
        });
    }

    const { t } = useTranslation();

    return <div className="language-switch">
        <Languages />
        <ul>
            <li onClick={() => changeLanguage('fr')}>{t('fr')}</li>
            <li onClick={() => changeLanguage('en')}>{t('en')}</li>
        </ul>
    </div>
}