import { Search, Plus, MoreHorizontal, UserPlus, Shield, Users, User } from "lucide-react"
import { AppSidebar } from "../../components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../components/ui/breadcrumb"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Separator } from "../../components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "../../components/ui/sidebar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table"
import { Badge } from "../../components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar"

// Dados de exemplo para usuários
const usuarios = [
  {
    id: 1,
    nome: "João Silva",
    email: "joao.silva@empresa.com",
    cargo: "Administrador",
    departamento: "TI",
    status: "Ativo",
    ultimoAcesso: "Hoje, 10:45",
    avatar: "/assets/avatar-1.jpg"
  },
  {
    id: 2,
    nome: "Maria Oliveira",
    email: "maria.oliveira@empresa.com",
    cargo: "Gerente",
    departamento: "Vendas",
    status: "Ativo",
    ultimoAcesso: "Ontem, 15:30",
    avatar: "/assets/avatar-2.jpg"
  },
  {
    id: 3,
    nome: "Pedro Santos",
    email: "pedro.santos@empresa.com",
    cargo: "Analista",
    departamento: "Financeiro",
    status: "Ativo",
    ultimoAcesso: "Hoje, 09:15",
    avatar: "/assets/avatar-3.jpg"
  },
  {
    id: 4,
    nome: "Ana Costa",
    email: "ana.costa@empresa.com",
    cargo: "Vendedor",
    departamento: "Vendas",
    status: "Inativo",
    ultimoAcesso: "10/04/2025, 14:20",
    avatar: "/assets/avatar-4.jpg"
  },
  {
    id: 5,
    nome: "Carlos Pereira",
    email: "carlos.pereira@empresa.com",
    cargo: "Estoquista",
    departamento: "Logística",
    status: "Ativo",
    ultimoAcesso: "Hoje, 08:30",
    avatar: "/assets/avatar-5.jpg"
  }
];

// Dados de exemplo para perfis de acesso
const perfisAcesso = [
  {
    id: 1,
    nome: "Administrador",
    descricao: "Acesso completo a todas as funcionalidades do sistema",
    usuarios: 2,
    modulos: "Todos"
  },
  {
    id: 2,
    nome: "Gerente",
    descricao: "Acesso a relatórios e gestão de equipe",
    usuarios: 3,
    modulos: "Dashboard, Vendas, Relatórios, Usuários"
  },
  {
    id: 3,
    nome: "Vendedor",
    descricao: "Acesso ao módulo de vendas e produtos",
    usuarios: 5,
    modulos: "Vendas, Produtos"
  },
  {
    id: 4,
    nome: "Financeiro",
    descricao: "Acesso ao módulo financeiro e relatórios",
    usuarios: 2,
    modulos: "Financeiro, Relatórios"
  },
  {
    id: 5,
    nome: "Estoquista",
    descricao: "Acesso ao módulo de produtos e estoque",
    usuarios: 3,
    modulos: "Produtos, Estoque"
  }
];

