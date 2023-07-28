import SectionTitle from "./SectionTitle";

import contactIcon from "../assets/customIcons/contact.png";
import ExternalLink from "./ExternalLinks";

export default function ContactSection() {
    return <section id="contact">
        <SectionTitle icon={contactIcon} value="Wanna talk ? " />
        <p>
            Leave a message below or send me direct message to one of the digital
            profiles linked here.
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