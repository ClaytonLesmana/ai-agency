import { useState } from "react";
import { Link } from "react-router-dom";
import { Zap, ChevronRight, Menu, X } from "lucide-react";
import Button from "./Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-6xl mx-auto px-4 flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Zap className="h-6 w-6 text-primary-600" />
          <span className="text-xl font-bold">StreamLine</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-primary-600">
            Home
          </Link>
          <Link
            to="/services"
            className="text-sm font-medium hover:text-primary-600"
          >
            Services
          </Link>
          <Link
            to="/Products"
            className="text-sm font-medium hover:text-primary-600"
          >
            Products
          </Link>
          <Link
            to="use-cases"
            className="text-sm font-medium hover:text-primary-600"
          >
            Use Cases
          </Link>
          <Link
            to="/blog"
            className="text-sm font-medium hover:text-primary-600"
          >
            Blog
          </Link>
        </nav>

        {/* Desktop CTA buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="#" className="text-sm font-medium hover:text-primary-600">
            Sign In
          </Link>
          <Link
            to="/contact"
            className="text-sm font-medium hover:text-primary-600"
          >
            <Button variant="primary" className="inline-flex items-center">
              Contact Now!
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-gray-600 hover:text-primary-600"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link
              to="#features"
              className="text-sm font-medium hover:text-primary-600 py-2 border-b"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              to="#testimonials"
              className="text-sm font-medium hover:text-primary-600 py-2 border-b"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              to="#pricing"
              className="text-sm font-medium hover:text-primary-600 py-2 border-b"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              to="#"
              className="text-sm font-medium hover:text-primary-600 py-2 border-b"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="#"
              className="text-sm font-medium hover:text-primary-600 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign In
            </Link>
            <Button
              variant="primary"
              className="inline-flex items-center justify-center w-full mt-2"
            >
              Get Started
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
