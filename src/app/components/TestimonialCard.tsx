import { Star } from "lucide-react";

export function TestimonialCard({
  quote,
  author,
  role,
}: {
  quote: string;
  author: string;
  role: string;
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-center mb-4">
        <Star className="h-8 w-8 text-yellow-400" />
      </div>
      <p className="text-gray-600 italic mb-4">&quot;{quote}&quot;</p>
      <p className="font-semibold">{author}</p>
      <p className="text-sm text-gray-500">{role}</p>
    </div>
  );
}
