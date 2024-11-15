"use client";

import { useState, Dispatch, SetStateAction } from "react";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/shared/components/ui/dialog";
import { Textarea } from "@/shared/components/ui/textarea";
import { toast } from "@/shared/hooks/use-toast";

interface ClientModalProps {
  isOpen: boolean;
  onClose: Dispatch<SetStateAction<boolean>>;
}

export function ClientModal({ isOpen, onClose }: ClientModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [street, setStreet] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [complement, setComplement] = useState("");
  const [number, setNumber] = useState("");
  const [observation, setObservation] = useState("");
  const [document, setDocument] = useState("");

  const handleSave = () => {
    // Aqui você pode enviar a requisição para o backend para salvar o cliente
    console.log("Saving client:", {
      name,
      email,
      phone,
      birthDate,
      address: { street, neighborhood, city, state, zip, complement, number },
      observation,
      document,
    });
    toast({
      title: "Cliente salvo",
      description: "O cliente foi salvo com sucesso.",
    });
    onClose(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="md:max-w-[80%]">
        <DialogHeader>
          <DialogTitle>Novo Cliente</DialogTitle>
          <DialogDescription>
            Preencha os detalhes do cliente abaixo.
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-3 gap-y-4 gap-x-12 py-2">
          <div className="grid grid-cols-2 gap-2">
            <Label htmlFor="name">Nome</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Label htmlFor="phone">Telefone</Label>
            <Input
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Label htmlFor="birthDate">Data de Nascimento</Label>
            <Input
              id="birthDate"
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Label htmlFor="street">Rua</Label>
            <Input
              id="street"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Label htmlFor="neighborhood">Bairro</Label>
            <Input
              id="neighborhood"
              value={neighborhood}
              onChange={(e) => setNeighborhood(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Label htmlFor="city">Cidade</Label>
            <Input
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Label htmlFor="state">Estado</Label>
            <Input
              id="state"
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Label htmlFor="zip">CEP</Label>
            <Input
              id="zip"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Label htmlFor="complement">Complemento</Label>
            <Input
              id="complement"
              value={complement}
              onChange={(e) => setComplement(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Label htmlFor="number">Número</Label>
            <Input
              id="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Label htmlFor="document">Documento (CPF/CNPJ)</Label>
            <Input
              id="document"
              value={document}
              onChange={(e) => setDocument(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-2 col-span-3 gap-2">
            <Label htmlFor="observation">Observação</Label>
            <Textarea
              id="observation"
              value={observation}
              onChange={(e) => setObservation(e.target.value)}
              className="col-span-3"
            />
          </div>
        </div>
        <div className="flex gap-3 items-center justify-end">
          <Button
            onClick={handleSave}
            className="w-full lg:w-44 bg-blue-600 hover:bg-blue-700 text-white mt-4"
          >
            Confirmar
          </Button>
          <Button
            onClick={handleSave}
            className="w-full lg:w-44 bg-yellow-400 hover:bg-yellow-400 text-white mt-4"
          >
            Cancelar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
