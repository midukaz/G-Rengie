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
  Calendar,
  Check,
  CreditCard,
  Download,
  Edit,
  Eye,
  FileText,
  Filter,
  MoreHorizontal,
  Plus,
  Search,
  Trash2,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Link } from "react-router"
import { Card, CardContent } from "@/components/ui/card"
import * as React from "react"

// Dados de despesas para demonstração
const despesas = Array.from({ length: 10 }).map((_, i) => ({
  id: i + 1,
  descricao: [
    'Aluguel Escritório', 
    'Folha de Pagamento', 
    'Fornecedor ABC', 
    'Energia Elétrica',
    'Internet e Telefonia',
    'Compra de Equipamentos',
    'Marketing Digital',
    'Manutenção Predial',
    'Material de Escritório',
    'Impostos e Taxas'
  ][i],
  categoria: [
    'Instalações', 
    'Pessoal', 
    'Fornecedores', 
    'Serviços',
    'Serviços',
    'Equipamentos',
    'Marketing',
    'Manutenção',
    'Suprimentos',
    'Impostos'
  ][i],
  data: new Date(Date.now() - Math.floor(Math.random() * 30) * 86400000).toLocaleDateString(),
  vencimento: new Date(Date.now() + Math.floor(Math.random() * 30) * 86400000).toLocaleDateString(),
  valor: (Math.random() * 5000 + 100).toFixed(2),
  status: ['Pago', 'Pendente', 'Aprovado', 'Pago', 'Pendente', 'Pago', 'Aprovado', 'Pago', 'Pendente', 'Aprovado'][i],
  formaPagamento: ['Boleto', 'Transferência', 'Cartão de Crédito', 'Débito Automático', 'Pix', 'Dinheiro', 'Cheque', 'Boleto', 'Transferência', 'Cartão de Crédito'][i % 7],
  numeroDoc: i === 0 ? '' : `DOC-${(1000 + i)}`
}));

export default function DespesasPage() {
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
                  <BreadcrumbPage>Despesas</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold tracking-tight">Gestão de Despesas</h1>
            <div className="flex items-center gap-2">
              <Button variant="outline">
                <Calendar className="mr-2 h-4 w-4" /> Filtrar por Período
              </Button>
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" /> Exportar
              </Button>
              <Button>
                <Plus className="mr-2 h-4 w-4" /> Nova Despesa
              </Button>
            </div>
          </div>
          
          <div className="grid gap-4 md:grid-cols-4">
            <Card>
              <CardContent className="p-4">
                <div className="text-sm font-medium text-muted-foreground">Despesas Totais (Mês)</div>
                <div className="text-2xl font-bold">R$ 32.583,42</div>
                <div className="text-xs text-muted-foreground">42 despesas registradas</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-sm font-medium text-muted-foreground">Pagas</div>
                <div className="text-2xl font-bold">R$ 18.432,70</div>
                <div className="text-xs text-green-600">24 despesas</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-sm font-medium text-muted-foreground">Pendentes</div>
                <div className="text-2xl font-bold">R$ 10.875,92</div>
                <div className="text-xs text-amber-600">12 despesas</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-sm font-medium text-muted-foreground">Aprovadas</div>
                <div className="text-2xl font-bold">R$ 3.274,80</div>
                <div className="text-xs text-muted-foreground">6 despesas a pagar</div>
              </CardContent>
            </Card>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar despesas por descrição, categoria..."
                className="pl-8"
              />
            </div>
            <Button variant="outline" size="icon" title="Filtrar">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[80px]">ID</TableHead>
                  <TableHead>Descrição</TableHead>
                  <TableHead>Categoria</TableHead>
                  <TableHead>Data</TableHead>
                  <TableHead>Vencimento</TableHead>
                  <TableHead>Forma de Pagamento</TableHead>
                  <TableHead className="text-right">Valor</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="w-[100px]">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {despesas.map((despesa) => (
                  <TableRow key={despesa.id}>
                    <TableCell className="font-medium">{despesa.id}</TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="font-medium">{despesa.descricao}</span>
                        {despesa.numeroDoc && (
                          <span className="text-xs text-muted-foreground">{despesa.numeroDoc}</span>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>{despesa.categoria}</TableCell>
                    <TableCell>{despesa.data}</TableCell>
                    <TableCell>{despesa.vencimento}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <CreditCard className="h-4 w-4 text-muted-foreground" />
                        <span>{despesa.formaPagamento}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right font-medium text-red-600">
                      - R$ {despesa.valor}
                    </TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex rounded-full px-2 py-1 text-xs font-medium 
                          ${despesa.status === 'Pago' ? 'bg-green-100 text-green-700' : 
                          despesa.status === 'Pendente' ? 'bg-amber-100 text-amber-700' :
                          'bg-blue-100 text-blue-700'}`
                        }
                      >
                        {despesa.status}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Button asChild variant="ghost" size="icon" title="Ver detalhes">
                          <Link to={`/financeiro/despesas/${despesa.id}`}>
                            <Eye className="h-4 w-4" />
                          </Link>
                        </Button>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Ações</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Ações</DropdownMenuLabel>
                            <DropdownMenuItem>
                              <Eye className="mr-2 h-4 w-4" />
                              Ver Detalhes
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Edit className="mr-2 h-4 w-4" />
                              Editar
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <FileText className="mr-2 h-4 w-4" />
                              Anexar Comprovante
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            {despesa.status === 'Pendente' && (
                              <DropdownMenuItem>
                                <Check className="mr-2 h-4 w-4" />
                                Aprovar
                              </DropdownMenuItem>
                            )}
                            {despesa.status === 'Aprovado' && (
                              <DropdownMenuItem>
                                <Check className="mr-2 h-4 w-4" />
                                Marcar como Pago
                              </DropdownMenuItem>
                            )}
                            <DropdownMenuItem className="text-red-600">
                              <Trash2 className="mr-2 h-4 w-4" />
                              Excluir
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              Mostrando <strong>1</strong> a <strong>10</strong> de <strong>42</strong> despesas
            </div>
            
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" disabled>
                Anterior
              </Button>
              <Button variant="outline" size="sm">
                Próximo
              </Button>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
} 