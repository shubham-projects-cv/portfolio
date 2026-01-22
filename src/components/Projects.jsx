export default function Projects() {
  return (
    <section id="projects" className="section container">
      <h2 className="text-center mb-5">Projects</h2>

      <div className="row g-4">
        {/* Project 1 */}
        <div className="col-12">
          <div className="card project-card p-4 h-100">
            <h4 className="text-white mb-3">
              Next.js Product Management Platform (Event-Driven Architecture)
            </h4>

            <p className="project-desc">
              Full-stack Next.js application with secure authentication,
              user-scoped product CRUD, password recovery, and eventdriven
              design using MongoDB, deployed on Vercel.
            </p>

            <a
              href="https://nextjs-ecommerce-app-rosy.vercel.app/"
              target="_blank"
              className="project-link"
            >
              Live Project →
            </a>
          </div>
        </div>

        {/* Project 3 */}
        <div className="col-12">
          <div className="card project-card p-4 h-100">
            <h4 className="text-white mb-3">Uvxcel Official Website</h4>

            <p className="project-desc">
              Developed the company’s official website using the MERN stack with
              responsive UI and API-driven dynamic content to improve business
              visibility and conversions.
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
