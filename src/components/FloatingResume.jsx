import resume from "../assets/Shubham_Parab_Resume.pdf";

export default function FloatingResume() {
    return (
        <a
            href={resume}
            download
            className="floating-resume"
            title="Download Resume"
        >
            Resume
        </a>
    );
}
