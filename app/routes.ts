import { type RouteConfig, route, index } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("produtos", "routes/produtos/index.tsx"),
  route("produtos/:id", "routes/produtos/produto.tsx"),
  route("produtos/categorias", "routes/produtos/categorias.tsx"),
  route("produtos/estoque", "routes/produtos/estoque.tsx"),
  route("produtos/fornecedores", "routes/produtos/fornecedores.tsx"),
  route("vendas", "routes/vendas/index.tsx"),
  route("pedidos", "routes/pedidos/index.tsx"),
  route("clientes", "routes/clientes/index.tsx"),
  route("devolucoes", "routes/devolucoes/index.tsx"),
  route("promocoes", "routes/promocoes/index.tsx"),
  route("financeiro", "routes/financeiro/index.tsx"),
  route("financeiro/faturamento", "routes/financeiro/faturamento.tsx"),
  route("financeiro/despesas", "routes/financeiro/despesas.tsx"),
  route("financeiro/relatorios", "routes/financeiro/relatorios.tsx"),
  // Novas rotas de relatórios
  route("relatorios", "routes/relatorios/index.tsx"),
  route("relatorios/vendas", "routes/relatorios/vendas.tsx"),
  route("relatorios/estoque", "routes/relatorios/estoque.tsx"),
  route("relatorios/performance", "routes/relatorios/performance.tsx"),
  // Rotas de configurações
  route("configuracoes", "routes/configuracoes/index.tsx"),
  route("configuracoes/geral", "routes/configuracoes/geral.tsx"),
  route("configuracoes/usuarios", "routes/configuracoes/usuarios.tsx"),
  route("configuracoes/integracoes", "routes/configuracoes/integracoes.tsx"),
] satisfies RouteConfig;
