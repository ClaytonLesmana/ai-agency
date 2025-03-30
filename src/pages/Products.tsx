import { useState } from "react";
import {
  ArrowRight,
  Zap,
  CheckCircle,
  Shield,
  Layers,
  Terminal,
  MessageSquare,
  LineChart,
  Microscope,
} from "lucide-react";
import Button from "../components/Button";
import { Link } from "react-router-dom";

type PricingTier = {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
};

type Product = {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  capabilities: string[];
  imageUrl: string;
};

const Products = () => {
  const [activeTab, setActiveTab] = useState<string>("all");

  const products: Product[] = [
    {
      id: "ai-assistant",
      name: "AI Assistant",
      description:
        "An intelligent virtual assistant that handles customer inquiries, schedules appointments, and performs routine tasks without human intervention.",
      icon: <MessageSquare className="h-8 w-8 text-blue-500" />,
      capabilities: [
        "Natural language understanding",
        "24/7 customer support",
        "Multi-language capabilities",
        "Custom knowledge integration",
        "Seamless handoff to human agents",
      ],
      imageUrl:
        "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2706&auto=format&fit=crop",
    },
    {
      id: "analytics-platform",
      name: "Predictive Analytics Platform",
      description:
        "A powerful data analytics solution that uncovers patterns, predicts trends, and delivers actionable insights to drive business growth.",
      icon: <LineChart className="h-8 w-8 text-green-500" />,
      capabilities: [
        "Advanced data visualization",
        "Predictive modeling",
        "Anomaly detection",
        "Custom reporting",
        "API integration capabilities",
      ],
      imageUrl:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
    },
    {
      id: "content-generator",
      name: "AI Content Generator",
      description:
        "A sophisticated tool that creates high-quality, original content for marketing, communications, and product descriptions.",
      icon: <Terminal className="h-8 w-8 text-purple-500" />,
      capabilities: [
        "Blog post generation",
        "Product description writing",
        "Email campaign content",
        "Social media copy creation",
        "SEO optimization",
      ],
      imageUrl:
        "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2706&auto=format&fit=crop",
    },
    {
      id: "decision-engine",
      name: "Intelligent Decision Engine",
      description:
        "An AI-powered system that analyzes complex scenarios, evaluates options, and recommends optimal decisions based on your business goals.",
      icon: <Layers className="h-8 w-8 text-orange-500" />,
      capabilities: [
        "Multi-factor decision analysis",
        "Risk assessment",
        "Scenario modeling",
        "Real-time recommendations",
        "Learning from outcomes",
      ],
      imageUrl:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop",
    },
    {
      id: "research-assistant",
      name: "AI Research Assistant",
      description:
        "An intelligent tool that accelerates research by finding, analyzing, and summarizing relevant information from diverse sources.",
      icon: <Microscope className="h-8 w-8 text-red-500" />,
      capabilities: [
        "Comprehensive literature review",
        "Data extraction and analysis",
        "Trend identification",
        "Competitive intelligence",
        "Research summarization",
      ],
      imageUrl:
        "https://images.unsplash.com/photo-1507668077129-56e32842fceb?q=80&w=2670&auto=format&fit=crop",
    },
    {
      id: "security-sentinel",
      name: "AI Security Sentinel",
      description:
        "A robust security solution that detects threats, prevents breaches, and protects your digital assets with advanced AI capabilities.",
      icon: <Shield className="h-8 w-8 text-indigo-500" />,
      capabilities: [
        "Real-time threat detection",
        "Behavioral anomaly identification",
        "Automated incident response",
        "Security posture assessment",
        "Compliance monitoring",
      ],
      imageUrl:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2670&auto=format&fit=crop",
    },
  ];

  const categories = [
    { id: "all", name: "All Products" },
    { id: "business", name: "Business" },
    { id: "analytics", name: "Analytics" },
    { id: "security", name: "Security" },
  ];

  const pricingTiers: PricingTier[] = [
    {
      name: "Starter",
      price: "$199",
      description: "Perfect for small businesses just getting started with AI",
      features: [
        "1 AI product of your choice",
        "Up to 5 users",
        "Basic support",
        "Monthly updates",
      ],
      cta: "Start Free Trial",
    },
    {
      name: "Professional",
      price: "$499",
      description: "Ideal for growing businesses needing more AI capabilities",
      features: [
        "3 AI products of your choice",
        "Up to 20 users",
        "Priority support",
        "Weekly updates",
        "Custom integrations",
        "Advanced analytics",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For organizations requiring comprehensive AI solutions",
      features: [
        "All AI products",
        "Unlimited users",
        "24/7 premium support",
        "Daily updates",
        "Dedicated account manager",
        "Custom development",
        "On-premises deployment option",
      ],
      cta: "Contact Sales",
    },
  ];

  // Filter products if needed (all products shown by default)
  const filteredProducts =
    activeTab === "all"
      ? products
      : products.filter((p) => p.id.includes(activeTab));

  return (
    <div className="space-y-20 py-8">
      {/* Hero Section */}
      <section className="text-center pt-12 pb-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="mb-6 inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary-100 text-primary-600">
            <Zap className="h-4 w-4 mr-1" />
            <span>Cutting-edge AI Products</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Our AI <span className="text-primary-600">Products</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
            Discover our suite of powerful AI products designed to transform
            your business operations and drive innovation
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-4">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === category.id
                    ? "bg-primary-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
                      {product.icon}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold mb-2">
                        {product.name}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-300">
                        {product.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-lg font-medium mb-3">
                      Key Capabilities
                    </h3>
                    <ul className="space-y-2">
                      {product.capabilities.map((capability, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 dark:text-gray-200">
                            {capability}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 flex justify-end">
                    <Link to={`/products/${product.id}`}>
                      <Button
                        variant="primary"
                        className="inline-flex items-center"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Seamless Integration</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our AI products integrate effortlessly with your existing systems
              and workflows
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              "Salesforce",
              "Microsoft",
              "Slack",
              "Google",
              "Zendesk",
              "Oracle",
              "SAP",
              "Shopify",
            ].map((partner, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 h-28 flex items-center justify-center rounded-lg shadow-sm border border-gray-100 dark:border-gray-700"
              >
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Choose the plan that fits your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border ${
                  tier.popular
                    ? "border-primary-500 relative"
                    : "border-gray-100 dark:border-gray-700"
                }`}
              >
                {tier.popular && (
                  <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                    <span className="bg-primary-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  {tier.price !== "Custom" && (
                    <span className="text-gray-500">/month</span>
                  )}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {tier.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-200">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={tier.popular ? "primary" : "outline"}
                  className="w-full justify-center"
                >
                  {tier.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Have questions about our AI products? We've got answers.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question:
                  "Can I customize the AI products for my specific industry?",
                answer:
                  "Yes, all our AI products are highly customizable. We offer industry-specific solutions and can tailor any product to your unique business requirements and workflows.",
              },
              {
                question: "How long does implementation typically take?",
                answer:
                  "Implementation timelines vary based on product complexity and integration requirements. Basic implementations can be completed in 2-4 weeks, while more comprehensive solutions may take 2-3 months.",
              },
              {
                question: "Do you offer product training and support?",
                answer:
                  "Absolutely. All our plans include training sessions and ongoing technical support. Our Professional and Enterprise plans include more extensive training and dedicated support options.",
              },
              {
                question:
                  "Can your AI products integrate with my existing systems?",
                answer:
                  "Yes, our products are designed to integrate seamlessly with most common business systems and platforms. We offer standard API integrations and can develop custom connectors if needed.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-100 dark:border-gray-700"
              >
                <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 rounded-lg">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Ready to transform your business with AI?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Schedule a demo to see our AI products in action and discover how
            they can address your specific business challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="white"
              size="lg"
              className="inline-flex items-center justify-center"
            >
              Request Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Link to="/contact">
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent text-white border border-white hover:bg-white/10"
              >
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
