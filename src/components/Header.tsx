
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <div className="container flex justify-between items-center py-4">
        <Link to="/" className="flex items-center">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-tech-green transition-colors">
            Início
          </Link>
          <a href="#services" className="text-gray-700 hover:text-tech-green transition-colors">
            Serviços
          </a>
          <a href="#portfolio" className="text-gray-700 hover:text-tech-green transition-colors">
            Portfólio
          </a>
          <a href="#contact" className="text-gray-700 hover:text-tech-green transition-colors">
            Contato
          </a>
          <Button className="bg-tech-blue hover:bg-tech-lightblue text-white">
            Orçamento
          </Button>
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
            <Link 
              to="/" 
              className="text-gray-700 hover:text-tech-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Início
            </Link>
            <a 
              href="#services" 
              className="text-gray-700 hover:text-tech-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Serviços
            </a>
            <a 
              href="#portfolio" 
              className="text-gray-700 hover:text-tech-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfólio
            </a>
            <a 
              href="#contact" 
              className="text-gray-700 hover:text-tech-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </a>
            <Button className="bg-tech-blue hover:bg-tech-lightblue text-white w-full">
              Orçamento
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
