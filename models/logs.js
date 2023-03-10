const mongoose = require ('mongoose');

// const captain = [
//         {name: "bulbasaur", img: "http://img.pokemondb.net/artwork/bulbasaur.jpg"},
//         {name: "ivysaur", img: "http://img.pokemondb.net/artwork/ivysaur.jpg"},
//         {name: "venusaur", img: "http://img.pokemondb.net/artwork/venusaur.jpg"},
//         {name: "charmander", img: "http://img.pokemondb.net/artwork/charmander.jpg"},
//         {name: "charizard", img: "http://img.pokemondb.net/artwork/charizard.jpg"},
//         {name: "squirtle", img: "http://img.pokemondb.net/artwork/squirtle.jpg"},
//         {name: "wartortle", img: "http://img.pokemondb.net/artwork/wartortle.jpg"}
//      ];


const logsSchema = new mongoose.Schema({
    title: { type: String, require: true},
    entry: { type: String, require: true},
    shipIsBroken: Boolean

})

const Logs = mongoose.model('Logs', logsSchema)

module.exports = Logs;