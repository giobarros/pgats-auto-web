
# Automação de Testes Web – PGATS

Projeto de automação de testes web desenvolvido como projeto individual do **PGATS**, utilizando Cypress e JavaScript para validar funcionalidades da aplicação [Automation Exercise](https://www.automationexercise.com/).

## Objetivo

Automatizar cenários de testes funcionais de uma aplicação web, aplicando boas práticas de automação, organização de código, reutilização de componentes e execução contínua dos testes.

O projeto contempla cenários de cadastro, autenticação, produtos, pesquisa, inscrição em newsletter e fluxo de compra.

## Tecnologias utilizadas

- **JavaScript** – linguagem utilizada no desenvolvimento dos testes.
- **Cypress 13.7.3** – framework de automação de testes web.
- **Node.js** – ambiente de execução.
- **Mochawesome** – geração de relatórios de execução.
- **Git e GitHub** – versionamento e hospedagem do projeto.
- **GitHub Actions** – integração contínua e execução automatizada dos testes.

## Estrutura do projeto

```text
auto_web/
│
├── .github/
│   └── workflows/
│       └── cypress.yml
│
├── cypress/
│   ├── e2e/
│   │   ├── cadastro.cy.js
│   │   ├── checkout.cy.js
│   │   ├── login.cy.js
│   │   ├── produtos.cy.js
│   │   └── subscription.cy.js
│   │
│   ├── factories/
│   │   └── user.factory.js
│   │
│   ├── flows/
│   │   └── compra.flow.js
│   │
│   ├── pages/
│   │   ├── cart.page.js
│   │   ├── checkout.page.js
│   │   ├── home.page.js
│   │   ├── login.page.js
│   │   ├── products.page.js
│   │   ├── signup.page.js
│   │   └── subscription.page.js
│   │
│   ├── fixtures/
│   └── support/
│       ├── commands.js
│       └── e2e.js
│
├── cypress.config.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## Cenários automatizados

Foram implementados 10 cenários de testes, distribuídos em cinco arquivos de especificação.

| ID | Cenário | Descrição |
|---|---|---|
| TC1 | Cadastro de usuário | Realizar cadastro com dados válidos e excluir a conta. |
| TC2 | Login válido | Realizar login com e-mail e senha corretos. |
| TC3 | Login inválido | Validar mensagem de erro ao informar credenciais incorretas. |
| TC4 | Logout | Validar a funcionalidade de sair da conta. |
| TC5 | E-mail já cadastrado | Validar que não é permitido cadastrar uma conta com e-mail existente. |
| TC8 | Detalhes do produto | Validar as informações apresentadas na página de detalhes de um produto. |
| TC9 | Pesquisa de produtos | Pesquisar produtos e validar os resultados apresentados. |
| TC10 | Newsletter | Realizar inscrição na newsletter e validar a mensagem de sucesso. |
| TC15 | Compra após cadastro | Cadastrar um usuário, adicionar produtos ao carrinho e finalizar uma compra. |
| TC16 | Compra após login | Realizar login com um usuário cadastrado, adicionar produtos ao carrinho e finalizar uma compra. |

## Organização e boas práticas

O projeto utiliza uma organização baseada em responsabilidades, buscando facilitar a manutenção e a reutilização de código.

### Page Objects

A pasta `cypress/pages/` concentra as classes responsáveis por representar as páginas da aplicação e encapsular suas interações e verificações.

### Factory

A pasta `cypress/factories/` contém funções responsáveis pela geração de dados de teste, como usuários com e-mails dinâmicos e informações de pagamento.

### Flows

A pasta `cypress/flows/` concentra fluxos de negócio reutilizáveis. O fluxo de compra, por exemplo, reúne as etapas de adicionar produtos ao carrinho e finalizar o pedido.

### Testes E2E

A pasta `cypress/e2e/` contém os arquivos de especificação, organizados por funcionalidade.

Essa separação busca evitar duplicação, melhorar a legibilidade e facilitar a evolução da automação.

## Pré-requisitos

Antes de executar o projeto, é necessário ter instalado:

- Node.js e npm.
- Git.
- Um navegador compatível com o Cypress.

## Instalação

Clone o repositório:

```bash
git clone https://github.com/giobarros/pgats-auto-web.git
```

Entre na pasta do projeto:

```bash
cd pgats-auto-web
```

Instale as dependências:

```bash
npm install
```

## Execução dos testes

### Executar todos os testes em modo headless

```bash
npm test
```

### Executar o Cypress com interface gráfica

```bash
npm run cy:open
```

### Executar os testes em modo headless explicitamente

```bash
npm run cy:run
```

## Relatórios

O projeto utiliza o Cypress Mochawesome Reporter para gerar relatórios das execuções.

Após executar os testes, o relatório HTML é gerado em:

```text
cypress/reports/html/index.html
```

Para visualizar o relatório, abra o arquivo `index.html` em um navegador.

Os relatórios gerados localmente são ignorados pelo Git por serem artefatos de execução.

## Integração contínua – GitHub Actions

O projeto utiliza GitHub Actions para executar automaticamente os testes.

O workflow está localizado em:

```text
.github/workflows/cypress.yml
```

A execução é configurada para ocorrer em:

- Push nas branches `main` e `master`.
- Pull Requests direcionadas a essas branches.
- Execução manual pelo GitHub Actions.

O pipeline realiza as seguintes etapas:

1. Obtém o código do repositório.
2. Configura o ambiente Node.js.
3. Instala as dependências com `npm ci`.
4. Executa os testes com `npm test`.
5. Disponibiliza o relatório Mochawesome como artefato da execução.

O relatório pode ser baixado na seção **Artifacts** de cada execução do workflow.

## Resultados da execução

Na execução validada localmente e no GitHub Actions, foram obtidos os seguintes resultados:

| Indicador | Resultado |
|---|---:|
| Arquivos de especificação | 5 |
| Cenários executados | 10 |
| Testes aprovados | 10 |
| Testes com falha | 0 |
| Taxa de aprovação | 100% |

O relatório Mochawesome também foi gerado e enviado com sucesso como artefato do GitHub Actions.

## Repositório

[GitHub – PGATS Auto Web](https://github.com/giobarros/pgats-auto-web)

## Aplicação sob teste

[Automation Exercise](https://www.automationexercise.com/)