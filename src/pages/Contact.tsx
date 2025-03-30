import { useState } from "react";
import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  Clock,
  Zap,
  CheckCircle,
} from "lucide-react";
import Button from "../components/Button";

const ContactPage = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    service: "",
    submitted: false,
    loading: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState((prev) => ({ ...prev, loading: true }));

    // Simulate form submission
    setTimeout(() => {
      setFormState((prev) => ({ ...prev, submitted: true, loading: false }));
    }, 1000);
  };

  return (
    <div className="space-y-20 py-8">
      {/* Hero Section */}
      <section className="text-center pt-12 pb-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="mb-6 inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary-100 text-primary-600">
            <Zap className="h-4 w-4 mr-1" />
            <span>Get in touch with our team</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Let's Start Your{" "}
            <span className="text-primary-600">AI Journey</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
            Our AI experts are ready to discuss your business needs and help you
            implement the perfect solution.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
              {!formState.submitted ? (
                <>
                  <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formState.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formState.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                        >
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formState.company}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700"
                          placeholder="Your Company"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="service"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                        >
                          Service Interest
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formState.service}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700"
                        >
                          <option value="" disabled>
                            Select a service
                          </option>
                          <option value="ai-consulting">AI Consulting</option>
                          <option value="custom-ai">
                            Custom AI Development
                          </option>
                          <option value="predictive-analytics">
                            Predictive Analytics
                          </option>
                          <option value="computer-vision">
                            Computer Vision
                          </option>
                          <option value="nlp">
                            Natural Language Processing
                          </option>
                          <option value="security">
                            AI Security Solutions
                          </option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        value={formState.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700"
                        placeholder="Tell us about your project or questions..."
                      ></textarea>
                    </div>

                    <div className="flex justify-end">
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        className="inline-flex items-center"
                        disabled={formState.loading}
                      >
                        {formState.loading ? "Sending..." : "Send Message"}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </div>
                  </form>
                </>
              ) : (
                <div className="text-center py-16 px-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold mb-2">
                    Message Sent Successfully!
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-8">
                    Thank you for reaching out. One of our team members will get
                    back to you shortly.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() =>
                      setFormState({
                        name: "",
                        email: "",
                        company: "",
                        message: "",
                        service: "",
                        submitted: false,
                        loading: false,
                      })
                    }
                  >
                    Send Another Message
                  </Button>
                </div>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  Reach out to us directly or fill out the form and we'll get
                  back to you promptly.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary-100 rounded-lg p-3 mr-4">
                    <Mail className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                    <a
                      href="mailto:contact@streamline-ai.com"
                      className="text-gray-600 dark:text-gray-300 hover:text-primary-600"
                    >
                      contact@streamline-ai.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary-100 rounded-lg p-3 mr-4">
                    <Phone className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Call Us</h3>
                    <a
                      href="tel:+18005551234"
                      className="text-gray-600 dark:text-gray-300 hover:text-primary-600"
                    >
                      +1 (800) 555-1234
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary-100 rounded-lg p-3 mr-4">
                    <MapPin className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      Office Location
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      123 Tech Plaza, Suite 400
                      <br />
                      San Francisco, CA 94103
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary-100 rounded-lg p-3 mr-4">
                    <Clock className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      Business Hours
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Monday - Friday: 9:00 AM - 5:00 PM
                      <br />
                      Weekend: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {["LinkedIn", "Twitter", "Facebook", "GitHub"].map(
                    (platform) => (
                      <a
                        key={platform}
                        href="#"
                        className="text-sm text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-500"
                      >
                        {platform}
                      </a>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden h-96">
            <div className="w-full h-full flex items-center justify-center bg-gray-200 dark:bg-gray-700">
              <div className="text-center p-8">
                <MapPin className="h-12 w-12 text-primary-300 mx-auto mb-3" />
                <p className="text-gray-500 dark:text-gray-400">
                  Interactive map would appear here
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Common questions about working with our AI agency
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How quickly can you implement an AI solution?",
                answer:
                  "Implementation timelines vary based on the complexity of the solution. Simple integrations can take as little as 2-4 weeks, while more complex custom solutions may require 2-6 months. During our initial consultation, we'll provide you with a detailed timeline specific to your project.",
              },
              {
                question:
                  "Do I need to have technical expertise to work with you?",
                answer:
                  "Not at all. Our team specializes in translating complex technical concepts into clear business language. We'll handle the technical aspects while ensuring you understand how the solution benefits your business and how to effectively use it.",
              },
              {
                question: "What industries do you specialize in?",
                answer:
                  "We have experience implementing AI solutions across healthcare, finance, retail, manufacturing, education, and more. Our diverse team brings industry-specific knowledge to ensure solutions are tailored to your sector's unique challenges and requirements.",
              },
              {
                question: "How do you ensure data privacy and security?",
                answer:
                  "Data security is our top priority. We implement industry-standard encryption, secure cloud infrastructure, and strict access controls. We're compliant with regulations like GDPR and CCPA, and can work with your legal and IT teams to ensure all security requirements are met.",
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
            Schedule a consultation with our AI experts today and take the first
            step toward innovation.
          </p>
          <Button
            variant="white"
            size="lg"
            className="inline-flex items-center justify-center"
          >
            Schedule Your Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
