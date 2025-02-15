const http = require("http");
const axios = require("axios");

http
  .createServer(async (req, res) => {
    if (req.method === "GET") {
      if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html;charset=UTF-8" });
        res.write("<h1>Oficina de reparações</h1>");

        res.write(`
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f9;
                    margin: 0;
                    padding: 20px;
                }
                h1 {
                    color: #333;
                    text-align: center;
                    margin-bottom: 30px;
                }
                .card {
                    background-color: #fff;
                    border-radius: 8px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    margin: 20px auto;
                    padding: 20px;
                    max-width: 600px;
                    transition: transform 0.2s;
                }
                .card:hover {
                    transform: translateY(-5px);
                }
                .card h2 {
                    margin-top: 0;
                    color: #555;
                }
                .card p {
                    margin: 10px 0;
                    color: #666;
                }
                .card a {
                    display: block;
                    margin-top: 20px;
                    padding: 15px;
                    background-color: #007bff;
                    color: #fff;
                    text-decoration: none;
                    border-radius: 5px;
                    transition: background-color 0.3s;
                    text-align: center;
                    font-weight: bold;
                    width: 100%;
                    box-sizing: border-box;
                }
                .card a:hover {
                    background-color: #0056b3;
                }
                .back-link {
                    display: block;
                    text-align: center;
                    margin-top: 20px;
                    color: #007bff;
                    text-decoration: none;
                }
                .back-link:hover {
                    text-decoration: underline;
                }
            </style>
        `);

        res.write(`
            <div class="card">
                <h2>Lista de Reparações</h2>
                <p>Listagem das reparações da oficina</p>
                <a href="/reparacoes">Ver Lista de Reparações</a>
            </div>
            <div class="card">
                <h2>Veículos</h2>
                <p>Listagem dos veículos intervencionados</p>
                <a href="/viaturas">Ver Veículos</a>
            </div>
            <div class="card">
                <h2>Intervenções</h2>
                <p>Informação das intervenções.</p>
                <a href="/intervencoes">Ver Intervenções</a>
            </div>
        `);
        res.end();
      } else if (req.url === "/viaturas") {
        try {
          const response = await axios.get("http://localhost:3000/viaturas");
          const veiculos = response.data;
          res.writeHead(200, { "Content-Type": "text/html;charset=UTF-8" });
          res.write(`
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f4f4f9;
                        margin: 0;
                        padding: 20px;
                    }
                    h1 {
                        color: #333;
                        text-align: center;
                        margin-bottom: 10px;
                    }
                    .card {
                        background-color: #fff;
                        border-radius: 8px;
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                        margin: 20px auto;
                        padding: 20px;
                        max-width: 600px;
                        transition: transform 0.2s;
                    }
                    .card:hover {
                        transform: translateY(-5px);
                    }
                    .card h2 {
                        margin-top: 0;
                        color: #555;
                    }
                    .card p {
                        margin: 10px 0;
                        color: #666;
                    }
                    .back-link {
                        display: block;
                        text-align: center;
                        margin-top: 20px;
                        color: #007bff;
                        text-decoration: none;
                    }
                    .back-link:hover {
                        text-decoration: underline;
                    }
                </style>
                <h1>Lista de Veículos</h1>
            `);
          res.write(
            '<a href="/" class="back-link">Voltar para Página Inicial</a>'
          );

          for (const veiculo of veiculos) {
            res.write(`
                    <div class="card">
                        <h2>${veiculo.matricula}</h2>
                        <p><strong>Marca:</strong> ${veiculo.marca || "N/A"}</p>
                        <p><strong>Modelo:</strong> ${
                          veiculo.modelo || "N/A"
                        }</p>
                    </div>
                `);
          }
          res.end();
        } catch (error) {
          res.writeHead(500, { "Content-Type": "text/html;charset=UTF-8" });
          console.log(error);
          res.end();
        }
      } else if (req.url === "/reparacoes") {
        try {
          const response = await axios.get(
            "http://localhost:3000/reparacoes?_sort=data&_order=desc"
          );
          const reparacoes = response.data;
          res.writeHead(200, { "Content-Type": "text/html;charset=UTF-8" });

          res.write(`
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            background-color: #f4f4f9;
                            margin: 0;
                            padding: 20px;
                        }
                        h1 {
                            color: #333;
                            text-align: center;
                            margin-bottom: 10px;
                        }
                        .card {
                            background-color: #fff;
                            border-radius: 8px;
                            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                            margin: 20px auto;
                            padding: 20px;
                            max-width: 600px;
                            transition: transform 0.2s;
                        }
                        .card:hover {
                            transform: translateY(-5px);
                        }
                        .card h2 {
                            margin-top: 0;
                            color: #555;
                        }
                        .card p {
                            margin: 10px 0;
                            color: #666;
                        }
                        .card a {
                            display: block;
                            margin-top: 20px;
                            padding: 15px;
                            background-color: #007bff;
                            color: #fff;
                            text-decoration: none;
                            border-radius: 5px;
                            transition: background-color 0.3s;
                            text-align: center;
                            font-weight: bold;
                            width: 100%;
                            box-sizing: border-box;
                        }
                        .card a:hover {
                            background-color: #0056b3;
                        }
                        .back-link {
                            display: block;
                            text-align: center;
                            margin-top: 20px;
                            color: #007bff;
                            text-decoration: none;
                        }
                        .back-link:hover {
                            text-decoration: underline;
                        }
                    </style>
                `);

          res.write("<h1>Lista de Reparações</h1>");
          res.write(
            '<a href="/" class="back-link">Voltar para Página Inicial</a>'
          );
          for (const reparacao of reparacoes) {
            const codigosIntervencoes = reparacao.intervencoes
              .map((i) => i.codigo)
              .join(","); // Códigos das intervenções separados por vírgula
            res.write(`
                        <div class="card">
                            <h2>${reparacao.nome}</h2>
                            <p><strong>NIF:</strong> ${reparacao.nif}</p>
                            <p><strong>Data:</strong> ${reparacao.data}</p>
                            <p><strong>Marca:</strong> ${reparacao.viatura.marca}</p>
                            <p><strong>Modelo:</strong> ${reparacao.viatura.modelo}</p>
                            <p><strong>Matricula:</strong> ${reparacao.viatura.matricula}</p>
                            <p><strong>Número de Intervenções:</strong> ${reparacao.nr_intervencoes}</p>
                            <a href="/intervencoes/${codigosIntervencoes}">Ver Intervenções</a>
                        </div>
                    `);
          }
          res.end();
        } catch (error) {
          res.writeHead(500, { "Content-Type": "text/html;charset=UTF-8" });
          console.log(error);
          res.end();
        }
      } else if (req.url === "/intervencoes") {
        try {
          const response = await axios.get(
            "http://localhost:3000/intervencoes"
          );
          const intervencoes = response.data;
          res.writeHead(200, { "Content-Type": "text/html;charset=UTF-8" });

          res.write(`
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            background-color: #f4f4f9;
                            margin: 0;
                            padding: 20px;
                        }
                        h1 {
                            color: #333;
                            text-align: center;
                            margin-bottom: 10px;
                        }
                        .card {
                            background-color: #fff;
                            border-radius: 8px;
                            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                            margin: 20px auto;
                            padding: 20px;
                            max-width: 600px;
                            transition: transform 0.2s;
                        }
                        .card:hover {
                            transform: translateY(-5px);
                        }
                        .card h2 {
                            margin-top: 0;
                            color: #555;
                        }
                        .card p {
                            margin: 10px 0;
                            color: #666;
                        }
                        .back-link {
                            display: block;
                            text-align: center;
                            margin-top: 20px;
                            color: #007bff;
                            text-decoration: none;
                        }
                        .back-link:hover {
                            text-decoration: underline;
                        }
                    </style>
                `);

          res.write("<h1>Lista de Intervenções</h1>");
          res.write(
            '<a href="/" class="back-link">Voltar para Página Inicial</a>'
          );
          for (const intervencao of intervencoes) {
            res.write(`
                        <div class="card">
                            <h2>${intervencao.nome}</h2>
                            <p><strong>Código:</strong> ${intervencao.codigo}</p>
                            <p><strong>Descrição:</strong> ${intervencao.descricao}</p>
                        </div>
                    `);
          }
          res.end();
        } catch (error) {
          res.writeHead(500, { "Content-Type": "text/html;charset=UTF-8" });
          console.log(error);
          res.end();
        }
      } else if (req.url.startsWith("/intervencoes/")) {
        const codigos = req.url.split("/")[2].split(",");
        const responses = [];

        for (const codigo of codigos) {
          try {
            const response = await axios.get(
              `http://localhost:3000/intervencoes?codigo=${codigo}`
            );
            responses.push(response);
          } catch (error) {
            responses.push({ data: [] });
          }
        }

        const intervencoes = responses.flatMap((response) => response.data);

        res.writeHead(200, { "Content-Type": "text/html;charset=UTF-8" });

        res.write(`
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f4f4f9;
                        margin: 0;
                        padding: 20px;
                    }
                    h1 {
                        color: #333;
                        text-align: center;
                        margin-bottom: 10px;
                    }
                    .card {
                        background-color: #fff;
                        border-radius: 8px;
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                        margin: 20px auto;
                        padding: 20px;
                        max-width: 600px;
                    }
                    .card h2 {
                        margin-top: 0;
                        color: #555;
                    }
                    .card p {
                        margin: 10px 0;
                        color: #666;
                    }
                    .back-link {
                        display: block;
                        text-align: center;
                        margin-top: 20px;
                        color: #007bff;
                        text-decoration: none;
                    }
                    .back-link:hover {
                        text-decoration: underline;
                    }
                </style>
            `);

        res.write("<h1>Intervenções</h1>");
        for (const intervencao of intervencoes) {
          res.write(`
                    <div class="card">
                        <h2>Código: ${intervencao.codigo}</h2>
                        <p><strong>Nome:</strong> ${intervencao.nome}</p>
                        <p><strong>Descrição:</strong> ${intervencao.descricao}</p>
                    </div>
                `);
        }
        res.write(
          '<a href="/reparacoes" class="back-link">Voltar para Reparações</a>'
        );
        res.end();
      } else {
        res.writeHead(404, { "Content-Type": "text/html;charset=UTF-8" });
        res.write("<p>Recurso não encontrado</p>\n");
        res.end();
      }
    } else {
      res.writeHead(405, { "Content-Type": "text/html;charset=UTF-8" });
      res.write("<p>Método não permitido!</p>\n");
      res.end();
    }
  })
  .listen(1234);
