import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import Navbar from "../components/Navbar";
import ProjectSection from "../components/ProjectSection";
import SkillSection from "../components/SkillSection";
 
export default function MainPage() {
    return (
        <>
            <Navbar />
            <AboutSection />
            <SkillSection />
            <ProjectSection />
            <ContactSection />
        </>
    );
}