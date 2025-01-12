"use client";

import Sidebar from "@/shared/components/Sidebar";
import { BellIcon, UserIcon } from "lucide-react";
import Link from "next/link";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow-md p-4">
          <div className="container mx-auto flex justify-end items-center">
            <div className="flex space-x-4">
              <Link
                title="Notificações"
                href="/notificacoes"
                className="text-blue-600 hover:text-blue-800 transition"
              >
                <BellIcon />
              </Link>
              <Link
                href="/perfil"
                title="Perfil"
                className="text-blue-600 hover:text-blue-800 transition"
              >
                <UserIcon />
              </Link>
            </div>
          </div>
        </header>

        <main className="flex-1 p-6 container mx-auto">{children}</main>
      </div>
    </div>
  );
}
