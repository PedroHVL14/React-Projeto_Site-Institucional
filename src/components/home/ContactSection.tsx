
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // In a real application, we would send the form data to a backend
    toast({
      title: "Mensagem enviada!",
      description: "Agradecemos seu contato. Responderemos em breve.",
      duration: 5000,
    });

    // Reset form
    const form = e.target as HTMLFormElement;
    form.reset();
  };

  return (
    <section id="contact" className="bg-gradient-to-r from-[#0FFAFA] to-[#18CDCA] py-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <h2 className="text-4xl font-bold font-heading">Entre em Contato</h2>
            <p className="text-lg opacity-90 max-w-lg">
              Estamos prontos para ajudar seu negócio a alcançar seu potencial máximo com nossas soluções tecnológicas.
            </p>
            
            <div className="space-y-6 mt-8">
              <div className="flex items-start">
                <div className="bg-white/10 p-3 rounded-full mr-4">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Endereço</h4>
                  <p className="opacity-90">
                    Av. Tecnologia, 1000, São Paulo, SP - Brasil
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white/10 p-3 rounded-full mr-4">
                  <Phone size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Telefone</h4>
                  <p className="opacity-90">+55 (11) 3456-7890</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white/10 p-3 rounded-full mr-4">
                  <Mail size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Email</h4>
                  <p className="opacity-90">contato@tecbrasil.com.br</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-tech-blue">Solicite um orçamento</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-3">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nome*
                </label>
                <Input
                  id="name"
                  name="name"
                  required
                  placeholder="Seu nome completo"
                  className="w-full bg-gray-50"
                />
              </div>
              
              <div className="space-y-3">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email*
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="seu@email.com"
                  className="w-full bg-gray-50"
                />
              </div>
              
              <div className="space-y-3">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  WhatsApp (com DDD)*
                </label>
                <Input
                  id="phone"
                  name="phone"
                  required
                  placeholder="(00) 00000-0000"
                  className="w-full bg-gray-50"
                />
              </div>
              
              <div className="space-y-3">
                <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                  Empresa
                </label>
                <Input
                  id="company"
                  name="company"
                  placeholder="Nome da sua empresa"
                  className="w-full bg-gray-50"
                />
              </div>

              <div className="space-y-3">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Descreva seu projeto ou dúvida..."
                  rows={3}
                  className="w-full resize-none bg-gray-50"
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="terms" required />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Concordo com os termos de uso
                </label>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-[#F3E35C] hover:bg-[#F4D03F] text-tech-blue font-semibold flex items-center justify-center"
              >
                Enviar <ArrowRight size={16} className="ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
