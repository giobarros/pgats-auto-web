
import ProductsPage from '../pages/products.page';

describe('Produtos', () => {

  beforeEach(() => {
    ProductsPage.visitar();
  });

  it('TC8 - Deve visualizar os detalhes de um produto', () => {
    ProductsPage.verificarPaginaProdutos();
    ProductsPage.abrirPrimeiroProduto();
    ProductsPage.verificarDetalhesPrimeiroProduto();
  });

  it('TC9 - Deve pesquisar produtos e visualizar os resultados', () => {
    ProductsPage.verificarPaginaProdutos();
    ProductsPage.pesquisarProduto('dress');
    ProductsPage.verificarResultadoPesquisa();
  });

});