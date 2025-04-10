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
  ArrowDown,
  BarChart2,
  Calendar,
  Download,
  FileCheck,
  FileDown,
  FilePieChart,
  FileText,
  LineChart,
  Printer,
  Share2,
} from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Link } from "react-router"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

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
                  <BreadcrumbLink href="/financeiro">
                    Financeiro
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
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold tracking-tight">Relatórios Financeiros</h1>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Período:</span>
                <Select defaultValue="current-month">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Selecione um período" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="current-month">Mês Atual</SelectItem>
                    <SelectItem value="last-month">Mês Anterior</SelectItem>
                    <SelectItem value="last-quarter">Último Trimestre</SelectItem>
                    <SelectItem value="current-year">Ano Atual</SelectItem>
                    <SelectItem value="custom">Personalizado</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          
          <Tabs defaultValue="financial" className="space-y-4">
            <TabsList>
              <TabsTrigger value="financial">Financeiros</TabsTrigger>
              <TabsTrigger value="operational">Operacionais</TabsTrigger>
              <TabsTrigger value="fiscal">Fiscais</TabsTrigger>
              <TabsTrigger value="custom">Personalizados</TabsTrigger>
            </TabsList>
            <TabsContent value="financial" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="space-y-1">
                    <CardTitle className="flex items-center">
                      <FilePieChart className="mr-2 h-5 w-5 text-muted-foreground" />
                      DRE - Demonstrativo de Resultados
                    </CardTitle>
                    <CardDescription>
                      Análise de receitas, custos e despesas no período.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Receitas Totais: R$ 67.245,89</li>
                      <li>Custos: R$ 24.328,10</li>
                      <li>Despesas: R$ 8.255,32</li>
                      <li>Resultado Operacional: R$ 34.662,47</li>
                    </ul>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">
                      <Printer className="mr-2 h-4 w-4" />
                      Imprimir
                    </Button>
                    <Button size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Baixar PDF
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader className="space-y-1">
                    <CardTitle className="flex items-center">
                      <LineChart className="mr-2 h-5 w-5 text-muted-foreground" />
                      Fluxo de Caixa
                    </CardTitle>
                    <CardDescription>
                      Movimentação de entradas e saídas no período.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Saldo Inicial: R$ 42.823,45</li>
                      <li>Entradas: R$ 75.834,22</li>
                      <li>Saídas: R$ 32.583,42</li>
                      <li>Saldo Final: R$ 86.074,25</li>
                    </ul>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">
                      <Printer className="mr-2 h-4 w-4" />
                      Imprimir
                    </Button>
                    <Button size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Baixar PDF
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader className="space-y-1">
                    <CardTitle className="flex items-center">
                      <BarChart2 className="mr-2 h-5 w-5 text-muted-foreground" />
                      Análise de Despesas
                    </CardTitle>
                    <CardDescription>
                      Distribuição de despesas por categoria.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Pessoal: 45% (R$ 14.662,54)</li>
                      <li>Instalações: 18% (R$ 5.865,02)</li>
                      <li>Serviços: 15% (R$ 4.887,51)</li>
                      <li>Marketing: 12% (R$ 3.910,01)</li>
                      <li>Outros: 10% (R$ 3.258,34)</li>
                    </ul>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">
                      <Printer className="mr-2 h-4 w-4" />
                      Imprimir
                    </Button>
                    <Button size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Baixar PDF
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader className="space-y-1">
                    <CardTitle className="flex items-center">
                      <FileCheck className="mr-2 h-5 w-5 text-muted-foreground" />
                      Balanço Patrimonial
                    </CardTitle>
                    <CardDescription>
                      Situação patrimonial da empresa.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Ativo Total: R$ 423.582,65</li>
                      <li>Passivo Total: R$ 159.830,12</li>
                      <li>Patrimônio Líquido: R$ 263.752,53</li>
                      <li>Índice de Liquidez: 2,65</li>
                    </ul>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">
                      <Printer className="mr-2 h-4 w-4" />
                      Imprimir
                    </Button>
                    <Button size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Baixar PDF
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader className="space-y-1">
                    <CardTitle className="flex items-center">
                      <ArrowDown className="mr-2 h-5 w-5 text-muted-foreground" />
                      Contas a Receber
                    </CardTitle>
                    <CardDescription>
                      Análise de faturas e prazos de recebimento.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    <ul className="list-disc pl-5 space-y-1">
                      <li>A Receber (Total): R$ 85.423,76</li>
                      <li>A Vencer: R$ 75.328,40</li>
                      <li>Vencidas: R$ 10.095,36</li>
                      <li>Prazo Médio: 23 dias</li>
                    </ul>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">
                      <Printer className="mr-2 h-4 w-4" />
                      Imprimir
                    </Button>
                    <Button size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Baixar PDF
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader className="space-y-1">
                    <CardTitle className="flex items-center">
                      <FileDown className="mr-2 h-5 w-5 text-muted-foreground" />
                      Contas a Pagar
                    </CardTitle>
                    <CardDescription>
                      Análise de despesas e prazos de pagamento.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    <ul className="list-disc pl-5 space-y-1">
                      <li>A Pagar (Total): R$ 45.732,50</li>
                      <li>A Vencer: R$ 43.150,12</li>
                      <li>Vencidas: R$ 2.582,38</li>
                      <li>Prazo Médio: 18 dias</li>
                    </ul>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">
                      <Printer className="mr-2 h-4 w-4" />
                      Imprimir
                    </Button>
                    <Button size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Baixar PDF
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="operational" className="text-center p-12">
              <FileText className="w-16 h-16 mx-auto text-muted-foreground" />
              <h3 className="mt-4 text-xl font-medium">Relatórios Operacionais</h3>
              <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
                Gere relatórios operacionais para acompanhar os indicadores de desempenho
                da sua empresa, incluindo análises de produtividade, logística e muito mais.
              </p>
              <Button className="mt-6">
                Abrir Relatórios Operacionais
              </Button>
            </TabsContent>
            <TabsContent value="fiscal" className="text-center p-12">
              <FileText className="w-16 h-16 mx-auto text-muted-foreground" />
              <h3 className="mt-4 text-xl font-medium">Relatórios Fiscais</h3>
              <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
                Acesse relatórios fiscais, incluindo documentos para declarações de impostos,
                relatórios de notas fiscais emitidas e análise tributária.
              </p>
              <Button className="mt-6">
                Abrir Relatórios Fiscais
              </Button>
            </TabsContent>
            <TabsContent value="custom" className="text-center p-12">
              <FileText className="w-16 h-16 mx-auto text-muted-foreground" />
              <h3 className="mt-4 text-xl font-medium">Relatórios Personalizados</h3>
              <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
                Crie relatórios personalizados de acordo com suas necessidades específicas,
                selecionando os dados, períodos e formatos que desejar.
              </p>
              <Button className="mt-6">
                Criar Novo Relatório
              </Button>
            </TabsContent>
          </Tabs>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
} 