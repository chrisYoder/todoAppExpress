const mongoose = require('mongoose');

const notesSchema = new mongoose.Schema({
	note: String,
});

module.exports = mongoose.model('Notes', notesSchema);