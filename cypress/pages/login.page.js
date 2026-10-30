class LoginPage {
  visitar() {
    cy.visit('/login');
  }

  verificarFormularioLogin() {
    cy.contains('Login to your account').should('be.visible');
  }

  preencherEmail(email) {
    cy.get('[data-qa="login-email"]').clear().type(email);
  }

  preencherSenha(senha) {
    cy.get('[data-qa="login-password"]').clear().type(senha);
  }

  clicarLogin() {
    cy.get('[data-qa="login-button"]').click();
  }

  fazerLogin(user) {
    this.verificarFormularioLogin();
    this.preencherEmail(user.email);
    this.preencherSenha(user.password);
    this.clicarLogin();
  }

  verificarLoginRealizado(nome) {
    cy.contains('a', `Logged in as ${nome}`).should('be.visible');
  }

  fazerLogout() {
    cy.get('a[href="/logout"]').click();
  }

  verificarMensagemErroLogin() {
    cy.contains('Your email or password is incorrect!').should('be.visible');
  }
}

export default new LoginPage();