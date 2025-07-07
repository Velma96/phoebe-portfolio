import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState("");

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("Sending...");
    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setFormStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setFormStatus(""), 3000);
      } else {
        setFormStatus("Failed to send message. Try again.");
      }
    } catch (error) {
      setFormStatus("Error: Could not connect to server.");
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-slate-800 via-slate-900 to-black text-white">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          Let's Connect
        </motion.h2>
        <p className="text-lg text-gray-300 mb-8">Whether you want to collaborate, ask a question, or just say hi, feel free to reach out!</p>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <motion.a
            href="mailto:awuorphoebi@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="block bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 shadow-lg transition"
            aria-label="Email Phoebe Velma"
          >
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-200">awuorphoebi@gmail.com</p>
          </motion.a>
          <motion.a
            href="https://github.com/velma96"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="block bg-gradient-to-r from-gray-700 to-gray-900 rounded-lg p-6 shadow-lg transition"
            aria-label="Visit GitHub Profile"
          >
            <h3 className="text-xl font-semibold mb-2">GitHub</h3>
            <p className="text-gray-200">View My Projects</p>
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/your-linkedin-username/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="block bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-6 shadow-lg transition"
            aria-label="Connect on LinkedIn"
          >
            <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
            <p className="text-gray-200">Connect Professionally</p>
          </motion.a>
        </div>
        <form onSubmit={handleFormSubmit} className="space-y-4" aria-label="Contact Form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleFormChange}
            required
            className="w-full px-4 py-2 rounded border border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Your Name"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleFormChange}
            required
            className="w-full px-4 py-2 rounded border border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Your Email"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleFormChange}
            required
            className="w-full px-4 py-2 rounded border border-gray-600 bg-gray-800 text-white h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Your Message"
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition"
            aria-label="Send Message"
          >
            Send Message
          </motion.button>
          {formStatus && (
            <p className={`text-${formStatus.includes("Error") ? "red" : "green"}-400`} aria-live="polite">
              {formStatus}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}