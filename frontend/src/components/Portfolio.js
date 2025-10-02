import { ExternalLink } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Launch Campaign",
      category: "Social Media",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      description: "300% increase in online sales within 90 days",
      tags: ["Instagram", "Facebook Ads", "Influencer Marketing"],
      color: "#14B8A6",
    },
    {
      title: "B2B Lead Generation",
      category: "Outbound",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      description: "Generated 500+ qualified leads in 6 months",
      tags: ["Email", "LinkedIn", "Cold Outreach"],
      color: "#8B5CF6",
    },
    {
      title: "Brand Awareness Campaign",
      category: "Full Marketing",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop",
      description: "50M+ impressions across all channels",
      tags: ["SEO", "Content", "PR"],
      color: "#FF6B6B",
    },
    {
      title: "Product Launch Strategy",
      category: "Integrated Campaign",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop",
      description: "$2M revenue in first quarter",
      tags: ["Launch Strategy", "Paid Ads", "PR"],
      color: "#14B8A6",
    },
    {
      title: "SaaS Growth Campaign",
      category: "Inbound Marketing",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      description: "400% increase in MRR year-over-year",
      tags: ["Content Marketing", "SEO", "Email Nurture"],
      color: "#8B5CF6",
    },
    {
      title: "Local Business Scaling",
      category: "Multi-Channel",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
      description: "Expanded to 10 locations in 18 months",
      tags: ["Local SEO", "Social", "Google Ads"],
      color: "#FF6B6B",
    },
  ];

  return (
    <section id="portfolio" className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#0F172A" }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{ fontFamily: "Poppins, sans-serif", color: "#F8FAFC" }}
          >
            Our Work
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real results for real businesses. See how we've helped companies transform their marketing
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl cursor-pointer"
              style={{ aspectRatio: "4/3" }}
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"
              >
                {/* Category Badge */}
                <div className="mb-3">
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ backgroundColor: project.color, color: "white" }}
                  >
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="text-2xl font-bold mb-2 flex items-center gap-2"
                  style={{ color: "#F8FAFC", fontFamily: "Poppins, sans-serif" }}
                >
                  {project.title}
                  <ExternalLink size={20} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>

                {/* Description */}
                <p className="text-gray-300 mb-4">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-xs rounded"
                      style={{ backgroundColor: "#1E293B", color: "#14B8A6" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Static Overlay for Non-Hover State */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 to-transparent p-4 group-hover:opacity-0 transition-opacity">
                <h3
                  className="text-xl font-bold"
                  style={{ color: "#F8FAFC", fontFamily: "Poppins, sans-serif" }}
                >
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">Ready to become our next success story?</p>
          <button
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            style={{ backgroundColor: "#8B5CF6", color: "white" }}
          >
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
