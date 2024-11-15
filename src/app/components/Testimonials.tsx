import { TestimonialCard } from "./TestimonialCard";

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-gray-100 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          O que Nossos Clientes Dizem
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <TestimonialCard
            quote="AgendaFácil revolucionou a forma como gerencio minha clínica. Não consigo imaginar trabalhar sem ele agora!"
            author="Dra. Maria Silva"
            role="Psicóloga"
          />
          <TestimonialCard
            quote="A interface é intuitiva e os recursos são exatamente o que eu precisava. Recomendo para todos os profissionais autônomos."
            author="João Santos"
            role="Fisioterapeuta"
          />
        </div>
      </div>
    </section>
  );
}
