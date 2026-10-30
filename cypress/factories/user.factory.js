export function criarUsuario(overrides = {}) {
  const id = `${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;

  return {
    name: 'auto pgats',
    email: `auto_pgats_${id}@email.com`,
    password: '123456',
    title: 'Mrs',
    birthDay: '29',
    birthMonth: 'April',
    birthYear: '2002',
    firstName: 'pgats',
    lastName: 'auto',
    company: 'Empresa de Teste',
    address: 'Rua 1 de Agosto, 23',
    address2: 'Rua 1 de Agosto, 46',
    country: 'Australia',
    state: 'New South Wales',
    city: 'Sydney',
    zipcode: '54321',
    mobile: '9994080123',
    ...overrides
  };
}

export function criarDadosPagamento() {
  return {
    nome: 'PGATS AUTO',
    numero: '1234567890123456',
    cvc: '123',
    mes: '12',
    ano: '2028'
  };
}