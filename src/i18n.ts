import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
      "my-resume": "My resume",
      "programming-languages-frameworks": "Programmig Languages & Frameworks",
      databases: "Databases",
      tools: "Tools",
      "wanna-talk": "Wanna talk ?",
      fr: "French",
      en: "English",
      "stuff-i-made": "Stuff I made",
      "all-projects": "All projects",
      "contact-cta":
        "Send me direct message to one of the digital profiles linked here.",
      "signature@tbgracy": "Made with 👐 by @tbgracy",
      "private-repo": "This repository is not public",
      "about-me": `
                I'm Gracy, a frontend developer from Madagascar, 
                currently enrolled in a Software Engineering program at ASJA. My programming languages of choice are Python and Typescript. 
                Asides from tech stuff, I'm an engaged visual traditionnal artist (urban sketcher/comic book artist/illustrator).`,
    },
  },
  fr: {
    translation: {
      about: "À propos",
      skills: "Compétences",
      projects: "Projets",
      contact: "Contact",
      "my-resume": "Mon CV",
      "programming-languages-frameworks":
        "Langages de programmation & Frameworks",
      databases: "Bases de données",
      tools: "Outils",
      "wanna-talk": "Envie de discuter ?",
      fr: "Francais",
      en: "Anglais",
      "stuff-i-made": "Mes réalisations",
      "all-projects": "Tous les projets",
      "contact-cta": "Envoi-moi un DM via les profils listés ci-dessous.",
      "signature@tbgracy": "Fait avec des 👐 par @tbgracy",
      "private-repo": "Ce dépôt n'est",
      "about-me": `
                Je m'appelle Gracy, développeur frontend basé à Madagascar, actuellement étudiant en Génie Logiciel à l'ASJA. Mes langage de programmation de choix
                sont Python et Typescript.
                En dehors du domaine technologique, je suis un dessinateur engagé (urban sketching/bande dessinée/illustration).`,
    },
  },
};

const currentLng = localStorage.getItem("lng");

await i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: currentLng ?? "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
