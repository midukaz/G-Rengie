import { BarChart, LineChart } from "lucide-react"
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

export default function RelatoriosVendasPage() {
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
                  <BreadcrumbPage>Vendas</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-col gap-4 p-4 pt-0">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold tracking-tight">Relatórios de Vendas</h2>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Vendas Totais</CardTitle>
                <BarChart className="h-4 w-4 text-muted-foreground" />
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
                <CardTitle className="text-sm font-medium">Ticket Médio</CardTitle>
                <LineChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">R$ 189,42</div>
                <p className="text-xs text-muted-foreground">
                  +2.5% em relação ao mês anterior
                </p>
              </CardContent>
            </Card>
          </div>
          
          <Tabs defaultValue="diario" className="space-y-4">
            <TabsList>
              <TabsTrigger value="diario">Diário</TabsTrigger>
              <TabsTrigger value="semanal">Semanal</TabsTrigger>
              <TabsTrigger value="mensal">Mensal</TabsTrigger>
              <TabsTrigger value="anual">Anual</TabsTrigger>
            </TabsList>
            <TabsContent value="diario" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Vendas Diárias</CardTitle>
                  <CardDescription>
                    Visualize o desempenho de vendas nas últimas 24 horas
                  </CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <div className="h-[300px] w-full bg-muted/20 flex items-center justify-center">
                    Gráfico de Vendas Diárias
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="semanal" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Vendas Semanais</CardTitle>
                  <CardDescription>
                    Visualize o desempenho de vendas na última semana
                  </CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <div className="h-[300px] w-full bg-muted/20 flex items-center justify-center">
                    Gráfico de Vendas Semanais
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="mensal" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Vendas Mensais</CardTitle>
                  <CardDescription>
                    Visualize o desempenho de vendas no último mês
                  </CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <div className="h-[300px] w-full bg-muted/20 flex items-center justify-center">
                    Gráfico de Vendas Mensais
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="anual" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Vendas Anuais</CardTitle>
                  <CardDescription>
                    Visualize o desempenho de vendas no último ano
                  </CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <div className="h-[300px] w-full bg-muted/20 flex items-center justify-center">
                    Gráfico de Vendas Anuais
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
