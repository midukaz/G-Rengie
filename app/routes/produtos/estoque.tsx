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
  ArrowUpDown,
  MoreHorizontal,
  AlertTriangle,
  RefreshCw,
  Download,
  TrendingUp,
  TrendingDown,
  History
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

// Dados do estoque para demonstração
const produtos = Array.from({ length: 15 }).map((_, i) => ({
  id: i + 1,
  codigo: `SKU-${10000 + i}`,
  nome: `Produto ${i + 1}`,
  categoria: ['Eletrônicos', 'Vestuário', 'Informática', 'Móveis', 'Decoração'][i % 5],
  estoqueAtual: Math.floor(Math.random() * 100) + 1,
  estoqueMinimo: 10,
  estoqueMaximo: 150,
  custoUnitario: (Math.random() * 100 + 10).toFixed(2),
  valorEstoque: 0,
  ultimaEntrada: new Date(Date.now() - Math.floor(Math.random() * 30) * 86400000).toLocaleDateString(),
  status: ['Normal', 'Baixo', 'Crítico', 'Normal', 'Alto'][i % 5]
})).map(produto => ({
  ...produto,
  valorEstoque: (produto.estoqueAtual * Number(produto.custoUnitario)).toFixed(2)
}));

export default function EstoquePage() {
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
                  <BreadcrumbLink href="/produtos">
                    Produtos
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Estoque</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold tracking-tight">Gestão de Estoque</h1>
            <div className="flex items-center gap-2">
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" /> Exportar
              </Button>
              <Button>
                <Plus className="mr-2 h-4 w-4" /> Entrada de Estoque
              </Button>
            </div>
          </div>
          
          <div className="grid gap-4 md:grid-cols-4">
            <Card>
              <CardContent className="p-4">
                <div className="text-sm font-medium text-muted-foreground">Total em Estoque</div>
                <div className="text-2xl font-bold">836 itens</div>
                <div className="text-xs text-green-600">R$ 23.458,70</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-sm font-medium text-muted-foreground">Produtos em Baixa</div>
                <div className="text-2xl font-bold">18</div>
                <div className="text-xs text-amber-600">3 em estado crítico</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-sm font-medium text-muted-foreground">Entrada no Mês</div>
                <div className="text-2xl font-bold">124 itens</div>
                <div className="flex items-center gap-1 text-xs text-green-600">
                  <TrendingUp className="h-3 w-3" /> 15% em relação ao mês anterior
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-sm font-medium text-muted-foreground">Saída no Mês</div>
                <div className="text-2xl font-bold">95 itens</div>
                <div className="flex items-center gap-1 text-xs text-red-600">
                  <TrendingDown className="h-3 w-3" /> 5% em relação ao mês anterior
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar produtos..."
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
                  <TableHead>Produto</TableHead>
                  <TableHead>Categoria</TableHead>
                  <TableHead className="text-right">Estoque</TableHead>
                  <TableHead className="text-right">Mínimo</TableHead>
                  <TableHead className="text-right">Valor Unit.</TableHead>
                  <TableHead className="text-right">Valor Total</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="w-[100px]">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {produtos.map((produto) => (
                  <TableRow key={produto.id}>
                    <TableCell className="font-medium">{produto.id}</TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="font-medium">{produto.nome}</span>
                        <span className="text-xs text-muted-foreground">{produto.codigo}</span>
                      </div>
                    </TableCell>
                    <TableCell>{produto.categoria}</TableCell>
                    <TableCell className="text-right">{produto.estoqueAtual}</TableCell>
                    <TableCell className="text-right">{produto.estoqueMinimo}</TableCell>
                    <TableCell className="text-right">R$ {produto.custoUnitario}</TableCell>
                    <TableCell className="text-right">R$ {produto.valorEstoque}</TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex rounded-full px-2 py-1 text-xs font-medium 
                          ${produto.status === 'Normal' ? 'bg-green-100 text-green-700' : 
                          produto.status === 'Baixo' ? 'bg-amber-100 text-amber-700' :
                          produto.status === 'Crítico' ? 'bg-red-100 text-red-700' :
                          'bg-blue-100 text-blue-700'}`
                        }
                      >
                        {produto.status}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Button variant="ghost" size="icon" title="Atualizar Estoque">
                          <RefreshCw className="h-4 w-4" />
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
                              <Plus className="mr-2 h-4 w-4" />
                              Entrada
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <TrendingDown className="mr-2 h-4 w-4" />
                              Saída
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <History className="mr-2 h-4 w-4" />
                              Histórico
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                              <AlertTriangle className="mr-2 h-4 w-4" />
                              Ajuste de Estoque
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
              Mostrando <strong>1</strong> a <strong>15</strong> de <strong>120</strong> produtos
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