import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { 
  Plus,
  Search,
  Filter,
  MoreHorizontal,
  Phone,
  MapPin,
  Mail,
  User,
  FileText,
  ShoppingBag,
  Star,
  Calendar,
  BarChart
} from "lucide-react"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Link } from "react-router"
import { Card, CardContent } from "@/components/ui/card"
import * as React from "react"

// Badge component inline para evitar problemas de importação
interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "destructive" | "outline" | "success" | "warning" | "info";
}

const Badge = ({ children, className = "", variant = "outline" }: BadgeProps) => {
  const getVariantClass = () => {
    switch (variant) {
      case "default":
        return "border-transparent bg-primary text-primary-foreground";
      case "secondary":
        return "border-transparent bg-secondary text-secondary-foreground";
      case "destructive":
        return "border-transparent bg-destructive text-destructive-foreground";
      case "outline":
        return "text-foreground";
      case "success":
        return "border-transparent bg-green-100 text-green-800";
      case "warning":
        return "border-transparent bg-amber-100 text-amber-800";
      case "info":
        return "border-transparent bg-blue-100 text-blue-800";
      default:
        return "text-foreground";
    }
  };

  return (
    <div className={`inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold ${getVariantClass()} ${className}`}>
      {children}
    </div>
  );
};

// Dados dos clientes para demonstração
const clientes = Array.from({ length: 10 }).map((_, i) => ({
  id: i + 1,
  nome: ['João Silva', 'Maria Oliveira', 'Pedro Santos', 'Ana Souza', 'Carlos Ferreira', 
         'Mariana Costa', 'Rodrigo Lima', 'Julia Almeida', 'Felipe Martins', 'Beatriz Rocha'][i],
  email: ['joao', 'maria', 'pedro', 'ana', 'carlos', 'mariana', 'rodrigo', 'julia', 'felipe', 'beatriz'][i] + '@email.com',
  telefone: `(${Math.floor(Math.random() * 100)}) ${Math.floor(Math.random() * 10000)}-${Math.floor(Math.random() * 10000)}`,
  cidade: ['São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Curitiba', 'Porto Alegre', 
          'Brasília', 'Salvador', 'Recife', 'Fortaleza', 'Manaus'][i],
  cadastro: new Date(Date.now() - Math.floor(Math.random() * 365 * 2) * 86400000).toLocaleDateString(),
  ultimaCompra: new Date(Date.now() - Math.floor(Math.random() * 90) * 86400000).toLocaleDateString(),
  totalPedidos: Math.floor(Math.random() * 20) + 1,
  valorTotal: (Math.random() * 5000 + 100).toFixed(2),
  status: ['Ativo', 'Inativo', 'Ativo', 'Ativo', 'Ativo'][i % 5],
  tags: [
    ['Cliente Novo', 'Varejo'],
    ['Cliente Frequente', 'Premium'],
    ['Varejo', 'Promocional'],
    ['Premium', 'Fidelidade'],
    ['Cliente Frequente', 'Atacado'],
    ['Cliente Novo', 'Atacado'],
    ['Varejo', 'Fidelidade'],
    ['Premium', 'Promocional'],
    ['Cliente Frequente', 'Varejo'],
    ['Atacado', 'Premium']
  ][i]
}));

export default function ClientesPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="/">
                    Dashboard
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Clientes</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold tracking-tight">Clientes</h1>
            <div className="flex items-center gap-2">
              <Button>
                <Plus className="mr-2 h-4 w-4" /> Novo Cliente
              </Button>
            </div>
          </div>
          
          <div className="grid gap-4 md:grid-cols-4">
            <Card>
              <CardContent className="p-4">
                <div className="text-sm font-medium text-muted-foreground">Total de Clientes</div>
                <div className="text-2xl font-bold">2.458</div>
                <div className="text-xs text-green-600">+124 este mês</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-sm font-medium text-muted-foreground">Clientes Ativos</div>
                <div className="text-2xl font-bold">1.845</div>
                <div className="text-xs text-muted-foreground">75% da base total</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-sm font-medium text-muted-foreground">Ticket Médio</div>
                <div className="text-2xl font-bold">R$ 387,42</div>
                <div className="text-xs text-green-600">+8% em relação ao mês passado</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-sm font-medium text-muted-foreground">Recorrência</div>
                <div className="text-2xl font-bold">32%</div>
                <div className="text-xs text-amber-600">Meta: 40%</div>
              </CardContent>
            </Card>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar clientes..."
                className="pl-8"
              />
            </div>
            <Button variant="outline" size="icon" title="Filtrar">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[80px]">ID</TableHead>
                  <TableHead>Cliente</TableHead>
                  <TableHead>Contato</TableHead>
                  <TableHead>Localização</TableHead>
                  <TableHead>Cadastro</TableHead>
                  <TableHead className="text-right">Pedidos</TableHead>
                  <TableHead className="text-right">Valor Total</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="w-[80px]">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {clientes.map((cliente) => (
                  <TableRow key={cliente.id}>
                    <TableCell className="font-medium">{cliente.id}</TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="font-medium">{cliente.nome}</span>
                        <div className="flex gap-1 mt-1">
                          {cliente.tags.map((tag, index) => (
                            <Badge key={index} variant="outline" className="text-[10px]">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="flex items-center text-sm">
                          <Phone className="mr-1 h-3 w-3" /> {cliente.telefone}
                        </span>
                        <span className="flex items-center text-xs text-muted-foreground">
                          <Mail className="mr-1 h-3 w-3" /> {cliente.email}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="flex items-center text-sm">
                        <MapPin className="mr-1 h-3 w-3" /> {cliente.cidade}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="flex items-center text-xs text-muted-foreground">
                          <Calendar className="mr-1 h-3 w-3" /> Desde {cliente.cadastro}
                        </span>
                        <span className="flex items-center text-xs">
                          Última compra: {cliente.ultimaCompra}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">{cliente.totalPedidos}</TableCell>
                    <TableCell className="text-right font-medium">R$ {cliente.valorTotal}</TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex rounded-full px-2 py-1 text-xs font-medium 
                          ${cliente.status === 'Ativo' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`
                        }
                      >
                        {cliente.status}
                      </span>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Ações</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Ações</DropdownMenuLabel>
                          <DropdownMenuItem>
                            <User className="mr-2 h-4 w-4" />
                            Ver Perfil
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <ShoppingBag className="mr-2 h-4 w-4" />
                            Histórico de Compras
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <BarChart className="mr-2 h-4 w-4" />
                            Análise de Compras
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <Star className="mr-2 h-4 w-4" />
                            {cliente.tags.includes('Premium') ? 'Remover Premium' : 'Marcar como Premium'}
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            {cliente.status === 'Ativo' ? 
                              <>Desativar</> : 
                              <>Ativar</>
                            }
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              Mostrando <strong>1</strong> a <strong>10</strong> de <strong>2.458</strong> clientes
            </div>
            
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" disabled>
                Anterior
              </Button>
              <Button variant="outline" size="sm">
                Próximo
              </Button>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
} 