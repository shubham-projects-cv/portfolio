export default function Skills() {
    const skills = [
        "React.js",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
        "Node.js",
        "Express.js",
        "MongoDB",
        "AWS EC2",
        "NGINX",
        "GitHub Actions",
        "Bootstrap"
    ];

    return (
        <section id="skills" className="section container">
            <h2 className="text-center mb-5">Skills</h2>

            <div className="row g-4">
                {skills.map(skill => (
                    <div key={skill} className="col-6 col-md-3">
                        <div className="card p-3 text-center fw-medium">
                            {skill}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
