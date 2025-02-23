export function genMainPage(data) {
  var pagHTML = `
      <!DOCTYPE html>
      <html>
      <head>
          <meta charset="utf-8"/>
          <title>Escola de Música XPTO</title>
          <link rel="stylesheet" type="text/css" href="w3.css"/>
      </head>
      <body>
          <div class="w3-container w3-margin-top">
              <div class="w3-card-4">
                  <header class="w3-container w3-purple">
                      <h1>Operações possíveis</h1>
                  </header>
                  <div class="w3-container">
                      <ul class="w3-ul w3-hoverable">
                          <li class="w3-padding-16"><a href="/alunos" class="w3-text-deep-purple">Lista de Alunos</a></li>
                          <li class="w3-padding-16"><a href="/cursos" class="w3-text-deep-purple">Lista de Cursos</a></li>
                          <li class="w3-padding-16"><a href="/instrumentos" class="w3-text-deep-purple">Lista de Instrumentos</a></li>
                      </ul>
                  </div>
                  <footer class="w3-container w3-purple">
                      <h5>Generated in EngWeb2025 ${data}</h5>
                  </footer>
              </div>
          </div>
      </body>
      </html>
    `;
  return pagHTML;
}

export function genAlunosPage(lAlunos, d) {
  var pagHTML = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8"/>
            <title>Escola de Música XPTO</title>
            <link rel="stylesheet" type="text/css" href="w3.css"/>
        </head>
        <body>
            <div class="w3-container w3-margin-top">
                <div class="w3-card-4">
                    <header class="w3-container w3-purple">
                        <h1>Lista de Alunos</h1>
                    </header>
                    <div class="w3-container">
                        <table class="w3-table-all w3-hoverable">
                            <thead>
                                <tr class="w3-light-grey">
                                  <th>ID</th>
                                  <th>Nome</th>
                                  <th>Data de Nascimento</th>
                                  <th>Curso</th>
                                  <th>Ano de Curso</th>
                                  <th>Instrumento</th>
                                </tr>
                            </thead>
                            <tbody>`;

  lAlunos.forEach((aluno) => {
    pagHTML += `
                                <tr onclick="location.href='/alunos/${aluno.id}'" class="w3-hover-light-blue" style="cursor: pointer;">
                                <td>${aluno.id}</td>
                                <td>${aluno.nome}</td>
                                <td>${aluno.dataNasc}</td>
                                <td>${aluno.curso}</td>
                                <td>${aluno.anoCurso}</td>
                                <td>${aluno.instrumento}</td>
                                </tr>
      `;
  });

  pagHTML += `
                            </tbody>
                        </table>
                    </div>
                    <footer class="w3-container w3-purple">
                        <h5>Generated in EngWeb2025 ${d}</h5>
                    </footer>
                </div>
            </div>
        </body>
        </html>
      `;
  return pagHTML;
}

export function genPaginaAluno(Aluno, d) {
  var pagHTML = `
          <!DOCTYPE html>
          <html>
          <head>
              <meta charset="utf-8"/>
              <title>Escola de Música XPTO</title>
              <link rel="stylesheet" type="text/css" href="w3.css"/>
          </head>
          <body>
              <div class="w3-container w3-margin-top">
                  <div class="w3-card-4">
                      <header class="w3-container w3-purple">
                          <h1>Página de Aluno</h1>
                      </header>
                      <div class="w3-container">
                          <table class="w3-table-all w3-hoverable">
                              <thead>
                                  <tr class="w3-light-grey">
                                    <th>ID</th>
                                    <th>Nome</th>
                                    <th>Data de Nascimento</th>
                                    <th>Curso</th>
                                    <th>Ano de Curso</th>
                                    <th>Instrumento</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr>
                                  <td>${Aluno.id}</td>
                                  <td>${Aluno.nome}</td>
                                  <td>${Aluno.dataNasc}</td>
                                  <td>${Aluno.curso}</td>
                                  <td>${Aluno.anoCurso}</td>
                                  <td>${Aluno.instrumento}</td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>
                      <footer class="w3-container w3-purple">
                          <h5>Generated in EngWeb2025 ${d}</h5>
                      </footer>
                  </div>
              </div>
          </body>
          </html>
        `;
  return pagHTML;
}

export function genInstrumentosPage(lInstrumentos, d) {
  var pagHTML = `
      <!DOCTYPE html>
      <html>
      <head>
          <meta charset="utf-8"/>
          <title>Escola de Música XPTO</title>
          <link rel="stylesheet" type="text/css" href="w3.css"/>
      </head>
      <body class="w3-light-grey">
  
          <div class="w3-container w3-margin-top">
              <div class="w3-card-4 w3-white">
                  <header class="w3-container w3-purple w3-padding">
                      <h1 class="w3-center">Lista de Instrumentos</h1>
                  </header>
  
                  <div class="w3-container w3-responsive">
                      <table class="w3-table w3-striped w3-bordered w3-hoverable w3-white">
                          <tr class="w3-light-grey">
                              <th>ID</th>
                              <th>Nome do Instrumento</th>
                          </tr>`;

    lInstrumentos.forEach((instr) => {
    pagHTML += `
                        <tr onclick="location.href='/instrumentos/${instr.id}'" class="w3-hover-light-blue" style="cursor: pointer;">
                            <td>${instr.id}</td>
                            <td>${instr["#text"]}</td>
                        </tr>
    `;
  });

  pagHTML += `
                      </table>
                  </div>
  
                  <footer class="w3-container w3-purple w3-padding w3-center">
                      <h5>Generated in EngWeb2025 ${d}</h5>
                  </footer>
              </div>
          </div>
  
      </body>
      </html>
    `;
  return pagHTML;
}


export function genPaginaInstrumento(alunos, d) {
    var instrumento = alunos.length > 0 ? alunos[0].instrumento : 'Sem instrumento definido'; // Caso não haja alunos
    var pagHTML = `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="utf-8"/>
                <title>Escola de Música XPTO</title>
                <link rel="stylesheet" type="text/css" href="w3.css"/>
            </head>
            <body>
                <div class="w3-container w3-margin-top">
                    <div class="w3-card-4">
                        <header class="w3-container w3-purple">
                            <h1>Página do(a) ${instrumento}</h1>
                        </header>
                        <div class="w3-container">
                            <table class="w3-table-all w3-hoverable">
                                <thead>
                                <tr class="w3-light-grey">
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Data de Nascimento</th>
                                <th>Ano de Curso</th>
                              </tr>
                          </thead>
                          <tbody>`;

alunos.forEach((aluno) => {
  pagHTML += `
                            <tr>
                                <td>${aluno.id}</td>
                                <td>${aluno.nome}</td>
                                <td>${aluno.dataNasc}</td>
                                <td>${aluno.anoCurso}</td>
                            </tr>
    `;
});

pagHTML += `
                          </tbody>
                      </table>
                  </div>
                  <footer class="w3-container w3-purple">
                      <h5>Generated in EngWeb2025 ${d}</h5>
                  </footer>
              </div>
          </div>
      </body>
      </html>
    `;
return pagHTML;
}
  

export function genCursosPage(lCursos, d) {
  var pagHTML = `
      <!DOCTYPE html>
      <html>
      <head>
          <meta charset="utf-8"/>
          <title>Escola de Música XPTO</title>
          <link rel="stylesheet" type="text/css" href="w3.css"/>
      </head>
      <body class="w3-light-grey">
  
          <div class="w3-container w3-margin-top">
              <div class="w3-card-4 w3-white">
                  <header class="w3-container w3-purple w3-padding">
                      <h1 class="w3-center">Lista de Cursos</h1>
                  </header>
  
                  <div class="w3-container w3-responsive">
                      <table class="w3-table w3-striped w3-bordered w3-hoverable w3-white">
                          <tr class="w3-light-grey">
                              <th>ID</th>
                              <th>Designação</th>
                              <th>Duração</th>
                              <th>Instrumento Lecionado</th>
                          </tr>`;

  lCursos.forEach((curso) => {
    pagHTML += `
                        <tr onclick="location.href='/cursos/${curso.id}'" class="w3-hover-light-blue" style="cursor: pointer;">
                            <td>${curso.id}</td>
                            <td>${curso.designacao}</td>
                            <td>${curso.duracao}</td>
                            <td>${curso.instrumento.id} | ${curso.instrumento["#text"]}</td>
                        </tr>
      `;
  });

  pagHTML += `
                      </table>
                  </div>
  
                  <footer class="w3-container w3-purple w3-padding w3-center">
                      <h5>Generated in EngWeb2025 ${d}</h5>
                  </footer>
              </div>
          </div>
  
      </body>
      </html>
    `;
  return pagHTML;
}


export function genPaginaCurso(alunos, d) {
    var curso = alunos.length > 0 ? alunos[0].curso : 'Sem Curso definido'; // Caso não haja alunos
    var pagHTML = `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="utf-8"/>
                <title>Escola de Música XPTO</title>
                <link rel="stylesheet" type="text/css" href="w3.css"/>
            </head>
            <body>
                <div class="w3-container w3-margin-top">
                    <div class="w3-card-4">
                        <header class="w3-container w3-purple">
                            <h1>Página do Curso ${curso}</h1>
                        </header>
                        <div class="w3-container">
                            <table class="w3-table-all w3-hoverable">
                                <thead>
                                <tr class="w3-light-grey">
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Data de Nascimento</th>
                                <th>Ano de Curso</th>
                              </tr>
                          </thead>
                          <tbody>`;

alunos.forEach((aluno) => {
  pagHTML += `
                            <tr>
                                <td>${aluno.id}</td>
                                <td>${aluno.nome}</td>
                                <td>${aluno.dataNasc}</td>
                                <td>${aluno.anoCurso}</td>
                            </tr>
    `;
});

pagHTML += `
                          </tbody>
                      </table>
                  </div>
                  <footer class="w3-container w3-purple">
                      <h5>Generated in EngWeb2025 ${d}</h5>
                  </footer>
              </div>
          </div>
      </body>
      </html>
    `;
return pagHTML;
}