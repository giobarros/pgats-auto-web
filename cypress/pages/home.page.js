class HomePage {
  visitar() {
    cy.visit('/');
  }

  verificarPaginaInicial() {
    cy.get('a[href="/"]').should('be.visible');
    cy.contains('Full-Fledged practice website for Automation Engineers')
      .should('be.visible');
  }

  acessarProdutos() {
    cy.get('a[href="/products"]').click();
  }

  acessarCarrinho() {
    cy.get('a[href="/view_cart"]').click();
  }

  verificarUsuarioLogado(nome) {
    cy.contains('a', `Logged in as ${nome}`).should('be.visible');
  }
}

export default new HomePage();