export default function Projects() {
    return (
        <section id="projects" className="section container">
            <h2 className="text-center mb-5">Projects</h2>

            <div className="row g-4">

                {/* Project 1 */}
                <div className="col-12">
                    <div className="card project-card p-4 h-100">
                        <h4 className="text-white mb-3">
                            Clinic Management SaaS Platform
                        </h4>

                        <p className="project-desc">
                            Multi-tenant MERN SaaS with role-based access, appointment scheduling,
                            JWT authentication, deployed on AWS EC2 with CI/CD & NGINX.
                        </p>

                        <b>Note: Application availability is scheduled from 8:30 AM to 1:30 AM IST to optimize AWS EC2
                            infrastructure costs</b>

                        <p className="project-meta">
                            <span>Super Admin:</span> super@clinic.com / super123
                        </p>

                        <a
                            href="https://awsmernhealthhub.in/"
                            target="_blank"
                            className="project-link"
                        >
                            Live Project →
                        </a>
                    </div>
                </div>

                {/* Project 2 */}
                <div className="col-12">
                    <div className="card project-card p-4 h-100">
                        <h4 className="text-white mb-3">
                            Uvxcel Official Website
                        </h4>

                        <p className="project-desc">
                            Developed the company’s official website using the MERN stack with responsive UI and API-driven dynamic content
                            to improve business visibility and conversions.
                        </p>

                        <a
                            href="https://www.uvxcel.com/"
                            target="_blank"
                            className="project-link"
                        >
                            Live Project →
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}
