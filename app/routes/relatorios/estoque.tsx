import { Package, TrendingDown, TrendingUp } from "lucide-react"
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

export default function RelatoriosEstoquePage() {
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
                  <BreadcrumbPage>Estoque</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-col gap-4 p-4 pt-0">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold tracking-tight">Relatórios de Estoque</h2>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total em Estoque</CardTitle>
                <Package className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1.245 itens</div>
                <p className="text-xs text-muted-foreground">
                  Valor total: R$ 156.789,00
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Produtos em Baixa</CardTitle>
                <TrendingDown className="h-4 w-4 text-red-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">28 itens</div>
                <p className="text-xs text-muted-foreground">
                  Abaixo do estoque mínimo
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Produtos em Alta</CardTitle>
                <TrendingUp className="h-4 w-4 text-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">42 itens</div>
                <p className="text-xs text-muted-foreground">
                  Acima do estoque máximo
                </p>
              </CardContent>
            </Card>
          </div>
          
          <Tabs defaultValue="geral" className="space-y-4">
            <TabsList>
              <TabsTrigger value="geral">Visão Geral</TabsTrigger>
              <TabsTrigger value="categorias">Por Categorias</TabsTrigger>
              <TabsTrigger value="fornecedores">Por Fornecedores</TabsTrigger>
              <TabsTrigger value="movimentacao">Movimentação</TabsTrigger>
            </TabsList>
            <TabsContent value="geral" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Visão Geral do Estoque</CardTitle>
                  <CardDescription>
                    Análise completa do estoque atual
                  </CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <div className="h-[300px] w-full bg-muted/20 flex items-center justify-center">
                    Gráfico de Visão Geral do Estoque
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="categorias" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Estoque por Categorias</CardTitle>
                  <CardDescription>
                    Distribuição do estoque por categorias de produtos
                  </CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <div className="h-[300px] w-full bg-muted/20 flex items-center justify-center">
                    Gráfico de Estoque por Categorias
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="fornecedores" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Estoque por Fornecedores</CardTitle>
                  <CardDescription>
                    Distribuição do estoque por fornecedores
                  </CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <div className="h-[300px] w-full bg-muted/20 flex items-center justify-center">
                    Gráfico de Estoque por Fornecedores
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="movimentacao" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Movimentação de Estoque</CardTitle>
                  <CardDescription>
                    Entradas e saídas de produtos no estoque
                  </CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <div className="h-[300px] w-full bg-muted/20 flex items-center justify-center">
                    Gráfico de Movimentação de Estoque
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
