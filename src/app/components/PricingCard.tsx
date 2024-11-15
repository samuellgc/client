import { Button } from "@/shared/components/ui/button";
import { CheckCircle } from "lucide-react";

export function PricingCard({
  title,
  price,
  features,
  highlighted = false,
}: {
  title: string;
  price: string;
  features: string[];
  highlighted?: boolean;
}) {
  return (
    <div
      className={`bg-white p-6 rounded-lg shadow-md text-center ${
        highlighted ? "border-2 border-blue-500" : ""
      }`}
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-3xl font-bold mb-4">{price}</p>
      <ul className="text-left mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center mb-2">
            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
            {feature}
          </li>
        ))}
      </ul>
      <Button
        className={`w-full ${
          highlighted ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-700"
        }`}
      >
        Escolher Plano
      </Button>
    </div>
  );
}
