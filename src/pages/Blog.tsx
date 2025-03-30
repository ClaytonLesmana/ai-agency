import { useState } from "react";
import {
  ArrowRight,
  Clock,
  Search,
  Tag,
  Zap,
  User,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import Button from "../components/Button";
import { Link } from "react-router-dom";

type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
  featured?: boolean;
};

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const categories = [
    "All",
    "AI",
    "Machine Learning",
    "Data Science",
    "Business",
    "Technology",
  ];

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "The Future of AI in Healthcare: Transforming Patient Care",
      excerpt:
        "Discover how artificial intelligence is revolutionizing healthcare with improved diagnostics, personalized treatment plans, and streamlined operations.",
      category: "AI",
      date: "March 25, 2025",
      readTime: "8 min read",
      author: "Dr. Sarah Chen",
      image:
        "https://images.unsplash.com/photo-1576671081837-49000212a370?q=80&w=1160&auto=format&fit=crop",
      featured: true,
    },
    {
      id: 2,
      title: "5 Ways Machine Learning Is Changing Financial Services",
      excerpt:
        "Explore how banks and financial institutions are leveraging machine learning to detect fraud, assess risk, and provide personalized financial advice.",
      category: "Machine Learning",
      date: "March 18, 2025",
      readTime: "6 min read",
      author: "Michael Roberts",
      image:
        "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=1074&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Building Ethical AI Systems: Challenges and Best Practices",
      excerpt:
        "A deep dive into the ethical considerations of AI development and how organizations can ensure their AI systems are transparent, fair, and unbiased.",
      category: "AI",
      date: "March 12, 2025",
      readTime: "10 min read",
      author: "Prof. Amara Wilson",
      image:
        "https://images.unsplash.com/photo-1593376853899-fbb47a057fa0?q=80&w=1169&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Data-Driven Decision Making: A Practical Guide for Executives",
      excerpt:
        "Learn how to transform your organization by implementing data-driven strategies that lead to better business outcomes and competitive advantage.",
      category: "Data Science",
      date: "March 5, 2025",
      readTime: "7 min read",
      author: "Jennifer Lopez",
      image:
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1076&auto=format&fit=crop",
    },
    {
      id: 5,
      title:
        "Natural Language Processing: The Technology Behind Modern Chatbots",
      excerpt:
        "An overview of NLP technologies that power conversational AI and how businesses are using them to enhance customer experiences.",
      category: "AI",
      date: "February 28, 2025",
      readTime: "9 min read",
      author: "Dr. Thomas Lee",
      image:
        "https://images.unsplash.com/photo-1677519910517-5cce3bfde238?q=80&w=1170&auto=format&fit=crop",
    },
    {
      id: 6,
      title:
        "The ROI of AI: Measuring the Business Impact of Artificial Intelligence",
      excerpt:
        "A framework for evaluating AI investments and understanding the tangible and intangible returns that AI can bring to your organization.",
      category: "Business",
      date: "February 20, 2025",
      readTime: "5 min read",
      author: "David Williams",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1170&auto=format&fit=crop",
    },
  ];

  // Filter posts based on active category and search query
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      activeCategory === "All" || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Featured post (first in the array if it has featured flag)
  const featuredPost = blogPosts.find((post) => post.featured);

  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section className="text-center pt-12 pb-8">
        <div className="max-w-3xl mx-auto px-4">
          <div className="mb-6 inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary-100 text-primary-600">
            <Zap className="h-4 w-4 mr-1" />
            <span>AI Insights & Innovations</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Our <span className="text-primary-600">Blog</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
            Expert insights, industry trends, and the latest innovations in AI
            technology and applications
          </p>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-4">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            {/* Search */}
            <div className="w-full md:w-auto relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search articles..."
                className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md w-full md:w-80 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-3 py-1 text-sm font-medium rounded-full transition-colors ${
                    activeCategory === category
                      ? "bg-primary-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-8">
          <div className="max-w-6xl mx-auto px-4">
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="h-64 md:h-full overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary-100 text-primary-600 mb-4 self-start">
                    <Tag className="h-3 w-3 mr-1" />
                    <span>Featured</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-6">
                    <User className="h-4 w-4 mr-1" />
                    <span className="mr-4">{featuredPost.author}</span>
                    <Clock className="h-4 w-4 mr-1" />
                    <span className="mr-4">{featuredPost.readTime}</span>
                    <span>{featuredPost.date}</span>
                  </div>
                  <Button
                    variant="primary"
                    className="self-start inline-flex items-center"
                  >
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4">
          {filteredPosts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts
                  .filter((post) => !post.featured)
                  .map((post) => (
                    <div
                      key={post.id}
                      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
                    >
                      <div className="h-48 overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <div className="inline-flex items-center px-2 py-0.5 rounded-full text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 mb-4">
                          <span>{post.category}</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2 line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                          <Clock className="h-4 w-4 mr-1" />
                          <span className="mr-3">{post.readTime}</span>
                          <span>{post.date}</span>
                        </div>
                        <Link
                          to={`/blog/${post.id}`}
                          className="text-primary-600 font-medium flex items-center hover:text-primary-700"
                        >
                          Read More <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  ))}
              </div>

              {/* Pagination */}
              <div className="mt-12 flex justify-center">
                <div className="flex items-center gap-2">
                  <button
                    className="p-2 rounded-md border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <span className="text-sm font-medium px-3 py-1 rounded-md bg-primary-600 text-white">
                    {currentPage}
                  </span>
                  <button
                    className="p-2 rounded-md border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => setCurrentPage(currentPage + 1)}
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-bold mb-2">No articles found</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-primary-600 rounded-lg">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Stay Updated with AI Trends
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest insights and innovations
            in AI technology
          </p>

          <div className="flex flex-col sm:flex-row gap-2 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-2 rounded-l-md rounded-r-md sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <Button
              variant="white"
              size="lg"
              className="inline-flex items-center justify-center sm:rounded-l-none"
            >
              Subscribe
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <p className="text-xs text-primary-100 mt-4">
            By subscribing, you agree to our Privacy Policy and consent to
            receive updates from our company.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Blog;
