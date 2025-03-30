var express = require('express');
var router = express.Router();
var Contrato = require('../controllers/contratos')

router.get('/', function(req, res) {
  Contrato.list(req.query)
    .then(data => res.jsonp(data))
    .catch(erro => res.status(500).jsonp(erro))
});

router.get('/entidades', function(req, res) {
  Contrato.getEntidades()
    .then(data => res.jsonp(data))
    .catch(erro => res.status(500).jsonp(erro))
});

router.get('/tipos', function(req, res) {
  Contrato.getTipos()
    .then(data => res.jsonp(data))
    .catch(erro => res.status(500).jsonp(erro))
});

router.get('/:id', function(req, res) {
  Contrato.getById(req.params.id)
    .then(data => res.jsonp(data))
    .catch(erro => res.status(500).jsonp(erro))
});

router.post('/', function(req, res) {
  Contrato.insert(req.body)
    .then(data => res.status(201).jsonp(data))
    .catch(erro => res.status(500).jsonp(erro))
});

router.put('/:id', function(req, res) {
  Contrato.update(req.params.id, req.body)
    .then(data => res.jsonp(data))
    .catch(erro => res.status(500).jsonp(erro))
});

// DELETE contrato
router.delete('/:id', function(req, res) {
  Contrato.delete(req.params.id)
    .then(data => res.jsonp(data))
    .catch(erro => res.status(500).jsonp(erro))
});

module.exports = router;
