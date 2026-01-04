import { useEffect } from "react";

export default function Navbar() {
    useEffect(() => {
        let navBar = document.querySelectorAll(".nav-link");
        let navCollapse = document.querySelector(".navbar-collapse.collapse");

        navBar.forEach(function (link) {
            link.addEventListener("click", function () {
                navCollapse.classList.remove("show");
            });
        });
    })
    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark custom-navbar">
            <div className="container">
                <a className="navbar-brand fw-semibold" href="#">
                    Shubham Parab
                </a>

                {/* Hamburger */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#portfolioNavbar"
                    aria-controls="portfolioNavbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Collapsible Menu */}
                <div className="collapse navbar-collapse" id="portfolioNavbar">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-4">
                        {["Skills", "Projects", "Contact"].map(item => (
                            <li className="nav-item" key={item}>
                                <a className="nav-link nav-animated" href={`#${item.toLowerCase()}`}>
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
