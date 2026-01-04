import profile from "../assets/profile.jpg";

export default function Profile() {
    return (
        <section className="section text-center">
            <div className="profile-wrapper mx-auto mb-4">
                <img src={profile} alt="Shubham Parab" />
            </div>

            <p className="profile-text">
                Full Stack Engineer with nearly 4 years of experience building scalable
                MERN applications and deploying them on AWS.
            </p>
        </section>
    );
}
