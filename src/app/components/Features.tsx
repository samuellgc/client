import { Calendar, DollarSign, Users } from "lucide-react";
import { FeatureCard } from "./FeatureCard";

export function Features() {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Recursos Principais
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Calendar className="h-12 w-12 text-blue-600" />}
            title="Agendamentos Fáceis"
            description="Agende consultas com poucos cliques e evite conflitos de horários."
          />
          <FeatureCard
            icon={<Users className="h-12 w-12 text-blue-600" />}
            title="Gestão de Clientes"
            description="Mantenha um registro detalhado de todos os seus clientes em um só lugar."
          />
          <FeatureCard
            icon={<DollarSign className="h-12 w-12 text-blue-600" />}
            title="Controle Financeiro"
            description="Acompanhe suas receitas e gere relatórios financeiros facilmente."
          />
        </div>
      </div>
    </section>
  );
}
