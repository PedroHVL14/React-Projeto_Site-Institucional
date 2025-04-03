
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, MapPin, Phone } from "lucide-react";

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
    <section id="contact" className="section bg-tech-gray">
      <div className="container">
        <h2 className="section-title">Entre em Contato</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Estamos prontos para ajudar seu negócio a alcançar seu potencial máximo com nossas soluções tecnológicas.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6 text-tech-blue">Envie uma Mensagem</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">
                    Nome Completo
                  </label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="Seu nome"
                    className="w-full"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="seu@email.com"
                    className="w-full"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium">
                  Assunto
                </label>
                <Input
                  id="subject"
                  name="subject"
                  required
                  placeholder="Como podemos ajudar?"
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Descreva seu projeto ou dúvida..."
                  rows={5}
                  className="w-full resize-none"
                />
              </div>

              <Button type="submit" className="w-full bg-tech-blue hover:bg-tech-lightblue">
                Enviar Mensagem
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-tech-blue">Informações de Contato</h3>
              <p className="text-gray-600 mb-8">
                Estamos disponíveis para responder suas dúvidas e discutir como podemos ajudar seu negócio com soluções tecnológicas inovadoras.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-tech-blue/10 p-3 rounded-full mr-4">
                    <MapPin size={24} className="text-tech-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Endereço</h4>
                    <p className="text-gray-600">
                      Av. Tecnologia, 1000<br />
                      São Paulo, SP - Brasil<br />
                      CEP: 01234-567
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-tech-blue/10 p-3 rounded-full mr-4">
                    <Phone size={24} className="text-tech-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Telefone</h4>
                    <p className="text-gray-600">+55 (11) 3456-7890</p>
                    <p className="text-gray-600">+55 (11) 98765-4321</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-tech-blue/10 p-3 rounded-full mr-4">
                    <Mail size={24} className="text-tech-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Email</h4>
                    <p className="text-gray-600">contato@techspark.com.br</p>
                    <p className="text-gray-600">suporte@techspark.com.br</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 lg:mt-0">
              <h4 className="font-semibold text-lg mb-3">Horário de Funcionamento</h4>
              <p className="text-gray-600">Segunda a Sexta: 9h às 18h</p>
              <p className="text-gray-600">Sábado: 9h às 13h</p>
              <p className="text-gray-600">Domingo: Fechado</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
