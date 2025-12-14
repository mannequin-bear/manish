import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { TeacupMascot } from "./TeacupMascot";

// Updated: "Contact" is removed from this list
const NAV_LINKS = [
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Blog", id: "blog" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Helper function to handle smooth scrolling
  const scrollToSection = (id: string) => {
    setIsOpen(false); // Close mobile menu if open
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Scroll to top when clicking logo */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            className="text-xl font-bold gradient-text"
          >
            My Space
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.id)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors bg-transparent border-none cursor-pointer"
              >
                {link.label}
              </button>
            ))}
            
            {/* The "Get in Touch" button is still here */}
            <button
              onClick={() => scrollToSection('contact')}
              className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Get in Touch
            </button>
            <TeacupMascot />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass border-t border-border/50"
          >
            <div className="px-4 py-4 space-y-3">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-left py-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-center py-3 rounded-lg bg-primary text-primary-foreground font-medium"
              >
                Get in Touch
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
