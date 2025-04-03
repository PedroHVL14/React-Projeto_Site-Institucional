
import React, { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  client: string;
  technology: string;
  link?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce B2B",
    category: "Desenvolvimento Web",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    description: "Plataforma completa de e-commerce B2B com gestão de pedidos, integração ERP e área do cliente personalizada.",
    client: "TechCommerce",
    technology: "React, Node.js, MongoDB",
    link: "#"
  },
  {
    id: 2,
    title: "Aplicativo de Entregas",
    category: "Aplicativos Mobile",
    imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    description: "Aplicativo de delivery com rastreamento em tempo real, pagamento integrado e gestão de pedidos para restaurantes.",
    client: "FoodExpress",
    technology: "React Native, Firebase, Google Maps API",
    link: "#"
  },
  {
    id: 3,
    title: "Dashboard Analítico",
    category: "Análise de Dados",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    description: "Dashboard de business intelligence para visualização de indicadores em tempo real e relatórios personalizados.",
    client: "DataInsight",
    technology: "Vue.js, Python, PostgreSQL",
    link: "#"
  },
  {
    id: 4,
    title: "Sistema de Gestão ERP",
    category: "Desenvolvimento de Software",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    description: "Sistema ERP completo com módulos de vendas, estoque, financeiro e RH integrados em uma única plataforma.",
    client: "ManageCorp",
    technology: "Angular, Java Spring Boot, MySQL",
    link: "#"
  },
  {
    id: 5,
    title: "Plataforma Educacional",
    category: "Desenvolvimento Web",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    description: "Ambiente virtual de aprendizado com recursos interativos, avaliações online e monitoramento de desempenho.",
    client: "EduTech",
    technology: "Next.js, GraphQL, MongoDB",
    link: "#"
  },
  {
    id: 6,
    title: "App Fintech",
    category: "Aplicativos Mobile",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    description: "Aplicativo de gestão financeira pessoal com integração bancária, controle de gastos e planejamento financeiro.",
    client: "FinControl",
    technology: "Flutter, Firebase, APIs bancárias",
    link: "#"
  }
];

const PortfolioSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>("Todos");
  
  const categories = ["Todos", ...Array.from(new Set(projects.map(project => project.category)))];
  
  const filteredProjects = filter === "Todos" 
    ? projects 
    : projects.filter(project => project.category === filter);

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  return (
    <section id="portfolio" className="section">
      <div className="container">
        <h2 className="section-title">Nosso Portfólio</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
          Conheça alguns dos nossos projetos mais recentes e descubra como podemos ajudar seu negócio a atingir seus objetivos.
        </p>

        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={filter === category ? "default" : "outline"}
              className={filter === category ? "bg-tech-blue" : ""}
              onClick={() => setFilter(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => handleOpenProject(project)}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="text-sm text-tech-lightblue font-semibold">{project.category}</span>
                <h3 className="text-xl font-bold mb-2 text-tech-blue">{project.title}</h3>
                <p className="text-gray-600 line-clamp-2">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={handleCloseProject}>
        {selectedProject && (
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
              <DialogDescription className="text-tech-lightblue font-medium">
                {selectedProject.category}
              </DialogDescription>
            </DialogHeader>
            
            <div className="mt-4">
              <img 
                src={selectedProject.imageUrl} 
                alt={selectedProject.title} 
                className="w-full h-64 object-cover rounded-md"
              />
              
              <div className="mt-6 space-y-4">
                <p className="text-gray-700">{selectedProject.description}</p>
                
                <div className="grid grid-cols-2 gap-4 py-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500">Cliente</h4>
                    <p>{selectedProject.client}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500">Tecnologias</h4>
                    <p>{selectedProject.technology}</p>
                  </div>
                </div>
                
                {selectedProject.link && (
                  <div className="pt-4">
                    <a 
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="inline-flex items-center text-tech-blue hover:text-tech-lightblue"
                    >
                      Visitar Projeto <ExternalLink size={16} className="ml-1" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
};

export default PortfolioSection;
