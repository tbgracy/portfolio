import SectionTitle from "./SectionTitle";

import contactIcon from "../assets/customIcons/contact.png";
import ExternalLink from "./ExternalLinks";
import { useTranslation } from "react-i18next";

export default function ContactSection() {
    const { t } = useTranslation();

    return <section id="contact">
        <SectionTitle icon={contactIcon} value={t('wanna-talk')} />
        <p>
            {t('contact-cta')}
        </p>
        <ExternalLink />
        {/* <form action="#" method="POST">
            <input type="text" name="name" id="name" placeholder="Your name" />
            <input type="email" name="email" id="email" placeholder="Your e-mail address" />
            <textarea name="message" id="message" placeholder="Your message"></textarea>
            <Button type="submit" label="Send"/>
        </form> */}
    </section>;
}