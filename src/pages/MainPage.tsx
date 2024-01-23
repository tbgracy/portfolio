import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
// import CustomPointer from "../components/CustomPointer";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProjectSection from "../components/ProjectSection";
import SkillSection from "../components/SkillSection";

export default function MainPage() {
    return (
        <>
            <Navbar />
            <main>
                <div className="scroll-indicator"></div>
                <AboutSection />
                <SkillSection />
                <ProjectSection />
                <ContactSection />
                <Footer />
                {/* <CustomPointer /> */}
            </main>
        </>
    );
}