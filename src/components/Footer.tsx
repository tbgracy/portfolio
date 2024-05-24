import { Trans } from "react-i18next";

export default function Footer() {
    const currentYear = (new Date()).getFullYear();

    return <footer>
        <hr />
        <p>
            &copy; {currentYear} - <Trans i18nKey={'signature@tbgracy'}>signature<a target="_blank" href="https://github.com/tbgracy">@tbgracy</a></Trans>
        </p>
    </footer>
}