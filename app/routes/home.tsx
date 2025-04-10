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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  BarChart3, 
  Package, 
  ShoppingCart, 
  TrendingUp, 
  AlertCircle, 
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react"

export default function Page() {
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
                  <BreadcrumbLink href="#">
                    Dashboard
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Visão Geral</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total de Vendas
                </CardTitle>
                <ShoppingCart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">R$ 45.231,89</div>
                <p className="text-xs text-muted-foreground flex items-center">
                  <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
                  <span className="text-green-500 font-medium">+20.1%</span> em comparação ao mês anterior
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Produtos em Estoque
                </CardTitle>
                <Package className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1.843</div>
                <p className="text-xs text-muted-foreground flex items-center">
                  <ArrowDownRight className="mr-1 h-3 w-3 text-red-500" />
                  <span className="text-red-500 font-medium">-3.2%</span> em comparação ao mês anterior
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Taxa de Conversão
                </CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24.8%</div>
                <p className="text-xs text-muted-foreground flex items-center">
                  <ArrowUpRight className="mr-1 h-3 w-3 text-green-500" />
                  <span className="text-green-500 font-medium">+4.3%</span> em comparação ao mês anterior
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Alertas de Estoque
                </CardTitle>
                <AlertCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">13</div>
                <p className="text-xs text-muted-foreground">
                  Produtos abaixo do estoque mínimo
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="lg:col-span-4">
              <CardHeader>
                <CardTitle>Vendas por Período</CardTitle>
                <CardDescription>Visualize as vendas por período do ano</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="h-[300px] rounded-b-lg bg-muted/50" />
              </CardContent>
            </Card>
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Produtos Mais Vendidos</CardTitle>
                <CardDescription>Top 5 produtos no último mês</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-10 w-10 rounded-lg bg-muted/50"></div>
                        <div>
                          <div className="font-medium">Produto {i + 1}</div>
                          <div className="text-sm text-muted-foreground">
                            {Math.floor(Math.random() * 200)} unidades
                          </div>
                        </div>
                      </div>
                      <div className="text-sm font-medium">
                        R$ {(Math.floor(Math.random() * 1000) + 500).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Pedidos Recentes</h2>
            <Button variant="outline" size="sm">Ver todos</Button>
          </div>
          <div className="rounded-lg border">
            <div className="h-[400px] bg-muted/50 p-4">
              <div className="grid grid-cols-5 gap-4 border-b py-2 font-medium">
                <div>Pedido</div>
                <div>Cliente</div>
                <div>Data</div>
                <div>Status</div>
                <div className="text-right">Total</div>
              </div>
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="grid grid-cols-5 gap-4 border-b py-4">
                  <div>#{(10000 + i).toString()}</div>
                  <div>Cliente {i + 1}</div>
                  <div>{new Date().toLocaleDateString()}</div>
                  <div>
                    <span className={`rounded-full px-2 py-1 text-xs ${
                      i % 3 === 0 ? 'bg-green-100 text-green-700' : 
                      i % 3 === 1 ? 'bg-yellow-100 text-yellow-700' : 
                      'bg-blue-100 text-blue-700'
                    }`}>
                      {i % 3 === 0 ? 'Entregue' : i % 3 === 1 ? 'Pendente' : 'Em processamento'}
                    </span>
                  </div>
                  <div className="text-right">R$ {(Math.floor(Math.random() * 5000) + 1000).toFixed(2)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
