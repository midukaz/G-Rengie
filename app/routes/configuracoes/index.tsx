import { Settings, Users, Link as LinkIcon } from "lucide-react"
import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Link } from "react-router"

export default function ConfiguracoesPage() {
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
                  <BreadcrumbPage>Configurações</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-col gap-4 p-4 pt-0">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold tracking-tight">Configurações do Sistema</h2>
          </div>
          
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-xl font-medium">Configurações Gerais</CardTitle>
                <Settings className="h-5 w-5 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Configurações básicas do sistema, como informações da empresa, 
                  preferências de exibição e outras opções gerais.
                </p>
                <Link to="/configuracoes/geral" className="text-sm text-blue-600 hover:underline flex items-center">
                  Acessar configurações gerais
                  <LinkIcon className="ml-1 h-3 w-3" />
                </Link>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-xl font-medium">Usuários</CardTitle>
                <Users className="h-5 w-5 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Gerenciamento de usuários, permissões, funções e controle de acesso 
                  às funcionalidades do sistema.
                </p>
                <Link to="/configuracoes/usuarios" className="text-sm text-blue-600 hover:underline flex items-center">
                  Gerenciar usuários
                  <LinkIcon className="ml-1 h-3 w-3" />
                </Link>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-xl font-medium">Integrações</CardTitle>
                <LinkIcon className="h-5 w-5 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Configuração de integrações com sistemas externos, APIs e 
                  serviços de terceiros.
                </p>
                <Link to="/configuracoes/integracoes" className="text-sm text-blue-600 hover:underline flex items-center">
                  Configurar integrações
                  <LinkIcon className="ml-1 h-3 w-3" />
                </Link>
              </CardContent>
            </Card>
          </div>
          
          <Tabs defaultValue="geral" className="space-y-4 mt-4">
            <TabsList>
              <TabsTrigger value="geral">Geral</TabsTrigger>
              <TabsTrigger value="usuarios">Usuários</TabsTrigger>
              <TabsTrigger value="integracoes">Integrações</TabsTrigger>
            </TabsList>
            <TabsContent value="geral" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Configurações Gerais</CardTitle>
                  <CardDescription>
                    Visão geral das configurações básicas do sistema
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Acesse as configurações gerais para personalizar o sistema de acordo com as necessidades da sua empresa.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="usuarios" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Gerenciamento de Usuários</CardTitle>
                  <CardDescription>
                    Controle de acesso e permissões
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Gerencie usuários, defina permissões e controle o acesso às funcionalidades do sistema.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="integracoes" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Integrações</CardTitle>
                  <CardDescription>
                    Conexão com sistemas externos
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Configure integrações com sistemas externos, APIs e serviços de terceiros para expandir as funcionalidades do G-Rencie.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
