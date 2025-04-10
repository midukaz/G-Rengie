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
  CreditCard,
  DollarSign,
  Download,
  FileText,
  LineChart,
  Package,
  PieChart,
  Plus,
  TrendingDown,
  TrendingUp,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Link } from "react-router"

export default function FinanceiroPage() {
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
                  <BreadcrumbPage>Financeiro</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold tracking-tight">Gestão Financeira</h1>
            <div className="flex items-center gap-2">
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" /> Exportar Relatório
              </Button>
              <Button>
                <Plus className="mr-2 h-4 w-4" /> Nova Despesa
              </Button>
            </div>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Faturamento (Mês)
                </CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">R$ 67.245,89</div>
                <div className="flex items-center space-x-1">
                  <TrendingUp className="h-3 w-3 text-green-600" />
                  <p className="text-xs text-green-600">+12.5% comparado ao mês anterior</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Despesas (Mês)
                </CardTitle>
                <CreditCard className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">R$ 32.583,42</div>
                <div className="flex items-center space-x-1">
                  <TrendingDown className="h-3 w-3 text-red-600" />
                  <p className="text-xs text-red-600">-3.2% comparado ao mês anterior</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Lucro Líquido
                </CardTitle>
                <BarChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">R$ 34.662,47</div>
                <p className="text-xs text-muted-foreground">51,5% de margem</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Previsão (Próximo Mês)
                </CardTitle>
                <LineChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">R$ 72.500,00</div>
                <div className="flex items-center space-x-1">
                  <TrendingUp className="h-3 w-3 text-green-600" />
                  <p className="text-xs text-green-600">+7.8% de crescimento previsto</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Visão Geral</TabsTrigger>
              <TabsTrigger value="faturamento">Faturamento</TabsTrigger>
              <TabsTrigger value="despesas">Despesas</TabsTrigger>
              <TabsTrigger value="fluxo">Fluxo de Caixa</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="lg:col-span-4">
                  <CardHeader>
                    <CardTitle>Evolução Financeira</CardTitle>
                    <CardDescription>
                      Acompanhamento de receitas e despesas dos últimos 6 meses.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <div className="h-[300px] flex items-center justify-center bg-slate-50 rounded-md border border-dashed">
                      <LineChart className="h-8 w-8 text-muted-foreground" />
                      <span className="ml-2 text-sm text-muted-foreground">Gráfico de Evolução Financeira</span>
                    </div>
                  </CardContent>
                </Card>
                <Card className="lg:col-span-3">
                  <CardHeader>
                    <CardTitle>Distribuição de Despesas</CardTitle>
                    <CardDescription>
                      Categorias de despesas do mês atual.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <div className="h-[300px] flex items-center justify-center bg-slate-50 rounded-md border border-dashed">
                      <PieChart className="h-8 w-8 text-muted-foreground" />
                      <span className="ml-2 text-sm text-muted-foreground">Gráfico de Distribuição de Despesas</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Principais Fontes de Receita</CardTitle>
                    <CardDescription>
                      Categorias de produtos que mais geram receita.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-8">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div key={i} className="flex items-center">
                          <div className="flex items-center gap-2">
                            <Package className="h-4 w-4 text-muted-foreground" />
                            <div className="space-y-1">
                              <p className="text-sm font-medium leading-none">
                                {['Eletrônicos', 'Informática', 'Smartphones', 'Acessórios', 'Móveis'][i]}
                              </p>
                            </div>
                          </div>
                          <div className="ml-auto font-medium">
                            {`R$ ${(Math.random() * 10000 + 5000).toFixed(2)}`}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t">
                      <Button variant="outline" className="w-full" asChild>
                        <Link to="/relatorios/vendas">
                          Ver relatório detalhado
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Despesas Recentes</CardTitle>
                    <CardDescription>
                      Últimas despesas registradas no sistema.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-8">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div key={i} className="flex items-center">
                          <div className="space-y-1">
                            <p className="text-sm font-medium leading-none">
                              {['Aluguel', 'Folha de Pagamento', 'Energia Elétrica', 'Internet', 'Marketing'][i]}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {new Date(Date.now() - (i * 3) * 86400000).toLocaleDateString()}
                            </p>
                          </div>
                          <div className="ml-auto font-medium text-red-600">
                            - {`R$ ${(Math.random() * 5000 + 500).toFixed(2)}`}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t">
                      <Button variant="outline" className="w-full" asChild>
                        <Link to="/financeiro/despesas">
                          Ver todas as despesas
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Relatórios Disponíveis</CardTitle>
                    <CardDescription>
                      Relatórios financeiros que podem ser gerados.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        'Balanço Mensal',
                        'Fluxo de Caixa',
                        'DRE Simplificado',
                        'Inadimplência',
                        'Projeção Financeira'
                      ].map((report, i) => (
                        <div key={i} className="flex items-center p-2 hover:bg-slate-50 rounded-md">
                          <FileText className="h-4 w-4 text-muted-foreground" />
                          <span className="ml-2 text-sm">{report}</span>
                          <Button variant="ghost" size="sm" className="ml-auto">Gerar</Button>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t">
                      <Button variant="outline" className="w-full" asChild>
                        <Link to="/financeiro/relatorios">
                          Ver todos os relatórios
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="faturamento" className="h-[400px] flex items-center justify-center border rounded-md">
              <div className="text-center">
                <DollarSign className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-medium">Gestão de Faturamento</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Visualize e gerencie o faturamento da empresa.
                </p>
                <Button className="mt-4" asChild>
                  <Link to="/financeiro/faturamento">
                    Acessar Faturamento
                  </Link>
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="despesas" className="h-[400px] flex items-center justify-center border rounded-md">
              <div className="text-center">
                <CreditCard className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-medium">Gestão de Despesas</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Gerencie as despesas e custos da empresa.
                </p>
                <Button className="mt-4" asChild>
                  <Link to="/financeiro/despesas">
                    Acessar Despesas
                  </Link>
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="fluxo" className="h-[400px] flex items-center justify-center border rounded-md">
              <div className="text-center">
                <BarChart className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-medium">Fluxo de Caixa</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Acompanhe o fluxo de entrada e saída de recursos.
                </p>
                <Button className="mt-4" asChild>
                  <Link to="/financeiro/relatorios">
                    Ver Relatórios
                  </Link>
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
} 