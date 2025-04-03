
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-tech-blue text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">TechSpark</h3>
            <p className="mb-4 text-gray-300">
              Soluções tecnológicas inovadoras para transformar seu negócio e impulsionar seu crescimento.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-tech-lightblue transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="hover:text-tech-lightblue transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" className="hover:text-tech-lightblue transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" className="hover:text-tech-lightblue transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <a href="#web-development" className="text-gray-300 hover:text-white transition-colors">Desenvolvimento Web</a>
              </li>
              <li>
                <a href="#mobile-development" className="text-gray-300 hover:text-white transition-colors">Aplicativos Mobile</a>
              </li>
              <li>
                <a href="#cloud-solutions" className="text-gray-300 hover:text-white transition-colors">Soluções em Cloud</a>
              </li>
              <li>
                <a href="#consulting" className="text-gray-300 hover:text-white transition-colors">Consultoria em TI</a>
              </li>
              <li>
                <a href="#data-analytics" className="text-gray-300 hover:text-white transition-colors">Análise de Dados</a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">Sobre Nós</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">Serviços</a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-300 hover:text-white transition-colors">Portfólio</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contato</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 flex-shrink-0 mt-1" />
                <span>Av. Tecnologia, 1000<br />São Paulo, SP - Brasil</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0" />
                <span>(11) 3456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0" />
                <a href="mailto:contato@techspark.com.br" className="hover:underline">
                  contato@techspark.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-300">
          <p>&copy; {currentYear} TechSpark. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
