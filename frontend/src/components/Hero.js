import { ArrowRight, ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)" }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl animate-pulse-slow"
          style={{ backgroundColor: "#8B5CF6" }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl animate-pulse-slow"
          style={{ backgroundColor: "#14B8A6", animationDelay: "1.5s" }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight"
            style={{ fontFamily: "Poppins, sans-serif", color: "#F8FAFC" }}
          >
            Transform Your Brand Into A{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(90deg, #8B5CF6, #14B8A6)",
              }}
            >
              Market Leader
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Full-service marketing agency specializing in social media campaigns,
            outbound/inbound strategies, and comprehensive marketing solutions that drive real results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToContact}
              className="group px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-2"
              style={{ backgroundColor: "#8B5CF6", color: "white" }}
            >
              Get Free Consultation
              <ArrowRight className="transition-transform group-hover:translate-x-1" size={20} />
            </button>

            <button
              onClick={scrollToServices}
              className="px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 border-2"
              style={{ borderColor: "#14B8A6", color: "#14B8A6", backgroundColor: "transparent" }}
            >
              Our Services
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "500+", label: "Happy Clients" },
              { number: "98%", label: "Success Rate" },
              { number: "50M+", label: "Reach Generated" },
              { number: "24/7", label: "Support" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div
                  className="text-4xl font-bold mb-2"
                  style={{ color: "#8B5CF6", fontFamily: "Poppins, sans-serif" }}
                >
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollToServices}
          className="text-gray-400 hover:text-teal-400 transition-colors"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
