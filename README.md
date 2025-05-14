# Desafio Técnico - Backend Developer

Este projeto é uma API RESTful desenvolvida como parte de um teste técnico para a posição de desenvolvedor backend. A aplicação fornece acesso à lista de indicados e vencedores da categoria **Pior Filme** do Golden Raspberry Awards, permitindo consultas específicas sobre os prêmios.

---
- **Entrada de Dados**: O arquivo `movielist.csv` é lido automaticamente ao iniciar a aplicação, e seus dados são carregados em uma base de dados em memória.

## Especificação do Teste
- [x] Leia um arquivo CSV contendo os filmes indicados e vencedores.
- [x] Insira os dados lidos em uma base de dados ao iniciar a aplicação.
- [x] Ofereça um endpoint para consultar:
   - O produtor que teve o maior intervalo entre dois prêmios consecutivos.
   - O produtor que ganhou dois prêmios consecutivos no menor intervalo de tempo.
---

### Requisitos Não Funcionais
1. **Maturidade RESTful**: Segue o Nível 2 do modelo de maturidade de Richardson.

2. **Testes de Integração**:
   - Apenas testes de integração foram implementados.
   - Os testes garantem a consistência dos dados lidos e a precisão das respostas.

3. **Banco de Dados**:
   - Um banco de dados em memória (H2) é utilizado.
   - Não são necessárias dependências externas para execução do projeto.

---

## Tecnologias Utilizadas
- [Node.js](https://nodejs.org/) e **TypeScript** para o backend.
- **Express.js** para criação da API RESTful.
- **Jest** para os testes de integração.
- **H2 Database** como banco de dados em memória.
- **Supertest** para simular requisições HTTP durante os testes.

---

## Como Rodar o Projeto
1. **Clone o Repositório**:
```bash
git clone https://github.com/AlanTomaiz/outsera-challenge.git
cd outsera-challenge
```

2. **Instale as Dependências**:
```bash
npm install
```

3. **Inicie a Aplicação**:
```bash
npm start:dev
```
A aplicação estará disponível no endereço `http://localhost:3333`.

4. **Teste o Endpoint Principal**:
- Endpoint: `GET /producers/intervals`
- Exemplo de requisição:

```bash
curl http://localhost:3333/producers/intervals
```

---

## Como Executar os Testes de Integração

1. **Execute os Testes**:
```bash
npm test
```
---
<p>
  <img alt="lastcommit" src="https://img.shields.io/github/last-commit/alantomaiz/outsera-challenge?color=%235761C3" />
  <a href="https://www.linkedin.com/in/alantomaiz/"><img alt="AlanTomaiz" src="https://img.shields.io/badge/-AlanTomaiz-5965e0?style=flat&logo=Linkedin&logoColor=white" /></a>
</p>
