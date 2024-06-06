var express = require('express');
var router = express.Router();

var Livro = require('../controllers/livro');

/* GET home page. */
router.get('/', function(req, res, next) {
    if (req.query.charater) {
        Livro.findByCharacter(req.query.charater)
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro));
        return;
    } else if (req.query.genre) {
        Livro.findByGenre(req.query.genre)
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro));
        return;
    }

    Livro.list()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro));
});

router.get('/genres', function(req, res, next) {
    Livro.listGenres()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro));
});

router.get('/characters', function(req, res, next) {
    Livro.listCharacters()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro));
});

router.get('/:id', function(req, res, next) {
    if (req.params.id === 'favicon.ico') return;
    Livro.findById(req.params.id)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro));
});

router.post('/', function(req, res, next) {
    Livro.insert(req.body)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro));
});

router.delete('/:id', function(req, res, next) {
    Livro.removeById(req.params.id)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro));
});

router.put('/:id', function(req, res, next) {
    Livro.update(req.params.id, req.body)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro));
});

module.exports = router;
