import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";

export function Cta() {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Pronto para Simplificar sua Agenda?
        </h2>
        <p className="text-xl mb-8">
          Junte-se a milhares de profissionais que já estão usando o
          AgendaFácil.
        </p>
        <div className="flex justify-center">
          <Input
            type="email"
            placeholder="Seu e-mail"
            className="w-64 mr-4 text-black"
          />
          <Button className="bg-white text-blue-700 hover:bg-blue-100">
            Comece Grátis
          </Button>
        </div>
      </div>
    </section>
  );
}
