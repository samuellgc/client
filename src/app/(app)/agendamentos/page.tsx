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
import { Badge } from "@/shared/components/ui/badge";
import AppointmentModal from "./components/ModalForm";

const initialAppointments = [
  {
    id: 1,
    date: "2023-06-15",
    client: "João Silva",
    time: "09:00",
    status: "Confirmado",
  },
  {
    id: 2,
    date: "2023-06-15",
    client: "Maria Santos",
    time: "10:30",
    status: "Pendente",
  },
  {
    id: 3,
    date: "2023-06-16",
    client: "Carlos Oliveira",
    time: "14:00",
    status: "Cancelado",
  },
  {
    id: 4,
    date: "2023-06-16",
    client: "Ana Rodrigues",
    time: "16:30",
    status: "Confirmado",
  },
  {
    id: 5,
    date: "2023-06-17",
    client: "Pedro Almeida",
    time: "11:00",
    status: "Pendente",
  },
];

export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState(initialAppointments);
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState("Todos");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleStatusFilter = (status: string) => {
    setStatusFilter(status);
  };

  const openModal = () => setIsOpen(true);

  const filteredAppointments = appointments.filter(
    (appointment) =>
      (appointment.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
        appointment.date.includes(searchTerm)) &&
      (statusFilter === "Todos" || appointment.status === statusFilter)
  );

  const handleEdit = (id: number) => {
    console.log(`Editar agendamento ${id}`);
  };

  const handleDelete = (id: number) => {
    setAppointments(
      appointments.filter((appointment) => appointment.id !== id)
    );
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Confirmado":
        return "bg-green-100 text-green-800";
      case "Pendente":
        return "bg-yellow-100 text-yellow-800";
      case "Cancelado":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <>
      <div className="container mx-auto p-6 bg-white">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Agendamentos</h1>
          <Button
            type="button"
            onClick={openModal}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            <Plus className="mr-2 h-4 w-4" /> Novo Agendamento
          </Button>
        </div>
        <div className="flex justify-between items-center mb-6">
          <div className="relative">
            <Input
              type="text"
              placeholder="Buscar agendamentos..."
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
                Status <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {["Todos", "Confirmado", "Pendente", "Cancelado"].map(
                (status) => (
                  <DropdownMenuItem
                    key={status}
                    onSelect={() => handleStatusFilter(status)}
                  >
                    {status}
                  </DropdownMenuItem>
                )
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Data</TableHead>
              <TableHead>Cliente</TableHead>
              <TableHead>Horário</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredAppointments.map((appointment) => (
              <TableRow key={appointment.id}>
                <TableCell>{appointment.date}</TableCell>
                <TableCell className="font-medium">
                  {appointment.client}
                </TableCell>
                <TableCell>{appointment.time}</TableCell>
                <TableCell>
                  <Badge className={getStatusColor(appointment.status)}>
                    {appointment.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleEdit(appointment.id)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleDelete(appointment.id)}
                  >
                    <Trash2 className="h-4 w-4 text-red-500" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <AppointmentModal isOpen={isOpen} onClose={setIsOpen} />
    </>
  );
}
