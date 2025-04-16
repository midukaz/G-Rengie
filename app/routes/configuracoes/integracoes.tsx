import { Link as LinkIcon, Plus, MoreHorizontal, ExternalLink, Check, X, RefreshCw } from "lucide-react"
import { AppSidebar } from "../../components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../components/ui/breadcrumb"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { Separator } from "../../components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "../../components/ui/sidebar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table"
import { Badge } from "../../components/ui/badge"
import { Switch } from "../../components/ui/switch"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu"

// Dados de exemplo para integrações
const integracoes = [
  {
    id: 1,
    nome: "API de Pagamentos",
    tipo: "API REST",
    provedor: "PagSeguro",
    status: "Ativo",
    ultimaSincronizacao: "Hoje, 10:30",
    chaveApi: "pag_api_********",
    logo: "/assets/pagseguro-logo.png"
  },
  {
    id: 2,
    nome: "Integração Contábil",
    tipo: "API REST",
    provedor: "Contabilizei",
    status: "Ativo",
    ultimaSincronizacao: "Ontem, 23:00",
    chaveApi: "cont_api_********",
    logo: "/assets/contabilizei-logo.png"
  },
  {
    id: 3,
    nome: "Transportadora",
    tipo: "Webhook",
    provedor: "Correios",
    status: "Inativo",
    ultimaSincronizacao: "15/04/2025, 14:45",
    chaveApi: "correios_api_********",
    logo: "/assets/correios-logo.png"
  },
  {
    id: 4,
    nome: "CRM",
    tipo: "API REST",
    provedor: "Pipedrive",
    status: "Ativo",
    ultimaSincronizacao: "Hoje, 08:15",
    chaveApi: "pipe_api_********",
    logo: "/assets/pipedrive-logo.png"
  },
  {
    id: 5,
    nome: "E-commerce",
    tipo: "API REST",
    provedor: "Shopify",
    status: "Ativo",
    ultimaSincronizacao: "Hoje, 09:00",
    chaveApi: "shop_api_********",
    logo: "/assets/shopify-logo.png"
  }
];

// Dados de exemplo para webhooks
const webhooks = [
  {
    id: 1,
    evento: "Novo Pedido",
    endpoint: "https://webhook.site/123456",
    status: "Ativo",
    ultimaExecucao: "Hoje, 11:30",
    sucesso: true
  },
  {
    id: 2,
    evento: "Pagamento Aprovado",
    endpoint: "https://webhook.site/234567",
    status: "Ativo",
    ultimaExecucao: "Hoje, 10:45",
    sucesso: true
  },
  {
    id: 3,
    evento: "Produto Atualizado",
    endpoint: "https://webhook.site/345678",
    status: "Inativo",
    ultimaExecucao: "Ontem, 15:20",
    sucesso: false
  },
  {
    id: 4,
    evento: "Estoque Baixo",
    endpoint: "https://webhook.site/456789",
    status: "Ativo",
    ultimaExecucao: "Hoje, 09:10",
    sucesso: true
  }
];

