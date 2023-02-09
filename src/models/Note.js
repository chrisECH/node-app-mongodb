const {Schema, model} = require('mongoose');
/**
 * Schema: Define unesquema o que es lo que se va a guardar en la BD
 * model: Define apartir de un esquema, crea una clase con metodos y propiedades
 * 
 * Ambos definen que es lo que se va guardar
 */

const noteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = model('Note',noteSchema);