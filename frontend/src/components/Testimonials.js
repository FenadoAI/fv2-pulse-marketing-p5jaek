import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "PulseMarketing transformed our social media presence completely. Within 3 months, we saw a 300% increase in engagement and a 150% boost in qualified leads.",
      author: "Sarah Johnson",
      company: "TechStart Inc",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      rating: 5,
    },
    {
      quote:
        "Their outbound campaign strategy was brilliant. We went from zero to 50+ qualified meetings per month. The ROI has been absolutely incredible.",
      author: "Michael Chen",
      company: "GrowthHub",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
      rating: 5,
    },
    {
      quote:
        "Finally, a marketing agency that actually understands our business. They don't just execute campaigns - they think strategically about our growth.",
      author: "Emily Rodriguez",
      company: "Fusion Retail",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#1E293B" }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{ fontFamily: "Poppins, sans-serif", color: "#F8FAFC" }}
          >
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it - hear from businesses we've helped grow
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-xl border-l-4 transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: "#0F172A",
                borderLeftColor: "#FF6B6B",
                borderTopWidth: "1px",
                borderRightWidth: "1px",
                borderBottomWidth: "1px",
                borderColor: "#334155",
              }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} fill="#14B8A6" stroke="#14B8A6" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-300 text-lg leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="font-semibold" style={{ color: "#F8FAFC" }}>
                    {testimonial.author}
                  </div>
                  <div className="text-sm" style={{ color: "#94A3B8" }}>
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Metrics Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { metric: "97%", label: "Client Retention" },
            { metric: "4.9/5", label: "Average Rating" },
            { metric: "250%", label: "Avg. Growth" },
            { metric: "30 Days", label: "To See Results" },
          ].map((stat, index) => (
            <div key={index}>
              <div
                className="text-4xl font-bold mb-2"
                style={{ color: "#8B5CF6", fontFamily: "Poppins, sans-serif" }}
              >
                {stat.metric}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
