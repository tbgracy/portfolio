import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
    en: {
        translation: {
            "about": "About",
            "skills": "Skills",
            "projects": "Projects",
            "contact": "Contact",
            "my-resume": "My resume",
            "programming-languages-frameworks": "Programmig Languages & Frameworks",
            "databases": "Databases",
            "tools": "Tools",
            "wanna-talk": "Wanna talk ?",
            "fr": "French",
            "en": "English",
            "stuff-i-made": "Stuff I made",
            "all-projects": "All projects",
            "contact-cta": "Send me direct message to one of the digital profiles linked here.",
            "signature@tbgracy": "Made with 🧠 by @tbgracy",
            "about-me": `
                Hi, I'm Gracy, a Python and Flutter developer based in Antsirabe,
                Madagascar(but that doesn't mean I'm only familiar with those two
                techs 🙂).I recently graduated in Software Development at ASJA and
                I'm currently enrolled in Software Engineering graduate program in
                the same school.I'm also an ALX-T Udacity graduate (Full Stack Developer
                Nanodegree).I'm an avid reader and learner. Beside regular university courses,
                I discovered programming in highschool through OpenClassroom's old PDFs (a course
                about the C programming language).
                Asides from tech stuff, I'm an engaged visual artist. My experience in the artistic 
                field help me to become really keen about small details in design and all.`,
        }
    },
    fr: {
        translation: {
            "about": "À propos",
            "skills": "Compétences",
            "projects": "Projets",
            "contact": "Contact",
            "my-resume": "Mon CV",
            "programming-languages-frameworks": "Langages de programmation & Frameworks",
            "databases": "Bases de données",
            "tools": "Outils",
            "wanna-talk": "Envie de discuter ?",
            "fr": "Francais",
            "en": "Anglais",
            "stuff-i-made": "Mes réalisations",
            "all-projects": "Tous les projets",
            "contact-cta": "Envoi-moi un DM via les profils listés ci-dessous.",
            "signature@tbgracy": "Fait avec 🧠 par @tbgracy",
            "about-me": `
                Bonjour, je suis Gracy, développeur Python et Flutter basé à Antsirabe, 
                Madagascar (mais cela ne signifie pas que je ne connais que ces deux 
                technologies 🙂). J'ai récemment obtenu un diplôme en développement de 
                logiciels à l'ASJA et je suis actuellement inscrit au programme de maîtrise 
                en génie logiciel dans la même école. Je suis également diplômé du nanodegré
                de développeur Full Stack ALX-T Udacity. Je suis un lecteur et un apprenant
                passionné. Outre les cours universitaires réguliers, j'ai découvert la 
                programmation au lycée grâce aux anciens PDF d'OpenClassroom (un cours sur 
                le langage de programmation C).
                En dehors du domaine technologique, je suis un dessinateur engagé. Mon expérience 
                dans le domaine artistique m'a aidé à devenir vraiment attentif aux petits détails.`,
        }
    }
};

const currentLng = localStorage.getItem('lng');

await i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: currentLng ?? "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
        // if you're using a language detector, do not define the lng option

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;