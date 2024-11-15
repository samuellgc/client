"use client";

import { useState } from "react";
import { Search, Edit, Trash2, ChevronDown, Plus } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";
import { ClientModal } from "./components/ModalForm";

const initialClients = [
  { id: 1, name: "João Silva", lastService: "2023-05-15", frequency: "Mensal" },
  {
    id: 2,
    name: "Maria Santos",
    lastService: "2023-06-01",
    frequency: "Quinzenal",
  },
  {
    id: 3,
    name: "Carlos Oliveira",
    lastService: "2023-05-20",
    frequency: "Semanal",
  },
  {
    id: 4,
    name: "Ana Rodrigues",
    lastService: "2023-06-10",
    frequency: "Mensal",
  },
  {
    id: 5,
    name: "Pedro Almeida",
    lastService: "2023-06-05",
    frequency: "Quinzenal",
  },
];

export default function ClientsPage() {
  const [clients, setClients] = useState(initialClients);
  const [searchTerm, setSearchTerm] = useState("");
  const [frequencyFilter, setFrequencyFilter] = useState("Todos");
  const [isOpen, setIsOpen] = useState(false);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleFrequencyFilter = (frequency: string) => {
    setFrequencyFilter(frequency);
  };

  const openModal = () => setIsOpen(true);

  const filteredClients = clients.filter(
    (client) =>
      client.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (frequencyFilter === "Todos" || client.frequency === frequencyFilter)
  );

  const handleEdit = (id: number) => {
    console.log(`Editar cliente ${id}`);
  };

  const handleDelete = (id: number) => {
    setClients(clients.filter((client) => client.id !== id));
  };

  return (
    <>
      <div className="container mx-auto p-6 bg-white">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Clientes</h1>
          <Button
            type="button"
            onClick={openModal}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            <Plus className="mr-2 h-4 w-4" /> Novo Cliente
          </Button>
        </div>
        <div className="flex justify-between items-center mb-6">
          <div className="relative">
            <Input
              type="text"
              placeholder="Buscar clientes..."
              className="pl-10 pr-4 py-2 w-64"
              value={searchTerm}
              onChange={handleSearch}
            />
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-2">
                Frequência <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {["Todos", "Semanal", "Quinzenal", "Mensal"].map((frequency) => (
                <DropdownMenuItem
                  key={frequency}
                  onSelect={() => handleFrequencyFilter(frequency)}
                >
                  {frequency}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>Último Atendimento</TableHead>
              <TableHead>Frequência</TableHead>
              <TableHead>Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredClients.map((client) => (
              <TableRow key={client.id}>
                <TableCell className="font-medium">{client.name}</TableCell>
                <TableCell>{client.lastService}</TableCell>
                <TableCell>{client.frequency}</TableCell>
                <TableCell>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleEdit(client.id)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleDelete(client.id)}
                  >
                    <Trash2 className="h-4 w-4 text-red-500" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <ClientModal isOpen={isOpen} onClose={setIsOpen} />
    </>
  );
}
