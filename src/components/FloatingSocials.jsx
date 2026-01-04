export default function FloatingSocials() {
    const scrollToContact = () => {
        const section = document.getElementById("contact");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="floating-socials">
            {/* LinkedIn */}
            <a
                href="https://www.linkedin.com/in/shubham-parab-35bab72a8"
                target="_blank"
                rel="noreferrer"
                className="social-btn linkedin"
                title="LinkedIn Profile"
            >
                <i className="bi bi-linkedin"></i>
            </a>

            {/* Gmail → scroll */}
            <button
                type="button"
                onClick={scrollToContact}
                className="social-btn gmail"
                title="Contact Me"
            >
                <i className="bi bi-envelope-fill"></i>
            </button>
        </div>
    );
}
