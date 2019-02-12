var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FilmSchema = new Schema ({
    title: {
        type: String,
        require: true
    },
    director: {
        type: String,
        require: true
    },
    studio: {
        type: String,
        require: true
    },
    year: {
        type: String,
        require: true
    },
    review: {
        type: String,
        require: true
    },
    reviewer: {
        type: String,
        require: true
    },
    img: {
        data: Buffer,
        contentType: String
    }
}, {
    timestamps:true
});

module.exports = mongoose.model('Film', FilmSchema);