export default function ConfiguracoesIntegracoesPage() {
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
                  <BreadcrumbLink href="/configuracoes">
                    Configurações
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Integrações</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-col gap-4 p-4 pt-0">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold tracking-tight">Integrações</h2>
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Nova Integração
            </Button>
          </div>
          
          <Tabs defaultValue="apis" className="space-y-4">
            <TabsList>
              <TabsTrigger value="apis">APIs e Serviços</TabsTrigger>
              <TabsTrigger value="webhooks">Webhooks</TabsTrigger>
              <TabsTrigger value="importacao">Importação/Exportação</TabsTrigger>
            </TabsList>
            
            <TabsContent value="apis" className="space-y-4">
              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[50px]">ID</TableHead>
                        <TableHead>Integração</TableHead>
                        <TableHead>Tipo</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Última Sincronização</TableHead>
                        <TableHead className="w-[100px]">Ações</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {integracoes.map((integracao) => (
                        <TableRow key={integracao.id}>
                          <TableCell className="font-medium">{integracao.id}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <div className="h-8 w-8 rounded-md bg-gray-100 flex items-center justify-center">
                                <LinkIcon className="h-4 w-4 text-gray-500" />
                              </div>
                              <div>
                                <div className="font-medium">{integracao.nome}</div>
                                <div className="text-xs text-muted-foreground">{integracao.provedor}</div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>{integracao.tipo}</TableCell>
                          <TableCell>
                            <Badge variant={integracao.status === "Ativo" ? "default" : "secondary"}>
                              {integracao.status}
                            </Badge>
                          </TableCell>
                          <TableCell>{integracao.ultimaSincronizacao}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Button variant="ghost" size="icon" title="Sincronizar">
                                <RefreshCw className="h-4 w-4" />
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
                                  <DropdownMenuItem>Editar</DropdownMenuItem>
                                  <DropdownMenuItem>Ver Detalhes</DropdownMenuItem>
                                  <DropdownMenuItem>Testar Conexão</DropdownMenuItem>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem className={integracao.status === "Ativo" ? "text-red-600" : "text-green-600"}>
                                    {integracao.status === "Ativo" ? "Desativar" : "Ativar"}
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Adicionar Nova Integração</CardTitle>
                  <CardDescription>
                    Configure uma nova integração com serviços externos
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="nome-integracao">Nome da Integração</Label>
                      <Input id="nome-integracao" placeholder="Ex: API de Pagamentos" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="provedor">Provedor</Label>
                      <Input id="provedor" placeholder="Ex: PagSeguro" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="tipo-integracao">Tipo</Label>
                      <Input id="tipo-integracao" placeholder="Ex: API REST, Webhook, etc." />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="endpoint">Endpoint</Label>
                      <Input id="endpoint" placeholder="Ex: https://api.provedor.com/v1" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="chave-api">Chave API</Label>
                      <Input id="chave-api" type="password" placeholder="Sua chave API secreta" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="token">Token</Label>
                      <Input id="token" type="password" placeholder="Seu token de acesso" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="descricao">Descrição</Label>
                    <Input id="descricao" placeholder="Descrição da integração" />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Switch id="status" defaultChecked />
                    <Label htmlFor="status">Ativar integração imediatamente</Label>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button>Adicionar Integração</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="webhooks" className="space-y-4">
              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[50px]">ID</TableHead>
                        <TableHead>Evento</TableHead>
                        <TableHead>Endpoint</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Última Execução</TableHead>
                        <TableHead>Resultado</TableHead>
                        <TableHead className="w-[100px]">Ações</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {webhooks.map((webhook) => (
                        <TableRow key={webhook.id}>
                          <TableCell className="font-medium">{webhook.id}</TableCell>
                          <TableCell>{webhook.evento}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-1">
                              <span className="text-xs truncate max-w-[150px]">{webhook.endpoint}</span>
                              <Button variant="ghost" size="icon" title="Abrir Link" className="h-6 w-6">
                                <ExternalLink className="h-3 w-3" />
                              </Button>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge variant={webhook.status === "Ativo" ? "default" : "secondary"}>
                              {webhook.status}
                            </Badge>
                          </TableCell>
                          <TableCell>{webhook.ultimaExecucao}</TableCell>
                          <TableCell>
                            {webhook.sucesso ? (
                              <div className="flex items-center">
                                <Check className="h-4 w-4 text-green-500 mr-1" />
                                <span className="text-xs text-green-500">Sucesso</span>
                              </div>
                            ) : (
                              <div className="flex items-center">
                                <X className="h-4 w-4 text-red-500 mr-1" />
                                <span className="text-xs text-red-500">Falha</span>
                              </div>
                            )}
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Button variant="ghost" size="icon" title="Testar Webhook">
                                <RefreshCw className="h-4 w-4" />
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
                                  <DropdownMenuItem>Editar</DropdownMenuItem>
                                  <DropdownMenuItem>Ver Logs</DropdownMenuItem>
                                  <DropdownMenuItem>Testar Webhook</DropdownMenuItem>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem className={webhook.status === "Ativo" ? "text-red-600" : "text-green-600"}>
                                    {webhook.status === "Ativo" ? "Desativar" : "Ativar"}
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Adicionar Novo Webhook</CardTitle>
                  <CardDescription>
                    Configure webhooks para notificar sistemas externos sobre eventos
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="evento">Evento</Label>
                      <Input id="evento" placeholder="Ex: Novo Pedido" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="endpoint-webhook">Endpoint URL</Label>
                      <Input id="endpoint-webhook" placeholder="Ex: https://webhook.site/123456" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="descricao-webhook">Descrição</Label>
                    <Input id="descricao-webhook" placeholder="Descrição do webhook" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="payload">Payload de Exemplo</Label>
                    <div className="bg-gray-100 p-2 rounded-md text-xs font-mono">
                      {`{
  "event": "new_order",
  "order_id": 12345,
  "customer": {
    "id": 789,
    "name": "João Silva"
  },
  "total": 199.90,
  "timestamp": "2025-04-16T14:30:00Z"
}`}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Switch id="status-webhook" defaultChecked />
                    <Label htmlFor="status-webhook">Ativar webhook imediatamente</Label>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button>Adicionar Webhook</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="importacao" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Importação de Dados</CardTitle>
                    <CardDescription>
                      Importe dados de arquivos CSV, Excel ou JSON
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="tipo-importacao">Tipo de Dados</Label>
                      <div className="grid grid-cols-2 gap-2">
                        <Button variant="outline" className="justify-start">
                          Produtos
                        </Button>
                        <Button variant="outline" className="justify-start">
                          Clientes
                        </Button>
                        <Button variant="outline" className="justify-start">
                          Pedidos
                        </Button>
                        <Button variant="outline" className="justify-start">
                          Fornecedores
                        </Button>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="arquivo">Arquivo</Label>
                      <div className="border-2 border-dashed rounded-md p-6 text-center">
                        <div className="flex flex-col items-center">
                          <svg
                            className="mx-auto h-12 w-12 text-gray-400"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                            aria-hidden="true"
                          >
                            <path
                              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <div className="mt-2 text-sm text-gray-500">
                            <label
                              htmlFor="file-upload"
                              className="relative cursor-pointer rounded-md font-medium text-blue-600 hover:text-blue-500"
                            >
                              <span>Arraste e solte um arquivo</span>
                              <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                            </label>
                            <p className="pl-1">ou clique para selecionar</p>
                          </div>
                          <p className="text-xs text-gray-500">
                            CSV, Excel ou JSON até 10MB
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Switch id="primeira-linha" defaultChecked />
                        <Label htmlFor="primeira-linha">Primeira linha contém cabeçalhos</Label>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Switch id="substituir" />
                        <Label htmlFor="substituir">Substituir dados existentes</Label>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end">
                    <Button>Importar Dados</Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Exportação de Dados</CardTitle>
                    <CardDescription>
                      Exporte dados do sistema para arquivos
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="tipo-exportacao">Tipo de Dados</Label>
                      <div className="grid grid-cols-2 gap-2">
                        <Button variant="outline" className="justify-start">
                          Produtos
                        </Button>
                        <Button variant="outline" className="justify-start">
                          Clientes
                        </Button>
                        <Button variant="outline" className="justify-start">
                          Pedidos
                        </Button>
                        <Button variant="outline" className="justify-start">
                          Relatórios
                        </Button>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="formato">Formato</Label>
                      <div className="grid grid-cols-3 gap-2">
                        <Button variant="outline" className="justify-start">
                          CSV
                        </Button>
                        <Button variant="outline" className="justify-start">
                          Excel
                        </Button>
                        <Button variant="outline" className="justify-start">
                          JSON
                        </Button>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="periodo">Período</Label>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="data-inicio" className="text-xs">Data Início</Label>
                          <Input id="data-inicio" type="date" />
                        </div>
                        <div>
                          <Label htmlFor="data-fim" className="text-xs">Data Fim</Label>
                          <Input id="data-fim" type="date" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Switch id="incluir-cabecalhos" defaultChecked />
                        <Label htmlFor="incluir-cabecalhos">Incluir cabeçalhos</Label>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Switch id="compactar" />
                        <Label htmlFor="compactar">Compactar arquivo (ZIP)</Label>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end">
                    <Button>Exportar Dados</Button>
                  </CardFooter>
                </Card>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle>Histórico de Importações/Exportações</CardTitle>
                  <CardDescription>
                    Últimas operações de importação e exportação
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Data/Hora</TableHead>
                        <TableHead>Operação</TableHead>
                        <TableHead>Tipo</TableHead>
                        <TableHead>Arquivo</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Usuário</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>16/04/2025, 09:30</TableCell>
                        <TableCell>Importação</TableCell>
                        <TableCell>Produtos</TableCell>
                        <TableCell>produtos_abril.csv</TableCell>
                        <TableCell>
                          <Badge variant="default">Concluído</Badge>
                        </TableCell>
                        <TableCell>João Silva</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>15/04/2025, 16:45</TableCell>
                        <TableCell>Exportação</TableCell>
                        <TableCell>Relatórios</TableCell>
                        <TableCell>relatorio_vendas_q1.xlsx</TableCell>
                        <TableCell>
                          <Badge variant="default">Concluído</Badge>
                        </TableCell>
                        <TableCell>Maria Oliveira</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>14/04/2025, 11:20</TableCell>
                        <TableCell>Importação</TableCell>
                        <TableCell>Clientes</TableCell>
                        <TableCell>novos_clientes.csv</TableCell>
                        <TableCell>
                          <Badge variant="destructive">Falha</Badge>
                        </TableCell>
                        <TableCell>Pedro Santos</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>10/04/2025, 14:15</TableCell>
                        <TableCell>Exportação</TableCell>
                        <TableCell>Pedidos</TableCell>
                        <TableCell>pedidos_marco.json</TableCell>
                        <TableCell>
                          <Badge variant="default">Concluído</Badge>
                        </TableCell>
                        <TableCell>João Silva</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
