import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./styles/ContactForm.css";

const ContactForm = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setStatus("idle");

        emailjs
            .sendForm(
                "YOUR_SERVICE_ID", // Replace with your Service ID
                "YOUR_TEMPLATE_ID", // Replace with your Template ID
                formRef.current!,
                "YOUR_PUBLIC_KEY" // Replace with your Public Key
            )
            .then(
                () => {
                    setLoading(false);
                    setStatus("success");
                    formRef.current?.reset();
                    setTimeout(() => setStatus("idle"), 5000);
                },
                (error) => {
                    console.error("FAILED...", error);
                    setLoading(false);
                    setStatus("error");
                    setTimeout(() => setStatus("idle"), 5000);
                }
            );
    };

    return (
        <div className="contact-form-container">
            <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="user_name" id="name" required placeholder="Your Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="user_email" id="email" required placeholder="Your Email" />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" required placeholder="Your Message" rows={5}></textarea>
                </div>
                <button type="submit" disabled={loading} className="submit-btn" data-cursor="disable">
                    {loading ? "Sending..." : "Send Message"}
                </button>
                {status === "success" && <p className="status-msg success">Message sent successfully!</p>}
                {status === "error" && <p className="status-msg error">Failed to send. Please try again.</p>}
            </form>
        </div>
    );
};

export default ContactForm;
