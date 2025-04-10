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
  Calendar,
  Check,
  Copy,
  Download,
  Eye,
  Filter,
  MoreHorizontal,
  Printer,
  Search,
  ShoppingBag,
  Tag,
  User,
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

// Dados de faturamento para demonstração
const faturas = Array.from({ length: 10 }).map((_, i) => ({
  id: 10000 + i,
  cliente: ['João Silva', 'Maria Oliveira', 'Pedro Santos', 'Ana Souza', 'Carlos Ferreira', 
           'Mariana Costa', 'Rodrigo Lima', 'Julia Almeida', 'Felipe Martins', 'Beatriz Rocha'][i],
  pedidoId: 1000 + Math.floor(Math.random() * 100),
  data: new Date(Date.now() - Math.floor(Math.random() * 60) * 86400000).toLocaleDateString(),
  vencimento: new Date(Date.now() + Math.floor(Math.random() * 30) * 86400000).toLocaleDateString(),
  valor: (Math.random() * 5000 + 500).toFixed(2),
  formaPagamento: ['Cartão de Crédito', 'Boleto', 'Pix', 'Transferência', 'Dinheiro'][i % 5],
  status: ['Pago', 'Pendente', 'Pago', 'Vencido', 'Cancelado', 'Pago', 'Pendente', 'Pago', 'Pendente', 'Pago'][i],
  numeroNF: `NF-${(10000 + Math.floor(Math.random() * 90000))}`
}));

export default function FaturamentoPage() {
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
                  <BreadcrumbLink href="/financeiro">
                    Financeiro
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Faturamento</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold tracking-tight">Faturamento</h1>
            <div className="flex items-center gap-2">
              <Button variant="outline">
                <Calendar className="mr-2 h-4 w-4" /> Relatório por Período
              </Button>
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" /> Exportar
              </Button>
            </div>
          </div>
          
          <div className="grid gap-4 md:grid-cols-4">
            <Card>
              <CardContent className="p-4">
                <div className="text-sm font-medium text-muted-foreground">Faturamento Mensal</div>
                <div className="text-2xl font-bold">R$ 67.245,89</div>
                <div className="text-xs text-green-600">85 notas emitidas</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-sm font-medium text-muted-foreground">A Receber</div>
                <div className="text-2xl font-bold">R$ 12.458,30</div>
                <div className="text-xs text-amber-600">23 faturas pendentes</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-sm font-medium text-muted-foreground">Recebidos (Mês)</div>
                <div className="text-2xl font-bold">R$ 54.787,59</div>
                <div className="text-xs text-green-600">62 faturas pagas</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-sm font-medium text-muted-foreground">Vencidos</div>
                <div className="text-2xl font-bold">R$ 3.245,60</div>
                <div className="text-xs text-red-600">8 faturas vencidas</div>
              </CardContent>
            </Card>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar fatura por cliente, número ou data..."
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
                  <TableHead className="w-[100px]">ID</TableHead>
                  <TableHead>Cliente</TableHead>
                  <TableHead>Data</TableHead>
                  <TableHead>Vencimento</TableHead>
                  <TableHead>Nota Fiscal</TableHead>
                  <TableHead>Pagamento</TableHead>
                  <TableHead className="text-right">Valor</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="w-[100px]">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {faturas.map((fatura) => (
                  <TableRow key={fatura.id}>
                    <TableCell>
                      <div className="font-medium">#{fatura.id}</div>
                      <div className="text-xs text-muted-foreground">Pedido #{fatura.pedidoId}</div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <span>{fatura.cliente}</span>
                      </div>
                    </TableCell>
                    <TableCell>{fatura.data}</TableCell>
                    <TableCell>{fatura.vencimento}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Tag className="h-4 w-4 text-muted-foreground" />
                        <span>{fatura.numeroNF}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <ShoppingBag className="h-4 w-4 text-muted-foreground" />
                        <span>{fatura.formaPagamento}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right font-medium">R$ {fatura.valor}</TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex rounded-full px-2 py-1 text-xs font-medium 
                          ${fatura.status === 'Pago' ? 'bg-green-100 text-green-700' : 
                          fatura.status === 'Pendente' ? 'bg-amber-100 text-amber-700' :
                          fatura.status === 'Vencido' ? 'bg-red-100 text-red-700' :
                          'bg-gray-100 text-gray-700'}`
                        }
                      >
                        {fatura.status}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Button asChild variant="ghost" size="icon" title="Ver detalhes">
                          <Link to={`/financeiro/faturas/${fatura.id}`}>
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
                              <Printer className="mr-2 h-4 w-4" />
                              Imprimir
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Copy className="mr-2 h-4 w-4" />
                              Copiar Link
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            {fatura.status === 'Pendente' && (
                              <DropdownMenuItem>
                                <Check className="mr-2 h-4 w-4" />
                                Marcar como Pago
                              </DropdownMenuItem>
                            )}
                            {fatura.status === 'Vencido' && (
                              <DropdownMenuItem>
                                <Calendar className="mr-2 h-4 w-4" />
                                Renegociar
                              </DropdownMenuItem>
                            )}
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
              Mostrando <strong>1</strong> a <strong>10</strong> de <strong>85</strong> faturas
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