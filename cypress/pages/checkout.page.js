class CheckoutPage {
  preencherComentario(comentario) {
    cy.get('.form-control').last().clear().type(comentario);
  }

  prosseguirParaPagamento() {
    cy.contains('Place Order').click();
  }

  preencherPagamento(dados) {
    cy.get('[data-qa="name-on-card"]').type(dados.nome);
    cy.get('[data-qa="card-number"]').type(dados.numero);
    cy.get('[data-qa="cvc"]').type(dados.cvc);
    cy.get('[data-qa="expiry-month"]').type(dados.mes);
    cy.get('[data-qa="expiry-year"]').type(dados.ano);
  }

  confirmarPagamento() {
    cy.get('[data-qa="pay-button"]').click();
  }

  verificarPedidoConfirmado() {
    cy.contains('Congratulations! Your order has been confirmed!')
      .should('be.visible');
  }
}

export default new CheckoutPage();