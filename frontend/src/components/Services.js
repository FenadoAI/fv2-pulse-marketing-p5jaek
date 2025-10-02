import { Share2, Target, TrendingUp } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Share2,
      title: "Social Media Marketing",
      description:
        "Build powerful brand presence across all social platforms. We create engaging content, manage communities, and drive meaningful interactions that convert followers into customers.",
      color: "#14B8A6",
    },
    {
      icon: Target,
      title: "Outbound & Inbound Campaigns",
      description:
        "Strategic campaigns that reach your ideal customers. From targeted outreach to inbound lead generation, we create multi-channel strategies that deliver measurable ROI.",
      color: "#8B5CF6",
    },
    {
      icon: TrendingUp,
      title: "Comprehensive Marketing Solutions",
      description:
        "End-to-end marketing services including SEO, content marketing, email campaigns, analytics, and brand strategy. Your complete marketing department in one place.",
      color: "#FF6B6B",
    },
  ];

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#0F172A" }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{ fontFamily: "Poppins, sans-serif", color: "#F8FAFC" }}
          >
            Our Services
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive marketing solutions designed to grow your business and dominate your market
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
              style={{
                backgroundColor: "#1E293B",
                borderColor: "#334155",
              }}
            >
              {/* Icon */}
              <div
                className="mb-6 inline-block p-4 rounded-lg"
                style={{ backgroundColor: "rgba(20, 184, 166, 0.1)" }}
              >
                <service.icon size={32} style={{ color: service.color }} />
              </div>

              {/* Title */}
              <h3
                className="text-2xl font-bold mb-4"
                style={{ fontFamily: "Poppins, sans-serif", color: "#F8FAFC" }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed mb-6">{service.description}</p>

              {/* Accent Line */}
              <div
                className="h-1 w-0 group-hover:w-full transition-all duration-300 rounded"
                style={{ backgroundColor: service.color }}
              ></div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            style={{ backgroundColor: "#8B5CF6", color: "white" }}
          >
            Let's Discuss Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
