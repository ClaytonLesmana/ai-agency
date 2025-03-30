import {
  ArrowRight,
  CheckCircle2,
  Zap,
  BarChart,
  Brain,
  TrendingUp,
  Shield,
  HeartPulse,
  ShoppingCart,
  Factory,
} from "lucide-react";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const UseCases = () => {
  return (
    <div className="space-y-20 py-8">
      {/* Hero Section */}
      <section className="text-center pt-12 pb-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="mb-6 inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary-100 text-primary-600">
            <Zap className="h-4 w-4 mr-1" />
            <span>Real-world AI applications</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            AI Solutions <span className="text-primary-600">In Action</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
            Discover how businesses across industries are leveraging our AI
            technology to solve complex challenges and drive growth.
          </p>
        </div>
      </section>

      {/* Industry Section: Healthcare */}
      <section id="healthcare" className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-600 mb-6">
                <HeartPulse className="h-4 w-4 mr-1" />
                <span>Healthcare</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">
                Revolutionizing Medical Diagnostics
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Our AI imaging solutions are helping healthcare providers detect
                diseases earlier and with greater accuracy, improving patient
                outcomes and saving lives.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">
                      99% Diagnostic Accuracy
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Our machine learning models achieve near-perfect accuracy
                      in identifying early-stage conditions from medical
                      imaging.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">
                      50% Reduction in Wait Times
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Automated analysis allows radiologists to review more
                      scans in less time, dramatically reducing patient wait
                      times.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Seamless Integration</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Our solution integrates with existing PACS and EHR systems
                      for minimal disruption to clinical workflows.
                    </p>
                  </div>
                </div>
              </div>

              <Link
                to="/contact"
                className="text-primary-600 font-medium flex items-center hover:text-primary-700"
              >
                Learn more about our healthcare solutions{" "}
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="md:w-1/2 bg-gray-100 dark:bg-gray-800 rounded-xl p-6">
              <div className="aspect-video bg-white dark:bg-gray-700 rounded-lg shadow-md flex items-center justify-center">
                <div className="text-center p-8">
                  <HeartPulse className="h-16 w-16 text-primary-600 mx-auto mb-4" />
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Interactive demo would appear here
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Section: Finance */}
      <section id="finance" className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
            <div className="md:w-1/2">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-600 mb-6">
                <TrendingUp className="h-4 w-4 mr-1" />
                <span>Finance</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">
                Intelligent Fraud Detection
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Our AI-powered fraud detection system identifies suspicious
                activities in real-time, protecting financial institutions and
                their customers from fraudulent transactions.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">
                      85% Reduction in False Positives
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Advanced pattern recognition dramatically reduces false
                      fraud alerts, saving time and improving customer
                      experience.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">
                      $4.5M Average Annual Savings
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Our clients report significant cost savings from prevented
                      fraud and reduced manual review processes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Real-time Protection</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Transactions are analyzed in milliseconds, allowing for
                      immediate intervention before funds are transferred.
                    </p>
                  </div>
                </div>
              </div>

              <Link
                to="/contact"
                className="text-primary-600 font-medium flex items-center hover:text-primary-700"
              >
                Learn more about our financial solutions{" "}
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="md:w-1/2 bg-gray-100 dark:bg-gray-800 rounded-xl p-6">
              <div className="aspect-video bg-white dark:bg-gray-700 rounded-lg shadow-md flex items-center justify-center">
                <div className="text-center p-8">
                  <Shield className="h-16 w-16 text-primary-600 mx-auto mb-4" />
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Fraud detection visualization would appear here
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Section: Retail */}
      <section id="retail" className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-purple-100 text-purple-600 mb-6">
                <ShoppingCart className="h-4 w-4 mr-1" />
                <span>Retail</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">
                Smart Inventory Management
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Our AI-powered inventory solution predicts demand patterns,
                optimizes stock levels, and reduces costs while ensuring
                products are available when customers want them.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">
                      32% Reduction in Inventory Costs
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Smart stocking levels reduce excess inventory while
                      maintaining product availability.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">21% Fewer Stockouts</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Predictive ordering ensures products are restocked before
                      they run out, improving customer satisfaction.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Demand Forecasting</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Our models analyze seasonal trends, promotions, and market
                      factors to predict future sales with high accuracy.
                    </p>
                  </div>
                </div>
              </div>

              <Link
                to="/contact"
                className="text-primary-600 font-medium flex items-center hover:text-primary-700"
              >
                Learn more about our retail solutions{" "}
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="md:w-1/2 bg-gray-100 dark:bg-gray-800 rounded-xl p-6">
              <div className="aspect-video bg-white dark:bg-gray-700 rounded-lg shadow-md flex items-center justify-center">
                <div className="text-center p-8">
                  <BarChart className="h-16 w-16 text-primary-600 mx-auto mb-4" />
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Inventory analytics dashboard would appear here
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Section: Manufacturing */}
      <section id="manufacturing" className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
            <div className="md:w-1/2">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-yellow-100 text-yellow-600 mb-6">
                <Factory className="h-4 w-4 mr-1" />
                <span>Manufacturing</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">
                Predictive Maintenance
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Our AI predictive maintenance solution monitors equipment health
                in real-time to prevent failures before they occur, reducing
                downtime and extending asset lifespans.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">
                      73% Reduction in Unplanned Downtime
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Our clients see dramatic reductions in unexpected
                      equipment failures and emergency repairs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">
                      18% Decrease in Maintenance Costs
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Scheduled maintenance based on actual equipment condition
                      rather than arbitrary timeframes reduces unnecessary work.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">
                      Extended Equipment Life
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Identifying and addressing minor issues before they cause
                      major failures extends the useful life of expensive
                      machinery.
                    </p>
                  </div>
                </div>
              </div>

              <Link
                to="/contact"
                className="text-primary-600 font-medium flex items-center hover:text-primary-700"
              >
                Learn more about our manufacturing solutions{" "}
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="md:w-1/2 bg-gray-100 dark:bg-gray-800 rounded-xl p-6">
              <div className="aspect-video bg-white dark:bg-gray-700 rounded-lg shadow-md flex items-center justify-center">
                <div className="text-center p-8">
                  <Brain className="h-16 w-16 text-primary-600 mx-auto mb-4" />
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Predictive maintenance interface would appear here
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 rounded-lg">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Ready to transform your industry with AI?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our AI experts to explore how our
            solutions can address your specific business challenges.
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
            <Link to="/services">
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent text-white border border-white hover:bg-white/10"
              >
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UseCases;
