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
  Globe,
  FileText,
  ShoppingBag
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

// Dados dos fornecedores para demonstração
const fornecedores = Array.from({ length: 10 }).map((_, i) => ({
  id: i + 1,
  nome: ['Materiais Express', 'TechSupply', 'Global Insumos', 'Peças & Cia', 'Distribuidora Central', 
        'ABC Componentes', 'Fast Logistics', 'Mega Distribuidora', 'Nova Era Suprimentos', 'Conexão Industrial'][i],
  cnpj: `${Math.floor(Math.random() * 100)}.${Math.floor(Math.random() * 1000)}.${Math.floor(Math.random() * 1000)}/${Math.floor(Math.random() * 10000)}-${Math.floor(Math.random() * 100)}`,
  telefone: `(${Math.floor(Math.random() * 100)}) ${Math.floor(Math.random() * 10000)}-${Math.floor(Math.random() * 10000)}`,
  email: ['contato', 'vendas', 'comercial', 'suporte', 'info'][i % 5] + '@' + ['empresa', 'fornecedor', 'distribuidora', 'grupo', 'industria'][i % 5] + '.com.br',
  cidade: ['São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Curitiba', 'Porto Alegre', 
          'Brasília', 'Salvador', 'Recife', 'Fortaleza', 'Manaus'][i],
  categoria: ['Eletrônicos', 'Vestuário', 'Informática', 'Móveis', 'Decoração', 
             'Materiais', 'Alimentos', 'Escritório', 'Ferramentas', 'Diversos'][i],
  totalProdutos: Math.floor(Math.random() * 100) + 5,
  ultimaCompra: new Date(Date.now() - Math.floor(Math.random() * 90) * 86400000).toLocaleDateString(),
  status: ['Ativo', 'Inativo', 'Pendente', 'Ativo', 'Ativo'][i % 5]
}));

export default function FornecedoresPage() {
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
                  <BreadcrumbPage>Fornecedores</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold tracking-tight">Fornecedores</h1>
            <div className="flex items-center gap-2">
              <Button>
                <Plus className="mr-2 h-4 w-4" /> Novo Fornecedor
              </Button>
            </div>
          </div>
          
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardContent className="p-4">
                <div className="text-sm font-medium text-muted-foreground">Total de Fornecedores</div>
                <div className="text-2xl font-bold">42</div>
                <div className="text-xs text-muted-foreground">38 ativos, 4 inativos</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-sm font-medium text-muted-foreground">Compras no Mês</div>
                <div className="text-2xl font-bold">R$ 32.458,70</div>
                <div className="text-xs text-muted-foreground">25 pedidos realizados</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-sm font-medium text-muted-foreground">Principais Fornecedores</div>
                <div className="text-2xl font-bold">8</div>
                <div className="text-xs text-muted-foreground">65% do volume de compras</div>
              </CardContent>
            </Card>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar fornecedores..."
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
                  <TableHead>Fornecedor</TableHead>
                  <TableHead>Contato</TableHead>
                  <TableHead>Localização</TableHead>
                  <TableHead>Categoria</TableHead>
                  <TableHead className="text-right">Produtos</TableHead>
                  <TableHead>Última Compra</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="w-[80px]">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {fornecedores.map((fornecedor) => (
                  <TableRow key={fornecedor.id}>
                    <TableCell className="font-medium">{fornecedor.id}</TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="font-medium">{fornecedor.nome}</span>
                        <span className="text-xs text-muted-foreground">{fornecedor.cnpj}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="flex items-center text-sm">
                          <Phone className="mr-1 h-3 w-3" /> {fornecedor.telefone}
                        </span>
                        <span className="flex items-center text-xs text-muted-foreground">
                          <Mail className="mr-1 h-3 w-3" /> {fornecedor.email}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="flex items-center text-sm">
                        <MapPin className="mr-1 h-3 w-3" /> {fornecedor.cidade}
                      </span>
                    </TableCell>
                    <TableCell>{fornecedor.categoria}</TableCell>
                    <TableCell className="text-right">{fornecedor.totalProdutos}</TableCell>
                    <TableCell>{fornecedor.ultimaCompra}</TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex rounded-full px-2 py-1 text-xs font-medium 
                          ${fornecedor.status === 'Ativo' ? 'bg-green-100 text-green-700' : 
                          fornecedor.status === 'Inativo' ? 'bg-gray-100 text-gray-700' :
                          'bg-amber-100 text-amber-700'}`
                        }
                      >
                        {fornecedor.status}
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
                            <Globe className="mr-2 h-4 w-4" />
                            Ver Detalhes
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <ShoppingBag className="mr-2 h-4 w-4" />
                            Produtos
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <FileText className="mr-2 h-4 w-4" />
                            Histórico de Compras
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            {fornecedor.status === 'Ativo' ? 
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
              Mostrando <strong>1</strong> a <strong>10</strong> de <strong>42</strong> fornecedores
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