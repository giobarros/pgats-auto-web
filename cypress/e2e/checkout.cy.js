
import SignupPage from '../pages/signup.page';
import LoginPage from '../pages/login.page';
import ProductsPage from '../pages/products.page';
import CartPage from '../pages/cart.page';
import CheckoutPage from '../pages/checkout.page';

import {
  criarUsuario,
  criarDadosPagamento
} from '../factories/user.factory';

describe('Fluxo de compra', () => {

  function adicionarProdutosAoCarrinho() {
    ProductsPage.visitar();

    ProductsPage.adicionarProdutoAoCarrinho(1);
    ProductsPage.continuarComprando();

    ProductsPage.adicionarProdutoAoCarrinho(3);
    ProductsPage.continuarComprando();

    CartPage.visitar();
    CartPage.verificarCarrinho();

    CartPage.verificarProdutoNoCarrinho('Blue Top');
    CartPage.verificarProdutoNoCarrinho('Sleeveless Dress');
  }

  function finalizarCompra() {
    CartPage.prosseguirParaCheckout();

    CartPage.verificarEnderecoEntrega();
    CartPage.verificarResumoPedido();

    CheckoutPage.preencherComentario('Pedido realizado para fins de teste automatizado.');

    CheckoutPage.prosseguirParaPagamento();

    const pagamento = criarDadosPagamento();

    CheckoutPage.preencherPagamento(pagamento);
    CheckoutPage.confirmarPagamento();

    CheckoutPage.verificarPedidoConfirmado();
  }

  it('TC15 - Deve cadastrar um usuário e realizar uma compra', () => {
    const user = criarUsuario();

    SignupPage.visitar();
    SignupPage.criarConta(user);

    adicionarProdutosAoCarrinho();

    finalizarCompra();

    SignupPage.excluirConta();
  });

  it('TC16 - Deve realizar compra com usuário já cadastrado', () => {
    const user = criarUsuario();

    SignupPage.visitar();
    SignupPage.criarConta(user);

    LoginPage.fazerLogout();

    LoginPage.visitar();
    LoginPage.fazerLogin(user);
    LoginPage.verificarLoginRealizado(user.name);

    adicionarProdutosAoCarrinho();

    finalizarCompra();

    SignupPage.excluirConta();
  });
});