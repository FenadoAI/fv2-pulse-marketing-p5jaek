import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t" style={{ backgroundColor: "#1E293B", borderColor: "#334155" }}>
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3
              className="text-2xl font-bold mb-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              <span style={{ color: "#8B5CF6" }}>Pulse</span>
              <span style={{ color: "#14B8A6" }}>Marketing</span>
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Full-service marketing agency helping businesses grow through strategic social media,
              outbound campaigns, and comprehensive marketing solutions.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {[
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 rounded-lg transition-all duration-200 hover:scale-110"
                  style={{ backgroundColor: "#0F172A", color: "#14B8A6" }}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4" style={{ color: "#F8FAFC" }}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Services", id: "services" },
                { label: "Portfolio", id: "portfolio" },
                { label: "Blog", id: "blog" },
                { label: "Contact", id: "contact" },
              ].map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-teal-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4" style={{ color: "#F8FAFC" }}>
              Get In Touch
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-2">
                <Mail size={20} style={{ color: "#8B5CF6", flexShrink: 0 }} />
                <a href="mailto:hello@pulsemarketing.com" className="hover:text-teal-400 transition-colors">
                  hello@pulsemarketing.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t text-center md:flex md:justify-between md:items-center" style={{ borderColor: "#334155" }}>
          <p className="text-gray-400 text-sm">
            © {currentYear} PulseMarketing. All rights reserved.
          </p>
          <div className="flex gap-6 justify-center mt-4 md:mt-0">
            <button className="text-gray-400 hover:text-teal-400 text-sm transition-colors">
              Privacy Policy
            </button>
            <button className="text-gray-400 hover:text-teal-400 text-sm transition-colors">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
