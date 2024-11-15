"use client";

import Sidebar from "@/shared/components/Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow-md p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-semibold text-blue-600">
              Agendamentos
            </h1>
            <div className="flex space-x-4">
              <button className="text-blue-600 hover:text-blue-800 transition">
                Notificações
              </button>
              <button className="text-blue-600 hover:text-blue-800 transition">
                Perfil
              </button>
            </div>
          </div>
        </header>

        <main className="flex-1 p-6 container mx-auto">{children}</main>
      </div>
    </div>
  );
}
