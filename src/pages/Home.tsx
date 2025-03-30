import { ArrowRight, CheckCircle2, Zap } from "lucide-react";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="space-y-24 py-8">
      {/* Hero Section */}
      <section className="text-center pt-12 pb-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="mb-6 inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary-100 text-primary-600">
            <Zap className="h-4 w-4 mr-1" />
            <span>AI-powered solutions for modern businesses</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Transform Your Business with{" "}
            <span className="text-primary-600">Intelligent AI</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
            StreamLine helps businesses automate workflows, gain insights from
            data, and make better decisions with our cutting-edge AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              className="inline-flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg">
              Book a Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="Services" className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We provide cutting-edge AI solutions designed to meet your
              business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "AI Consulting",
                description:
                  "Expert guidance on integrating AI into your business processes and operations",
                icon: "💡",
              },
              {
                title: "Custom AI Solutions",
                description:
                  "Tailored AI applications built specifically for your unique business challenges",
                icon: "🔧",
              },
              {
                title: "Data Analysis",
                description:
                  "Advanced analytics to extract valuable insights from your business data",
                icon: "📊",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section id="UseCases" className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Use Cases</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              See how our AI solutions are making an impact across industries
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                title: "Healthcare",
                description:
                  "AI-powered diagnostic tools that help medical professionals detect diseases earlier and with greater accuracy.",
                benefits: [
                  "Increased diagnostic accuracy",
                  "Reduced waiting times",
                  "Better patient outcomes",
                ],
              },
              {
                title: "Finance",
                description:
                  "Intelligent fraud detection systems that identify suspicious activities in real-time to protect your business.",
                benefits: [
                  "Reduced fraud losses",
                  "Improved compliance",
                  "Faster transaction processing",
                ],
              },
              {
                title: "Retail",
                description:
                  "Smart inventory management systems that optimize stock levels and reduce costs.",
                benefits: [
                  "Lower inventory costs",
                  "Reduced stockouts",
                  "Improved customer satisfaction",
                ],
              },
              {
                title: "Manufacturing",
                description:
                  "Predictive maintenance solutions that identify potential equipment failures before they happen.",
                benefits: [
                  "Reduced downtime",
                  "Lower maintenance costs",
                  "Extended equipment life",
                ],
              },
            ].map((useCase, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-bold mb-3">{useCase.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {useCase.description}
                </p>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies already using StreamLine AI to transform
            their business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              className="inline-flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Link to="/about">
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Don't just take our word for it — hear from some of our satisfied
              clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "StreamLine AI has transformed our business processes, saving us countless hours and improving our decision-making.",
                author: "Sarah Johnson",
                position: "CTO, TechCorp",
              },
              {
                quote:
                  "The insights we've gained through StreamLine's data analysis have been invaluable for our growth strategy.",
                author: "Michael Chen",
                position: "CEO, Growth Ventures",
              },
              {
                quote:
                  "Implementation was smooth and the results were immediate. Our team couldn't be happier with the solution.",
                author: "Emily Rodriguez",
                position: "Operations Director, InnovateCo",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm"
              >
                <p className="text-gray-600 dark:text-gray-300 italic mb-6">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
