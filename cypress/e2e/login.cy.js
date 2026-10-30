
import SignupPage from '../pages/signup.page';
import LoginPage from '../pages/login.page';
import { criarUsuario } from '../factories/user.factory';

describe('Login de usuário', () => {
  let user;

  beforeEach(() => {
    user = criarUsuario();

    SignupPage.visitar();
    SignupPage.criarConta(user);

    LoginPage.fazerLogout();
    LoginPage.visitar();
  });

  it('TC2 - Deve realizar login com e-mail e senha corretos', () => {
    LoginPage.fazerLogin(user);
    LoginPage.verificarLoginRealizado(user.name);

    SignupPage.excluirConta();
  });

  it('TC3 - Não deve realizar login com senha incorreta', () => {
    LoginPage.verificarFormularioLogin();
    LoginPage.preencherEmail(user.email);
    LoginPage.preencherSenha('senha_incorreta_123');
    LoginPage.clicarLogin();

    LoginPage.verificarMensagemErroLogin();

    LoginPage.fazerLogin(user);
    LoginPage.verificarLoginRealizado(user.name);
    SignupPage.excluirConta();
  });

  it('TC4 - Deve permitir realizar logout', () => {
    LoginPage.fazerLogin(user);
    LoginPage.verificarLoginRealizado(user.name);

    LoginPage.fazerLogout();

    cy.contains('Login to your account').should('be.visible');

    LoginPage.fazerLogin(user);
    LoginPage.verificarLoginRealizado(user.name);
    SignupPage.excluirConta();
  });
});