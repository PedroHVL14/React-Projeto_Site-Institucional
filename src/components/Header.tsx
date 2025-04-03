
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Logo from "./Logo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <header className={`sticky top-0 bg-white z-50 transition-all duration-300 ${isScrolled ? 'shadow-md py-2' : 'py-4'}`}>
      <div className="container flex justify-between items-center">
        <ScrollLink to="home" smooth={true} duration={500} className="cursor-pointer">
          <Logo onClick={scrollToTop} />
        </ScrollLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ScrollLink 
            to="home" 
            smooth={true} 
            duration={500} 
            className="text-gray-700 hover:text-tech-green transition-colors cursor-pointer"
          >
            Início
          </ScrollLink>
          <ScrollLink 
            to="services" 
            smooth={true} 
            duration={500} 
            offset={-100} 
            className="text-gray-700 hover:text-tech-green transition-colors cursor-pointer"
          >
            Serviços
          </ScrollLink>
          <ScrollLink 
            to="portfolio" 
            smooth={true} 
            duration={500} 
            offset={-100} 
            className="text-gray-700 hover:text-tech-green transition-colors cursor-pointer"
          >
            Portfólio
          </ScrollLink>
          <ScrollLink 
            to="contact" 
            smooth={true} 
            duration={500} 
            offset={-100} 
            className="text-gray-700 hover:text-tech-green transition-colors cursor-pointer"
          >
            Contato
          </ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500} offset={-100}>
            <Button className="bg-tech-blue hover:bg-tech-lightblue text-white">
              Orçamento
            </Button>
          </ScrollLink>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button className="md:hidden text-gray-700" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="container py-4 flex flex-col space-y-4">
            <ScrollLink 
              to="home" 
              smooth={true} 
              duration={500}
              className="text-gray-700 hover:text-tech-blue transition-colors py-2 cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              Início
            </ScrollLink>
            <ScrollLink 
              to="services" 
              smooth={true} 
              duration={500}
              offset={-100} 
              className="text-gray-700 hover:text-tech-blue transition-colors py-2 cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              Serviços
            </ScrollLink>
            <ScrollLink 
              to="portfolio" 
              smooth={true} 
              duration={500}
              offset={-100} 
              className="text-gray-700 hover:text-tech-blue transition-colors py-2 cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfólio
            </ScrollLink>
            <ScrollLink 
              to="contact" 
              smooth={true} 
              duration={500}
              offset={-100} 
              className="text-gray-700 hover:text-tech-blue transition-colors py-2 cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </ScrollLink>
            <ScrollLink 
              to="contact" 
              smooth={true} 
              duration={500}
              offset={-100} 
              onClick={() => setIsMenuOpen(false)}
            >
              <Button className="bg-tech-blue hover:bg-tech-lightblue text-white w-full">
                Orçamento
              </Button>
            </ScrollLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
