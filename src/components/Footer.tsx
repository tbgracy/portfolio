export default function Footer() {
    const currentYear = (new Date()).getFullYear();
    
    return <footer>
        <hr />
        <p>
            &copy; {currentYear} - Made with 🧠 by @tbgracy.
        </p>
    </footer>
}