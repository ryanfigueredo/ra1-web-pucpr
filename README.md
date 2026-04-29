# Projeto Web Development Framework — PUCPR

Projeto desenvolvido para a disciplina de **Web Development Framework** da PUCPR, utilizando **React** como framework principal. A aplicação demonstra os principais conceitos do React aprendidos em aula, incluindo composição de componentes, props, estado, ciclo de vida e formulários controlados.

## Sobre o Projeto

Esta aplicação é dividida em três módulos principais que exploram, na prática, fundamentos essenciais do desenvolvimento com React:

### Equipe
Página que apresenta os integrantes do grupo, demonstrando o uso de **props** e **composição de componentes**. Cada integrante é renderizado a partir de um componente reutilizável que recebe seus dados como propriedades.

### Contadores
Módulo comparativo entre **componentes de classe** e **componentes de função**, com exemplos com e sem estado. Útil para visualizar as diferenças sintáticas e práticas entre as duas abordagens, além do uso de Hooks (`useState`) versus `this.state`.

### Cadastro
Formulário implementado com **controlled components**, demonstrando o gerenciamento de estado em inputs, validações básicas e o fluxo de dados unidirecional do React.

## Tecnologias Utilizadas

- **React 19** — biblioteca principal para construção da interface
- **React Router DOM v7** — roteamento entre as páginas da aplicação
- **Create React App** — ferramenta de bootstrap e configuração do projeto

## Scripts Disponíveis

- `npm start` — executa a aplicação em modo de desenvolvimento
- `npm test` — executa os testes em modo interativo
- `npm run build` — gera a versão de produção otimizada na pasta `build`

## Estrutura do Projeto

```
src/
├── components/      # Componentes reutilizáveis
├── pages/           # Páginas da aplicação (Equipe, Contadores, Cadastro)
├── App.js           # Componente raiz e configuração de rotas
└── index.js         # Ponto de entrada da aplicação
```

## Conceitos Demonstrados

- Composição de componentes
- Props e tipagem de propriedades
- Estado local com `useState` e `this.state`
- Componentes de classe vs componentes de função
- Controlled components em formulários
- Roteamento com React Router

Disciplina: **Web Development Framework**  
Instituição: **Pontifícia Universidade Católica do Paraná (PUCPR)**