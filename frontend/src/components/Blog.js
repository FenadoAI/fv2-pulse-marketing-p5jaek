import { useState, useEffect } from "react";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import axios from "axios";
import { API } from "../App";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${API}/blog?limit=3`);
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  // Default posts if no blog posts exist
  const defaultPosts = [
    {
      id: "1",
      title: "5 Social Media Strategies That Actually Work in 2025",
      content:
        "Discover the latest social media marketing strategies that are driving real results for businesses of all sizes...",
      category: "Social Media",
      author: "Marketing Team",
      image_url: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
      created_at: new Date().toISOString(),
    },
    {
      id: "2",
      title: "The Ultimate Guide to Outbound Marketing",
      content:
        "Learn how to build effective outbound campaigns that generate qualified leads and drive revenue growth...",
      category: "Strategy",
      author: "Growth Team",
      image_url: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      created_at: new Date().toISOString(),
    },
    {
      id: "3",
      title: "How to Measure Marketing ROI: A Complete Guide",
      content:
        "Understanding your marketing ROI is crucial for business growth. Here's how to track what matters...",
      category: "Analytics",
      author: "Data Team",
      image_url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      created_at: new Date().toISOString(),
    },
  ];

  const displayPosts = posts.length > 0 ? posts : defaultPosts;

  const getCategoryColor = (category) => {
    const colors = {
      "Social Media": "#14B8A6",
      Strategy: "#8B5CF6",
      Analytics: "#FF6B6B",
      SEO: "#14B8A6",
      Content: "#8B5CF6",
    };
    return colors[category] || "#14B8A6";
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  };

  return (
    <section id="blog" className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#1E293B" }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{ fontFamily: "Poppins, sans-serif", color: "#F8FAFC" }}
          >
            Latest Insights
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Marketing tips, strategies, and insights to help your business grow
          </p>
        </div>

        {/* Blog Grid */}
        {loading ? (
          <div className="text-center text-gray-400">Loading articles...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayPosts.map((post, index) => (
              <article
                key={post.id}
                className="group rounded-xl overflow-hidden border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
                style={{
                  backgroundColor: "#0F172A",
                  borderColor: "#334155",
                }}
              >
                {/* Featured Image */}
                <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
                  <img
                    src={post.image_url || "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop"}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-semibold"
                      style={{
                        backgroundColor: getCategoryColor(post.category),
                        color: "white",
                      }}
                    >
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {formatDate(post.created_at)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      5 min read
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-xl font-bold mb-3 group-hover:text-teal-400 transition-colors"
                    style={{ color: "#F8FAFC", fontFamily: "Poppins, sans-serif" }}
                  >
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-400 leading-relaxed mb-4 line-clamp-3">
                    {post.content.substring(0, 120)}...
                  </p>

                  {/* Read More */}
                  <div className="flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all" style={{ color: "#14B8A6" }}>
                    Read More
                    <ArrowRight size={16} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-16">
          <button
            className="px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 border-2"
            style={{ borderColor: "#8B5CF6", color: "#8B5CF6", backgroundColor: "transparent" }}
          >
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
