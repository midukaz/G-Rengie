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
  Edit,
  MoreHorizontal,
  ShoppingBag,
  Package
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

// Dados de categorias para demonstração
const categorias = [
  {
    id: 1,
    nome: "Eletrônicos",
    descricao: "Produtos eletrônicos e acessórios",
    totalProdutos: 48,
    status: "Ativo",
  },
  {
    id: 2,
    nome: "Vestuário",
    descricao: "Roupas e acessórios de moda",
    totalProdutos: 124,
    status: "Ativo",
  },
  {
    id: 3,
    nome: "Informática",
    descricao: "Computadores, componentes e periféricos",
    totalProdutos: 65,
    status: "Ativo",
  },
  {
    id: 4,
    nome: "Eletrodomésticos",
    descricao: "Aparelhos e utensílios domésticos",
    totalProdutos: 32,
    status: "Ativo",
  },
  {
    id: 5,
    nome: "Decoração",
    descricao: "Artigos decorativos para o lar",
    totalProdutos: 78,
    status: "Ativo",
  },
  {
    id: 6,
    nome: "Moveis",
    descricao: "Móveis para casa e escritório",
    totalProdutos: 42,
    status: "Ativo",
  },
  {
    id: 7,
    nome: "Brinquedos",
    descricao: "Brinquedos e jogos",
    totalProdutos: 53,
    status: "Ativo",
  },
  {
    id: 8,
    nome: "Esporte",
    descricao: "Artigos esportivos e fitness",
    totalProdutos: 29,
    status: "Inativo",
  },
];

export default function CategoriasPage() {
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
                  <BreadcrumbPage>Categorias</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold tracking-tight">Categorias de Produtos</h1>
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Nova Categoria
            </Button>
          </div>
          
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardContent className="p-4">
                <div className="text-sm font-medium text-muted-foreground">Total de Categorias</div>
                <div className="text-2xl font-bold">8</div>
                <div className="text-xs text-green-600">7 ativas, 1 inativa</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-sm font-medium text-muted-foreground">Maior Categoria</div>
                <div className="text-2xl font-bold">Vestuário</div>
                <div className="text-xs">124 produtos</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-sm font-medium text-muted-foreground">Categorias sem Produto</div>
                <div className="text-2xl font-bold">0</div>
                <div className="text-xs">Todas categorias possuem produtos</div>
              </CardContent>
            </Card>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar categorias..."
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
                  <TableHead>Nome</TableHead>
                  <TableHead>Descrição</TableHead>
                  <TableHead>Produtos</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="w-[100px]">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {categorias.map((categoria) => (
                  <TableRow key={categoria.id}>
                    <TableCell className="font-medium">{categoria.id}</TableCell>
                    <TableCell>
                      <div className="font-medium">{categoria.nome}</div>
                    </TableCell>
                    <TableCell>{categoria.descricao}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Package className="h-3 w-3 text-muted-foreground" />
                        <span>{categoria.totalProdutos}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex rounded-full px-2 py-1 text-xs font-medium 
                          ${categoria.status === 'Ativo' ? 'bg-green-100 text-green-700' : 
                          'bg-gray-100 text-gray-700'}`
                        }
                      >
                        {categoria.status}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon" title="Editar">
                          <Edit className="h-4 w-4" />
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
                              Ver produtos
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              Editar categoria
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-600">
                              {categoria.status === 'Ativo' ? 'Desativar' : 'Ativar'}
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
              Mostrando <strong>8</strong> categorias
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
} 