class CartPage {
  visitar() {
    cy.visit('/view_cart');
  }

  verificarCarrinho() {
    cy.contains('Shopping Cart').should('be.visible');
  }

  verificarProdutoNoCarrinho(nomeProduto) {
    cy.contains('.cart_description', nomeProduto)
      .should('be.visible');
  }

  prosseguirParaCheckout() {
    cy.contains('Proceed To Checkout').click();
  }

  verificarEnderecoEntrega() {
    cy.contains('Address Details').should('be.visible');
    cy.contains('Your delivery address').should('be.visible');
  }

  verificarResumoPedido() {
    cy.contains('Review Your Order').should('be.visible');
    cy.get('.cart_info').should('be.visible');
  }
}

export default new CartPage();