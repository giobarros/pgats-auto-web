
import SignupPage from '../pages/signup.page';
import LoginPage from '../pages/login.page';
import { criarUsuario } from '../factories/user.factory';

describe('Cadastro de usuário', () => {

  it('TC1 - Deve cadastrar um novo usuário e excluir a conta', () => {
    const user = criarUsuario();

    SignupPage.visitar();
    SignupPage.criarConta(user);

    SignupPage.excluirConta();
  });

  it('TC5 - Não deve permitir cadastro com e-mail já existente', () => {
    const user = criarUsuario();

    SignupPage.visitar();
    SignupPage.criarConta(user);

    LoginPage.fazerLogout();

    SignupPage.visitar();
    SignupPage.verificarFormularioCadastro();

    SignupPage.preencherNome(user.name);
    SignupPage.preencherEmail(user.email);
    SignupPage.enviarCadastro();

    cy.contains('Email Address already exist!')
      .should('be.visible');

    LoginPage.fazerLogin(user);
    LoginPage.verificarLoginRealizado(user.name);

    SignupPage.excluirConta();
  });
});