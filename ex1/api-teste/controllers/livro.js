const Livro = require('../models/livro');

module.exports.list = async () => {
    return await Livro
        .find()
        .exec();
}

module.exports.findById = id => {
    return Livro
        .findOne({ _id: id })
        .exec();
}

module.exports.insert = livro => {
    return Livro.create(livro);
}

module.exports.removeById = id => {
    return Livro.deleteOne({ _id: id });
}

module.exports.update = (id, livro) => {
    return Livro.updateOne({ _id: id }, livro);
}

module.exports.findByCharacter = async (character) => {
    return await Livro.find({ characters: { $regex: character, $options: 'i' } }).exec();
}

module.exports.findByGenre = async (genre) => {
    return await Livro.find({ genres: { $regex: genre, $options: 'i' } }).exec();
}

module.exports.listGenres = async () => {
    const genres = await Livro.aggregate([
        { $unwind: "$genres" },
        { $group: { _id: "$genres" } },
        { $sort: { _id: 1 } }
    ]).exec();
    return genres.map(g => g._id);  // Transformar o resultado
}

module.exports.listCharacters = async () => {
    const characters = await Livro.aggregate([
        { $unwind: "$characters" },
        { $group: { _id: "$characters" } },
        { $sort: { _id: 1 } }
    ]).exec();
    return characters.map(c => c._id);  // Transformar o resultado
}