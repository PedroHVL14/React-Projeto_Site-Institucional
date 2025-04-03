
import React from "react";
import { Star } from "lucide-react";

interface TestimonialProps {
  content: string;
  name: string;
  role: string;
  company: string;
  rating: number;
}

const Testimonial = ({ content, name, role, company, rating }: TestimonialProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={18}
            className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
          />
        ))}
      </div>
      <p className="text-gray-700 mb-6 italic">"{content}"</p>
      <div>
        <p className="font-semibold text-gray-800">{name}</p>
        <p className="text-gray-600 text-sm">
          {role}, {company}
        </p>
      </div>
    </div>
  );
};

const TestimonialSection = () => {
  const testimonials = [
    {
      content: "A TechSpark transformou nosso processo de vendas com um sistema personalizado que aumentou nossa eficiência em 40%. A equipe é extremamente profissional e atenciosa.",
      name: "Marcos Silva",
      role: "Diretor de Operações",
      company: "Retail Solutions",
      rating: 5,
    },
    {
      content: "O aplicativo desenvolvido pela TechSpark melhorou significativamente a experiência dos nossos clientes. O suporte pós-lançamento também tem sido excelente.",
      name: "Carla Mendes",
      role: "CEO",
      company: "FoodDelivery",
      rating: 5,
    },
    {
      content: "A migração para a nuvem conduzida pela equipe da TechSpark foi rápida e sem interrupções. Agora temos uma infraestrutura muito mais segura e econômica.",
      name: "Ricardo Ferreira",
      role: "CTO",
      company: "FinTech Solutions",
      rating: 4,
    },
  ];

  return (
    <section className="section bg-white">
      <div className="container">
        <h2 className="section-title">O Que Nossos Clientes Dizem</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          A satisfação dos nossos clientes é a nossa maior recompensa. Confira alguns depoimentos de empresas que transformaram seus negócios com nossas soluções.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              content={testimonial.content}
              name={testimonial.name}
              role={testimonial.role}
              company={testimonial.company}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
