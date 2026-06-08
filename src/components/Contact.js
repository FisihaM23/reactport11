import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        const { name, email, phone, message } = formData;

        const ethiopianPhoneRegex = /^(\+251|0)?9\d{8}$/;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

        // Validation checks
        if (!name.trim()) {
            toast.error("⚠️ Please enter your name.");
            return;
        }

        if (!email.trim()) {
            toast.error("⚠️ Please enter your email address.");
            return;
        }

        if (!emailPattern.test(email)) {
            toast.error("❌ Please enter a valid email address.");
            return;
        }

        if (!phone.trim()) {
            toast.error("⚠️ Please enter your phone number.");
            return;
        }

        if (!ethiopianPhoneRegex.test(phone)) {
            toast.error("❌ Invalid Ethiopian phone number format! Use: 0912345678 or +251912345678");
            return;
        }

        if (!message.trim()) {
            toast.error("⚠️ Please enter your message.");
            return;
        }

        if (message.trim().length < 10) {
            toast.error("⚠️ Message is too short. Please provide more details.");
            return;
        }

        // All validations passed
        setIsSubmitting(true);
        toast.info("📨 Sending your message...");

        // Simulate sending (replace this with your backend API call)
        setTimeout(() => {
            setIsSubmitting(false);
            toast.success("✅ Your message has been sent successfully!");

            // Log the form data (you can send this to your backend)
            console.log("Form Data:", {
                name: name.trim(),
                email: email.trim(),
                phone: phone.trim(),
                message: message.trim(),
                timestamp: new Date().toISOString()
            });

            // Reset form
            setFormData({
                name: "",
                email: "",
                phone: "",
                message: ""
            });
        }, 2000);
    };

    return (
        <div className="contact-section fade-in" id="contact">
            <ToastContainer
                position="top-right"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <h2>Get In Touch</h2>
            <div className="contact-container">
                <div className="social-media">
                    <h3>Connect With Me</h3>
                    <div className="social-links">
                        <a
                            href="https://www.linkedin.com/in/mulugeta-fisiha"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link linkedin"
                            title="LinkedIn"
                        >
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a
                            href="https://github.com/FisihaM23/reactport11"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link github"
                            title="GitHub"
                        >
                            <i className="fab fa-github"></i>
                        </a>
                        <a
                            href="https://t.me/GOD272921"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link telegram"
                            title="Telegram"
                        >
                            <i className="fab fa-telegram-plane"></i>
                        </a>
                        <a
                            href="https://www.facebook.com/mulugeta-fisiha"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link facebook"
                            title="Facebook"
                        >
                            <i className="fab fa-facebook-f"></i>
                        </a>
                    </div>
                </div>
                <div className="contact">
                    <h3>Contact Me</h3>
                    <form onSubmit={sendEmail}>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name *"
                            disabled={isSubmitting}
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email *"
                            disabled={isSubmitting}
                        />
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone Number (Ethiopian: 0912345678) *"
                            disabled={isSubmitting}
                        />
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your Message *"
                            rows="4"
                            disabled={isSubmitting}
                        ></textarea>
                        <button
                            type="submit"
                            className="btn"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
