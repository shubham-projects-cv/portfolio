import emailjs from "emailjs-com";

export default function Contact() {
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            "service_1996",
            "template_ic4op75",
            e.target,
            "77hp-BJN9BF5__m-5"
        );
        e.target.reset();
        alert("Message sent successfully!");
    };

    return (
        <section id="contact" className="section container text-center">
            <h2>Contact Me</h2>
            <form onSubmit={sendEmail}>
                <input name="name" className="form-control mb-2" placeholder="Name" required />
                <input name="email" className="form-control mb-2" placeholder="Email" required />
                <textarea name="message" className="form-control mb-2" placeholder="Message" required />
                <button className="btn btn-info">Send</button>
            </form>
        </section>
    );
}
