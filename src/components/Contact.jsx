import { useState } from "react";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [locked, setLocked] = useState(false);

    /* ---------------- VALIDATION ---------------- */
    const validate = () => {
        const newErrors = {};

        if (!form.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!form.email.trim()) {
            newErrors.email = "Email is required";
        } else if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
        ) {
            newErrors.email = "Enter a valid email";
        }

        if (!form.message.trim()) {
            newErrors.message = "Message is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    /* ---------------- SUBMIT ---------------- */
    const sendEmail = (e) => {
        e.preventDefault();
        if (locked) return;

        if (!validate()) return;

        setLoading(true);
        setLocked(true);

        emailjs
            .send(
                "service_1996",
                "template_ic4op75",
                {
                    name: form.name,
                    email: form.email,
                    message: form.message,
                },
                "77hp-BJN9BF5__m-5"
            )
            .then(() => {
                toast.success("Message sent successfully 🚀", {
                    position: "top-right",
                });

                setForm({ name: "", email: "", message: "" });

                /* unlock page after success */
                setTimeout(() => {
                    setLocked(false);
                }, 1500);
            })
            .catch(() => {
                toast.error("Failed to send message ❌", {
                    position: "top-right",
                });
                setLocked(false);
            })
            .finally(() => setLoading(false));
    };

    return (
        <section id="contact" className="section container">
            <h2 className="text-center mb-4">Contact Me</h2>

            <form
                onSubmit={sendEmail}
                className={`contact-form mx-auto ${locked ? "form-disabled" : ""}`}
            >
                {/* NAME */}
                <div>
                    <input
                        type="text"
                        placeholder="Your Name"
                        value={form.name}
                        onChange={(e) =>
                            setForm({ ...form, name: e.target.value })
                        }
                        className={`form-control ${errors.name ? "input-error" : ""
                            }`}
                        disabled={locked}
                    />
                    {errors.name && (
                        <span className="error-text">{errors.name}</span>
                    )}
                </div>

                {/* EMAIL */}
                <div>
                    <input
                        type="email"
                        placeholder="Your Email"
                        value={form.email}
                        onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                        }
                        className={`form-control ${errors.email ? "input-error" : ""
                            }`}
                        disabled={locked}
                    />
                    {errors.email && (
                        <span className="error-text">{errors.email}</span>
                    )}
                </div>

                {/* MESSAGE */}
                <div>
                    <textarea
                        rows="5"
                        placeholder="Your Message"
                        value={form.message}
                        onChange={(e) =>
                            setForm({ ...form, message: e.target.value })
                        }
                        className={`form-control ${errors.message ? "input-error" : ""
                            }`}
                        disabled={locked}
                    />
                    {errors.message && (
                        <span className="error-text">{errors.message}</span>
                    )}
                </div>

                <button
                    type="submit"
                    className="btn contact-btn"
                    disabled={loading || locked}
                >
                    {loading ? "Sending..." : "Send Message"}
                </button>
            </form>

            <ToastContainer />
        </section>
    );
}
