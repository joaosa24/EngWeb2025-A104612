# TPC3 - Trabalho Prático 6 (30/03/2025)

## Informação do Aluno

- **Nome:** João Pedro Ribeiro de Sá
- **Nº:** A104612
- **Foto:**

  ![Foto](https://avatars.githubusercontent.com/u/116807604?v=4)

## Resumo
Este projeto foi realizado na UC de Engenharia Web. Este consiste num serviço de listagem de contratos públicos, recorrendo a uma API de dados que recolhe dados de uma base de dados (MongoDB). Foi possível dividir este projeto em duas componentes (API e Interface). Na camada de API de dados (MongoDB + Express) consiste numa base de dados com informações sobre contratos públicos. Por outro lado, a interface foi realizada através de Express e PUG (com recurso a w3css).

O serviço permite consultar detalhes de contratos públicos, informações sobre entidades contratantes e o valor total dos contratos por entidade.

## Funcionalidades Principais
- Listagem de contratos
- Página de contrato individual
- Listagem de contratos por entidade (e somatório do valor dos contratos)

## Lista de Resultados:

- [AppContratos](AppContratos)
- [API](API)

# Utilização:
 - Em primeiro lugar, executar a base de dados:
   ```sh
    docker start mongoEW
    cd API
    npm i
    npm start
   ```
 - Após isso, noutro terminal, inicializar a interface:
   ```sh
   cd AppContratos
   npm i
   npm start
   ```
 - Aceder à interface (via browser):
   ```sh
   http://localhost:16001
   ```