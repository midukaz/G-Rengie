"use client"

import * as React from "react"
import {
  BarChart3,
  Box,
  ClipboardList,
  CreditCard,
  Home,
  Package,
  Settings,
  ShoppingCart,
  Truck,
  Users,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "Admin",
    email: "admin@empresa.com",
    avatar: "/assets/avatar.jpg",
  },
  teams: [
    {
      name: "Loja Virtual",
      logo: ShoppingCart,
      plan: "Ativo",
    },
    {
      name: "Centro Distribuição",
      logo: Truck,
      plan: "Ativo",
    },
    {
      name: "Showroom",
      logo: Box,
      plan: "Inativo",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/",
      icon: Home,
      isActive: true,
      items: [
        {
          title: "Visão Geral",
          url: "/",
        },
        {
          title: "Analytics",
          url: "/analytics",
        },
        {
          title: "Relatórios",
          url: "/relatorios",
        },
      ],
    },
    {
      title: "Produtos",
      url: "/produtos",
      icon: Package,
      items: [
        {
          title: "Catálogo",
          url: "/produtos",
        },
        {
          title: "Categorias",
          url: "/produtos/categorias",
        },
        {
          title: "Estoque",
          url: "/produtos/estoque",
        },
        {
          title: "Fornecedores",
          url: "/produtos/fornecedores",
        },
      ],
    },
    {
      title: "Vendas",
      url: "/vendas",
      icon: ShoppingCart,
      items: [
        {
          title: "Pedidos",
          url: "/pedidos",
        },
        {
          title: "Clientes",
          url: "/clientes",
        },
        {
          title: "Devoluções",
          url: "/devolucoes",
        },
        {
          title: "Promoções",
          url: "/promocoes",
        },
      ],
    },
    {
      title: "Financeiro",
      url: "/financeiro",
      icon: CreditCard,
      items: [
        {
          title: "Faturamento",
          url: "/financeiro/faturamento",
        },
        {
          title: "Despesas",
          url: "/financeiro/despesas",
        },
        {
          title: "Relatórios",
          url: "/financeiro/relatorios",
        },
      ],
    },
    {
      title: "Relatórios",
      url: "/relatorios",
      icon: BarChart3,
      items: [
        {
          title: "Vendas",
          url: "/relatorios/vendas",
        },
        {
          title: "Estoque",
          url: "/relatorios/estoque",
        },
        {
          title: "Performance",
          url: "/relatorios/performance",
        },
      ],
    },
    {
      title: "Configurações",
      url: "/configuracoes",
      icon: Settings,
      items: [
        {
          title: "Geral",
          url: "/configuracoes/geral",
        },
        {
          title: "Usuários",
          url: "/configuracoes/usuarios",
        },
        {
          title: "Integrações",
          url: "/configuracoes/integracoes",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Gestão de Inventário",
      url: "/produtos/estoque",
      icon: ClipboardList,
    },
    {
      name: "Gestão de Equipe",
      url: "/usuarios",
      icon: Users,
    },
    {
      name: "Gestão de Vendas",
      url: "/pedidos",
      icon: ShoppingCart,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

