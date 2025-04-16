import { BarChart, LineChart, PieChart, TrendingUp } from "lucide-react"
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

export default function RelatoriosPerformancePage() {
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
                  <BreadcrumbLink href="/relatorios">
                    Relatórios
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Performance</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-col gap-4 p-4 pt-0">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold tracking-tight">Relatórios de Performance</h2>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Crescimento</CardTitle>
                <TrendingUp className="h-4 w-4 text-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+23.5%</div>
                <p className="text-xs text-muted-foreground">
                  Em relação ao período anterior
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Conversão</CardTitle>
                <PieChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4.28%</div>
                <p className="text-xs text-muted-foreground">
                  Taxa de conversão média
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Eficiência</CardTitle>
                <BarChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">87.3%</div>
                <p className="text-xs text-muted-foreground">
                  Índice de eficiência operacional
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">ROI</CardTitle>
                <LineChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3.2x</div>
                <p className="text-xs text-muted-foreground">
                  Retorno sobre investimento
                </p>
              </CardContent>
            </Card>
          </div>
          
          <Tabs defaultValue="vendas" className="space-y-4">
            <TabsList>
              <TabsTrigger value="vendas">Vendas</TabsTrigger>
              <TabsTrigger value="marketing">Marketing</TabsTrigger>
              <TabsTrigger value="operacional">Operacional</TabsTrigger>
              <TabsTrigger value="financeiro">Financeiro</TabsTrigger>
            </TabsList>
            <TabsContent value="vendas" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Performance de Vendas</CardTitle>
                  <CardDescription>
                    Análise de desempenho da equipe de vendas
                  </CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <div className="h-[300px] w-full bg-muted/20 flex items-center justify-center">
                    Gráfico de Performance de Vendas
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="marketing" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Performance de Marketing</CardTitle>
                  <CardDescription>
                    Análise de desempenho das campanhas de marketing
                  </CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <div className="h-[300px] w-full bg-muted/20 flex items-center justify-center">
                    Gráfico de Performance de Marketing
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="operacional" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Performance Operacional</CardTitle>
                  <CardDescription>
                    Análise de eficiência operacional
                  </CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <div className="h-[300px] w-full bg-muted/20 flex items-center justify-center">
                    Gráfico de Performance Operacional
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="financeiro" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Performance Financeira</CardTitle>
                  <CardDescription>
                    Análise de indicadores financeiros
                  </CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <div className="h-[300px] w-full bg-muted/20 flex items-center justify-center">
                    Gráfico de Performance Financeira
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
