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
  ArrowRight,
  BarChart,
  Calendar,
  CreditCard,
  DollarSign,
  MoreHorizontal,
  PieChart,
  Plus,
  ShoppingBag,
  ShoppingCart,
  TrendingUp,
  Users
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Link } from "react-router"

export default function VendasPage() {
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
                  <BreadcrumbPage>Vendas</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold tracking-tight">Vendas</h1>
            <div className="flex items-center gap-2">
              <Button>
                <Plus className="mr-2 h-4 w-4" /> Novo Pedido
              </Button>
            </div>
          </div>
          
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Visão Geral</TabsTrigger>
              <TabsTrigger value="analytics">Análise</TabsTrigger>
              <TabsTrigger value="reports">Relatórios</TabsTrigger>
              <TabsTrigger value="notifications">Notificações</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Receita Total
                    </CardTitle>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">R$ 45.231,89</div>
                    <p className="text-xs text-muted-foreground">
                      +20.1% em relação ao mês anterior
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Novos Clientes
                    </CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+124</div>
                    <p className="text-xs text-muted-foreground">
                      +14% em relação ao mês anterior
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Pedidos
                    </CardTitle>
                    <ShoppingBag className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">458</div>
                    <p className="text-xs text-muted-foreground">
                      +6% em relação ao mês anterior
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Ticket Médio
                    </CardTitle>
                    <CreditCard className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">R$ 387,42</div>
                    <p className="text-xs text-muted-foreground">
                      +2.4% em relação ao mês anterior
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="lg:col-span-4">
                  <CardHeader>
                    <CardTitle>Visão Geral</CardTitle>
                    <CardDescription>
                      Histórico de vendas nos últimos 30 dias.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <div className="h-[200px] flex items-center justify-center bg-slate-50 rounded-md border border-dashed">
                      <BarChart className="h-8 w-8 text-muted-foreground" />
                      <span className="ml-2 text-sm text-muted-foreground">Gráfico de Vendas</span>
                    </div>
                  </CardContent>
                </Card>
                <Card className="lg:col-span-3">
                  <CardHeader>
                    <CardTitle>Segmentação</CardTitle>
                    <CardDescription>
                      Distribuição de vendas por categoria.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <div className="h-[200px] flex items-center justify-center bg-slate-50 rounded-md border border-dashed">
                      <PieChart className="h-8 w-8 text-muted-foreground" />
                      <span className="ml-2 text-sm text-muted-foreground">Gráfico de Segmentação</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Pedidos Recentes</CardTitle>
                    <CardDescription>
                      Últimos 6 pedidos realizados.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-8">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div key={i} className="flex items-center">
                          <div className="space-y-1">
                            <p className="text-sm font-medium leading-none">
                              Pedido #{1009 - i}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {["João Silva", "Maria Oliveira", "Pedro Santos", "Ana Souza", "Carlos Ferreira"][i]}
                            </p>
                          </div>
                          <div className="ml-auto font-medium">
                            R$ {(Math.random() * 500 + 100).toFixed(2)}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t">
                      <Button variant="outline" className="w-full" asChild>
                        <Link to="/pedidos">
                          Ver todos os pedidos
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Produtos Mais Vendidos</CardTitle>
                    <CardDescription>
                      Top 5 produtos por volume de vendas.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-8">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div key={i} className="flex items-center">
                          <div className="space-y-1">
                            <p className="text-sm font-medium leading-none">
                              {["Smartphone X", "Notebook Pro", "Smart TV 50\"", "Headphone Wireless", "Tablet Ultra"][i]}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {["Eletrônicos", "Informática", "Eletrônicos", "Acessórios", "Eletrônicos"][i]}
                            </p>
                          </div>
                          <div className="ml-auto font-medium">
                            {Math.floor(Math.random() * 100) + 20} unid.
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t">
                      <Button variant="outline" className="w-full" asChild>
                        <Link to="/produtos">
                          Ver catálogo completo
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Melhores Clientes</CardTitle>
                    <CardDescription>
                      Top 5 clientes por valor de compra.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-8">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div key={i} className="flex items-center">
                          <div className="space-y-1">
                            <p className="text-sm font-medium leading-none">
                              {["Maria Oliveira", "Carlos Ferreira", "Pedro Santos", "Ana Souza", "João Silva"][i]}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {i === 0 || i === 1 ? "Premium" : "Regular"}
                            </p>
                          </div>
                          <div className="ml-auto font-medium">
                            R$ {(Math.random() * 5000 + 1000).toFixed(2)}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t">
                      <Button variant="outline" className="w-full" asChild>
                        <Link to="/clientes">
                          Ver todos os clientes
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="analytics" className="h-[400px] flex items-center justify-center border rounded-md">
              <div className="text-center">
                <TrendingUp className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-medium">Análise de Vendas</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Visualize dados detalhados e tendências de vendas.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="reports" className="h-[400px] flex items-center justify-center border rounded-md">
              <div className="text-center">
                <Calendar className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-medium">Relatórios</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Gere relatórios personalizados de vendas por período.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="notifications" className="h-[400px] flex items-center justify-center border rounded-md">
              <div className="text-center">
                <ShoppingCart className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-medium">Notificações de Vendas</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Configure alertas e notificações para atividades de venda.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
} 