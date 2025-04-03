
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Zap, TrendingUp } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

const HeroSection = () => {
  return (
    <section id="home" className="bg-gradient-to-r from-[#1A1F2C] to-[#2A3042] text-white py-20 md:py-32 overflow-hidden relative">
      {/* Background tech elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-12 left-1/4 text-[#8B5CF6] rotate-12">
          <Code size={60} />
        </div>
        <div className="absolute bottom-20 right-1/4 text-[#1EAEDB] -rotate-6">
          <Zap size={48} />
        </div>
        <div className="absolute top-1/3 right-12 text-[#D946EF]">
          <TrendingUp size={42} />
        </div>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block bg-gradient-to-r from-[#9b87f5] to-[#D946EF] mb-4 px-4 py-1 rounded-full">
              <span className="text-sm font-medium tracking-wider">INOVAÇÃO TECNOLÓGICA</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Transforme seu Negócio com Soluções Tecnológicas
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300">
              Desenvolvimento de software personalizado, consultoria em TI e soluções digitais para empresas que buscam inovação e crescimento.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <ScrollLink to="services" smooth={true} duration={500} offset={-100}>
                <Button className="bg-[#0EA5E9] hover:bg-[#0EA5E9]/80 text-white text-base px-6 py-6 w-full sm:w-auto transition-all duration-300 hover:scale-105">
                  Conheça Nossos Serviços
                </Button>
              </ScrollLink>
              
              <ScrollLink to="contact" smooth={true} duration={500} offset={-100}>
                <Button 
                  className="bg-[#0EA5E9] hover:bg-[#0EA5E9]/80 text-white text-base px-6 py-6 w-full sm:w-auto transition-all duration-300 hover:scale-105"
                >
                  Fale Conosco <ArrowRight size={16} className="ml-2" />
                </Button>
              </ScrollLink>
            </div>
          </div>
          
          <div className="hidden lg:block relative">
            <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-[#9b87f5] to-[#0EA5E9] opacity-75 blur-sm"></div>
            <img 
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
              alt="Tecnologia e desenvolvimento de software" 
              className="rounded-lg shadow-lg object-cover w-full h-[500px] relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
