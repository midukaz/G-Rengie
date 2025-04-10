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
  FileText,
  Truck,
  AlertTriangle,
  Ban,
  Clock,
  Package,
  CheckCircle,
  ArrowUpDown,
  Download
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

// Dados de pedidos para demonstração
const pedidos = Array.from({ length: 10 }).map((_, i) => ({
  id: 1000 + i,
  cliente: ['João Silva', 'Maria Oliveira', 'Pedro Santos', 'Ana Souza', 'Carlos Ferreira', 
           'Mariana Costa', 'Rodrigo Lima', 'Julia Almeida', 'Felipe Martins', 'Beatriz Rocha'][i],
  email: ['joao', 'maria', 'pedro', 'ana', 'carlos', 'mariana', 'rodrigo', 'julia', 'felipe', 'beatriz'][i] + '@email.com',
  data: new Date(Date.now() - Math.floor(Math.random() * 30) * 86400000).toLocaleDateString(),
  produtos: Math.floor(Math.random() * 5) + 1,
  valorTotal: (Math.random() * 1000 + 50).toFixed(2),
  pagamento: ['Cartão de Crédito', 'Boleto', 'Pix', 'Cartão de Débito', 'Transferência'][i % 5],
  status: ['Aguardando Pagamento', 'Pagamento Confirmado', 'Em Separação', 'Em Transporte', 'Entregue', 'Cancelado'][i % 6]
}));

export default function PedidosPage() {
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
                  <BreadcrumbPage>Pedidos</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold tracking-tight">Gestão de Pedidos</h1>
            <div className="flex items-center gap-2">
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" /> Exportar
              </Button>
              <Button>
                <Plus className="mr-2 h-4 w-4" /> Novo Pedido
              </Button>
            </div>
          </div>
          
          <div className="grid gap-4 md:grid-cols-4">
            <Card>
              <CardContent className="p-4">
                <div className="text-sm font-medium text-muted-foreground">Total de Pedidos</div>
                <div className="text-2xl font-bold">458</div>
                <div className="text-xs text-muted-foreground">Últimos 30 dias</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-sm font-medium text-muted-foreground">Aguardando Envio</div>
                <div className="text-2xl font-bold">32</div>
                <div className="text-xs text-amber-600">3 com atraso</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-sm font-medium text-muted-foreground">Valor Total</div>
                <div className="text-2xl font-bold">R$ 75.842,30</div>
                <div className="text-xs text-green-600">+12% este mês</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-sm font-medium text-muted-foreground">Taxa de Conversão</div>
                <div className="text-2xl font-bold">68%</div>
                <div className="text-xs text-red-600">-3% comparado ao mês anterior</div>
              </CardContent>
            </Card>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar pedidos..."
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
                  <TableHead className="w-[100px]">Pedido</TableHead>
                  <TableHead>Cliente</TableHead>
                  <TableHead>Data</TableHead>
                  <TableHead>Produtos</TableHead>
                  <TableHead>Pagamento</TableHead>
                  <TableHead className="text-right">Valor</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="w-[100px]">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pedidos.map((pedido) => (
                  <TableRow key={pedido.id}>
                    <TableCell className="font-medium">#{pedido.id}</TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="font-medium">{pedido.cliente}</span>
                        <span className="text-xs text-muted-foreground">{pedido.email}</span>
                      </div>
                    </TableCell>
                    <TableCell>{pedido.data}</TableCell>
                    <TableCell>
                      <span className="flex items-center">
                        <Package className="mr-1 h-3 w-3" /> {pedido.produtos}
                      </span>
                    </TableCell>
                    <TableCell>{pedido.pagamento}</TableCell>
                    <TableCell className="text-right font-medium">R$ {pedido.valorTotal}</TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex rounded-full px-2 py-1 text-xs font-medium 
                          ${pedido.status === 'Entregue' ? 'bg-green-100 text-green-700' : 
                          pedido.status === 'Cancelado' ? 'bg-red-100 text-red-700' :
                          pedido.status === 'Em Transporte' ? 'bg-blue-100 text-blue-700' :
                          pedido.status === 'Em Separação' ? 'bg-purple-100 text-purple-700' :
                          pedido.status === 'Pagamento Confirmado' ? 'bg-green-100 text-green-700' :
                          'bg-amber-100 text-amber-700'}`
                        }
                      >
                        {pedido.status}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Button asChild variant="ghost" size="icon" title="Ver detalhes">
                          <Link to={`/pedidos/${pedido.id}`}>
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
                              <FileText className="mr-2 h-4 w-4" />
                              Nota Fiscal
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Truck className="mr-2 h-4 w-4" />
                              Rastreamento
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            {pedido.status !== 'Entregue' && pedido.status !== 'Cancelado' && (
                              <>
                                <DropdownMenuItem>
                                  <CheckCircle className="mr-2 h-4 w-4" />
                                  {pedido.status === 'Aguardando Pagamento' 
                                    ? 'Confirmar Pagamento' 
                                    : pedido.status === 'Pagamento Confirmado'
                                    ? 'Marcar como Enviado'
                                    : pedido.status === 'Em Transporte'
                                    ? 'Marcar como Entregue'
                                    : 'Avançar Status'}
                                </DropdownMenuItem>
                                <DropdownMenuItem className="text-red-600">
                                  <Ban className="mr-2 h-4 w-4" />
                                  Cancelar Pedido
                                </DropdownMenuItem>
                              </>
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
              Mostrando <strong>1</strong> a <strong>10</strong> de <strong>458</strong> pedidos
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