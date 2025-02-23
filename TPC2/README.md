# TPC1 - Trabalho Prático semana 2 (19/02/2025)

## Informação do Aluno

- **Nome:** João Pedro Ribeiro de Sá
- **Nº:** A104612
- **Foto:**

  ![Foto](https://avatars.githubusercontent.com/u/116807604?v=4)

## Resumo

Este projeto consiste na construção de um serviço em **Node.js** que consome uma API de dados fornecida pelo **json-server** de uma escola de música. O sistema apresenta várias funcionalidades
de navegação para consultar informações sobre alunos, cursos e instrumentos, navegando entre as páginas de forma dinâmica.

### Funcionalidades Principais:

- **Página Inicial**: Exibe as opções de visualização de alunos, cursos e instrumentos.
- **Página de Alunos**: Exibe a lista de alunos com suas informações, e ao clicar em um aluno, redireciona para a página do aluno.
- **Página de Cursos**:  Exibe os cursos disponíveis e, ao clicar em um curso, redireciona para a lista de alunos que frequentam esse curso.
- **Página de Instrumentos**: Exibe os instrumentos disponíveis e, ao clicar em um instrumento, redireciona para a lista de alunos que tocam aquele instrumento.
- **API servida pelo JSON-Server**: Utiliza um servidor JSON para fornecer os dados.

## Componentes do Programa:

1. **Node.js**:

   - O servidor Node.js consome os dados fornecidos pelo json-server e apresenta as páginas HTML dinâmicas.
   - Utiliza o pacote ```axios``` para realizar as requisições HTTP para o **json-server**.

2. **Json-Server**

   - Fornece os dados da escola de música em formato JSON através de uma API REST.
   - Serve uma API acessível via HTTP no endereço ```http://localhost:3000```
   - Controla o fluxo do utilizador

3. **Páginas HTML**
   - As páginas HTML são geradas com base nas respostas da API, exibindo as informações de alunos, cursos e instrumentos.

## Dependências e utilização:

1. Instalação das dependências :
   ```sh
   npm install -g json-server
   npm install axios
   ```
2. Execução

   ```sh
   json-server -w escolaMusica.json
   ```

   ```sh
   node escolaMusica.js
   ```

   Depois de executar estes comandos, a página poderá ser consultada através de ```http://localhost:3017/```.

## Lista de Resultados:

- [myPages.js](myPages.js)
- [escolaMusica.js](escolaMusica.js)
- [escolaMusica.json](escolaMusica.json)

## Notas Adicionais:

- O json-server deve estar em execução antes de iniciar o serviço Node.js.
