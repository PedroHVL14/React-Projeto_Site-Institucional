
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-tech-blue to-tech-lightblue text-white py-20 md:py-32">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight">
              Transforme seu Negócio com Soluções Tecnológicas Inovadoras
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Desenvolvimento de software personalizado, consultoria em TI e soluções digitais para empresas que buscam inovação e crescimento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-tech-green text-white hover:bg-tech-blue text-base px-6 py-6">
                Conheça Nossos Serviços
              </Button>
              <Button 
                variant="outline" 
                className="border-tech-yellow text-tech-yellow hover:bg-tech-yellow/10 text-base px-6 py-6"
              >
                Fale Conosco <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <img 
              src="https://images.unsplash.com/photo-1518495973542-4542c06a5843" 
              alt="Profissionais trabalhando com tecnologia" 
              className="rounded-lg shadow-lg object-cover w-full h-[500px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
