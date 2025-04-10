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
import { ArrowLeft, Save, Trash2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { useParams } from "react-router"

export default function ProdutoPage() {
  const params = useParams();
  const produtoId = params.id;
  
  // Dados simulados do produto
  const produto = {
    id: Number(produtoId),
    nome: `Produto ${produtoId}`,
    codigo: `SKU-${10000 + Number(produtoId)}`,
    descricao: "Este produto é um exemplo de descrição detalhada que poderia incluir especificações, características e benefícios.",
    categoria: "Eletrônicos",
    preco: (Math.random() * 1000 + 50).toFixed(2),
    precoCusto: (Math.random() * 500 + 30).toFixed(2),
    estoque: Math.floor(Math.random() * 200),
    estoqueMinimo: 10,
    status: "Ativo",
    fornecedor: "Fornecedor XYZ",
    imagens: [
      "https://placeholder.com/350",
      "https://placeholder.com/350",
      "https://placeholder.com/350"
    ],
    dataRegistro: new Date().toLocaleDateString(),
    ultimaAtualizacao: new Date().toLocaleDateString()
  };

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
                  <BreadcrumbLink href="/produtos">
                    Produtos
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Produto {produtoId}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" asChild>
                <a href="/produtos">
                  <ArrowLeft className="h-4 w-4" />
                </a>
              </Button>
              <h1 className="text-2xl font-bold tracking-tight">
                {produto.nome}
              </h1>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="text-red-600 hover:bg-red-50 hover:text-red-700">
                <Trash2 className="mr-2 h-4 w-4" /> Excluir
              </Button>
              <Button>
                <Save className="mr-2 h-4 w-4" /> Salvar Alterações
              </Button>
            </div>
          </div>
          
          <Tabs defaultValue="informacoes" className="w-full">
            <TabsList className="mb-4 grid w-full grid-cols-4">
              <TabsTrigger value="informacoes">Informações</TabsTrigger>
              <TabsTrigger value="estoque">Estoque & Preços</TabsTrigger>
              <TabsTrigger value="imagens">Imagens</TabsTrigger>
              <TabsTrigger value="historico">Histórico</TabsTrigger>
            </TabsList>
            
            <TabsContent value="informacoes" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Informações Básicas</CardTitle>
                  <CardDescription>
                    Informações gerais do produto
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="nome">Nome do Produto</Label>
                      <Input id="nome" defaultValue={produto.nome} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="codigo">Código (SKU)</Label>
                      <Input id="codigo" defaultValue={produto.codigo} />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="descricao">Descrição</Label>
                    <Textarea 
                      id="descricao" 
                      rows={5}
                      defaultValue={produto.descricao}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="categoria">Categoria</Label>
                      <Select defaultValue={produto.categoria}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione uma categoria" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Eletrônicos">Eletrônicos</SelectItem>
                          <SelectItem value="Vestuário">Vestuário</SelectItem>
                          <SelectItem value="Móveis">Móveis</SelectItem>
                          <SelectItem value="Alimentos">Alimentos</SelectItem>
                          <SelectItem value="Brinquedos">Brinquedos</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="fornecedor">Fornecedor</Label>
                      <Select defaultValue={produto.fornecedor}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione um fornecedor" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Fornecedor XYZ">Fornecedor XYZ</SelectItem>
                          <SelectItem value="Fornecedor ABC">Fornecedor ABC</SelectItem>
                          <SelectItem value="Fornecedor 123">Fornecedor 123</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="status">Status</Label>
                      <Select defaultValue={produto.status}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione um status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Ativo">Ativo</SelectItem>
                          <SelectItem value="Inativo">Inativo</SelectItem>
                          <SelectItem value="Em promoção">Em promoção</SelectItem>
                          <SelectItem value="Esgotado">Esgotado</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="estoque" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Estoque e Preços</CardTitle>
                  <CardDescription>
                    Informações de estoque e preços do produto
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <div className="space-y-2">
                      <Label htmlFor="preco">Preço de Venda (R$)</Label>
                      <Input 
                        id="preco" 
                        type="number" 
                        step="0.01" 
                        defaultValue={produto.preco}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="preco-custo">Preço de Custo (R$)</Label>
                      <Input 
                        id="preco-custo" 
                        type="number" 
                        step="0.01" 
                        defaultValue={produto.precoCusto}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="margem">Margem (%)</Label>
                      <Input 
                        id="margem" 
                        type="number"
                        step="0.01"
                        defaultValue={((Number(produto.preco) / Number(produto.precoCusto) - 1) * 100).toFixed(2)}
                        disabled
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="estoque">Estoque Atual</Label>
                      <Input 
                        id="estoque" 
                        type="number" 
                        defaultValue={produto.estoque}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="estoque-minimo">Estoque Mínimo</Label>
                      <Input 
                        id="estoque-minimo" 
                        type="number" 
                        defaultValue={produto.estoqueMinimo}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="imagens" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Imagens do Produto</CardTitle>
                  <CardDescription>
                    Adicione ou remova imagens do produto
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    {produto.imagens.map((img, idx) => (
                      <div key={idx} className="relative rounded-lg border bg-muted/50 h-48 flex items-center justify-center">
                        <div className="text-muted-foreground">Imagem {idx + 1}</div>
                      </div>
                    ))}
                    <div className="relative rounded-lg border border-dashed h-48 flex flex-col items-center justify-center cursor-pointer hover:bg-muted/30">
                      <div className="text-muted-foreground flex flex-col items-center">
                        <span className="text-xl">+</span>
                        <span>Adicionar imagem</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="historico" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Histórico do Produto</CardTitle>
                  <CardDescription>
                    Registro de alterações e movimentações do produto
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b pb-4">
                      <div>
                        <div className="font-medium">Data de Cadastro</div>
                        <div className="text-sm text-muted-foreground">{produto.dataRegistro}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">Usuário</div>
                        <div className="text-sm text-muted-foreground">Admin</div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center border-b pb-4">
                      <div>
                        <div className="font-medium">Última Atualização</div>
                        <div className="text-sm text-muted-foreground">{produto.ultimaAtualizacao}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">Usuário</div>
                        <div className="text-sm text-muted-foreground">Admin</div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center border-b pb-4">
                      <div>
                        <div className="font-medium">Última Venda</div>
                        <div className="text-sm text-muted-foreground">12/05/2023</div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">Quantidade</div>
                        <div className="text-sm text-muted-foreground">5 unidades</div>
                      </div>
                    </div>
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