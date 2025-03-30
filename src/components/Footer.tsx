import { Link } from "react-router-dom";
import { Zap, Github, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
          {/* Brand column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Zap className="h-6 w-6 text-primary-500" />
              <span className="text-xl font-bold text-white">StreamLine</span>
            </div>
            <p className="text-sm text-gray-300">
              Powerful AI solutions for modern businesses. Streamline your
              workflow and boost productivity.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                className="text-gray-400 hover:text-primary-500"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-400 hover:text-primary-500"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://instagram.com"
                className="text-gray-400 hover:text-primary-500"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Links columns */}
          <div>
            <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {[
                "AI Consulting",
                "Technology Integration",
                "Custom Solutions",
                "Data Analysis",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="#"
                    className="text-gray-400 hover:text-primary-400 text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {["About", "Blog", "Careers", "Press"].map((item) => (
                <li key={item}>
                  <Link
                    to="#"
                    className="text-gray-400 hover:text-primary-400 text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              {["Privacy", "Terms", "Security", "Cookies"].map((item) => (
                <li key={item}>
                  <Link
                    to="#"
                    className="text-gray-400 hover:text-primary-400 text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 py-6">
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} StreamLine AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
