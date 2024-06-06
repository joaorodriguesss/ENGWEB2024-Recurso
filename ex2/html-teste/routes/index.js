var express = require('express');
var router = express.Router();
var axios = require('axios');

router.get('/', (req, res) => {
    axios.get('http://localhost:17000/books')
        .then(dados => res.render('index', { livros: dados.data, title: 'Lista de Livros' }))
        .catch(erro => {
            console.log('Erro ao carregar livros: ' + erro);
            res.render('error', { error: erro });
        });
});

router.get('/:id', (req, res) => {
    axios.get('http://localhost:17000/books/' + req.params.id)
        .then(dados => res.render('livro', { livro: dados.data, title: 'Livro' }))
        .catch(erro => {
            console.log('Erro ao carregar livro: ' + erro);
            res.render('error', { error: erro });
        });
});

router.get('/authors/:idAutor', (req, res) => {
    axios.get('http://localhost:17000/books/')
        .then(dados => {
            var livrosAutor = []
            dados.data.forEach(livro => {
                livro.author.forEach(autor => {
                    if (autor == req.params.idAutor) {
                        livrosAutor.push(livro);
                    }
                });
            });

            res.render('entidade', { livros: livrosAutor, title: 'Livros do Autor', author: req.params.idAutor});
        })
        .catch(erro => {
            console.log('Erro ao carregar autor: ' + erro);
            res.render('error', { error: erro });
        });
});

module.exports = router;