"use client";

import { useState } from "react";
import { Edit, Trash2, ChevronDown } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
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

const initialNotifications = [
  {
    id: 1,
    date: "2023-06-15",
    client: "João Silva",
    time: "09:00",
    status: "Lido",
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
    status: "Lido",
  },
  {
    id: 4,
    date: "2023-06-16",
    client: "Ana Rodrigues",
    time: "16:30",
    status: "Lido",
  },
  {
    id: 5,
    date: "2023-06-17",
    client: "Pedro Almeida",
    time: "11:00",
    status: "Pendente",
  },
];

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [statusFilter, setStatusFilter] = useState("Todos");

  const handleStatusFilter = (status: string) => {
    setStatusFilter(status);
  };

  const filteredNotifications = notifications.filter(
    (notification) =>
      statusFilter === "Todos" || notification.status === statusFilter
  );

  const handleEdit = (id: number) => {
    console.log(`Editar notificação ${id}`);
  };

  const handleDelete = (id: number) => {
    setNotifications(
      notifications.filter((notification) => notification.id !== id)
    );
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Lido":
        return "bg-green-100 text-green-800";
      case "Pendente":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <>
      <div className="container mx-auto p-6 bg-white">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Notificações</h1>
        </div>
        <div className="flex justify-between items-center mb-6">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-2">
                Status <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {["Todos", "Lidas", "Pendentes"].map((status) => (
                <DropdownMenuItem
                  key={status}
                  onSelect={() => handleStatusFilter(status)}
                >
                  {status}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Data</TableHead>
              <TableHead>Título</TableHead>
              <TableHead>Descrição</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredNotifications.map((notification) => (
              <TableRow key={notification.id}>
                <TableCell>{notification.date}</TableCell>
                <TableCell className="font-medium">
                  {notification.client}
                </TableCell>
                <TableCell>{notification.time}</TableCell>
                <TableCell>
                  <Badge className={getStatusColor(notification.status)}>
                    {notification.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleEdit(notification.id)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleDelete(notification.id)}
                  >
                    <Trash2 className="h-4 w-4 text-red-500" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
