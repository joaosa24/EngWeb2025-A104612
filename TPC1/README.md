# TPC1 - Trabalho Prático semana 1 (11/02/2025)

## Informação do Aluno

- **Nome:** João Pedro Ribeiro de Sá
- **Nº:** A104612
- **Foto:**
  ![Foto](https://avatars.githubusercontent.com/u/116807604?v=4)

## Resumo

Este projeto consiste num sistema para gestão de reparações de uma oficina automóvel, onde os dados das intervenções e viaturas são extraídos de um ficheiro JSON e disponibilizados pelo json-server. As páginas web foram desenvolvidas consumindo a API de dados servida pelo json-server utilizando `axios`.

### Funcionalidades Principais:

- **Manipulação de JSON**: Extração e reorganização de dados do dataset original para adequação ao json-server.
- **API servida pelo JSON-Server**: Utiliza um servidor JSON para fornecer os dados.
- **Web Pages**: Criação de páginas web para consulta dos dados

## Componentes do Programa:

1. **Script Python para Manipulação do JSON**:

   - Lê o ficheiro `dataset_reparacoes.json`
   - Extrai e organiza os dados das intervenções e viaturas
   - Gera um novo JSON `(new_dataset.json)` compatível com **json-server**
   - Mostra resultados parciais e finais

2. **Json-Server**

   - Fornece os dados organizados no `new_dataset.json`
   - Serve uma API acessível via HTTP
   - Controla o fluxo do utilizador

3. **Serviço NodeJS**
   - Cria interfaces web que consomem os dados da API `json-server`
   - Fornece páginas em HTML utilizando `axios` para obter dados
   - Faz o _routing_ das solicitações GET para diferentes _endpoints_ `(/viaturas, /reparacoes, /intervencoes)`

## Dependências e utilização:

1. Instalação das dependências :
   ```sh
   npm install -g json-server
   npm install axios
   ```
2. Execução

   ```sh
   json-server -w new_dataset.json
   ```

   ```sh
   node server.js
   ```

   Depois de executar estes comandos, a página poderá ser consultada através de ```http://localhost:1234/```.

## Lista de Resultados:

- [clean.py](clean.py)
- [server.js](server.js)
- [new_dataset.json](new_dataset.json)

## Notas Adicionais:

- O json-server deve estar em execução antes de iniciar o serviço Node.js.
- Os dados são organizados automaticamente no JSON final (removendo instruções duplicadas na sua extração).
- A interface web permite navegar entre viaturas, reparações e intervenções.
