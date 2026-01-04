import resume from "../assets/Shubham_Parab_Resume.pdf";

export default function Resume() {
    return (
        <section className="section container text-center">
            <h2 className="mb-3">Resume</h2>

            <p className="resume-text mb-4">
                Download my resume to learn more about my experience, skills,
                and projects in detail.
            </p>

            <a
                href={resume}
                download
                className="btn resume-btn"
            >
                Download Resume
            </a>
        </section>
    );
}
