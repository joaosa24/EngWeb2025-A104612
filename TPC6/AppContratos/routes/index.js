var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
    axios.get('http://localhost:16000/contratos')
        .then(response => {
        res.render('index', { 
            title: 'Contratos Públicos Portugueses',
            contratos: response.data,
            date: new Date().toISOString().substring(0, 16)
        });
        })
        .catch(error => {
        res.render('error', { error: error });
        });
});

router.get('/:id', function(req, res, next) {
    axios.get('http://localhost:16000/contratos/' + req.params.id)
        .then(response => {
        res.render('contrato', { 
            contrato: response.data,
            date: new Date().toISOString().substring(0, 16)
        });
        })
        .catch(error => {
        res.render('error', { error: error });
        });
});

router.get('/entidades/:nipc', function(req, res, next) {
    axios.get('http://localhost:16000/contratos?NIPC_entidade_comunicante=' + req.params.nipc)
        .then(response => {
        const contratos = response.data;
        const total = contratos.reduce((acc, curr) => acc + parseFloat(curr.precoContratual), 0);
        res.render('entidade', { 
            nipc: req.params.nipc,
            entidade: contratos[0]?.entidade_comunicante,
            contratos: contratos,
            total: total,
            date: new Date().toISOString().substring(0, 16)
        });
        })
        .catch(error => {
        res.render('error', { error: error });
        });
});

module.exports = router;