import { createServer } from "http";
import axios from "axios";
import { readFile } from "fs";
import {
  genMainPage,
  genAlunosPage,
  genCursosPage,
  genInstrumentosPage,
  genPaginaAluno,
  genPaginaInstrumento,
  genPaginaCurso,
} from "./myPages.js";

createServer(function (req, res) {
  var d = new Date().toISOString().substring(0, 16);
  if (req.url == "/") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" }); // cabeçalho da resposta
    res.write(genMainPage(d)); // corpo da resposta
    res.end; // fim da resposta
  } else if (req.url == "/alunos") {
    axios
      .get("http://localhost:3000/alunos?_sort=anoCurso")
      .then(function (resp) {
        var alunos = resp.data;
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" }); // cabeçalho da resposta
        res.write(genAlunosPage(alunos, d)); // corpo da resposta
        res.end(); // fim da resposta
      })
      .catch((erro) => {
        console.log(erro);
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.write("<p>Erro: " + erro + "</p>");
        res.end();
      });
  } else if (req.url.match(/alunos\/A[0-9]+$/)) {
    var idAluno = req.url.split("/")[2]; // extrair o id do aluno do URL
    axios
      .get(`http://localhost:3000/alunos/${idAluno}`)
      .then(function (resp) {
        var aluno = resp.data;
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" }); // cabeçalho da resposta
        res.write(genPaginaAluno(aluno, d)); // corpo da resposta
        res.end(); // fim da resposta
      })
      .catch((erro) => {
        console.log(erro);
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.write("<p>Erro: " + erro + "</p>");
        res.end();
      });
  } else if (req.url == "/cursos") {
    axios
      .get("http://localhost:3000/cursos?_sort=id")
      .then(function (resp) {
        var cursos = resp.data;
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" }); // cabeçalho da resposta
        res.write(genCursosPage(cursos, d)); // corpo da resposta
        res.end(); // fim da resposta
      })
      .catch((erro) => {
        console.log(erro);
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.write("<p>Erro: " + erro + "</p>");
        res.end();
      });
  } else if (req.url.match(/cursos\/C[a-zA-Z0-9]+$/)) {
    var idCurso = req.url.split("/")[2]; // extrair o id do curso do URL
    axios
      .get(
        `http://localhost:3000/alunos?curso=${idCurso}&_sort=anoCurso&order=asc`
      )
      .then(function (resp) {
        var alunos = resp.data;
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" }); // cabeçalho da resposta
        res.write(genPaginaCurso(alunos, d)); // corpo da resposta
        res.end(); // fim da resposta
      })
      .catch((erro) => {
        console.log(erro);
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.write("<p>Erro: " + erro + "</p>");
        res.end();
      });
  } else if (req.url == "/instrumentos") {
    axios
      .get("http://localhost:3000/instrumentos")
      .then(function (resp) {
        var instrumentos = resp.data;
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" }); // cabeçalho da resposta
        res.write(genInstrumentosPage(instrumentos, d)); // corpo da resposta
        res.end(); // fim da resposta
      })
      .catch((erro) => {
        console.log(erro);
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.write("<p>Erro: " + erro + "</p>");
        res.end();
      });
  } else if (req.url.match(/w3\.css$/)) {
    readFile("w3.css", function (err, data) {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
        res.write("<p>Erro: " + err + "</p>");
      } else {
        res.writeHead(200, { "Content-Type": "text/css" });
        res.write(data);
      }
      res.end();
    });
  } else if (req.url.match(/instrumentos\/I[0-9]+$/)) {
    var idInstrumento = req.url.split("/")[2]; // extrair o id do instrumento do URL

    // Faz uma requisição para buscar todos os instrumentos
    axios
      .get("http://localhost:3000/instrumentos")
      .then(function (resp) {
        // Encontrar o instrumento correspondente ao ID na resposta
        var instrumento = resp.data.find((item) => item.id === idInstrumento);

        if (instrumento) {
          var nomeInstrumento = instrumento["#text"]; // Extrai o nome do instrumento
          axios
            .get(
              `http://localhost:3000/alunos?instrumento=${nomeInstrumento}&_sort=anoCurso&order=asc`
            )
            .then(function (respAlunos) {
              var alunos = respAlunos.data;
              res.writeHead(200, {
                "Content-Type": "text/html; charset=utf-8",
              });
              res.write(genPaginaInstrumento(alunos, d)); // Passar o nome do instrumento
              res.end(); // Fim da resposta
            })
            .catch((erro) => {
              console.log(erro);
              res.writeHead(200, {
                "Content-Type": "text/html; charset=utf-8",
              });
              res.write("<p>Erro ao buscar alunos: " + erro + "</p>");
              res.end();
            });
        } else {
          res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
          res.write("<p>Instrumento não encontrado.</p>");
          res.end();
        }
      })
      .catch((erro) => {
        console.log(erro);
        res.writeHead(500, { "Content-Type": "text/html; charset=utf-8" });
        res.write("<p>Erro ao buscar instrumento: " + erro + "</p>");
        res.end();
      });
  } else {
    res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    res.write(
      "<p>Pedido não suportado: " + req.method + " " + req.url + "</p>"
    );
  }
}).listen(3017);

console.log("Servidor à escuta na porta 3017...");
