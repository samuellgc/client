import { PricingCard } from "./PricingCard";

export function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Planos e Preços
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <PricingCard
            title="Básico"
            price="R$ 49/mês"
            features={[
              "Até 100 agendamentos/mês",
              "Gestão de clientes",
              "Relatórios básicos",
            ]}
          />
          <PricingCard
            title="Profissional"
            price="R$ 99/mês"
            features={[
              "Agendamentos ilimitados",
              "Gestão avançada de clientes",
              "Relatórios detalhados",
              "Integração com calendário",
            ]}
            highlighted={true}
          />
          <PricingCard
            title="Empresarial"
            price="R$ 199/mês"
            features={[
              "Múltiplos usuários",
              "Personalização avançada",
              "API para integrações",
              "Suporte prioritário",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