export default function ConfiguracoesUsuariosPage() {
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
                  <BreadcrumbLink href="/configuracoes">
                    Configurações
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Usuários</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-col gap-4 p-4 pt-0">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold tracking-tight">Gerenciamento de Usuários</h2>
          </div>
          
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total de Usuários</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">15</div>
                <p className="text-xs text-muted-foreground">
                  12 ativos, 3 inativos
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Perfis de Acesso</CardTitle>
                <Shield className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">5</div>
                <p className="text-xs text-muted-foreground">
                  Administrador, Gerente, Vendedor...
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Último Cadastro</CardTitle>
                <UserPlus className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Hoje</div>
                <p className="text-xs text-muted-foreground">
                  Carlos Pereira às 08:30
                </p>
              </CardContent>
            </Card>
          </div>
          
          <Tabs defaultValue="usuarios" className="space-y-4">
            <TabsList>
              <TabsTrigger value="usuarios">Usuários</TabsTrigger>
              <TabsTrigger value="perfis">Perfis de Acesso</TabsTrigger>
              <TabsTrigger value="logs">Logs de Acesso</TabsTrigger>
            </TabsList>
            
            <TabsContent value="usuarios" className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="relative flex-1 max-w-sm">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Buscar usuários..."
                    className="pl-8"
                  />
                </div>
                <Button>
                  <Plus className="mr-2 h-4 w-4" /> Novo Usuário
                </Button>
              </div>
              
              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[50px]">ID</TableHead>
                        <TableHead>Usuário</TableHead>
                        <TableHead>Cargo</TableHead>
                        <TableHead>Departamento</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Último Acesso</TableHead>
                        <TableHead className="w-[50px]"></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {usuarios.map((usuario) => (
                        <TableRow key={usuario.id}>
                          <TableCell className="font-medium">{usuario.id}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Avatar className="h-8 w-8">
                                <AvatarImage src={usuario.avatar} alt={usuario.nome} />
                                <AvatarFallback>{usuario.nome.substring(0, 2).toUpperCase()}</AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="font-medium">{usuario.nome}</div>
                                <div className="text-xs text-muted-foreground">{usuario.email}</div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>{usuario.cargo}</TableCell>
                          <TableCell>{usuario.departamento}</TableCell>
                          <TableCell>
                            <Badge variant={usuario.status === "Ativo" ? "default" : "secondary"}>
                              {usuario.status}
                            </Badge>
                          </TableCell>
                          <TableCell>{usuario.ultimoAcesso}</TableCell>
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
                                <DropdownMenuItem>Editar</DropdownMenuItem>
                                <DropdownMenuItem>Alterar Senha</DropdownMenuItem>
                                <DropdownMenuItem>Alterar Permissões</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className={usuario.status === "Ativo" ? "text-red-600" : "text-green-600"}>
                                  {usuario.status === "Ativo" ? "Desativar" : "Ativar"}
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="perfis" className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="relative flex-1 max-w-sm">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Buscar perfis..."
                    className="pl-8"
                  />
                </div>
                <Button>
                  <Plus className="mr-2 h-4 w-4" /> Novo Perfil
                </Button>
              </div>
              
              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[50px]">ID</TableHead>
                        <TableHead>Nome</TableHead>
                        <TableHead>Descrição</TableHead>
                        <TableHead>Usuários</TableHead>
                        <TableHead>Módulos</TableHead>
                        <TableHead className="w-[50px]"></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {perfisAcesso.map((perfil) => (
                        <TableRow key={perfil.id}>
                          <TableCell className="font-medium">{perfil.id}</TableCell>
                          <TableCell>
                            <div className="font-medium">{perfil.nome}</div>
                          </TableCell>
                          <TableCell>{perfil.descricao}</TableCell>
                          <TableCell>{perfil.usuarios}</TableCell>
                          <TableCell>{perfil.modulos}</TableCell>
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
                                <DropdownMenuItem>Editar</DropdownMenuItem>
                                <DropdownMenuItem>Duplicar</DropdownMenuItem>
                                <DropdownMenuItem>Ver Usuários</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-red-600">Excluir</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="logs" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Logs de Acesso</CardTitle>
                  <CardDescription>
                    Histórico de acessos ao sistema
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center p-2 border-b">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">João Silva</span>
                        </div>
                        <div className="text-xs text-muted-foreground">Login bem-sucedido</div>
                      </div>
                      <div className="text-sm">Hoje, 10:45</div>
                    </div>
                    
                    <div className="flex items-center p-2 border-b">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">Carlos Pereira</span>
                        </div>
                        <div className="text-xs text-muted-foreground">Login bem-sucedido</div>
                      </div>
                      <div className="text-sm">Hoje, 08:30</div>
                    </div>
                    
                    <div className="flex items-center p-2 border-b">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">Pedro Santos</span>
                        </div>
                        <div className="text-xs text-muted-foreground">Login bem-sucedido</div>
                      </div>
                      <div className="text-sm">Hoje, 09:15</div>
                    </div>
                    
                    <div className="flex items-center p-2 border-b">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4 text-red-500" />
                          <span className="font-medium">Usuário Desconhecido</span>
                        </div>
                        <div className="text-xs text-red-500">Tentativa de login falhou</div>
                      </div>
                      <div className="text-sm">Ontem, 18:22</div>
                    </div>
                    
                    <div className="flex items-center p-2 border-b">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">Maria Oliveira</span>
                        </div>
                        <div className="text-xs text-muted-foreground">Login bem-sucedido</div>
                      </div>
                      <div className="text-sm">Ontem, 15:30</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
