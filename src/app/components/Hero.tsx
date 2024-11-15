import { Button } from "@/shared/components/ui/button";

export function Hero() {
  return (
    <section className="bg-blue-700 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Simplifique seus Agendamentos
        </h1>
        <p className="text-xl mb-8">
          Gerencie seus clientes, agendamentos e receitas em um só lugar.
        </p>
        <Button className="bg-white text-blue-700 hover:bg-blue-100">
          Comece Agora
        </Button>
      </div>
    </section>
  );
}
