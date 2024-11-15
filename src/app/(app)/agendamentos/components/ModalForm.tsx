"use client"

import { useState, useEffect, Dispatch, SetStateAction } from "react"
import { Calendar, Clock, MapPin, AlertCircle } from "lucide-react"
import { Button } from "@/shared/components/ui/button"
import { Input } from "@/shared/components/ui/input"
import { Label } from "@/shared/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/components/ui/select"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/shared/components/ui/dialog"
import { Textarea } from "@/shared/components/ui/textarea"
import { toast } from "@/shared/hooks/use-toast"

const clients = [
  { id: 1, name: "João Silva" },
  { id: 2, name: "Maria Santos" },
  { id: 3, name: "Carlos Oliveira" },
  { id: 4, name: "Ana Rodrigues" },
  { id: 5, name: "Pedro Almeida" },
]

interface AppointmentModalProps {
  isOpen: boolean
  onClose: Dispatch<SetStateAction<boolean>>
  appointment?: {
    id?: number
    clientId: number
    date: string
    time: string
    location: string
    status: string
    observation: string
  }
}

export default function AppointmentModal({ isOpen, onClose, appointment }: AppointmentModalProps) {
  const [clientSearch, setClientSearch] = useState("")
  const [selectedClient, setSelectedClient] = useState(appointment?.clientId || "")
  const [date, setDate] = useState(appointment?.date || "")
  const [time, setTime] = useState(appointment?.time || "")
  const [location, setLocation] = useState(appointment?.location || "")
  const [status, setStatus] = useState(appointment?.status || "marcado")
  const [observation, setObservation] = useState(appointment?.observation || "")

  useEffect(() => {
    if (appointment) {
      setSelectedClient(appointment.clientId)
      setDate(appointment.date)
      setTime(appointment.time)
      setLocation(appointment.location)
      setStatus(appointment.status)
      setObservation(appointment.observation)
    }
  }, [appointment])

  const filteredClients = clients.filter((client) => client.name.toLowerCase().includes(clientSearch.toLowerCase()))

  const handleSave = () => {
    console.log("Saving appointment:", { selectedClient, date, time, location, status, observation })
    toast({
      title: "Agendamento salvo",
      description: "O agendamento foi salvo com sucesso.",
    })
    onClose(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{appointment ? "Editar Agendamento" : "Novo Agendamento"}</DialogTitle>
          <DialogDescription>Preencha os detalhes do agendamento abaixo.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="client" className="text-right">
              Cliente
            </Label>
            <div className="col-span-3">
              <Select onValueChange={setSelectedClient} value={selectedClient.toString()}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecione um cliente" />
                </SelectTrigger>
                <SelectContent>
                  <Input
                    placeholder="Buscar cliente..."
                    value={clientSearch}
                    onChange={(e) => setClientSearch(e.target.value)}
                    className="mb-2"
                  />
                  {filteredClients.map((client) => (
                    <SelectItem key={client.id} value={client.id.toString()}>
                      {client.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="date" className="text-right">
              Data
            </Label>
            <div className="col-span-3 relative">
              <Input id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} className="pl-10" />
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="time" className="text-right">
              Hora
            </Label>
            <div className="col-span-3 relative">
              <Input id="time" type="time" value={time} onChange={(e) => setTime(e.target.value)} className="pl-10" />
              <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="location" className="text-right">
              Local
            </Label>
            <div className="col-span-3 relative">
              <Input id="location" value={location} onChange={(e) => setLocation(e.target.value)} className="pl-10" />
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="status" className="text-right">
              Status
            </Label>
            <Select onValueChange={setStatus} value={status}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione o status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="marcado">Marcado</SelectItem>
                <SelectItem value="concluido">Concluído</SelectItem>
                <SelectItem value="cancelado">Cancelado</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="observation" className="text-right">
              Observação
            </Label>
            <Textarea
              id="observation"
              value={observation}
              onChange={(e) => setObservation(e.target.value)}
              className="col-span-3"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <div className="flex items-center text-sm text-blue-600">
            <AlertCircle className="mr-2 h-4 w-4" />
            Notificações automáticas serão enviadas 2 dias antes do agendamento.
          </div>
          <Button onClick={handleSave} className="w-full bg-blue-600 hover:bg-blue-700 text-white">
            Salvar Agendamento
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
