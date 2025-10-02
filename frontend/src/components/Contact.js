import { useState } from "react";
import { Mail, CheckCircle, Send } from "lucide-react";
import axios from "axios";
import { API } from "../App";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await axios.post(`${API}/contacts`, formData);

      if (response.status === 200) {
        setStatus({
          type: "success",
          message: "Thank you! We'll be in touch within 24 hours.",
        });
        setFormData({ name: "", email: "" });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again or email us directly.",
      });
      console.error("Error submitting contact form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#0F172A" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Info */}
          <div>
            <h2
              className="text-4xl sm:text-5xl font-bold mb-6"
              style={{ fontFamily: "Poppins, sans-serif", color: "#F8FAFC" }}
            >
              Ready to Transform Your Marketing?
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Get a free consultation and discover how we can help your business grow.
              No obligations, just expert advice tailored to your goals.
            </p>

            {/* Benefits List */}
            <div className="space-y-4 mb-8">
              {[
                "Free 30-minute strategy session",
                "Custom marketing plan outline",
                "ROI projections for your business",
                "No commitment required",
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle size={24} style={{ color: "#14B8A6", flexShrink: 0 }} />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="space-y-3 text-gray-400">
              <p className="flex items-center gap-2">
                <Mail size={20} style={{ color: "#8B5CF6" }} />
                <span>hello@pulsemarketing.com</span>
              </p>
            </div>
          </div>

          {/* Right Column - Form */}
          <div
            className="p-8 rounded-xl border"
            style={{
              backgroundColor: "#1E293B",
              borderColor: "#334155",
            }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: "#F8FAFC" }}>
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Smith"
                  className="w-full px-4 py-3 rounded-lg border transition-all duration-200"
                  style={{
                    backgroundColor: "#0F172A",
                    borderColor: "#334155",
                    color: "#F8FAFC",
                  }}
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: "#F8FAFC" }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@company.com"
                  className="w-full px-4 py-3 rounded-lg border transition-all duration-200"
                  style={{
                    backgroundColor: "#0F172A",
                    borderColor: "#334155",
                    color: "#F8FAFC",
                  }}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ backgroundColor: "#8B5CF6", color: "white" }}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Get Free Consultation
                    <Send size={20} />
                  </>
                )}
              </button>

              {/* Status Message */}
              {status.message && (
                <div
                  className="p-4 rounded-lg text-center font-medium"
                  style={{
                    backgroundColor: status.type === "success" ? "rgba(20, 184, 166, 0.1)" : "rgba(239, 68, 68, 0.1)",
                    color: status.type === "success" ? "#14B8A6" : "#EF4444",
                  }}
                >
                  {status.message}
                </div>
              )}
            </form>

            <p className="text-sm text-gray-400 text-center mt-6">
              We respect your privacy. Your information will never be shared.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
