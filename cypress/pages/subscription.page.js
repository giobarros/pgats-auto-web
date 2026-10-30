class SubscriptionPage {
  rolarAteRodape() {
    cy.get('.footer-bottom').scrollIntoView();
  }

  verificarFormulario() {
    cy.contains('Subscription').should('be.visible');
  }

  inscreverEmail(email) {
    cy.get('#susbscribe_email').clear().type(email);
    cy.get('#subscribe').click();
  }

  verificarInscricaoRealizada() {
    cy.get('.alert-success')
      .should('be.visible')
      .and('contain.text', 'You have been successfully subscribed!');
  }
}

export default new SubscriptionPage();