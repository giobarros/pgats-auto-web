
import HomePage from '../pages/home.page';
import SubscriptionPage from '../pages/subscription.page';

describe('Inscrição na newsletter', () => {

  it('TC10 - Deve permitir realizar inscrição na Subscription', () => {
    HomePage.visitar();

    SubscriptionPage.rolarAteRodape();
    SubscriptionPage.verificarFormulario();

    const email = `pgats_${Date.now()}@email.com`;

    SubscriptionPage.inscreverEmail(email);

    SubscriptionPage.verificarInscricaoRealizada();
  });
});