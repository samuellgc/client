"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Calendar,
  Users,
  DollarSign,
  LayoutDashboard,
  ChevronLeft,
  LogOut,
} from "lucide-react";

const menuItems = [
  { icon: LayoutDashboard, name: "Dashboard", href: "/dashboard" },
  { icon: Calendar, name: "Agendamentos", href: "/agendamentos" },
  { icon: Users, name: "Clientes", href: "/clientes" },
  { icon: DollarSign, name: "Receitas", href: "/receitas" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <div
      className={`bg-blue-700 text-white transition-all duration-300 ease-in-out ${
        collapsed ? "w-16" : "w-64"
      } min-h-screen flex flex-col justify-between`}
    >
      <div>
        <div className="p-4 flex items-center justify-between">
          {!collapsed && <h1 className="text-2xl font-bold">Dashboard</h1>}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-1.5 rounded-lg bg-blue-800 hover:bg-blue-600 transition-colors"
          >
            <ChevronLeft
              className={`h-5 w-5 transition-transform duration-300 ${
                collapsed ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
        <nav className="mt-8">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center py-3 px-4 ${
                pathname === item.href ? "bg-blue-800" : "hover:bg-blue-600"
              } transition-colors`}
            >
              <item.icon className="h-5 w-5 mr-3" />
              {!collapsed && <span>{item.name}</span>}
            </Link>
          ))}
        </nav>
      </div>
      <div className="p-4">
        <button className="flex items-center py-2 px-4 w-full bg-blue-800 hover:bg-blue-600 rounded-lg transition-colors">
          <LogOut className="h-5 w-5 mr-3" />
          {!collapsed && <span>Sair</span>}
        </button>
      </div>
    </div>
  );
}
