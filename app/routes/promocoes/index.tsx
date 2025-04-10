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
  Eye,
  Tag,
  Percent,
  Calendar,
  Edit,
  Copy,
  Trash,
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

// Badge component inline
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

// Dados de promoções para demonstração
const promocoes = Array.from({ length: 10 }).map((_, i) => ({
  id: i + 1,
  nome: [
    'Verão 30% OFF', 
    'Liquidação Eletrônicos', 
    'Frete Grátis Acima de R$200', 
    'Combo Compre 2 Leve 3', 
    'Cupom Primeira Compra 15%', 
    'Black Friday Antecipada', 
    'Aniversário da Loja', 
    'Outlet - Última Chance', 
    'Descontos para Assinantes', 
    'Especial Fim de Semana'
  ][i],
  codigo: ['VERAO30', 'ELETRO20', 'FRETEGRATIS', 'COMBO23', 'WELCOME15', 'BLACKFRIDAY', 'ANIVER10', 'OUTLET50', 'ASSINANTE25', 'FINDE15'][i],
  tipo: ['Desconto Percentual', 'Desconto Percentual', 'Frete Grátis', 'Leve X Pague Y', 'Desconto Percentual', 'Desconto Percentual', 'Desconto Percentual', 'Desconto Percentual', 'Desconto Percentual', 'Desconto Percentual'][i],
  valor: i === 2 || i === 3 ? '-' : `${(Math.floor(Math.random() * 4) + 1) * 5}%`,
  dataInicio: new Date(Date.now() - Math.floor(Math.random() * 30) * 86400000).toLocaleDateString(),
  dataFim: new Date(Date.now() + Math.floor(Math.random() * 60) * 86400000).toLocaleDateString(),
  aplicacao: ['Todos os Produtos', 'Categoria Eletrônicos', 'Todos os Produtos', 'Categoria Vestuário', 'Primeira Compra', 'Produtos Selecionados', 'Todos os Produtos', 'Produtos Outlet', 'Assinantes', 'Todos os Produtos'][i],
  usos: Math.floor(Math.random() * 1000),
  status: [(new Date() < new Date(Date.now() + 1000000000)) ? 'Ativo' : 'Inativo', 'Ativo', 'Ativo', 'Ativo', 'Ativo', 'Agendado', 'Ativo', 'Inativo', 'Ativo', i % 2 === 0 ? 'Ativo' : 'Agendado'][i]
}));

export default function PromocoesPage() {
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
                  <BreadcrumbLink href="/vendas">
                    Vendas
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Promoções</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold tracking-tight">Promoções e Cupons</h1>
            <div className="flex items-center gap-2">
              <Button>
                <Plus className="mr-2 h-4 w-4" /> Nova Promoção
              </Button>
            </div>
          </div>
          
          <div className="grid gap-4 md:grid-cols-4">
            <Card>
              <CardContent className="p-4">
                <div className="text-sm font-medium text-muted-foreground">Promoções Ativas</div>
                <div className="text-2xl font-bold">7</div>
                <div className="text-xs text-muted-foreground">3 agendadas</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-sm font-medium text-muted-foreground">Usos no Mês</div>
                <div className="text-2xl font-bold">3.845</div>
                <div className="text-xs text-green-600">+18% comparado ao mês anterior</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-sm font-medium text-muted-foreground">Desconto Médio</div>
                <div className="text-2xl font-bold">R$ 42,68</div>
                <div className="text-xs text-muted-foreground">Por pedido com cupom</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-sm font-medium text-muted-foreground">Taxa de Conversão</div>
                <div className="text-2xl font-bold">28,5%</div>
                <div className="text-xs text-green-600">+3,2% comparado ao mês anterior</div>
              </CardContent>
            </Card>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar promoções..."
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
                  <TableHead>Promoção</TableHead>
                  <TableHead>Período</TableHead>
                  <TableHead>Aplicação</TableHead>
                  <TableHead>Valor</TableHead>
                  <TableHead className="text-right">Usos</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="w-[100px]">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {promocoes.map((promocao) => (
                  <TableRow key={promocao.id}>
                    <TableCell className="font-medium">{promocao.id}</TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="font-medium">{promocao.nome}</span>
                        <span className="flex items-center text-xs text-muted-foreground">
                          <Tag className="mr-1 h-3 w-3" /> {promocao.codigo}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="flex items-center text-xs text-muted-foreground">
                          <Calendar className="mr-1 h-3 w-3" /> {promocao.dataInicio} a {promocao.dataFim}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>{promocao.aplicacao}</TableCell>
                    <TableCell>
                      <span className="flex items-center">
                        <Badge variant={promocao.tipo === 'Frete Grátis' ? 'info' : promocao.tipo === 'Leve X Pague Y' ? 'warning' : 'success'}>
                          {promocao.tipo === 'Desconto Percentual' ? (
                            <Percent className="mr-1 h-3 w-3" />
                          ) : null}
                          {promocao.tipo}
                        </Badge>
                        <span className="ml-2">{promocao.valor}</span>
                      </span>
                    </TableCell>
                    <TableCell className="text-right">{promocao.usos}</TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex rounded-full px-2 py-1 text-xs font-medium 
                          ${promocao.status === 'Ativo' ? 'bg-green-100 text-green-700' : 
                          promocao.status === 'Inativo' ? 'bg-gray-100 text-gray-700' :
                          'bg-blue-100 text-blue-700'}`
                        }
                      >
                        {promocao.status}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Button asChild variant="ghost" size="icon" title="Ver detalhes">
                          <Link to={`/promocoes/${promocao.id}`}>
                            <Eye className="h-4 w-4" />
                          </Link>
                        </Button>
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
                              <Eye className="mr-2 h-4 w-4" />
                              Ver Detalhes
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Edit className="mr-2 h-4 w-4" />
                              Editar Promoção
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Copy className="mr-2 h-4 w-4" />
                              Duplicar
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <BarChart className="mr-2 h-4 w-4" />
                              Ver Desempenho
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                              {promocao.status === 'Ativo' ? (
                                <>Desativar Promoção</>
                              ) : promocao.status === 'Agendado' ? (
                                <>Cancelar Agendamento</>
                              ) : (
                                <>Ativar Promoção</>
                              )}
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">
                              <Trash className="mr-2 h-4 w-4" />
                              Excluir Promoção
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              Mostrando <strong>1</strong> a <strong>10</strong> de <strong>10</strong> promoções
            </div>
            
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" disabled>
                Anterior
              </Button>
              <Button variant="outline" size="sm" disabled>
                Próximo
              </Button>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
} 