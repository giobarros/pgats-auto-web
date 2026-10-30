class SignupPage {

  visitar() {
    cy.visit('/login');
  }

  verificarFormularioCadastro() {
    cy.contains('New User Signup!')
      .should('be.visible');
  }

  preencherNome(nome) {
    cy.get('[data-qa="signup-name"]')
      .clear()
      .type(nome);
  }

  preencherEmail(email) {
    cy.get('[data-qa="signup-email"]')
      .clear()
      .type(email);
  }

  enviarCadastro() {
    cy.get('[data-qa="signup-button"]').click();
  }

  verificarInformacoesConta() {
    cy.contains('Enter Account Information')
      .should('be.visible');
  }

  preencherInformacoesUsuario(user) {
    if (user.title === 'Mr') {
      cy.get('#id_gender1').check();
    } else {
      cy.get('#id_gender2').check();
    }

    cy.get('[data-qa="password"]').type(user.password);

    cy.get('[data-qa="days"]').select(user.birthDay);
    cy.get('[data-qa="months"]').select(user.birthMonth);
    cy.get('[data-qa="years"]').select(user.birthYear);

    cy.get('#newsletter').check();
    cy.get('#optin').check();

    cy.get('[data-qa="first_name"]').type(user.firstName);
    cy.get('[data-qa="last_name"]').type(user.lastName);
    cy.get('[data-qa="company"]').type(user.company);
    cy.get('[data-qa="address"]').type(user.address);
    cy.get('[data-qa="address2"]').type(user.address2);

    cy.get('[data-qa="country"]').select(user.country);
    cy.get('[data-qa="state"]').type(user.state);
    cy.get('[data-qa="city"]').type(user.city);
    cy.get('[data-qa="zipcode"]').type(user.zipcode);
    cy.get('[data-qa="mobile_number"]').type(user.mobile);
  }

  criarConta(user) {
    this.verificarFormularioCadastro();

    this.preencherNome(user.name);
    this.preencherEmail(user.email);
    this.enviarCadastro();

    this.verificarInformacoesConta();
    this.preencherInformacoesUsuario(user);

    cy.get('[data-qa="create-account"]').click();

    cy.contains('Account Created!').should('be.visible');

    cy.get('[data-qa="continue-button"]').click();

    cy.contains('a', `Logged in as ${user.name}`)
      .should('be.visible');
  }

  excluirConta() {
    cy.get('a[href="/delete_account"]').click();

    cy.contains('Account Deleted!')
      .should('be.visible');

    cy.get('[data-qa="continue-button"]').click();
  }
}

export default new SignupPage();