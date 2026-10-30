class ProductsPage {
  visitar() {
    cy.visit('/products');
  }

  verificarPaginaProdutos() {
    cy.contains('All Products').should('be.visible');
  }

  abrirPrimeiroProduto() {
    cy.get('a[href="/product_details/1"]').click();
  }

  verificarDetalhesPrimeiroProduto() {
    cy.contains('Blue Top').should('be.visible');
    cy.contains('Category: Women > Tops').should('be.visible');
    cy.contains('Rs. 500').should('be.visible');
    cy.contains('Availability: In Stock').should('be.visible');
    cy.contains('Condition: New').should('be.visible');
    cy.contains('Brand: Polo').should('be.visible');
  }

  pesquisarProduto(nome) {
    cy.get('#search_product').clear().type(nome);
    cy.get('#submit_search').click();
  }

  verificarResultadoPesquisa() {
    cy.contains('Searched Products').should('be.visible');
    cy.get('.features_items .product-image-wrapper')
      .should('have.length.greaterThan', 0);
  }

  adicionarProdutoAoCarrinho(id) {
    cy.get(`.productinfo a[data-product-id="${id}"]`)
      .should('be.visible')
      .click();
  }

  continuarComprando() {
    cy.contains('Continue Shopping').click();
  }
}

export default new ProductsPage();