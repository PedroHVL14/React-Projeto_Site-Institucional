
import React from "react";
import { Code, Globe, Server, Smartphone, Cpu, BarChart3 } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
      <div className="bg-tech-blue/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
        <div className="text-tech-blue">{icon}</div>
      </div>
      <h3 className="text-xl font-semibold mb-3 text-tech-blue">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      title: "Desenvolvimento Web",
      description: "Sites responsivos, aplicações web e e-commerce personalizados com as melhores tecnologias do mercado.",
      icon: <Globe size={28} />,
    },
    {
      title: "Aplicativos Mobile",
      description: "Desenvolvimento de aplicativos nativos e multiplataforma para iOS e Android que transformam sua ideia em realidade.",
      icon: <Smartphone size={28} />,
    },
    {
      title: "Soluções em Cloud",
      description: "Implantação, migração e gerenciamento de infraestrutura em nuvem otimizada para seu negócio.",
      icon: <Server size={28} />,
    },
    {
      title: "Desenvolvimento de Software",
      description: "Soluções personalizadas para automatizar processos e resolver problemas específicos do seu negócio.",
      icon: <Code size={28} />,
    },
    {
      title: "Inteligência Artificial",
      description: "Implementação de soluções de IA e machine learning para otimizar decisões e processos empresariais.",
      icon: <Cpu size={28} />,
    },
    {
      title: "Análise de Dados",
      description: "Transforme dados em insights com nossas soluções de business intelligence e analytics.",
      icon: <BarChart3 size={28} />,
    },
  ];

  return (
    <section id="services" className="section bg-tech-gray">
      <div className="container">
        <h2 className="section-title">Nossos Serviços</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Oferecemos soluções tecnológicas completas para atender às necessidades específicas do seu negócio, 
          desde o desenvolvimento de aplicações até consultoria especializada.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
