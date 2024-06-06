# Recurso EW 2024

## 1.1 Setup

1. Substituir o campo "bookId" por "_id".

2. Eliminar os '[]' no começo do arquivo.

3. Transformar representações de listas em forma de string para listas verdadeiras, utilizando expressões regulares para localizar e substituir.

4. Trocar os \" e ' para apenas "

5. Alteração de alguns campos para número em vez de string

6. Utilizar o comando mongoimport para importar o arquivo JSON: mongoimport -d livros -c livros --drop datasetAtualizado.json


## 1.2 Queries

1. Para entrar na bash do mongoDB:

```bash
mongosh
```

2. Para utilizar a respetiva DB:

```bash
use livros
```

## 1.3 API

```bash
npx express-generator --no-view api-teste
```

## 2 HTML

```bash
npx express-generator --no-view html-teste
```

## Inicialização

Visto que não foi utilizado o docker compose, a inicialização deve ser feita através de "npm i" seguido de "npm start". Estes comandos devem ser efetuados nos diretórios "api-teste" e "html-teste"
