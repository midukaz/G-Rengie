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

export default function RelatoriosPage() {
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
                  <BreadcrumbPage>Relatórios</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-col gap-4 p-4 pt-0">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Relatórios</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Página Principal de Relatórios</div>
                <p className="text-xs text-muted-foreground">
                  Selecione uma categoria específica no menu lateral
                </p>
              </CardContent>
            </Card>
          </div>
          
          <Tabs defaultValue="vendas" className="space-y-4">
            <TabsList>
              <TabsTrigger value="vendas">Vendas</TabsTrigger>
              <TabsTrigger value="estoque">Estoque</TabsTrigger>
              <TabsTrigger value="performance">Performance</TabsTrigger>
            </TabsList>
            <TabsContent value="vendas" className="space-y-4">
              <h2 className="text-2xl font-bold">Relatórios de Vendas</h2>
              <p>Acesse relatórios detalhados sobre vendas.</p>
            </TabsContent>
            <TabsContent value="estoque" className="space-y-4">
              <h2 className="text-2xl font-bold">Relatórios de Estoque</h2>
              <p>Acesse relatórios detalhados sobre estoque.</p>
            </TabsContent>
            <TabsContent value="performance" className="space-y-4">
              <h2 className="text-2xl font-bold">Relatórios de Performance</h2>
              <p>Acesse relatórios detalhados sobre performance.</p>
            </TabsContent>
          </Tabs>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
