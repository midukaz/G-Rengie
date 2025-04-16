import { Save, Building, Globe, Mail, Phone, MapPin } from "lucide-react"
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select"
import { Textarea } from "../../components/ui/textarea"
import { Switch } from "../../components/ui/switch"

export default function ConfiguracoesGeralPage() {
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
                  <BreadcrumbPage>Geral</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-col gap-4 p-4 pt-0">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold tracking-tight">Configurações Gerais</h2>
            <Button>
              <Save className="mr-2 h-4 w-4" /> Salvar Alterações
            </Button>
          </div>
          
          <Tabs defaultValue="empresa" className="space-y-4">
            <TabsList>
              <TabsTrigger value="empresa">Empresa</TabsTrigger>
              <TabsTrigger value="sistema">Sistema</TabsTrigger>
              <TabsTrigger value="notificacoes">Notificações</TabsTrigger>
              <TabsTrigger value="aparencia">Aparência</TabsTrigger>
            </TabsList>
            
            <TabsContent value="empresa" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Informações da Empresa</CardTitle>
                  <CardDescription>
                    Configure as informações básicas da sua empresa
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="nome-empresa">Nome da Empresa</Label>
                      <div className="flex">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                          <Building className="h-4 w-4" />
                        </span>
                        <Input id="nome-empresa" defaultValue="Minha Empresa Ltda." className="rounded-l-none" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="cnpj">CNPJ</Label>
                      <Input id="cnpj" defaultValue="12.345.678/0001-90" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail</Label>
                      <div className="flex">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                          <Mail className="h-4 w-4" />
                        </span>
                        <Input id="email" type="email" defaultValue="contato@minhaempresa.com" className="rounded-l-none" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="telefone">Telefone</Label>
                      <div className="flex">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                          <Phone className="h-4 w-4" />
                        </span>
                        <Input id="telefone" defaultValue="(11) 1234-5678" className="rounded-l-none" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="website">Website</Label>
                      <div className="flex">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                          <Globe className="h-4 w-4" />
                        </span>
                        <Input id="website" defaultValue="https://www.minhaempresa.com" className="rounded-l-none" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="pais">País</Label>
                      <Select defaultValue="brasil">
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione um país" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="brasil">Brasil</SelectItem>
                          <SelectItem value="portugal">Portugal</SelectItem>
                          <SelectItem value="eua">Estados Unidos</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="endereco">Endereço</Label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                        <MapPin className="h-4 w-4" />
                      </span>
                      <Input id="endereco" defaultValue="Av. Paulista, 1000" className="rounded-l-none" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="cidade">Cidade</Label>
                      <Input id="cidade" defaultValue="São Paulo" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="estado">Estado</Label>
                      <Input id="estado" defaultValue="SP" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="cep">CEP</Label>
                      <Input id="cep" defaultValue="01311-000" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button>
                    <Save className="mr-2 h-4 w-4" /> Salvar Informações
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="sistema" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Configurações do Sistema</CardTitle>
                  <CardDescription>
                    Personalize as configurações gerais do sistema
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="idioma">Idioma Padrão</Label>
                    <Select defaultValue="pt-br">
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione um idioma" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pt-br">Português (Brasil)</SelectItem>
                        <SelectItem value="en">Inglês</SelectItem>
                        <SelectItem value="es">Espanhol</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="fuso-horario">Fuso Horário</Label>
                    <Select defaultValue="america-sao_paulo">
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione um fuso horário" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="america-sao_paulo">América/São Paulo (GMT-3)</SelectItem>
                        <SelectItem value="america-new_york">América/Nova York (GMT-4)</SelectItem>
                        <SelectItem value="europe-lisbon">Europa/Lisboa (GMT+1)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="formato-data">Formato de Data</Label>
                    <Select defaultValue="dd-mm-yyyy">
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione um formato de data" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dd-mm-yyyy">DD/MM/YYYY</SelectItem>
                        <SelectItem value="mm-dd-yyyy">MM/DD/YYYY</SelectItem>
                        <SelectItem value="yyyy-mm-dd">YYYY-MM-DD</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="formato-moeda">Formato de Moeda</Label>
                    <Select defaultValue="brl">
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione um formato de moeda" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="brl">Real (R$)</SelectItem>
                        <SelectItem value="usd">Dólar (US$)</SelectItem>
                        <SelectItem value="eur">Euro (€)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button>
                    <Save className="mr-2 h-4 w-4" /> Salvar Configurações
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="notificacoes" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Configurações de Notificações</CardTitle>
                  <CardDescription>
                    Gerencie as notificações do sistema
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-medium">Notificações por E-mail</h4>
                      <p className="text-sm text-muted-foreground">Receba notificações importantes por e-mail</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <Separator />
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-medium">Notificações no Sistema</h4>
                      <p className="text-sm text-muted-foreground">Receba notificações dentro do sistema</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <Separator />
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-medium">Alertas de Estoque Baixo</h4>
                      <p className="text-sm text-muted-foreground">Receba alertas quando o estoque estiver abaixo do mínimo</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <Separator />
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-medium">Relatórios Semanais</h4>
                      <p className="text-sm text-muted-foreground">Receba relatórios semanais de desempenho</p>
                    </div>
                    <Switch />
                  </div>
                  <Separator />
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-medium">Novos Pedidos</h4>
                      <p className="text-sm text-muted-foreground">Receba notificações para novos pedidos</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button>
                    <Save className="mr-2 h-4 w-4" /> Salvar Preferências
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="aparencia" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Configurações de Aparência</CardTitle>
                  <CardDescription>
                    Personalize a aparência do sistema
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Tema</Label>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="border rounded-md p-4 cursor-pointer bg-white text-center hover:border-blue-500">
                        <div className="h-10 bg-white border rounded-md mb-2"></div>
                        <span className="text-sm">Claro</span>
                      </div>
                      <div className="border rounded-md p-4 cursor-pointer bg-gray-900 text-white text-center hover:border-blue-500">
                        <div className="h-10 bg-gray-800 border border-gray-700 rounded-md mb-2"></div>
                        <span className="text-sm">Escuro</span>
                      </div>
                      <div className="border rounded-md p-4 cursor-pointer bg-gradient-to-b from-white to-gray-900 text-center hover:border-blue-500">
                        <div className="h-10 bg-gradient-to-r from-white to-gray-800 border rounded-md mb-2"></div>
                        <span className="text-sm">Sistema</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Densidade</Label>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="border rounded-md p-4 cursor-pointer text-center hover:border-blue-500">
                        <div className="flex flex-col space-y-1 mb-2">
                          <div className="h-2 bg-gray-200 rounded-md"></div>
                          <div className="h-2 bg-gray-200 rounded-md"></div>
                          <div className="h-2 bg-gray-200 rounded-md"></div>
                        </div>
                        <span className="text-sm">Compacto</span>
                      </div>
                      <div className="border rounded-md p-4 cursor-pointer text-center hover:border-blue-500 border-blue-500">
                        <div className="flex flex-col space-y-2 mb-2">
                          <div className="h-3 bg-gray-200 rounded-md"></div>
                          <div className="h-3 bg-gray-200 rounded-md"></div>
                          <div className="h-3 bg-gray-200 rounded-md"></div>
                        </div>
                        <span className="text-sm">Padrão</span>
                      </div>
                      <div className="border rounded-md p-4 cursor-pointer text-center hover:border-blue-500">
                        <div className="flex flex-col space-y-3 mb-2">
                          <div className="h-4 bg-gray-200 rounded-md"></div>
                          <div className="h-4 bg-gray-200 rounded-md"></div>
                          <div className="h-4 bg-gray-200 rounded-md"></div>
                        </div>
                        <span className="text-sm">Confortável</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Cor Principal</Label>
                    <div className="grid grid-cols-6 gap-4">
                      <div className="h-10 rounded-md bg-blue-500 cursor-pointer border-2 border-blue-600"></div>
                      <div className="h-10 rounded-md bg-green-500 cursor-pointer"></div>
                      <div className="h-10 rounded-md bg-purple-500 cursor-pointer"></div>
                      <div className="h-10 rounded-md bg-red-500 cursor-pointer"></div>
                      <div className="h-10 rounded-md bg-orange-500 cursor-pointer"></div>
                      <div className="h-10 rounded-md bg-gray-500 cursor-pointer"></div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button>
                    <Save className="mr-2 h-4 w-4" /> Salvar Aparência
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
