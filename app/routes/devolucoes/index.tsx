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
  PackageCheck,
  RefreshCw,
  Ban,
  CheckCircle,
  Package,
  ArrowLeft
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

// Dados de devoluções para demonstração
const devolucoes = Array.from({ length: 10 }).map((_, i) => ({
  id: 500 + i,
  pedidoId: 1000 + Math.floor(Math.random() * 100),
  cliente: ['João Silva', 'Maria Oliveira', 'Pedro Santos', 'Ana Souza', 'Carlos Ferreira', 
           'Mariana Costa', 'Rodrigo Lima', 'Julia Almeida', 'Felipe Martins', 'Beatriz Rocha'][i],
  email: ['joao', 'maria', 'pedro', 'ana', 'carlos', 'mariana', 'rodrigo', 'julia', 'felipe', 'beatriz'][i] + '@email.com',
  data: new Date(Date.now() - Math.floor(Math.random() * 30) * 86400000).toLocaleDateString(),
  motivo: ['Produto Danificado', 'Produto Diferente', 'Tamanho Incorreto', 'Cor Diferente', 'Arrependimento',
           'Produto com Defeito', 'Entrega Atrasada', 'Produto Incompleto', 'Qualidade Inferior', 'Outros'][i],
  valorTotal: (Math.random() * 500 + 50).toFixed(2),
  itens: Math.floor(Math.random() * 3) + 1,
  status: ['Solicitada', 'Em Análise', 'Aprovada', 'Concluída', 'Rejeitada'][i % 5]
}));

export default function DevolucoesPage() {
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
                  <BreadcrumbPage>Devoluções</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold tracking-tight">Devoluções</h1>
            <div className="flex items-center gap-2">
              <Button>
                <Plus className="mr-2 h-4 w-4" /> Nova Devolução
              </Button>
            </div>
          </div>
          
          <div className="grid gap-4 md:grid-cols-4">
            <Card>
              <CardContent className="p-4">
                <div className="text-sm font-medium text-muted-foreground">Total de Devoluções</div>
                <div className="text-2xl font-bold">42</div>
                <div className="text-xs text-muted-foreground">Últimos 30 dias</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-sm font-medium text-muted-foreground">Em Processamento</div>
                <div className="text-2xl font-bold">18</div>
                <div className="text-xs text-amber-600">4 aguardando análise</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-sm font-medium text-muted-foreground">Valor Total</div>
                <div className="text-2xl font-bold">R$ 12.876,54</div>
                <div className="text-xs text-red-600">3,8% do faturamento</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-sm font-medium text-muted-foreground">Taxa de Devolução</div>
                <div className="text-2xl font-bold">3,2%</div>
                <div className="text-xs text-green-600">-0,5% comparado ao mês anterior</div>
              </CardContent>
            </Card>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar devoluções..."
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
                  <TableHead>Motivo</TableHead>
                  <TableHead>Itens</TableHead>
                  <TableHead className="text-right">Valor</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="w-[100px]">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {devolucoes.map((devolucao) => (
                  <TableRow key={devolucao.id}>
                    <TableCell>
                      <div className="font-medium">#{devolucao.id}</div>
                      <div className="text-xs text-muted-foreground">Pedido #{devolucao.pedidoId}</div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="font-medium">{devolucao.cliente}</span>
                        <span className="text-xs text-muted-foreground">{devolucao.email}</span>
                      </div>
                    </TableCell>
                    <TableCell>{devolucao.data}</TableCell>
                    <TableCell>{devolucao.motivo}</TableCell>
                    <TableCell>
                      <span className="flex items-center">
                        <Package className="mr-1 h-3 w-3" /> {devolucao.itens}
                      </span>
                    </TableCell>
                    <TableCell className="text-right font-medium">R$ {devolucao.valorTotal}</TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex rounded-full px-2 py-1 text-xs font-medium 
                          ${devolucao.status === 'Concluída' ? 'bg-green-100 text-green-700' : 
                          devolucao.status === 'Rejeitada' ? 'bg-red-100 text-red-700' :
                          devolucao.status === 'Aprovada' ? 'bg-blue-100 text-blue-700' :
                          devolucao.status === 'Em Análise' ? 'bg-purple-100 text-purple-700' :
                          'bg-amber-100 text-amber-700'}`
                        }
                      >
                        {devolucao.status}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Button asChild variant="ghost" size="icon" title="Ver detalhes">
                          <Link to={`/devolucoes/${devolucao.id}`}>
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
                              <ArrowLeft className="mr-2 h-4 w-4" />
                              Ver Pedido Original
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <FileText className="mr-2 h-4 w-4" />
                              Comprovantes
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            {devolucao.status === 'Solicitada' && (
                              <>
                                <DropdownMenuItem>
                                  <CheckCircle className="mr-2 h-4 w-4" />
                                  Aprovar Devolução
                                </DropdownMenuItem>
                                <DropdownMenuItem className="text-red-600">
                                  <Ban className="mr-2 h-4 w-4" />
                                  Rejeitar Devolução
                                </DropdownMenuItem>
                              </>
                            )}
                            {devolucao.status === 'Em Análise' && (
                              <>
                                <DropdownMenuItem>
                                  <PackageCheck className="mr-2 h-4 w-4" />
                                  Confirmar Recebimento
                                </DropdownMenuItem>
                              </>
                            )}
                            {devolucao.status === 'Aprovada' && (
                              <>
                                <DropdownMenuItem>
                                  <RefreshCw className="mr-2 h-4 w-4" />
                                  Processar Reembolso
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
              Mostrando <strong>1</strong> a <strong>10</strong> de <strong>42</strong> devoluções
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