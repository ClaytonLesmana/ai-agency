import {
  ArrowRight,
  CheckCircle,
  MessageSquare,
  Settings,
  Eye,
  Zap,
  BarChart4,
  BrainCircuit,
  Lock,
} from "lucide-react";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="space-y-20 py-8">
      {/* Hero Section */}
      <section className="text-center pt-12 pb-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="mb-6 inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary-100 text-primary-600">
            <Zap className="h-4 w-4 mr-1" />
            <span>Our Comprehensive AI Services</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            AI Solutions for{" "}
            <span className="text-primary-600">Every Business Need</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
            Discover how our advanced AI services can automate tasks, provide
            valuable insights, and help your business thrive in a digital world.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We deliver cutting-edge AI solutions tailored to your business
              goals and challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "AI Consulting",
                description:
                  "Strategic guidance on implementing AI solutions that align with your business objectives and enhance your competitive advantage.",
                icon: <BrainCircuit className="h-10 w-10 text-primary-600" />,
                features: [
                  "AI readiness assessment",
                  "Strategy development",
                  "Implementation roadmap",
                  "ROI analysis",
                ],
              },
              {
                title: "Custom AI Development",
                description:
                  "Bespoke AI solutions designed and built specifically for your unique business challenges and operational requirements.",
                icon: <Settings className="h-10 w-10 text-primary-600" />,
                features: [
                  "Custom algorithms",
                  "Integration with existing systems",
                  "Scalable architecture",
                  "Ongoing support",
                ],
              },
              {
                title: "Predictive Analytics",
                description:
                  "Advanced data analysis that identifies patterns and predicts future trends to inform better business decisions.",
                icon: <BarChart4 className="h-10 w-10 text-primary-600" />,
                features: [
                  "Trend forecasting",
                  "Risk assessment",
                  "Opportunity identification",
                  "Performance optimization",
                ],
              },
              {
                title: "Computer Vision",
                description:
                  "AI systems that can analyze, interpret, and extract meaningful information from visual data like images and videos.",
                icon: <Eye className="h-10 w-10 text-primary-600" />,
                features: [
                  "Object detection",
                  "Image recognition",
                  "Video analysis",
                  "Visual inspection automation",
                ],
              },
              {
                title: "Natural Language Processing",
                description:
                  "AI solutions that understand, interpret, and generate human language for improved communication and data extraction.",
                icon: <MessageSquare className="h-10 w-10 text-primary-600" />,
                features: [
                  "Sentiment analysis",
                  "Text classification",
                  "Chatbot development",
                  "Content generation",
                ],
              },
              {
                title: "AI Security Solutions",
                description:
                  "Intelligent systems that protect your business from cyber threats and ensure data privacy compliance.",
                icon: <Lock className="h-10 w-10 text-primary-600" />,
                features: [
                  "Threat detection",
                  "Fraud prevention",
                  "Anomaly identification",
                  "Compliance monitoring",
                ],
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-200">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="text-primary-600 font-medium flex items-center hover:text-primary-700"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Our Implementation Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We follow a proven methodology to ensure your AI solution delivers
              maximum value
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "We analyze your business needs, challenges, and goals to identify the right AI approach.",
              },
              {
                step: "02",
                title: "Design",
                description:
                  "Our team creates a tailored solution architecture and implementation strategy.",
              },
              {
                step: "03",
                title: "Development",
                description:
                  "We build your custom AI solution using best practices and cutting-edge technologies.",
              },
              {
                step: "04",
                title: "Deployment & Support",
                description:
                  "We implement the solution in your environment and provide ongoing maintenance and optimization.",
              },
            ].map((process, index) => (
              <div key={index} className="relative">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                  <div className="text-4xl font-bold text-primary-600 mb-4">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{process.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {process.description}
                  </p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                    <ArrowRight className="h-8 w-8 text-gray-300 dark:text-gray-600" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our AI solutions are adaptable to various sectors, helping
              businesses across industries
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "Healthcare",
              "Finance",
              "Retail",
              "Manufacturing",
              "Transportation",
              "Education",
              "Energy",
              "Telecommunications",
            ].map((industry, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg text-center border border-gray-100 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-700 transition-colors duration-300"
              >
                <h3 className="text-lg font-medium">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 py-16 rounded-lg">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Ready to transform your business with AI?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our AI experts and discover how our
            services can meet your unique needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="white"
              size="lg"
              className="inline-flex items-center justify-center"
            >
              Book a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Link to="/contact">
              <Button variant="outline-white" size="lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
